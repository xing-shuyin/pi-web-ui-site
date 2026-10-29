# pi-web-ui-site

Static product website and documentation for pi-web-ui. No framework or production build is required; Node runs the local preview and data generation scripts.

- `index.html`, `app.js`, `styles.css`: product website.
- `docs.html`, `docs.js`, `docs.css`: independent documentation shell and reader.
- `scripts/docs-content/ch01.mjs`–`ch20.mjs`: bilingual documentation source. Preserve chapter IDs and existing HTML anchor IDs when editing.
- `scripts/build-docs-data.mjs`: five navigation groups and generated `docs-data.js`. Run `npm run build:docs` after source edits; do not edit generated content directly.
- `scripts/sync-data.mjs`: shared catalog generation from sibling `../pi-web-ui`. Run `npm run sync` after changes. Catalog tables in documentation use `data-dynamic-table`, avoiding duplicated reference lists.

Documentation claims must be supported by the current implementation in `../pi-web-ui`, preferably the CLI, tool catalog, protocol and actual UI handlers. Do not infer permissions, supported formats, commands or guarantees from feature names. Remove unsupported claims instead of embellishing them. Keep Chinese and English instructions equivalent, concise, and explicit about prerequisites and limits. Avoid fixed plugin/tool counts and performance promises.

Before delivery: format changed HTML/CSS/JS/MJS/Markdown with Prettier, run `npm run build:docs` and `npm run check`. This static project has no TypeScript or Vitest configuration; do not run sibling project's global checks for site-only changes. Optional UI regression: start preview on port 4198 and run `python scripts/check-docs-browser.py` with Chrome CDP on 9333 and Python websocket-client available. It checks desktop/mobile reading, search, themes, language and deep links using its own temporary tab.

Design prototypes and generated preview screenshots are in `proposals/docs-redesign/`; they are not documentation content sources. Do not replace the live site with a prototype's sample chapters.
