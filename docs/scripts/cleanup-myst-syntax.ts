#!/usr/bin/env node
/**
 * Post-process converted markdown files to remove remaining MyST syntax
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

let filesProcessed = 0;
let changesMade = 0;

function cleanupMystSyntax(content: string): { content: string; changed: boolean } {
  let cleaned = content;
  let hasChanges = false;

  // Remove MyST-style code block language specifiers with curly braces
  // e.g., ```{code-block} python -> ```python
  const beforeCodeBlocks = cleaned;
  cleaned = cleaned.replace(/```\{[^}]+\}\s+(\w+)/g, '```$1');
  if (cleaned !== beforeCodeBlocks) hasChanges = true;

  // Replace unsupported language `none` with `text`
  const beforeNone = cleaned;
  cleaned = cleaned.replace(/```none\b/g, '```text');
  if (cleaned !== beforeNone) hasChanges = true;

  // Remove standalone MyST directives that weren't converted
  // e.g., ```{directive} -> remove entire block
  const beforeDirectives = cleaned;
  cleaned = cleaned.replace(/```\{[^}]+\}[\s\S]*?```/g, '');
  if (cleaned !== beforeDirectives) hasChanges = true;

  // Convert MyST roles to plain text
  // {abbr}`text` -> text
  // {term}`text` -> text
  // {guilabel}`text` -> text
  // {kbd}`text` -> text
  const beforeRoles = cleaned;
  cleaned = cleaned.replace(/\{(?:abbr|term|guilabel|kbd|menuselection|command|option|file|program)\}`([^`]+)`/g, '$1');
  if (cleaned !== beforeRoles) hasChanges = true;

  // Remove MyST comments
  // % comment
  const beforeComments = cleaned;
  cleaned = cleaned.replace(/^%.*$/gm, '');
  if (cleaned !== beforeComments) hasChanges = true;

  // Clean up triple or more newlines to just two
  const beforeNewlines = cleaned;
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  if (cleaned !== beforeNewlines) hasChanges = true;

  return { content: cleaned, changed: hasChanges };
}

function processFile(filePath: string): void {
  filesProcessed++;

  const content = fs.readFileSync(filePath, 'utf-8');
  const { content: cleaned, changed } = cleanupMystSyntax(content);

  if (changed) {
    fs.writeFileSync(filePath, cleaned, 'utf-8');
    changesMade++;
    console.log(`✅ Cleaned: ${path.relative(DOCS_DIR, filePath)}`);
  }
}

async function main() {
  console.log('🧹 Cleaning up MyST syntax from converted files...\n');

  const mdFiles = glob.sync(`${DOCS_DIR}/**/*.md`);

  console.log(`📚 Found ${mdFiles.length} markdown files\n`);

  for (const file of mdFiles) {
    processFile(file);
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Files modified: ${changesMade}`);
  console.log('\n✨ Cleanup complete!');
}

main().catch(console.error);
