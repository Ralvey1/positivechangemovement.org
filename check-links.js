#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';

function getHtmlFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getHtmlFiles(res));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(res);
    }
  }
  return results;
}

function extractLinks(html) {
  const regex = /href=["']([^"']+)["']/gi;
  const links = [];
  let match;
  while ((match = regex.exec(html))) {
    links.push(match[1]);
  }
  return links;
}

function isRelative(link) {
  return !/^(?:[a-zA-Z]+:|\/\/)/.test(link) && !link.startsWith('#');
}

const htmlFiles = getHtmlFiles(rootDir);
const errors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const links = extractLinks(content).filter(isRelative);
  for (const link of links) {
    const clean = link.split('#')[0].split('?')[0];
    const target = path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(target)) {
      errors.push(`${file}: ${link}`);
    }
  }
}

if (errors.length) {
  console.error('Broken links found:');
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
} else {
  console.log('All relative links valid.');
}
