#!/usr/bin/env node
// Assembles src/index.template.html + src/partials/*.html into index.html.
// Run `node build.js` after editing any partial.
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const PARTIALS_DIR = path.join(SRC, 'partials');
const TEMPLATE = path.join(SRC, 'index.template.html');
const OUT = path.join(__dirname, 'index.html');

const template = fs.readFileSync(TEMPLATE, 'utf8');

const output = template.replace(/\{\{include:([a-z0-9-]+)\}\}/g, (match, name) => {
  const file = path.join(PARTIALS_DIR, `${name}.html`);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing partial: ${file} (referenced as {{include:${name}}})`);
  }
  return fs.readFileSync(file, 'utf8');
});

fs.writeFileSync(OUT, output);
console.log(`Built ${OUT} (${output.length.toLocaleString()} bytes)`);
