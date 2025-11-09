#!/usr/bin/env node
/**
 * Convert Sphinx MyST list-table directives to markdown tables
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const CONTENT_DIR = path.join(process.cwd(), 'content/docs');

interface ConversionStats {
  filesProcessed: number;
  tablesConverted: number;
  errors: number;
}

const stats: ConversionStats = {
  filesProcessed: 0,
  tablesConverted: 0,
  errors: 0,
};

/**
 * Convert a list-table directive to a markdown table
 */
function convertListTable(match: string): string {
  // Parse the list-table directive
  const lines = match.split('\n');

  // Find the title (first line after ::: or ::::)
  let title = '';
  const titleMatch = lines[0].match(/:::+\{list-table\}\s*(.*)/);
  if (titleMatch && titleMatch[1]) {
    title = titleMatch[1].trim();
  }

  // Extract rows (lines starting with "* -" or just "*")
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let inCell = false;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    // Skip directive options (lines starting with :)
    if (line.trim().startsWith(':')) {
      continue;
    }

    // Skip empty lines
    if (!line.trim()) {
      continue;
    }

    // End of directive (can be ::: or ::::)
    if (line.trim().match(/^:::+$/)) {
      // Save last cell and row
      if (inCell) {
        currentRow.push(currentCell.trim());
      }
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
      break;
    }

    // Start of a new row (format 1: "* - content")
    if (line.match(/^\s*\*\s+-\s/)) {
      // Save previous cell and row if any
      if (inCell) {
        currentRow.push(currentCell.trim());
      }
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      // Start new row
      currentRow = [];
      const cellContent = line.replace(/^\s*\*\s+-\s*/, '');
      currentCell = cellContent;
      inCell = true;
    }
    // Start of a new row (format 2: just "*")
    else if (line.trim() === '*') {
      // Save previous row if any
      if (inCell) {
        currentRow.push(currentCell.trim());
      }
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      // Start new row
      currentRow = [];
      currentCell = '';
      inCell = false;
    }
    // Start of a new cell in the current row
    else if (line.match(/^\s+-(\s|$)/)) {
      // Save previous cell if we were in one
      if (inCell) {
        currentRow.push(currentCell.trim());
      }

      const cellContent = line.replace(/^\s+-\s*/, '');
      currentCell = cellContent;
      inCell = true;
    }
    // Continuation of current cell
    else if (inCell && line.trim()) {
      currentCell += ' ' + line.trim();
    }
  }

  if (rows.length === 0) {
    console.warn('⚠️  No rows found in list-table');
    return match; // Return original if we can't parse it
  }

  // Normalize rows to have the same number of columns
  const numColumns = rows[0].length;
  for (let i = 0; i < rows.length; i++) {
    while (rows[i].length < numColumns) {
      rows[i].push('');
    }
    // Replace cells that are just "-" or empty with empty string
    rows[i] = rows[i].map(cell => {
      const trimmed = cell.trim();
      return trimmed === '-' ? '' : trimmed;
    });
  }

  // Build markdown table
  let markdown = '';

  // Add title as a heading if present
  if (title) {
    markdown += `#### ${title}\n\n`;
  }

  // Header row
  markdown += '| ' + rows[0].join(' | ') + ' |\n';

  // Separator row
  markdown += '|' + rows[0].map(() => '---').join('|') + '|\n';

  // Data rows
  for (let i = 1; i < rows.length; i++) {
    markdown += '| ' + rows[i].join(' | ') + ' |\n';
  }

  return markdown;
}

/**
 * Process a single file
 */
function processFile(filePath: string): void {
  stats.filesProcessed++;

  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Find all list-table directives (non-greedy match, supports both ::: and ::::)
    const listTableRegex = /:::+\{list-table\}[^]*?:::+/g;

    const matches = content.match(listTableRegex);
    if (matches) {
      for (const match of matches) {
        const converted = convertListTable(match);
        if (converted !== match) {
          content = content.replace(match, converted);
          modified = true;
          stats.tablesConverted++;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      const relativePath = path.relative(CONTENT_DIR, filePath);
      console.log(`✅ Converted tables in: ${relativePath}`);
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
  console.log('🚀 Starting list-table conversion...\n');

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
  console.log(`   ✅ Tables converted: ${stats.tablesConverted}`);
  console.log(`   ❌ Errors: ${stats.errors}`);
  console.log('\n✨ Conversion complete!');

  if (stats.errors > 0) {
    console.log('\n⚠️  Some files had errors. Please review the output above.');
  }
}

main().catch(console.error);
