#!/usr/bin/env node
/**
 * Automated integrity check for pi-web-ui-site before GitHub Pages deployment.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_DATA } from "../site-data.js";
import { DOCS_GROUPS, DOCS_CHAPTERS } from "../docs-data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const requiredFiles = [
  "index.html",
  "docs.html",
  "docs.js",
  "docs.css",
  "404.html",
  "styles.css",
  "app.js",
  "site-data.js",
  "docs-data.js",
  ".nojekyll",
  ".github/workflows/deploy-pages.yml",
  "assets/favicon.svg",
  "assets/chat-prompts.jpeg",
  "assets/trajectory.jpeg",
  "assets/terminal.jpeg",
  "assets/git.jpeg",
  "assets/settings.jpeg",
];

for (const rel of requiredFiles) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) {
    throw new Error(`Missing required file: ${rel}`);
  }
}

if (!SITE_DATA.plugins.length) {
  throw new Error("Plugin catalog must not be empty");
}

if (!SITE_DATA.themes.length) {
  throw new Error("Theme catalog must not be empty");
}

if (DOCS_CHAPTERS.length !== 20) {
  throw new Error(
    `Expected 20 documentation chapters, got ${DOCS_CHAPTERS.length}`,
  );
}

const groupedIds = DOCS_GROUPS.flatMap((g) => g.items);
if (
  new Set(groupedIds).size !== groupedIds.length ||
  groupedIds.length !== DOCS_CHAPTERS.length
) {
  throw new Error("Every chapter must appear in exactly one navigation group");
}
if (
  new Set(DOCS_CHAPTERS.map((chapter) => chapter.id)).size !==
  DOCS_CHAPTERS.length
) {
  throw new Error("Chapter ids must be unique");
}
for (const ch of DOCS_CHAPTERS) {
  const group = DOCS_GROUPS.find((entry) => entry.items.includes(ch.id));
  if (!group || ch.group !== group.id) {
    throw new Error(`Chapter ${ch.id} has inconsistent navigation ownership`);
  }
  for (const field of ["contentZh", "contentEn"]) {
    if (!ch[field]?.trim()) throw new Error(`Missing ${field} for ${ch.id}`);
    for (const match of ch[field].matchAll(
      /(?:src|poster)="(\.\/assets\/[^"?#]+)"/g,
    )) {
      if (!fs.existsSync(path.resolve(ROOT, match[1])))
        throw new Error(`Missing documentation asset: ${match[1]}`);
    }
  }
}

console.log(
  `✓ Verified pi-web-ui-site: ${requiredFiles.length} files, ${DOCS_CHAPTERS.length} doc chapters, ${SITE_DATA.plugins.length} plugins, ${SITE_DATA.themes.length} themes.`,
);
