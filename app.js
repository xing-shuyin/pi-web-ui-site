import { SITE_DATA } from "./site-data.js";
import { DOCS_GROUPS, DOCS_CHAPTERS } from "./docs-data.js";

const state = {
	lang: localStorage.getItem("pi_site_lang") || "zh",
	siteTheme: localStorage.getItem("pi_site_theme") || "dark",
	installTab: "npm",
	cockpitTab: "chat-prompts",
	activeMode: "goal",
	pluginCat: "all",
	pluginQuery: "",
	studioThemeId: "cyberpunk",
	activeChapterId: "overview",
	docViewMode: "single", // "single" | "all"
};

const INSTALL_COMMANDS = {
	npm: {
		labelZh: "npm 全局安装（推荐）",
		labelEn: "npm Global (Recommended)",
		cmd: "npm i -g pi-web-ui@latest && pi-web-ui",
	},
	npx: {
		labelZh: "npx 免安装即跑",
		labelEn: "npx Zero-Install",
		cmd: "npx pi-web-ui@latest",
	},
	desktop: {
		labelZh: "🖥️ Electron 桌面客户端",
		labelEn: "🖥️ Desktop App (Electron)",
		cmd: "git clone https://github.com/xing-shuyin/pi-web-ui.git && cd pi-web-ui && npm i && npm run build && npm --prefix desktop i && npm --prefix desktop start",
	},
	npm12: {
		labelZh: "npm 12+ 放行原生编译",
		labelEn: "npm 12+ Native Scripts",
		cmd: "npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest",
	},
	daemon: {
		labelZh: "注册开机自启服务",
		labelEn: "Background Daemon",
		cmd: "pi-web-ui server install --port 8787 --cwd /path/to/project",
	},
	docker: {
		labelZh: "Docker Compose",
		labelEn: "Docker Compose",
		cmd: "git clone https://github.com/xing-shuyin/pi-web-ui.git && cd pi-web-ui && docker compose up -d",
	},
};

function t(zh, en) {
	return state.lang === "en" ? en : zh;
}

function escapeHtml(str) {
	return String(str ?? "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

async function copyText(text, btnEl) {
	try {
		await navigator.clipboard.writeText(text);
	} catch {
		const ta = document.createElement("textarea");
		ta.value = text;
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		ta.remove();
	}
	if (btnEl) {
		const orig = btnEl.textContent;
		btnEl.textContent = t("✓ 已复制", "✓ Copied");
		setTimeout(() => {
			btnEl.textContent = orig;
		}, 1600);
	}
}

/* ==========================================================================
   Theme & Bilingual Application
   ========================================================================== */
function applySiteTheme(theme) {
	state.siteTheme = theme;
	localStorage.setItem("pi_site_theme", theme);
	document.documentElement.setAttribute("data-site-theme", theme);
	const sel = document.getElementById("site-theme-select");
	if (sel && sel.value !== theme) sel.value = theme;
}

function applyLanguage(lang) {
	state.lang = lang;
	localStorage.setItem("pi_site_lang", lang);
	document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

	const langBtn = document.getElementById("lang-toggle-btn");
	if (langBtn) langBtn.textContent = lang === "en" ? "🌐 简体中文" : "🌐 English";

	document.querySelectorAll("[data-i18n-zh]").forEach((el) => {
		const zh = el.getAttribute("data-i18n-zh");
		const en = el.getAttribute("data-i18n-en") || zh;
		el.textContent = lang === "en" ? en : zh;
	});

	document.querySelectorAll("[data-i18n-placeholder-zh]").forEach((el) => {
		const zh = el.getAttribute("data-i18n-placeholder-zh");
		const en = el.getAttribute("data-i18n-placeholder-en") || zh;
		el.setAttribute("placeholder", lang === "en" ? en : zh);
	});

	renderLandingInteractive();
	renderDocsPage();
}

/* ==========================================================================
   Landing Page Interactive Sections (index.html)
   ========================================================================== */
function renderInstallBox() {
	const tabsEl = document.getElementById("install-tabs");
	const cmdEl = document.getElementById("install-cmd-value");
	const copyBtn = document.getElementById("install-copy-btn");
	if (!tabsEl || !cmdEl) return;

	tabsEl.innerHTML = Object.entries(INSTALL_COMMANDS)
		.map(([key, item]) => {
			const active = key === state.installTab ? "active" : "";
			return `<button type="button" class="install-tab ${active}" data-install-key="${key}">${escapeHtml(
				t(item.labelZh, item.labelEn)
			)}</button>`;
		})
		.join("");

	const current = INSTALL_COMMANDS[state.installTab] || INSTALL_COMMANDS.npm;
	cmdEl.textContent = current.cmd;

	tabsEl.querySelectorAll("[data-install-key]").forEach((btn) => {
		btn.onclick = () => {
			state.installTab = btn.getAttribute("data-install-key");
			renderInstallBox();
		};
	});

	if (copyBtn) {
		copyBtn.onclick = () => copyText(current.cmd, copyBtn);
	}
}

function renderCockpitShowcase() {
	const tabsEl = document.getElementById("cockpit-tabs");
	const bodyEl = document.getElementById("cockpit-body");
	if (!tabsEl || !bodyEl) return;

	const shots = SITE_DATA.screenshots;
	const current = shots.find((s) => s.id === state.cockpitTab) || shots[0];

	tabsEl.innerHTML = shots
		.map((s) => {
			const active = s.id === current.id ? "active" : "";
			return `<button type="button" class="cockpit-tab ${active}" data-shot-id="${s.id}">${escapeHtml(
				t(s.title, s.titleEn)
			)}</button>`;
		})
		.join("");

	const highlights = state.lang === "en" ? current.highlightsEn : current.highlights;

	bodyEl.innerHTML = `
		<div class="cockpit-figure">
			<img src="${escapeHtml(current.src)}" alt="${escapeHtml(t(current.title, current.titleEn))}" id="cockpit-main-img" />
			<span class="cockpit-zoom-hint">${escapeHtml(t("🔍 点击放大查看高清原图", "🔍 Click to zoom full image"))}</span>
		</div>
		<div class="cockpit-info">
			<div>
				<span class="cockpit-badge">${escapeHtml(current.badge)}</span>
				<h3>${escapeHtml(t(current.title, current.titleEn))}</h3>
				<p>${escapeHtml(t(current.caption, current.captionEn))}</p>
				<ul class="cockpit-highlights">
					${highlights.map((h) => `<li><span>${escapeHtml(h)}</span></li>`).join("")}
				</ul>
			</div>
			<div style="display:flex;gap:10px;flex-wrap:wrap;padding-top:12px;border-top:1px solid var(--border);">
				<a href="./docs.html" class="btn-primary" style="padding:9px 16px;font-size:0.86rem;">
					${escapeHtml(t("📖 查看对应详细文档 →", "📖 Read Full Documentation →"))}
				</a>
			</div>
		</div>
	`;

	tabsEl.querySelectorAll("[data-shot-id]").forEach((btn) => {
		btn.onclick = () => {
			state.cockpitTab = btn.getAttribute("data-shot-id");
			renderCockpitShowcase();
		};
	});

	const img = document.getElementById("cockpit-main-img");
	if (img) {
		img.onclick = () => openImageLightbox(current.src, t(current.title, current.titleEn));
	}
}

function renderModesExplorer() {
	const selEl = document.getElementById("modes-selector");
	const detailEl = document.getElementById("mode-detail-card");
	if (!selEl || !detailEl) return;

	const modes = SITE_DATA.modes;
	const current = modes.find((m) => m.id === state.activeMode) || modes[0];

	selEl.innerHTML = modes
		.map((m) => {
			const active = m.id === current.id ? "active" : "";
			return `
				<button type="button" class="mode-btn ${active}" data-mode-id="${m.id}">
					<div class="mode-btn-top">
						<span class="mode-btn-badge">${escapeHtml(m.badge)}</span>
						<span>${m.icon}</span>
					</div>
					<div class="mode-btn-title">${escapeHtml(t(m.name, m.nameEn))}</div>
				</button>
			`;
		})
		.join("");

	const steps = state.lang === "en" ? current.flowEn : current.flow;

	detailEl.innerHTML = `
		<div>
			<span class="section-tag">${escapeHtml(current.badge)}</span>
			<h3 style="font-size:1.55rem;margin-bottom:8px;">${current.icon} ${escapeHtml(t(current.name, current.nameEn))}</h3>
			<p style="color:var(--accent);font-weight:600;margin-bottom:14px;">${escapeHtml(t(current.tagline, current.taglineEn))}</p>
			<p style="color:var(--text-dim);margin-bottom:18px;">${escapeHtml(t(current.summary, current.summaryEn))}</p>
			<div style="padding:12px 16px;border-radius:10px;background:var(--bg-elev2);border:1px solid var(--border);font-size:0.88rem;">
				<strong>${escapeHtml(t("✨ 适用场景：", "✨ Best For: "))}</strong>
				<span style="color:var(--text-dim);">${escapeHtml(t(current.bestFor, current.bestForEn))}</span>
			</div>
			<div style="margin-top:18px;">
				<a href="./docs.html#modes-guide" class="btn-secondary" style="padding:8px 16px;font-size:0.85rem;">
					${escapeHtml(t("深入了解目标模式 2.0 与计划闸门 →", "Deep Dive into Modes Architecture →"))}
				</a>
			</div>
		</div>
		<div class="mode-flow-steps">
			${steps
				.map(
					(step, idx) => `
				<div class="mode-flow-step">
					<span class="step-index">${idx + 1}</span>
					<span>${escapeHtml(step)}</span>
				</div>
			`
				)
				.join("")}
		</div>
	`;

	selEl.querySelectorAll("[data-mode-id]").forEach((btn) => {
		btn.onclick = () => {
			state.activeMode = btn.getAttribute("data-mode-id");
			renderModesExplorer();
		};
	});
}

function renderPluginMarketplace() {
	const gridEl = document.getElementById("plugins-grid");
	const pillsEl = document.getElementById("plugin-filter-pills");
	const searchInput = document.getElementById("plugin-search-input");
	if (!gridEl || !pillsEl) return;

	const categories = [
		{ id: "all", zh: `全部插件 (${SITE_DATA.plugins.length})`, en: `All (${SITE_DATA.plugins.length})` },
		{ id: "official", zh: "官方内置", en: "Official" },
		{ id: "community", zh: "社区精选", en: "Community" },
		{ id: "dev", zh: "开发与工作台", en: "Dev & Workbench" },
		{ id: "ai", zh: "AI 增强与通道", en: "AI & Channels" },
		{ id: "productivity", zh: "效率与多媒体", en: "Productivity" },
		{ id: "ops", zh: "网络与高可用", en: "Network & Ops" },
	];

	pillsEl.innerHTML = categories
		.map((c) => {
			const active = c.id === state.pluginCat ? "active" : "";
			return `<button type="button" class="filter-pill ${active}" data-cat="${c.id}">${escapeHtml(t(c.zh, c.en))}</button>`;
		})
		.join("");

	pillsEl.querySelectorAll("[data-cat]").forEach((btn) => {
		btn.onclick = () => {
			state.pluginCat = btn.getAttribute("data-cat");
			renderPluginMarketplace();
		};
	});

	if (searchInput && !searchInput.dataset.bound) {
		searchInput.dataset.bound = "1";
		searchInput.addEventListener("input", () => {
			state.pluginQuery = searchInput.value.trim().toLowerCase();
			renderPluginMarketplace();
		});
	}

	const q = state.pluginQuery;
	const filtered = SITE_DATA.plugins.filter((p) => {
		if (state.pluginCat === "official" && !p.official) return false;
		if (state.pluginCat === "community" && p.official) return false;
		if (!["all", "official", "community"].includes(state.pluginCat) && p.category !== state.pluginCat) return false;
		if (!q) return true;
		return (
			p.id.toLowerCase().includes(q) ||
			p.name.toLowerCase().includes(q) ||
			p.nameEn.toLowerCase().includes(q) ||
			p.description.toLowerCase().includes(q) ||
			p.descriptionEn.toLowerCase().includes(q)
		);
	});

	gridEl.innerHTML = filtered
		.map((p) => {
			const badgeClass = p.official ? "official" : "community";
			const badgeText = p.official ? t("官方", "Official") : t("社区", "Community");
			return `
				<div class="plugin-card">
					<div>
						<div class="plugin-head">
							<div class="plugin-title-wrap">
								<span class="plugin-icon">${p.icon}</span>
								<div>
									<div class="plugin-name">${escapeHtml(t(p.name, p.nameEn))}</div>
									<div class="plugin-id mono">${escapeHtml(p.id)}</div>
								</div>
							</div>
							<span class="plugin-badge ${badgeClass}">${escapeHtml(badgeText)}</span>
						</div>
						<p class="plugin-desc" style="margin-top:12px;">${escapeHtml(t(p.description, p.descriptionEn))}</p>
					</div>
					<div class="plugin-foot">
						<button type="button" class="plugin-cmd-btn" data-copy-cmd="${escapeHtml(p.installCmd)}" title="${escapeHtml(p.installCmd)}">
							📋 ${escapeHtml(p.installCmd)}
						</button>
						<a href="${escapeHtml(p.homepage)}" target="_blank" rel="noreferrer" style="font-size:0.8rem;font-weight:600;white-space:nowrap;">
							GitHub ↗
						</a>
					</div>
				</div>
			`;
		})
		.join("");

	gridEl.querySelectorAll("[data-copy-cmd]").forEach((btn) => {
		btn.onclick = () => copyText(btn.getAttribute("data-copy-cmd"), btn);
	});
}

function renderThemeStudio() {
	const listEl = document.getElementById("theme-picker-list");
	const stageEl = document.getElementById("theme-preview-stage");
	if (!listEl || !stageEl) return;

	const themes = SITE_DATA.themes;
	const current = themes.find((th) => th.id === state.studioThemeId) || themes[0];

	listEl.innerHTML = themes
		.map((th) => {
			const active = th.id === current.id ? "active" : "";
			return `
				<button type="button" class="theme-swatch-btn ${active}" data-theme-id="${th.id}">
					<span class="swatch-dots">
						<span class="swatch-dot" style="background:${th.bg}"></span>
						<span class="swatch-dot" style="background:${th.accent}"></span>
						<span class="swatch-dot" style="background:${th.green}"></span>
					</span>
					<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
						${escapeHtml(t(th.name, th.nameEn))}
					</span>
				</button>
			`;
		})
		.join("");

	listEl.querySelectorAll("[data-theme-id]").forEach((btn) => {
		btn.onclick = () => {
			state.studioThemeId = btn.getAttribute("data-theme-id");
			renderThemeStudio();
		};
	});

	stageEl.style.background = current.bg;
	stageEl.style.color = current.text;
	stageEl.style.borderColor = current.border;

	stageEl.innerHTML = `
		<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:10px;background:${current.bgElev};border:1px solid ${current.border};">
			<div style="display:flex;align-items:center;gap:10px;">
				<span style="font-weight:800;color:${current.accent};">💬 pi-web-ui</span>
				<span style="font-size:0.78rem;padding:2px 8px;border-radius:999px;background:${current.bgElev2};color:${current.textDim};border:1px solid ${current.border};">
					Theme: ${escapeHtml(t(current.name, current.nameEn))} (${escapeHtml(current.id)}.css)
				</span>
			</div>
			<span style="font-size:0.76rem;color:${current.green};font-weight:700;">● WS Connected · 60ms Snapshot</span>
		</div>

		<div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px;">
			<div style="padding:16px;border-radius:10px;background:${current.bgElev};border:1px solid ${current.border};display:flex;flex-direction:column;gap:10px;">
				<div style="font-size:0.78rem;color:${current.textDim};display:flex;justify-content:space-between;">
					<span>🤖 Assistant · claude-sonnet-4</span>
					<span>14:32</span>
				</div>
				<div style="padding:9px 12px;border-radius:8px;background:${current.bgElev2};border:1px solid ${current.border};font-size:0.83rem;color:${current.textDim};">
					💭 Thinking · 1.8s — Inspected <code>server/protocol.ts</code> and verified snapshot delta invariants.
				</div>
				<div style="font-size:0.88rem;line-height:1.55;">
					${escapeHtml(
						t(
							"已完成 WebSocket 增量快照与主题终端色板联动，所有 29 套内置主题均可一键实时切换。",
							"Completed WebSocket delta snapshot & terminal palette sync across all 29 built-in themes."
						)
					)}
				</div>
				<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
					<span style="font-size:0.75rem;padding:3px 9px;border-radius:6px;background:${current.accent};color:#fff;font-weight:600;">
						✓ edit server/protocol.ts
					</span>
					<span style="font-size:0.75rem;padding:3px 9px;border-radius:6px;background:${current.bgElev2};color:${current.green};border:1px solid ${current.border};">
						✓ vitest passed (42/42)
					</span>
				</div>
			</div>

			<div style="padding:16px;border-radius:10px;background:${current.bgElev2};border:1px solid ${current.border};font-family:monospace;font-size:0.8rem;display:flex;flex-direction:column;justify-content:space-between;">
				<div>
					<div style="color:${current.textDim};margin-bottom:8px;border-bottom:1px solid ${current.border};padding-bottom:6px;">
						💻 Terminal (ai-bash · persist=true)
					</div>
					<div style="color:${current.green};">$ npm run typecheck && npm test</div>
					<div style="color:${current.text};margin-top:4px;">✓ server tsc --noEmit (0 errors)</div>
					<div style="color:${current.text};">✓ web tsc --noEmit (0 errors)</div>
					<div style="color:${current.amber};margin-top:4px;">⚡ Liveness probe: active (0.4s)</div>
				</div>
				<div style="margin-top:12px;padding-top:8px;border-top:1px solid ${current.border};display:flex;justify-content:space-between;color:${current.textDim};font-size:0.74rem;">
					<span>--bg: ${escapeHtml(current.bg)}</span>
					<span>--accent: ${escapeHtml(current.accent)}</span>
				</div>
			</div>
		</div>
	`;
}

function renderLandingInteractive() {
	renderInstallBox();
	renderCockpitShowcase();
	renderModesExplorer();
	renderPluginMarketplace();
	renderThemeStudio();
}

/* ==========================================================================
   Documentation Portal (docs.html)
   ========================================================================== */
function buildDynamicTableHtml(type) {
	if (type === "cli-flags") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("CLI 参数", "CLI Flag")}</th>
							<th>${t("环境变量", "Environment Variable")}</th>
							<th>${t("默认值", "Default")}</th>
							<th>${t("功能说明", "Description")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.cliFlags
							.map(
								(r) => `
							<tr>
								<td><code>${escapeHtml(r.flag)}</code></td>
								<td><code>${escapeHtml(r.env)}</code></td>
								<td><code>${escapeHtml(r.def)}</code></td>
								<td>${escapeHtml(t(r.desc, r.descEn))}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}

	if (type === "slash-commands") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("斜杠命令", "Slash Command")}</th>
							<th>${t("作用说明", "Description")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.slashCommands
							.map(
								(r) => `
							<tr>
								<td><code>${escapeHtml(r.cmd)}</code></td>
								<td>${escapeHtml(t(r.desc, r.descEn))}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}

	if (type === "shortcuts") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("按键组合", "Shortcut")}</th>
							<th>${t("功能行为", "Action")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.shortcuts
							.map(
								(r) => `
							<tr>
								<td><code>${escapeHtml(r.key)}</code></td>
								<td>${escapeHtml(t(r.action, r.actionEn))}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}

	if (type === "tools-catalog") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("工具名称", "Tool Name")}</th>
							<th>${t("分组", "Group")}</th>
							<th>${t("默认状态", "Default")}</th>
							<th>${t("支持引擎", "Engines")}</th>
							<th>${t("职责与边界说明", "Description")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.toolsCatalog
							.map(
								(tool) => `
							<tr>
								<td><code>${escapeHtml(tool.name)}</code></td>
								<td>${escapeHtml(tool.group)}</td>
								<td>${tool.defaultOn ? `<span style="color:var(--green);font-weight:600;">ON</span>` : `<span style="color:var(--text-muted);">Opt-in</span>`}</td>
								<td>${escapeHtml(tool.engines.join(" / "))}</td>
								<td>${escapeHtml(t(tool.desc, tool.descEn))}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}

	if (type === "plugins-catalog") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("插件", "Plugin")}</th>
							<th>ID</th>
							<th>${t("功能简介", "Description")}</th>
							<th>${t("一键安装命令", "Install Command")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.plugins
							.map(
								(p) => `
							<tr>
								<td style="white-space:nowrap;font-weight:600;">${p.icon} ${escapeHtml(t(p.name, p.nameEn))}</td>
								<td><code>${escapeHtml(p.id)}</code></td>
								<td>${escapeHtml(t(p.description, p.descriptionEn))}</td>
								<td><code>${escapeHtml(p.installCmd)}</code></td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}

	if (type === "themes-catalog") {
		return `
			<div class="doc-table-wrap">
				<table class="doc-table">
					<thead>
						<tr>
							<th>${t("主题名称", "Theme Name")}</th>
							<th>ID / CSS</th>
							<th>${t("明暗属性", "Scheme")}</th>
							<th>${t("核心色板预览", "Palette")}</th>
						</tr>
					</thead>
					<tbody>
						${SITE_DATA.themes
							.map(
								(th) => `
							<tr>
								<td style="font-weight:600;">${escapeHtml(t(th.name, th.nameEn))}</td>
								<td><code>${escapeHtml(th.id)}</code></td>
								<td>${escapeHtml(th.scheme)}</td>
								<td>
									<span style="display:inline-flex;align-items:center;gap:6px;">
										<span class="swatch-dot" style="background:${th.bg};width:14px;height:14px;"></span>
										<span class="swatch-dot" style="background:${th.bgElev};width:14px;height:14px;"></span>
										<span class="swatch-dot" style="background:${th.accent};width:14px;height:14px;"></span>
										<span class="swatch-dot" style="background:${th.green};width:14px;height:14px;"></span>
										<code style="font-size:0.75rem;">${escapeHtml(th.accent)}</code>
									</span>
								</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>
		`;
	}
	return "";
}

function renderDocsPage() {
	const sidebarEl = document.getElementById("docs-sidebar");
	const articleEl = document.getElementById("docs-article");
	const tocEl = document.getElementById("docs-toc-list");
	if (!sidebarEl || !articleEl) return;

	// Check URL hash to resolve chapter or inner heading
	const rawHash = window.location.hash.replace(/^#/, "");
	if (rawHash) {
		const byChapter = DOCS_CHAPTERS.find((c) => c.id === rawHash);
		if (byChapter) {
			state.activeChapterId = byChapter.id;
		} else {
			// Check if rawHash is an h2 id inside a chapter
			const ownerChapter = DOCS_CHAPTERS.find(
				(c) => c.contentZh.includes(`id="${rawHash}"`) || c.contentEn.includes(`id="${rawHash}"`)
			);
			if (ownerChapter) state.activeChapterId = ownerChapter.id;
		}
	}

	// Render Left Sidebar
	const modeToggleHtml = `
		<div style="margin-bottom:18px;padding:0 6px;">
			<button type="button" id="toggle-all-chapters-btn" class="icon-btn" style="width:100%;justify-content:center;">
				${escapeHtml(
					state.docViewMode === "all"
						? t("📄 切换为单章节阅读模式", "📄 Switch to Single-Chapter View")
						: t("📚 展开全部 20 章连续阅读", "📚 Expand All 20 Chapters")
				)}
			</button>
		</div>
	`;

	sidebarEl.innerHTML =
		modeToggleHtml +
		DOCS_GROUPS.map((grp) => {
			const items = grp.items
				.map((id) => DOCS_CHAPTERS.find((c) => c.id === id))
				.filter(Boolean);
			return `
				<div class="docs-nav-group">
					<div class="docs-nav-group-title">${escapeHtml(t(grp.title, grp.titleEn))}</div>
					${items
						.map((ch) => {
							const active = state.docViewMode === "single" && ch.id === state.activeChapterId ? "active" : "";
							return `
								<button type="button" class="docs-nav-item ${active}" data-doc-chapter="${ch.id}" title="${escapeHtml(t(ch.title, ch.titleEn))}">
									<span class="docs-nav-item-icon">${ch.icon}</span>
									<span class="docs-nav-item-text">${escapeHtml(
										t(ch.navTitle || ch.title, ch.navTitleEn || ch.titleEn)
									)}</span>
								</button>
							`;
						})
						.join("")}
				</div>
			`;
		}).join("");

	const toggleAllBtn = document.getElementById("toggle-all-chapters-btn");
	if (toggleAllBtn) {
		toggleAllBtn.onclick = () => {
			state.docViewMode = state.docViewMode === "all" ? "single" : "all";
			renderDocsPage();
			window.scrollTo({ top: 0, behavior: "smooth" });
		};
	}

	sidebarEl.querySelectorAll("[data-doc-chapter]").forEach((btn) => {
		btn.onclick = () => {
			const chId = btn.getAttribute("data-doc-chapter");
			state.activeChapterId = chId;
			if (state.docViewMode === "all") {
				const target = document.getElementById(`chapter-${chId}`);
				if (target) target.scrollIntoView({ behavior: "smooth" });
			} else {
				history.replaceState(null, "", `#${chId}`);
				renderDocsPage();
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		};
	});

	// Render Center Article(s)
	const chaptersToRender =
		state.docViewMode === "all"
			? DOCS_CHAPTERS
			: [DOCS_CHAPTERS.find((c) => c.id === state.activeChapterId) || DOCS_CHAPTERS[0]];

	articleEl.innerHTML = chaptersToRender
		.map((ch, idx) => {
			const bodyHtml = state.lang === "en" ? ch.contentEn : ch.contentZh;
			const chIndex = DOCS_CHAPTERS.findIndex((c) => c.id === ch.id);
			const prevCh = chIndex > 0 ? DOCS_CHAPTERS[chIndex - 1] : null;
			const nextCh = chIndex < DOCS_CHAPTERS.length - 1 ? DOCS_CHAPTERS[chIndex + 1] : null;

			const pagerHtml =
				state.docViewMode === "single"
					? `
				<div class="doc-pager">
					${
						prevCh
							? `<button type="button" class="pager-btn" data-pager-go="${prevCh.id}">
									<span style="font-size:0.75rem;color:var(--text-muted);">← ${escapeHtml(t("上一章", "Previous"))}</span>
									<strong style="color:var(--accent);">${prevCh.icon} ${escapeHtml(t(prevCh.title, prevCh.titleEn))}</strong>
							   </button>`
							: `<div></div>`
					}
					${
						nextCh
							? `<button type="button" class="pager-btn" data-pager-go="${nextCh.id}" style="text-align:right;">
									<span style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(t("下一章", "Next"))} →</span>
									<strong style="color:var(--accent);">${nextCh.icon} ${escapeHtml(t(nextCh.title, nextCh.titleEn))}</strong>
							   </button>`
							: `<div></div>`
					}
				</div>
			`
					: "";

			return `
				<section id="chapter-${ch.id}" style="${idx > 0 ? "margin-top:56px;padding-top:42px;border-top:2px solid var(--border);" : ""}">
					<div class="doc-chapter-header">
						<span class="doc-chapter-badge">${escapeHtml(ch.badge)}</span>
						<h1 class="doc-chapter-title">${ch.icon} ${escapeHtml(t(ch.title, ch.titleEn))}</h1>
						<p class="doc-chapter-summary">${escapeHtml(t(ch.summary, ch.summaryEn))}</p>
					</div>
					<div class="doc-body">
						${bodyHtml}
					</div>
					${pagerHtml}
				</section>
			`;
		})
		.join("");

	// Hydrate dynamic tables inside article
	articleEl.querySelectorAll("[data-dynamic-table]").forEach((slot) => {
		const type = slot.getAttribute("data-dynamic-table");
		slot.innerHTML = buildDynamicTableHtml(type);
	});

	// Attach copy buttons to all <pre> blocks in docs
	articleEl.querySelectorAll("pre").forEach((pre) => {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "code-copy-floating";
		btn.textContent = t("复制", "Copy");
		btn.onclick = () => {
			const code = pre.querySelector("code")?.innerText || pre.innerText;
			copyText(code, btn);
		};
		pre.appendChild(btn);
	});

	// Pager navigation
	articleEl.querySelectorAll("[data-pager-go]").forEach((btn) => {
		btn.onclick = () => {
			state.activeChapterId = btn.getAttribute("data-pager-go");
			history.replaceState(null, "", `#${state.activeChapterId}`);
			renderDocsPage();
			window.scrollTo({ top: 0, behavior: "smooth" });
		};
	});

	// Build Right Sidebar TOC (On This Page)
	if (tocEl) {
		const headings = Array.from(articleEl.querySelectorAll("h2[id]"));
		tocEl.innerHTML = headings
			.map(
				(h) => `
				<li>
					<a href="#${escapeHtml(h.id)}" class="docs-toc-link">${escapeHtml(h.textContent)}</a>
				</li>
			`
			)
			.join("");
	}

	// Attach image zoom lightbox on all documentation figures
	articleEl.querySelectorAll(".doc-body img").forEach((img) => {
		img.style.cursor = "zoom-in";
		img.onclick = () => {
			const figure = img.closest("figure");
			const caption = figure ? figure.querySelector("figcaption")?.innerText : img.alt;
			openImageLightbox(img.src, caption);
		};
	});
}

/* ==========================================================================
   Global Search Modal (Ctrl/Cmd + K) & Lightbox
   ========================================================================== */
function buildSearchIndex() {
	const items = [];
	DOCS_CHAPTERS.forEach((ch) => {
		const plainZh = ch.contentZh.replace(/<[^>]+>/g, " ");
		const plainEn = ch.contentEn.replace(/<[^>]+>/g, " ");
		items.push({
			type: t("文档章节", "Doc Chapter"),
			title: `${ch.icon} ${t(ch.title, ch.titleEn)}`,
			snippet: t(ch.summary, ch.summaryEn),
			href: `./docs.html#${ch.id}`,
			haystack: `${ch.title} ${ch.titleEn} ${ch.summary} ${ch.summaryEn} ${plainZh} ${plainEn}`.toLowerCase(),
		});
	});
	SITE_DATA.plugins.forEach((p) => {
		items.push({
			type: t("插件", "Plugin"),
			title: `${p.icon} ${t(p.name, p.nameEn)} (${p.id})`,
			snippet: `${t(p.description, p.descriptionEn)} — ${p.installCmd}`,
			href: `./docs.html#plugins-marketplace`,
			haystack: `${p.id} ${p.name} ${p.nameEn} ${p.description} ${p.descriptionEn}`.toLowerCase(),
		});
	});
	SITE_DATA.toolsCatalog.forEach((tool) => {
		items.push({
			type: t("内置工具", "Agent Tool"),
			title: `🧰 ${tool.name}`,
			snippet: t(tool.desc, tool.descEn),
			href: `./docs.html#tools-and-markers`,
			haystack: `${tool.name} ${tool.group} ${tool.desc} ${tool.descEn}`.toLowerCase(),
		});
	});
	SITE_DATA.cliFlags.forEach((f) => {
		items.push({
			type: "CLI / Env",
			title: `⚙️ ${f.flag !== "—" ? f.flag + " / " : ""}${f.env}`,
			snippet: `${t(f.desc, f.descEn)} (Default: ${f.def})`,
			href: `./docs.html#cli-and-env`,
			haystack: `${f.flag} ${f.env} ${f.desc} ${f.descEn}`.toLowerCase(),
		});
	});
	return items;
}

function setupGlobalSearchModal() {
	const backdrop = document.getElementById("search-modal-backdrop");
	const input = document.getElementById("global-search-input");
	const resultsEl = document.getElementById("global-search-results");
	if (!backdrop || !input || !resultsEl) return;

	function openModal() {
		backdrop.classList.add("open");
		input.value = "";
		renderResults("");
		setTimeout(() => input.focus(), 30);
	}

	function closeModal() {
		backdrop.classList.remove("open");
	}

	function renderResults(query) {
		const index = buildSearchIndex();
		const q = query.trim().toLowerCase();
		const matched = q
			? index.filter((item) => item.haystack.includes(q)).slice(0, 18)
			: index.slice(0, 10);

		if (matched.length === 0) {
			resultsEl.innerHTML = `<div style="padding:24px;text-align:center;color:var(--text-muted);">${escapeHtml(
				t("未找到匹配内容，请尝试其他关键词", "No matching results found")
			)}</div>`;
			return;
		}

		resultsEl.innerHTML = matched
			.map(
				(item) => `
				<a href="${escapeHtml(item.href)}" class="search-result-item" data-search-hit="1">
					<div style="font-weight:700;margin-bottom:4px;">
						<span class="search-result-badge">${escapeHtml(item.type)}</span>
						${escapeHtml(item.title)}
					</div>
					<div style="font-size:0.83rem;color:var(--text-dim);">${escapeHtml(item.snippet)}</div>
				</a>
			`
			)
			.join("");

		resultsEl.querySelectorAll("[data-search-hit]").forEach((a) => {
			a.onclick = () => {
				closeModal();
				setTimeout(() => renderDocsPage(), 50);
			};
		});
	}

	document.querySelectorAll("[data-open-search]").forEach((btn) => {
		btn.onclick = openModal;
	});

	input.addEventListener("input", () => renderResults(input.value));

	backdrop.addEventListener("mousedown", (e) => {
		if (e.target === backdrop) closeModal();
	});

	window.addEventListener("keydown", (e) => {
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
			e.preventDefault();
			if (backdrop.classList.contains("open")) closeModal();
			else openModal();
		} else if (e.key === "Escape" && backdrop.classList.contains("open")) {
			closeModal();
		}
	});
}

function openImageLightbox(src, caption) {
	const lb = document.getElementById("image-lightbox");
	const img = document.getElementById("lightbox-img");
	const cap = document.getElementById("lightbox-caption");
	if (!lb || !img) return;
	img.src = src;
	if (cap) cap.textContent = caption || "";
	lb.classList.add("open");
}

/* ==========================================================================
   Initialization
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
	applySiteTheme(state.siteTheme);
	applyLanguage(state.lang);

	const themeSelect = document.getElementById("site-theme-select");
	if (themeSelect) {
		themeSelect.value = state.siteTheme;
		themeSelect.onchange = () => applySiteTheme(themeSelect.value);
	}

	const langBtn = document.getElementById("lang-toggle-btn");
	if (langBtn) {
		langBtn.onclick = () => applyLanguage(state.lang === "en" ? "zh" : "en");
	}

	const lb = document.getElementById("image-lightbox");
	if (lb) {
		lb.onclick = () => lb.classList.remove("open");
	}

	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			const activeLb = document.getElementById("image-lightbox");
			if (activeLb && activeLb.classList.contains("open")) {
				activeLb.classList.remove("open");
			}
		}
	});

	window.addEventListener("hashchange", () => {
		if (document.getElementById("docs-article")) {
			renderDocsPage();
		}
	});

	setupGlobalSearchModal();
});
