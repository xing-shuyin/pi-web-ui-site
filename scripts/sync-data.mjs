#!/usr/bin/env node
/**
 * Syncs live metadata, plugins (plugins/catalog.json), themes (themes/*.css),
 * and screenshot assets from ../pi-web-ui into ./site-data.js.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const SOURCE_ROOT = path.resolve(SITE_ROOT, "../pi-web-ui");

function readJson(p, fallback = null) {
	try {
		return JSON.parse(fs.readFileSync(p, "utf8"));
	} catch {
		return fallback;
	}
}

const pkg = readJson(path.join(SOURCE_ROOT, "package.json"), { version: "0.102.0" });
const rawCatalog = readJson(path.join(SOURCE_ROOT, "plugins/catalog.json"), []);

// Categorize plugins for the interactive marketplace filter
const PLUGIN_CATEGORIES = {
	"vscode-editor": "dev",
	"db-client": "dev",
	"sftp": "dev",
	"live-preview": "dev",
	"pi-web-multigit": "dev",
	"pm2-manager": "dev",
	"run-trace": "ai",
	"wechat-ilink": "ai",
	"voice-input": "ai",
	"desktop-use": "ai",
	"sol-savings": "ai",
	"codex-usage": "ai",
	"session-migrate": "ai",
	"webmail": "productivity",
	"notes": "productivity",
	"mermaid": "productivity",
	"image-toolkit": "productivity",
	"md-chat": "productivity",
	"legado-web": "productivity",
	"proxy-health": "ops",
	"reconnect": "ops",
};

const PLUGIN_NAMES_EN_FALLBACK = {
	"webmail": "Webmail (IMAP/SMTP)",
	"db-client": "Database Client",
	"vscode-editor": "VSCode Workbench",
	"sftp": "SFTP Sync",
	"mermaid": "Mermaid Diagrams",
	"run-trace": "Run Trajectory Timeline",
	"legado-web": "Legado Reader",
	"live-preview": "Live Preview Server",
	"image-toolkit": "Image Toolkit",
	"pi-web-multigit": "Multi-Repo Git Overview",
};

const PLUGIN_NAMES_ZH_FALLBACK = {
	"webmail": "网页邮箱 (Webmail)",
	"db-client": "数据库客户端 (DB Client)",
	"vscode-editor": "VSCode 工作台",
	"sftp": "SFTP 远程同步",
	"mermaid": "Mermaid 图表渲染",
	"run-trace": "运行轨迹时间线",
	"legado-web": "Legado 书源阅读",
	"live-preview": "Live Server 实时预览",
	"image-toolkit": "图片处理工作台",
	"pi-web-multigit": "多仓库 Git 总览",
};

const plugins = rawCatalog.map((p) => {
	const isOfficial = typeof p.source === "string" && p.source.startsWith("xing-shuyin/pi-web-ui/");
	return {
		id: p.id,
		name: PLUGIN_NAMES_ZH_FALLBACK[p.id] || p.name || p.id,
		nameEn: p.nameEn || PLUGIN_NAMES_EN_FALLBACK[p.id] || p.name || p.id,
		icon: p.icon || "🧩",
		category: PLUGIN_CATEGORIES[p.id] || "productivity",
		official: isOfficial,
		author: p.author || "xingshuyin",
		source: p.source,
		homepage: p.homepage || `https://github.com/${p.source}`,
		description: p.description || "",
		descriptionEn: p.descriptionEn || p.description || "",
		installCmd: `pi-web-ui plugin install ${p.source}`,
	};
});

// Parse all CSS themes from ../pi-web-ui/themes/*.css
const themesDir = path.join(SOURCE_ROOT, "themes");
const themeFiles = fs.existsSync(themesDir)
	? fs.readdirSync(themesDir).filter((f) => f.endsWith(".css")).sort()
	: [];

function extractCssVar(css, varName, fallback) {
	const re = new RegExp(`${varName}:\\s*([^;\\n]+);`);
	const m = css.match(re);
	return m ? m[1].trim() : fallback;
}

function extractCommentMeta(css, key, fallback) {
	const re = new RegExp(`/\\*\\s*${key}:\\s*([^*]+)\\*/`);
	const m = css.match(re);
	return m ? m[1].trim() : fallback;
}

const themes = [
	{
		id: "default",
		name: "默认深色",
		nameEn: "Default Midnight",
		group: "builtin",
		scheme: "dark",
		bg: "#0d0e12",
		bgElev: "#14161c",
		bgElev2: "#1b1e27",
		text: "#e6e8ef",
		textDim: "#9aa1b4",
		accent: "#3b82f6",
		green: "#22c55e",
		red: "#ef4444",
		amber: "#f59e0b",
		border: "#262a35",
	},
	...themeFiles.map((file) => {
		const css = fs.readFileSync(path.join(themesDir, file), "utf8");
		const id = file.replace(/\.css$/, "");
		const schemeMatch = css.match(/color-scheme:\s*(dark|light)/);
		const scheme = schemeMatch ? schemeMatch[1] : "dark";
		return {
			id,
			name: extractCommentMeta(css, "theme-name", id),
			nameEn: extractCommentMeta(css, "theme-name-en", id),
			group: extractCommentMeta(css, "theme-group", "custom"),
			scheme,
			bg: extractCssVar(css, "--bg", scheme === "light" ? "#ffffff" : "#0d0e12"),
			bgElev: extractCssVar(css, "--bg-elev", scheme === "light" ? "#f6f8fa" : "#14161c"),
			bgElev2: extractCssVar(css, "--bg-elev2", scheme === "light" ? "#eaeef2" : "#1b1e27"),
			text: extractCssVar(css, "--text", scheme === "light" ? "#1f2328" : "#e6e8ef"),
			textDim: extractCssVar(css, "--text-dim", scheme === "light" ? "#59636e" : "#9aa1b4"),
			accent: extractCssVar(css, "--accent", "#3b82f6"),
			green: extractCssVar(css, "--green", "#10b981"),
			red: extractCssVar(css, "--red", "#ef4444"),
			amber: extractCssVar(css, "--amber", "#f59e0b"),
			border: extractCssVar(css, "--border", scheme === "light" ? "#d0d7de" : "#262a35"),
		};
	}),
];

const siteData = {
	meta: {
		name: "pi-web-ui",
		version: pkg.version || "0.102.0",
		nodeEngine: pkg.engines?.node || ">=22.19.0",
		repoUrl: "https://github.com/xing-shuyin/pi-web-ui",
		npmUrl: "https://www.npmjs.com/package/pi-web-ui",
		pluginsRepoUrl: "https://github.com/xing-shuyin/pi-web-ui-plugins",
		presetsRepoUrl: "https://github.com/xing-shuyin/pi-web-ui-presets",
		companionRepoUrl: "https://github.com/xing-shuyin/dsh-ui-tools",
		qqGroup: "1126050727",
		license: "MIT",
		author: "xingshuyin",
		updatedAt: new Date().toISOString().slice(0, 10),
	},
	plugins,
	themes,
	screenshots: [
		{
			id: "chat-prompts",
			title: "对话工作台 + 提示词模板",
			titleEn: "Chat Cockpit & Prompt Templates",
			caption: "流式对话、思考块、工具调用卡片、快捷短语栏与空状态一键提示词模板库，左右双栏文件树与会话列表随时折叠。",
			captionEn: "Streaming chat, thinking blocks, tool cards, quick phrases bar, and one-click prompt templates with collapsible dual sidebars.",
			src: "./assets/chat-prompts.jpeg",
			badge: "Core Workspace",
			highlights: [
				"60ms 节流快照驱动 + message_delta 实时流式输出",
				"支持回复途中补充（Steer）插队、排队撤回与任意历史分支重问",
				"空对话一键提示词模板（代码审查、仓库初始化、合并冲突排查等）",
			],
			highlightsEn: [
				"60ms throttled snapshot engine + real-time message_delta streaming",
				"Mid-stream Steer queueing, queue recall, and non-destructive branch re-ask",
				"One-click starter prompt templates for code review, repo init, conflict resolution",
			],
		},
		{
			id: "trajectory",
			title: "运行轨迹时间线 (Run-Trace)",
			titleEn: "Run Trajectory Timeline (run-trace)",
			caption: "将任务 → 思考 → 工具调用 → 文件改动 → 最终结果聚合为可视化时间线，支持按轮次回放与节点耗时诊断。",
			captionEn: "Aggregates Task → Thinking → Tool Calls → File Diffs → Results into an interactive timeline with replay & latency diagnostics.",
			src: "./assets/trajectory.jpeg",
			badge: "Observability",
			highlights: [
				"全景透视智能体每一步推理、工具入参、终端输出与文件变更",
				"直观定位耗时瓶颈与失败工具，支持一键跳转对应对话气泡",
				"内置离线渲染引擎，大会话依然丝滑流畅",
			],
			highlightsEn: [
				"Full visibility into every reasoning step, tool argument, terminal output, and file diff",
				"Pinpoint latency bottlenecks and failed tool calls with one-click message jump",
				"Built-in offline rendering engine for smooth playback on long sessions",
			],
		},
		{
			id: "terminal",
			title: "内置多标签真终端 (node-pty + xterm.js)",
			titleEn: "Built-in Multi-Tab PTY Terminal",
			caption: "服务端真实 PTY 经 WebSocket 桥接至浏览器，支持 AI Bash 可见终端接管、持久 ai-bash 会话与 3 秒静默活力探测。",
			captionEn: "Server-side native PTY bridged over WebSocket with AI Bash takeover, persistent ai-bash tab, and 3s silence liveness probing.",
			src: "./assets/terminal.jpeg",
			badge: "Native PTY",
			highlights: [
				"每对话独立多标签终端，默认在当前项目工作区目录启动",
				"开启「默认 bash 走终端」后，AI 执行命令实时可见、可随时按键介入交互",
				"底栏 3 秒无输出自动探测进程树（正常等待 / 交互提示 / 疑似卡死告警）",
			],
			highlightsEn: [
				"Per-conversation multi-tab PTY shells starting automatically in project cwd",
				"Optional AI Bash takeover lets you watch and interact with agent commands live",
				"3-second silence detector inspects OS process tree for interactive prompts or stalls",
			],
		},
		{
			id: "git",
			title: "内置 Git 源代码管理面板",
			titleEn: "Built-in Git Source Control Panel",
			caption: "无需离开浏览器即可查看 Staged / Unstaged / Untracked 变更、点击文件预览高亮 Diff、填写说明一键 Commit / Push / Pull / Stash。",
			captionEn: "Inspect Staged/Unstaged/Untracked changes, view syntax-highlighted diffs, and Commit/Push/Pull/Stash without leaving your tab.",
			src: "./assets/git.jpeg",
			badge: "Git SCM",
			highlights: [
				"只读状态与 Diff 走轻量级 execFile，写操作可联动可见终端",
				"支持一键 Stage / Unstage、丢弃修改、分支切换与远端同步",
				"搭配 multi-git 插件更可升级为多仓库聚合总览与跨仓搜索",
			],
			highlightsEn: [
				"Fast read-only status/diff via execFile; write actions integrate with terminal",
				"One-click Stage/Unstage, discard changes, branch switching, and remote sync",
				"Pair with multi-git plugin for multi-repository workspace overview & search",
			],
		},
		{
			id: "settings",
			title: "全维度设置面板与预设共享",
			titleEn: "Comprehensive Settings & Preset Sharing",
			caption: "从系统提示词、31 项工具开关、延迟加载、子代理模板、模型管理到 UI 插槽排布与社区预设一键导入导出。",
			captionEn: "Control system prompts, 31 tool toggles, lazy loading, subagent templates, models, UI slot layout, and community presets.",
			src: "./assets/settings.jpeg",
			badge: "Control Center",
			highlights: [
				"31 个内置/扩展工具独立开关 + 逐工具提示词微调 + 前缀缓存安全的延迟加载",
				"支持导出/导入 JSON 设置预设（四道白名单闸门净化），一键浏览与分享到社区仓库",
				"33 个宿主 UI 扩展点自由拖拽排序、重命名与显隐控制",
			],
			highlightsEn: [
				"31 granular tool toggles + per-tool prompt overrides + cache-safe lazy tool loading",
				"Export/import JSON presets (4-gate whitelist sanitizer) & browse community presets",
				"Customize 33 host UI extension slots with drag-and-drop ordering and renaming",
			],
		},
	],
	modes: [
		{
			id: "chat",
			badge: "Mode 01",
			icon: "💬",
			name: "标准对话模式",
			nameEn: "Standard Interactive Mode",
			tagline: "高频日常开发首选：流式响应、Steer 插队、全工具协同",
			taglineEn: "Tuned for daily coding: real-time streaming, mid-turn steering & full tool access",
			summary: "智能体在主会话中直接阅读代码、编辑文件、执行终端命令并展示产物卡片。你可随时排队发送补充指令（Steer），或从任意历史问题分叉（Fork）探索不同实现方案。",
			summaryEn: "The agent reads, edits, runs bash commands, and presents artifacts directly in your active session. Queue mid-stream steer instructions or fork any historical turn.",
			flow: ["用户输入需求 / 粘贴截图 / @引用文件", "智能体流式思考 + 调取工具 (Read/Edit/Bash)", "实时渲染 Diff、终端输出与产物预览卡", "随时 Steer 补充指令或一键 Commit 提交"],
			flowEn: ["Prompt / Paste Image / @File Ref", "Streaming Thinking + Tool Execution", "Live Diff, PTY Output & Artifact Cards", "Mid-Stream Steer or One-Click Git Commit"],
			bestFor: "日常写代码、修 Bug、重构、交互式调试、快速问答",
			bestForEn: "Daily feature work, bug fixing, refactoring, interactive debugging",
		},
		{
			id: "goal",
			badge: "Mode 02 · 2.0",
			icon: "🎯",
			name: "目标模式 2.0 (审查对话制)",
			nameEn: "Goal Mode 2.0 (Reviewer-Executor Loop)",
			tagline: "把目标自治变成透明的双会话协作：执行对话干活 + 当前对话当审查官",
			taglineEn: "Autonomous multi-turn engineering: dedicated Executor session + Reviewer main session",
			summary: "设定工程目标与验收标准后，服务端自动开辟落盘的「执行对话」负责写码跑测，当前主对话化身为「审查者（Reviewer）」。每轮执行结束后，服务端自动采集 Git Diff、测试结果与终端退出码作为客观证据（Goal Evidence）注入审查指令，由主对话严格把关、指出缺陷并驱动下一轮迭代，直至达标或触发停滞熔断。",
			summaryEn: "Define a goal and acceptance criteria: the server spawns a persistent Executor conversation while your main conversation acts as Reviewer. After each executor turn, server-collected evidence (git diffs, test results, exit codes) is injected for rigorous review until completion or circuit-breaker stop.",
			flow: ["在目标栏设定 Goal 与验收标准并启动", "服务端派发给独立「执行会话」编码与跑测", "服务端采集客观执行证据 (Diff/ExitCode/产出)", "当前「主会话」作为审查官核验并决定通过或续轮指导"],
			flowEn: ["Define Goal & Acceptance Criteria", "Executor Session Codes & Runs Tests", "Server Extracts Objective Evidence", "Main Reviewer Session Audits & Iterates"],
			bestFor: "端到端功能开发、大规模测试修复、需要多轮自检与严格验收的复杂工程任务",
			bestForEn: "End-to-end features, test-suite stabilization, multi-turn verified engineering",
		},
		{
			id: "plan",
			badge: "Mode 03",
			icon: "📐",
			name: "计划模式 (只读硬闸门)",
			nameEn: "Plan Mode (Hard Read-Only Gate)",
			tagline: "先谋后动：底层动态剥离一切写工具，生成结构化实施蓝图",
			taglineEn: "Think before touching code: hard server-side gate strips all write tools",
			summary: "在目标条展开行点击「只规划」开启。服务端硬闸门动态剔除所有写文件与危险执行工具（并拦截直接倾倒大段源码），强制智能体只通过只读工具深入调研代码库、梳理影响面并输出结构化实施计划看板。确认无误后点击计划看板上的「开始实施」才正式解锁编码。",
			summaryEn: "Triggered via 'Plan Only' in the goal bar. A hard server-side gate dynamically removes write tools and blocks code dumping, forcing deep codebase exploration and a structured implementation board. Click 'Start Implementation' on the plan board to unlock coding.",
			flow: ["开启「只规划」进入硬只读安全区", "智能体使用 Read/Grep/Find 深度勘察架构", "生成分步实施计划看板（禁止直接改代码）", "人工审阅计划 → 点击「开始实施」解锁落地"],
			flowEn: ["Enable 'Plan Only' Hard Gate", "Read-Only Codebase Exploration", "Structured Plan Board Generated", "Approve & Click 'Start Implementation'"],
			bestFor: "陌生代码库调研、高风险架构重构前的方案评审、防止 AI 盲目动刀",
			bestForEn: "Architecture audits, high-risk refactors, preventing premature code edits",
		},
		{
			id: "delegate",
			badge: "Mode 04",
			icon: "🛡️",
			name: "审查者委派模式 (主审从干)",
			nameEn: "Reviewer Delegate Mode",
			tagline: "主会话纯粹思考与把关，所有编码脏活自动投递常驻执行会话",
			taglineEn: "Keep your main context clean: prompts auto-dispatch to a persistent worker session",
			summary: "开启审查者模式后，主会话被硬闸门锁定为纯只读审查与架构决策角色（拦截一切写操作与子代理派发），你输入的开发指令会自动投递给常驻执行对话干活。主会话上下文始终保持清爽、专注高层设计与代码质量审查。",
			summaryEn: "Locks the main conversation into a clean, read-only architectural reviewer role while automatically routing execution tasks to a persistent worker conversation.",
			flow: ["开启「审查者委派模式」锁定主会话只读", "用户输入任务自动路由至常驻执行会话", "执行会话完成编码修改与命令验证", "主会话保持干净上下文，专注审查 Diff 与决策"],
			flowEn: ["Enable Delegate Mode on Main Chat", "Prompts Auto-Route to Worker Session", "Worker Executes Edits & Commands", "Main Session Audits Diffs Cleanly"],
			bestFor: "超长周期项目架构把控、保持主对话高信噪比与低 Token 消耗",
			bestForEn: "Long-horizon architecture oversight, keeping main session context ultra-clean",
		},
	],
	toolsCatalog: [
		// Core Builtin
		{ name: "bash", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "执行 Shell 命令（支持原生进程或可见 PTY 终端接管、head/tail 截断与超时保护）", descEn: "Execute shell commands (native spawn or visible PTY terminal takeover with timeout & head/tail)" },
		{ name: "read", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "读取文本文件、图片附件或直接列出目录内容（readDirEnabled 行为开关）", descEn: "Read text files, images, or directory listings directly (with offset/limit pagination)" },
		{ name: "edit", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "精确文本替换修改文件，支持单次调用 edits[] 批量修改同一文件多处不重叠位置", descEn: "Precise file editing with multi-edit support (edits[]) in a single atomic call" },
		{ name: "write", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "创建新文件或完整覆写文件，自动创建父级目录", descEn: "Create or overwrite files, automatically creating parent directories" },
		{ name: "grep", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "按正则或字面量高速检索工作区文件内容（自动遵守 .gitignore）", descEn: "Fast regex/literal content search across workspace files (respects .gitignore)" },
		{ name: "find", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "按 Glob 模式查找工作区文件路径", descEn: "Find workspace files by glob pattern" },
		{ name: "ls", group: "core", defaultOn: true, engines: ["pi", "dsh"], desc: "列出目录内容（含隐藏文件与目录后缀标识）", descEn: "List directory entries sorted alphabetically" },
		// Files & Interaction
		{ name: "edit_soft", group: "files", defaultOn: true, engines: ["pi"], desc: "缩进容错文件编辑：按行 trim 匹配，解决 JS/JSON 空格与 Tab 漂移导致的替换失败", descEn: "Whitespace-tolerant file edit matching trimmed line content when exact edit fails" },
		{ name: "present_files", group: "files", defaultOn: true, engines: ["pi"], desc: "在对话中将生成的图表、图片、音视频、HTML 报告或代码渲染为可交互预览卡片", descEn: "Render generated images, charts, HTML reports, or files as interactive preview cards in chat" },
		{ name: "ask_user_question", group: "interaction", defaultOn: true, engines: ["pi", "dsh"], desc: "弹出结构化多选/单选交互问卷向用户确认需求与技术决策（刷新可恢复，豁免看门狗超时）", descEn: "Render a rich browser questionnaire dialog to clarify requirements or confirm decisions" },
		{ name: "browser_page", group: "browser", defaultOn: true, engines: ["pi"], desc: "结合 Page Picker 浏览器扩展读取或操作已授权的浏览器标签页 DOM 与截图", descEn: "Inspect and interact with authorized browser tabs via the Page Picker extension" },
		// Subagents & Delegation
		{ name: "subagent", group: "subagent", defaultOn: true, engines: ["pi"], desc: "管理后台子代理会话（spawn / wait_all / get_result / steer / stop / handoff / templates）", descEn: "Spawn, steer, wait for, and manage parallel background subagent conversations" },
		{ name: "delegate_task", group: "subagent", defaultOn: true, engines: ["pi"], desc: "通过六段式严谨任务书（TASK/OUTCOME/TOOLS/MUST DO/MUST NOT DO/CONTEXT）向专家模板委派任务", descEn: "Delegate atomic tasks to specialist subagent templates via a validated 6-section brief" },
		{ name: "conversation_list", group: "session", defaultOn: false, engines: ["pi"], desc: "列出当前项目的历史会话列表（按需开启）", descEn: "List conversations in the current project (opt-in)" },
		{ name: "conversation_read", group: "session", defaultOn: true, engines: ["pi"], desc: "按需读取被 <conversation-ref> 引用的其他对话内容，避免全量注入污染上下文", descEn: "Read referenced conversations on demand via <conversation-ref> without context bloat" },
		// Batch, Lazy & Sandbox
		{ name: "load_tools", group: "context", defaultOn: true, engines: ["pi"], desc: "工具延迟加载器：按需挂载目录中未激活工具的完整 Schema，保持系统提示词前缀缓存 100% 命中", descEn: "Attach full schemas of deferred tools on demand while preserving prompt prefix cache" },
		{ name: "tool_search", group: "context", defaultOn: false, engines: ["pi"], desc: "基于 BM25 检索延迟加载工具与大规模 MCP 工具元数据", descEn: "BM25 search over deferred and MCP tool metadata" },
		{ name: "codemode", group: "sandbox", defaultOn: false, engines: ["pi"], desc: "在 QuickJS 沙盒中编写 JS 脚本批量并发调用多个工具（Promise.allSettled）并过滤大输出", descEn: "Run JavaScript in a QuickJS sandbox to batch/chain tool calls and filter large outputs" },
		{ name: "eval", group: "sandbox", defaultOn: true, engines: ["pi"], desc: "在隔离沙盒中直接执行 Python 或 JS/TS 代码片段（跨调用保持变量状态，无需创建临时脚本）", descEn: "Execute Python or JS/TS snippets in a stateful isolated sandbox" },
		{ name: "obs_recall", group: "context", defaultOn: true, engines: ["pi"], desc: "按观察 ID 与字节偏移分页召回被 Observation Pack 替换的超大工具原始输出", descEn: "Recall paged excerpts from large tool outputs stored by Observation Pack" },
		{ name: "compact_context", group: "context", defaultOn: true, engines: ["pi"], desc: "让智能体在长任务途中主动触发上下文摘要压缩", descEn: "Allow the agent to proactively trigger context compaction during long tasks" },
		{ name: "schedule_task", group: "automation", defaultOn: true, engines: ["pi"], desc: "创建、查看或取消定时/延时唤醒任务（支持超过 6 小时的 armDelay 安全分片定时）", descEn: "Create, list, or cancel scheduled/delayed wake-up tasks for autonomous follow-ups" },
		// Inline Markers (Zero-latency status operations)
		{ name: "todo_list (Inline Marker)", group: "markers", defaultOn: true, engines: ["pi", "dsh"], desc: "内联标记 [[todo:add:...]] / [[todo:done:N]] 实时维护顶栏任务清单，零工具往返开销", descEn: "Inline marker [[todo:...]] updates the live task panel with zero tool-call roundtrip" },
		{ name: "conv_rename (Inline Marker)", group: "markers", defaultOn: true, engines: ["pi", "dsh"], desc: "内联标记 [[conv:rename:新标题]] 自动为当前对话生成精准标题", descEn: "Inline marker [[conv:rename:title]] renames the current conversation automatically" },
		{ name: "action_suggest (Inline Marker)", group: "markers", defaultOn: true, engines: ["pi", "dsh"], desc: "内联标记 [[action:suggest:下一步]] 在输入框上方生成一键后续操作建议芯片", descEn: "Inline marker [[action:suggest:...]] renders one-click next-action suggestion chips" },
		{ name: "notify (Inline Marker)", group: "markers", defaultOn: true, engines: ["pi", "dsh"], desc: "内联标记 [[notify:内容]] 触发浏览器桌面通知与提示音（支持 Windows 最小化矩形检测）", descEn: "Inline marker [[notify:...]] sends desktop notifications & sound alerts" },
	],
	cliFlags: [
		{ flag: "--port <n>", env: "PI_WEB_PORT", def: "8787", desc: "HTTP 与 WebSocket 监听端口", descEn: "HTTP and WebSocket listen port" },
		{ flag: "--host <addr>", env: "PI_WEB_HOST", def: "127.0.0.1", desc: "绑定地址（默认仅本机回环；设为 0.0.0.0 可开放局域网访问）", descEn: "Bind address (loopback by default; 0.0.0.0 for LAN access)" },
		{ flag: "--cwd <dir>", env: "PI_WEB_CWD", def: "process.cwd()", desc: "智能体默认工作区根目录（文件树、读写工具、终端默认起点；严禁设为 $HOME）", descEn: "Default workspace root directory for file tree, tools, and terminal" },
		{ flag: "--data-dir <dir>", env: "PI_WEB_DATA_DIR", def: "~/.pi-web", desc: "持久化数据目录（存放界面状态、插件、上传附件、自定义主题、审批规则库等）", descEn: "Data directory for UI state, plugins, uploads, custom themes, and approval rules" },
		{ flag: "--engine <pi|dsh>", env: "PI_WEB_ENGINE", def: "pi", desc: "智能体运行时引擎：pi（默认）或 dsh（DeepSeek Harness）", descEn: "Agent engine: pi (default) or dsh (DeepSeek Harness)" },
		{ flag: "--dsh-Zone <path>", env: "PI_WEB_DSH_CLI", def: "自动探测", desc: "DSH 引擎的 cli.js 路径（仅 --engine dsh 时生效）", descEn: "Path to DSH cli.js when running with --engine dsh" },
		{ flag: "--token <secret>", env: "PI_WEB_TOKEN", def: "空 (免密)", desc: "开启共享口令鉴权，保护 HTTP 静态页、/api/* 与 /ws 连接", descEn: "Require shared secret token authentication for HTTP, API, and WebSocket" },
		{ flag: "--allow-origins <list>", env: "PI_WEB_ALLOW_ORIGINS", def: "同源校验", desc: "逗号分隔的额外允许 Origin 白名单（用于跨域反向代理或特殊端口映射）", descEn: "Comma-separated allowed Origins for reverse proxies Changing port/host" },
		{ flag: "—", env: "PI_WEB_SDK", def: "global", desc: "引擎版本解析策略：global 优先使用机器上更新的全局 pi 引擎，bundled 强制使用自带版本", descEn: "SDK resolution: 'global' uses newer system-installed pi SDK; 'bundled' forces local copy" },
		{ flag: "—", env: "PI_WEB_TOOL_LAZY_LOADING", def: "1 (开启)", desc: "工具 Schema 延迟加载部署级默认开关（1=开启节省上下文 Token，0=全量直接挂载）", descEn: "Deployment default for lazy tool schema loading (1=enabled, 0=disabled)" },
		{ flag: "—", env: "PI_WEB_TOOL_TIMEOUT_MS", def: "1200000 (20m)", desc: "单工具执行看门狗超时毫秒数（超时自动 abort 会话，ask_user_question 豁免）", descEn: "Watchdog timeout in ms per tool call (20 min default; ask_user_question exempt)" },
		{ flag: "—", env: "PI_WEB_PLUGIN_CATALOG_URL", def: "官方市场 URL", desc: "插件市场 catalog.json 地址；设为 off / 0 / false 可在纯内网环境关闭市场请求", descEn: "Plugin marketplace catalog URL; set to 'off' to disable in air-gapped networks" },
		{ flag: "—", env: "PI_WEB_PLUGIN_CATALOG_INSTALL", def: "0", desc: "设为 1 时服务启动自动安装官方目录中的缺失插件", descEn: "Set to 1 to auto-install catalog plugins on server startup" },
		{ flag: "—", env: "PI_WEB_PRESET_REPO", def: "xing-shuyin/pi-web-ui-presets", desc: "设置预设社区共享 GitHub 仓库（设为 off 关闭一键分享）", descEn: "GitHub repository for community settings preset sharing" },
		{ flag: "—", env: "PI_WEB_OFFLINE_ROWS_TTL_MS", def: "1800000 (30m)", desc: "断连设备会话在「另一处运行」列表的保留宽限期，方便手机切电脑无缝接管（Takeover）", descEn: "Grace period (30m) for disconnected client sessions to remain available for takeover" },
	],
	shortcuts: [
		{ key: "Enter", action: "发送消息（移动端触屏下 Enter 为换行，Ctrl/Cmd+Enter 发送）", actionEn: "Send message (on touch devices Enter inserts newline, Ctrl/Cmd+Enter sends)" },
		{ key: "Shift + Enter", action: "在输入框内换行", actionEn: "Insert newline in composer" },
		{ key: "↑ / ↓", action: "光标位于首/末视觉行时翻阅跨会话持久化的全局输入历史；Esc 回到当前草稿", actionEn: "Cycle persistent global input history when cursor is at first/last visual line" },
		{ key: "Ctrl / Cmd + K", action: "打开全局命令与搜索面板（跨对话全文检索 / 最近项目切换 / 工作区文件名速查）", actionEn: "Open global search modal (conversations, projects, workspace files)" },
		{ key: "Ctrl / Cmd + F", action: "搜索当前对话内容（Enter 下一个命中，Shift+Enter 上一个，Esc 关闭）", actionEn: "In-conversation find (Enter next, Shift+Enter prev, Esc close)" },
		{ key: "/", action: "在输入框唤起斜杠命令选择器（内置命令 / 扩展命令 / 提示词模板 / 技能）", actionEn: "Open slash command & skill picker in composer" },
		{ key: "@", action: "在输入框唤起工作区文件与对话引用选择器", actionEn: "Mention workspace files or reference other conversations" },
		{ key: "Ctrl / Cmd + V", action: "直接粘贴剪贴板截图/图片或文件作为对话附件", actionEn: "Paste clipboard images or files directly as attachments" },
		{ key: "Esc", action: "关闭当前浮层弹窗 / 从历史记录浏览恢复草稿", actionEn: "Close active floating panel / restore composer draft" },
	],
	slashCommands: [
		{ cmd: "/new [首条提示词]", desc: "开启新对话；若附带文字（如 `/new 修复失败的单测`）将直接作为新对话首条消息发送", descEn: "Start a new conversation; optional text is sent immediately as the first prompt" },
		{ cmd: "/name <新标题>", desc: "重命名当前对话标题", descEn: "Rename the active conversation" },
		{ cmd: "/model", desc: "打开模型选择器切换当前对话使用的 LLM 模型", descEn: "Switch the active LLM model" },
		{ cmd: "/thinking", desc: "切换思考推理强度（Off / Minimal / Low / Medium / High / XHigh）", descEn: "Change reasoning/thinking effort level" },
		{ cmd: "/compact", desc: "立即手动压缩当前对话上下文并生成摘要卡片", descEn: "Manually compact conversation context into a summary card" },
		{ cmd: "/cwd [路径]", desc: "查看或立即切换当前项目的工作区根目录（无需重启服务）", descEn: "Show or switch the workspace root directory on the fly" },
		{ cmd: "/resume", desc: "打开历史会话列表切换对话", descEn: "Browse and resume previous conversations" },
		{ cmd: "/reload", desc: "热重载磁盘上的配置、AGENTS.md、技能（Skills）、插件与主题", descEn: "Hot-reload configuration, AGENTS.md, skills, plugins, and themes" },
		{ cmd: "/copy", desc: "一键复制助手上一条回复的完整 Markdown 原文", descEn: "Copy the assistant's last reply to clipboard" },
		{ cmd: "/help", desc: "在对话中列出所有可用的斜杠命令与说明", descEn: "Show all available slash commands" },
		{ cmd: "/pi-web-ui:quit", desc: "安全关闭 pi-web-ui 服务端进程", descEn: "Gracefully shut down the pi-web-ui server" },
	],
};

const outPath = path.join(SITE_ROOT, "site-data.js");
fs.writeFileSync(
	outPath,
	`// Auto-generated by scripts/sync-data.mjs — DO NOT EDIT MANUALLY\nexport const SITE_DATA = ${JSON.stringify(siteData, null, "\t")};\n`,
	"utf8"
);
console.log(`Synced site-data.js: v${siteData.meta.version}, ${plugins.length} plugins, ${themes.length} themes, ${siteData.toolsCatalog.length} tools.`);
