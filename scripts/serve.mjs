#!/usr/bin/env node
/**
 * Zero-dependency static HTTP server for local preview of pi-web-ui-site.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 4173);

const MIME = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "application/javascript; charset=utf-8",
	".mjs": "application/javascript; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".jpeg": "image/jpeg",
	".jpg": "image/jpeg",
	".png": "image/png",
	".ico": "image/x-icon",
	".mp4": "video/mp4",
	".webm": "video/webm",
};

const server = http.createServer((req, res) => {
	const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
	const relPath = urlPath === "/" ? "/index.html" : urlPath;
	const fullPath = path.resolve(ROOT, "." + relPath);

	if (!fullPath.startsWith(ROOT)) {
		res.writeHead(403);
		res.end("Forbidden");
		return;
	}

	if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
		const fallback404 = path.join(ROOT, "404.html");
		res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
		res.end(fs.existsSync(fallback404) ? fs.readFileSync(fallback404) : "Not found");
		return;
	}

	const ext = path.extname(fullPath).toLowerCase();
	res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
	fs.createReadStream(fullPath).pipe(res);
});

server.listen(PORT, "127.0.0.1", () => {
	console.log(`pi-web-ui-site running at http://127.0.0.1:${PORT}`);
});
