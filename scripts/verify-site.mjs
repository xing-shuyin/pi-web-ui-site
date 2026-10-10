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

if (SITE_DATA.plugins.length < 20) {
	throw new Error(`Expected at least 20 plugins in SITE_DATA, got ${SITE_DATA.plugins.length}`);
}

if (SITE_DATA.themes.length < 25) {
	throw new Error(`Expected at least 25 themes in SITE_DATA, got ${SITE_DATA.themes.length}`);
}

if (DOCS_CHAPTERS.length !== 20) {
	throw new Error(`Expected 20 documentation chapters, got ${DOCS_CHAPTERS.length}`);
}

const groupedIds = DOCS_GROUPS.flatMap((g) => g.items);
for (const ch of DOCS_CHAPTERS) {
	if (!groupedIds.includes(ch.id)) {
		throw new Error(`Chapter ${ch.id} is not referenced in DOCS_GROUPS`);
	}
}

console.log(`✓ Verified pi-web-ui-site: ${requiredFiles.length} files, ${DOCS_CHAPTERS.length} doc chapters, ${SITE_DATA.plugins.length} plugins, ${SITE_DATA.themes.length} themes.`);
