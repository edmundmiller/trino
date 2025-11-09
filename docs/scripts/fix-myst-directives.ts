#!/usr/bin/env node
/**
 * Convert remaining Sphinx MyST directives to markdown
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const CONTENT_DIR = path.join(process.cwd(), 'content/docs');

interface ConversionStats {
  filesProcessed: number;
  notesConverted: number;
  warningsConverted: number;
  cautionsConverted: number;
  functionsConverted: number;
  errors: number;
}

const stats: ConversionStats = {
  filesProcessed: 0,
  notesConverted: 0,
  warningsConverted: 0,
  cautionsConverted: 0,
  functionsConverted: 0,
  errors: 0,
};

/**
 * Convert a note/warning/caution directive to a blockquote
 */
function convertAdmonition(match: string, type: 'note' | 'warning' | 'caution'): string {
  const lines = match.split('\n');

  // Skip the first line (directive) and last line (:::)
  const contentLines = lines.slice(1, -1);

  // Get the content
  const content = contentLines.join('\n').trim();

  // Convert to blockquote with bold label
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return `> **${label}:** ${content}`;
}

/**
 * Convert a function directive to markdown
 */
function convertFunction(match: string): string {
  const lines = match.split('\n');

  // First line has the function signature
  const firstLine = lines[0];
  const signatureMatch = firstLine.match(/:::+\{function\}\s*(.+)/);

  if (!signatureMatch) {
    return match; // Keep original if we can't parse
  }

  const signature = signatureMatch[1];

  // Get the description (everything between first and last line)
  const contentLines = lines.slice(1, -1);
  const description = contentLines.join('\n').trim();

  // Convert to markdown with code block for signature
  return `#### \`${signature}\`\n\n${description}`;
}

/**
 * Process a single file
 */
function processFile(filePath: string): void {
  stats.filesProcessed++;

  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Convert note directives (supports both ::: and ::::, with optional trailing spaces)
    const noteRegex = /:::+\{note\}\s*\n([\s\S]*?):::+/g;
    const noteMatches = content.match(noteRegex);
    if (noteMatches) {
      for (const match of noteMatches) {
        const converted = convertAdmonition(match, 'note');
        content = content.replace(match, converted);
        modified = true;
        stats.notesConverted++;
      }
    }

    // Convert warning directives
    const warningRegex = /:::+\{warning\}\s*\n([\s\S]*?):::+/g;
    const warningMatches = content.match(warningRegex);
    if (warningMatches) {
      for (const match of warningMatches) {
        const converted = convertAdmonition(match, 'warning');
        content = content.replace(match, converted);
        modified = true;
        stats.warningsConverted++;
      }
    }

    // Convert caution directives
    const cautionRegex = /:::+\{caution\}\s*\n([\s\S]*?):::+/g;
    const cautionMatches = content.match(cautionRegex);
    if (cautionMatches) {
      for (const match of cautionMatches) {
        const converted = convertAdmonition(match, 'caution');
        content = content.replace(match, converted);
        modified = true;
        stats.cautionsConverted++;
      }
    }

    // Convert function directives
    const functionRegex = /:::+\{function\}[^\n]*\n([\s\S]*?):::+/g;
    const functionMatches = content.match(functionRegex);
    if (functionMatches) {
      for (const match of functionMatches) {
        const converted = convertFunction(match);
        content = content.replace(match, converted);
        modified = true;
        stats.functionsConverted++;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      const relativePath = path.relative(CONTENT_DIR, filePath);
      console.log(`✅ Converted directives in: ${relativePath}`);
    }
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting MyST directive conversion...\n');

  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }

  // Find all .md files
  const mdFiles = glob.sync(`${CONTENT_DIR}/**/*.md`, {
    ignore: ['**/node_modules/**', '**/.git/**'],
  });

  console.log(`📚 Found ${mdFiles.length} markdown files\n`);

  // Process each file
  for (const file of mdFiles) {
    processFile(file);
  }

  // Print summary
  console.log('\n📊 Conversion Summary:');
  console.log(`   Files processed: ${stats.filesProcessed}`);
  console.log(`   ✅ Notes converted: ${stats.notesConverted}`);
  console.log(`   ✅ Warnings converted: ${stats.warningsConverted}`);
  console.log(`   ✅ Cautions converted: ${stats.cautionsConverted}`);
  console.log(`   ✅ Functions converted: ${stats.functionsConverted}`);
  console.log(`   ❌ Errors: ${stats.errors}`);
  console.log('\n✨ Conversion complete!');

  if (stats.errors > 0) {
    console.log('\n⚠️  Some files had errors. Please review the output above.');
  }
}

main().catch(console.error);
