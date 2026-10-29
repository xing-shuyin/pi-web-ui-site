import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { DOCS_CHAPTERS, DOCS_GROUPS } from "../docs-data.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const anchorIds = (html) =>
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const routes = new Set(DOCS_CHAPTERS.map((ch) => ch.id));
const ids = { contentZh: new Set(), contentEn: new Set() };
for (const ch of DOCS_CHAPTERS) {
  for (const field of Object.keys(ids)) {
    for (const id of anchorIds(ch[field])) {
      assert(!ids[field].has(id), `Duplicate ${field} anchor: ${id}`);
      ids[field].add(id);
      routes.add(id);
    }
  }
  const zh = [...ch.contentZh.matchAll(/<h2\b[^>]*\bid="([^"]+)"/g)].map(
    (m) => m[1],
  );
  const en = [...ch.contentEn.matchAll(/<h2\b[^>]*\bid="([^"]+)"/g)].map(
    (m) => m[1],
  );
  assert.deepEqual(
    new Set(en),
    new Set(zh),
    `Translated anchors differ: ${ch.id}`,
  );
}
for (const ch of DOCS_CHAPTERS) {
  for (const field of Object.keys(ids)) {
    for (const match of ch[field].matchAll(
      /href="(?:\.\/)?docs\.html#([^"?]+)"|href="#([^"?]+)"/g,
    )) {
      assert(
        routes.has(match[1] || match[2]),
        `Broken documentation link in ${ch.id}: ${match[0]}`,
      );
    }
  }
}
assert.equal(DOCS_GROUPS.length, 5);

// HEAD is used only as the migration baseline. Future commits validate their own links.
const original = execFileSync("git", ["show", "HEAD:docs-data.js"], {
  cwd: root,
  encoding: "utf8",
});
const baseline = await import(
  `data:text/javascript;base64,${Buffer.from(original).toString("base64")}`
);
let before = 0;
let after = 0;
const words = (html) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, "").length;
for (const old of baseline.DOCS_CHAPTERS) {
  const ch = DOCS_CHAPTERS.find((c) => c.id === old.id);
  assert(ch, `Removed chapter route: ${old.id}`);
  for (const field of Object.keys(ids)) {
    for (const id of anchorIds(old[field]))
      assert(ids[field].has(id), `Removed old anchor: ${id}`);
    before += words(old[field]);
    after += words(ch[field]);
  }
}
console.log(
  `Verified ${DOCS_CHAPTERS.length} bilingual chapters, ${routes.size} routes and translated anchors.`,
);
console.log(
  `Body characters excluding markup and whitespace: ${before} → ${after} (${Math.round((1 - after / before) * 100)}% reduction vs HEAD).`,
);
