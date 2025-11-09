#!/usr/bin/env node
/**
 * Convert Sphinx MyST markdown files to Fumadocs-compatible MDX
 *
 * This script:
 * 1. Reads all .md files from the Sphinx directory
 * 2. Converts MyST syntax to MDX
 * 3. Generates meta.json files for navigation
 * 4. Outputs to content/docs/
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

const SPHINX_DIR = path.join(process.cwd(), 'src/main/sphinx');
const OUTPUT_DIR = path.join(process.cwd(), 'content/docs');

interface ConversionStats {
  total: number;
  converted: number;
  errors: number;
  skipped: number;
}

const stats: ConversionStats = {
  total: 0,
  converted: 0,
  errors: 0,
  skipped: 0,
};

// Load fragment files for inlining
const fragments = new Map<string, string>();

function loadFragments() {
  // Search for .fragment files in all directories
  const fragmentFiles = glob.sync(`${SPHINX_DIR}/**/*.fragment`);
  for (const file of fragmentFiles) {
    const name = path.basename(file);
    const content = fs.readFileSync(file, 'utf-8');
    fragments.set(name, content);
    console.log(`📦 Loaded fragment: ${name}`);
  }

  if (fragmentFiles.length === 0) {
    console.log('⚠️  No fragment files found');
  }
}

/**
 * Convert MyST frontmatter to Fumadocs frontmatter
 */
function convertFrontmatter(data: any, filename: string): any {
  const title = data.title || extractTitleFromFilename(filename);
  const description = data.description || `${title} documentation`;

  return {
    title,
    description,
    // Preserve any other metadata
    ...Object.keys(data)
      .filter(key => !['myst', 'title', 'description'].includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {}),
  };
}

function extractTitleFromFilename(filename: string): string {
  return filename
    .replace(/\.mdx?$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Convert MyST directives - minimal conversion for .md files
 */
function convertMystDirectives(content: string): string {
  let converted = content;

  // Convert {note} and {warning} to simple blockquotes
  converted = converted.replace(/```\{note\}\n([\s\S]*?)```/g, (_, inner) => {
    return `> **Note:** ${inner.trim()}`;
  });

  converted = converted.replace(/```\{warning\}\n([\s\S]*?)```/g, (_, inner) => {
    return `> **Warning:** ${inner.trim()}`;
  });

  // Convert {raw} html blocks - just remove the directive wrapper
  converted = converted.replace(/```\{raw\}\s+html\n([\s\S]*?)```/g, '$1');

  // Convert {issue} references to plain GitHub links
  converted = converted.replace(/\{issue\}`(\d+)`/g, '[#$1](https://github.com/trinodb/trino/issues/$1)');

  // Convert {include} directives by inlining fragment content
  converted = converted.replace(/```\{include\}\s+([^\n]+)\n```/g, (_, fragmentPath) => {
    const fragmentName = path.basename(fragmentPath);
    if (fragments.has(fragmentName)) {
      return fragments.get(fragmentName)!;
    }
    console.warn(`⚠️  Fragment not found: ${fragmentName}`);
    return `<!-- Fragment not found: ${fragmentName} -->`;
  });

  // Remove {toctree} directives (navigation handled by meta.json)
  converted = converted.replace(/```\{toctree\}[\s\S]*?```/g, '');

  // Remove {list-table} directives (too complex to convert automatically)
  converted = converted.replace(/```\{list-table\}[\s\S]*?```/g, (match) => {
    console.warn(`⚠️  list-table removed - needs manual conversion`);
    return `<!-- TODO: Convert list-table to markdown table -->\n`;
  });

  return converted;
}

/**
 * Convert MyST targets and labels
 */
function convertMystTargets(content: string): string {
  // Remove MyST target labels - Fumadocs will auto-generate IDs from headers
  // Pattern: (label-name)=\n## Header -> ## Header
  let converted = content.replace(/\(([a-z0-9-_]+)\)=\n(#+\s+)/gi, '$2');

  return converted;
}

/**
 * Convert cross-references and MyST roles
 */
function convertCrossReferences(content: string): string {
  let converted = content;

  // Convert {doc} references with custom text: {doc}`text <path>` -> [text](/docs/path)
  converted = converted.replace(/\{doc\}`([^<`]+)<([^>]+)>`/g, '[$1](/docs/$2)');

  // Convert {doc} references without custom text: {doc}`path` -> [path](/docs/path)
  converted = converted.replace(/\{doc\}`([^`]+)`/g, '[$1](/docs/$1)');

  // Convert {ref} references to standard markdown links (best effort)
  converted = converted.replace(/\{ref\}`([^`]+)`/g, '[$1](#$1)');

  // Convert {download} to standard markdown links
  converted = converted.replace(/\{download\}`([^`<]+)<([^>]+)>`/g, '[$1]($2)');
  converted = converted.replace(/\{download\}`([^`]+)`/g, '[$1]($1)');

  // Fix internal links to add /docs prefix if needed
  converted = converted.replace(/\[([^\]]+)\]\(\/([^)]+)\)/g, (match, text, path) => {
    if (!path.startsWith('docs/') && !path.startsWith('http')) {
      return `[${text}](/docs/${path})`;
    }
    return match;
  });

  return converted;
}

/**
 * Main conversion function
 */
function convertFile(inputPath: string): void {
  stats.total++;

  try {
    const content = fs.readFileSync(inputPath, 'utf-8');
    const { data, content: markdownContent } = matter(content);

    // Get relative path from sphinx dir
    const relativePath = path.relative(SPHINX_DIR, inputPath);
    const outputPath = path.join(
      OUTPUT_DIR,
      relativePath  // Keep as .md
    );

    // Convert frontmatter
    const newFrontmatter = convertFrontmatter(data, path.basename(inputPath));

    // Convert content
    let convertedContent = markdownContent;
    convertedContent = convertMystDirectives(convertedContent);
    convertedContent = convertMystTargets(convertedContent);
    convertedContent = convertCrossReferences(convertedContent);

    // Reassemble with new frontmatter
    const output = matter.stringify(convertedContent, newFrontmatter);

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    fs.mkdirSync(outputDir, { recursive: true });

    // Write output file
    fs.writeFileSync(outputPath, output, 'utf-8');

    stats.converted++;
    console.log(`✅ Converted: ${relativePath}`);
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error converting ${inputPath}:`, error);
  }
}

/**
 * Generate meta.json for a directory
 */
function generateMetaJson(dir: string): void {
  const files = fs.readdirSync(dir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'index.md');

  if (mdFiles.length === 0) return;

  const pages = mdFiles.map(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    return {
      title: data.title || extractTitleFromFilename(file),
      slug: file.replace('.md', ''),
    };
  });

  const metaJson = {
    title: extractTitleFromFilename(path.basename(dir)),
    pages: pages.map(p => p.slug),
  };

  fs.writeFileSync(
    path.join(dir, 'meta.json'),
    JSON.stringify(metaJson, null, 2),
    'utf-8'
  );

  console.log(`📋 Generated meta.json for ${path.basename(dir)}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Sphinx → Fumadocs conversion...\n');

  // Check if sphinx directory exists
  if (!fs.existsSync(SPHINX_DIR)) {
    console.error(`❌ Sphinx directory not found: ${SPHINX_DIR}`);
    process.exit(1);
  }

  // Load fragment files
  loadFragments();
  console.log('');

  // Find all .md files
  const mdFiles = glob.sync(`${SPHINX_DIR}/**/*.md`, {
    ignore: ['**/node_modules/**', '**/.git/**'],
  });

  console.log(`📚 Found ${mdFiles.length} markdown files\n`);

  // Convert each file
  for (const file of mdFiles) {
    convertFile(file);
  }

  console.log('\n📁 Generating meta.json files...\n');

  // Generate meta.json for each subdirectory
  const subdirs = glob.sync(`${OUTPUT_DIR}/*/`, { ignore: ['**/node_modules/**'] });
  for (const dir of subdirs) {
    generateMetaJson(dir);
  }

  // Update root meta.json
  const rootMetaPath = path.join(OUTPUT_DIR, 'meta.json');
  const rootMeta = {
    title: 'Documentation',
    pages: [
      'index',
      'quick-start',
      'overview',
      'admin',
      'connector',
      'functions',
      'installation',
      'sql',
      'security',
      'object-storage',
      'udf',
      'release',
    ],
  };
  fs.writeFileSync(rootMetaPath, JSON.stringify(rootMeta, null, 2), 'utf-8');
  console.log('📋 Generated root meta.json\n');

  // Print summary
  console.log('📊 Conversion Summary:');
  console.log(`   Total files: ${stats.total}`);
  console.log(`   ✅ Converted: ${stats.converted}`);
  console.log(`   ❌ Errors: ${stats.errors}`);
  console.log(`   ⏭️  Skipped: ${stats.skipped}`);
  console.log('\n✨ Conversion complete!');

  if (stats.errors > 0) {
    console.log('\n⚠️  Some files had errors. Please review the output above.');
  }
}

main().catch(console.error);
