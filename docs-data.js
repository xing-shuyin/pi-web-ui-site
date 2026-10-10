/**
 * Comprehensive 20-Chapter Documentation Portal Data for pi-web-ui
 * Covers every feature in detail: Remote SSH projects, File Tree upload/download/archive,
 * Subagents & 6-section delegate_task & Handoff & claim_files, Rollback snapshots,
 * Selection Quote, Vision Bridge, Office/PDF preview, MCP servers & market, Scheduler, etc.
 */
export const DOCS_GROUPS = [
	{
		id: "getting-started",
		title: "入门与安装配置",
		titleEn: "Getting Started",
		items: ["overview", "installation", "cli-and-env"],
	},
	{
		id: "workspace",
		title: "核心工作台与远程项目",
		titleEn: "Workspace & Remote SSH",
		items: [
			"chat-and-sessions",
			"remote-ssh-projects",
			"file-tree-and-transfer",
			"attachments-and-vision",
			"terminal-and-bash",
			"git-scm-and-ai-commit",
			"commands-and-shortcuts",
		],
	},
	{
		id: "agent-modes",
		title: "子代理、高阶模式与工具链",
		titleEn: "Subagents, Modes & Tools",
		items: [
			"subagents-and-delegation",
			"modes-guide",
			"tools-and-markers",
			"mcp-and-browser",
			"bg-tasks-and-scheduler",
			"approval-and-security",
		],
	},
	{
		id: "extensibility",
		title: "双引擎、插件、主题与预设",
		titleEn: "Engines, Plugins & Themes",
		items: ["dual-engines-and-presets", "plugins-marketplace", "plugin-sdk", "themes-and-deployment"],
	},
];

export const DOCS_CHAPTERS = [
	{
		id: "overview",
		group: "getting-started",
		badge: "Chapter 01",
		icon: "🚀",
		title: "项目概览与 30 秒快速开始",
		titleEn: "Overview & 30-Second Quick Start",
		summary: "全面了解 pi-web-ui 的功能版图：从流式对话、SSH 远程项目、文件树拖拽上传、并发子代理到目标模式 2.0。",
		summaryEn: "Discover the full landscape of pi-web-ui: streaming chat, Remote SSH workspaces, file tree uploads, parallel subagents, and Goal Mode 2.0.",
		contentZh: `
<h2 id="what-is-pi-web-ui">什么是 pi-web-ui？</h2>
<p><strong>pi-web-ui</strong> 是基于 <code>@earendil-works/pi-coding-agent</code> SDK 与 DeepSeek Harness (DSH) 构建的全栈浏览器端 AI 编程智能体工作台。它的核心设计理念只有一句话：</p>
<div class="doc-callout doc-callout-tip">
	<strong>💡 核心宗旨：打开浏览器，什么都能干（Just open your browser — get all your work done）</strong>
	<p>无论项目在本机磁盘还是<strong>远程 SSH 服务器（<code>ssh://user@host/path</code>）</strong>，你只需打开一个浏览器标签页，即可完成：流式对话、划词引用提问、按轮次一键回滚代码、派发并发子代理（Subagents）、浏览并拖拽上传文件/文件夹、在线解压/打包下载、预览 Office/PDF/媒体、使用多标签真 PTY 终端、管理 Git 暂存与 AI 生成提交说明，以及运行多轮自治的目标模式 2.0 审查。</p>
</div>

<h2 id="thirty-second-quickstart">30 秒极速启动</h2>
<p>确保环境已安装 <strong>Node.js ≥ 22.19.0</strong> 且已配置好 <code>pi</code>（<code>~/.pi/agent</code>）：</p>
<pre><code class="language-bash"># 方式一：全局安装（推荐日常主力使用）
npm i -g pi-web-ui@latest
pi-web-ui

# 方式二：免安装直接运行最新版
npx pi-web-ui@latest

# 启动后在浏览器打开：
# http://localhost:8787</code></pre>

<h2 id="full-feature-matrix">全功能版图速览（20 章手册导读）</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🌐 本机 + SSH 远程项目无缝切换</h4>
		<p>支持直接连接远程 SSH 服务器（密码 / 私钥 / SSH Agent，AES-256-GCM 加密保存），远端文件树、AI 读写编辑工具、内置 PTY 终端与 Git 面板全部自动在远程服务器执行（详见<strong>第 05 章</strong>）。</p>
	</div>
	<div class="doc-card">
		<h4>📁 全功能文件树：上传文件/文件夹与压缩解压</h4>
		<p>右栏文件列表支持类 VSCode 拖拽上传文件、流式 TAR 上传整个文件夹、打包 ZIP 下载目录、在线解压压缩包、复制/剪切/粘贴、跨盘符 <code>@root</code> 浏览以及多根工作区（详见<strong>第 06 章</strong>）。</p>
	</div>
	<div class="doc-card">
		<h4>🤖 并发子代理 (Subagents) 与六段式委派</h4>
		<p>支持并行派生多个后台子代理、<code>delegate_task</code> 六段式严谨任务书委派、专家子代理模板库、子代理间点对点移交（<code>handoff</code>）以及防并发冲突的 <code>claim_files</code> 文件认领锁（详见<strong>第 11 章</strong>）。</p>
	</div>
	<div class="doc-card">
		<h4>⏪ 工作区快照回滚、划词引用与视觉桥</h4>
		<p>每轮对话修改文件前自动记录快照，支持一键回滚到任意历史轮次；选中回复或代码任意文字即浮出「引用」按钮；非多模态模型自动通过 Vision Bridge 转写截图（详见<strong>第 04 / 07 章</strong>）。</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="what-is-pi-web-ui">What is pi-web-ui?</h2>
<p><strong>pi-web-ui</strong> is a full-stack browser cockpit for AI coding agents (<code>@earendil-works/pi-coding-agent</code> and DeepSeek Harness). Whether your codebase lives on your local disk or on a <strong>Remote SSH server (<code>ssh://user@host/path</code>)</strong>, you can chat, quote selections, rollback file snapshots, spawn parallel subagents, drag-and-drop upload files/folders, run native or SSH PTY terminals, manage Git with AI commit messages, and orchestrate Goal Mode 2.0 reviews in a single browser tab.</p>

<h2 id="thirty-second-quickstart">30-Second Quick Start</h2>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui
# Open http://localhost:8787</code></pre>
`,
	},
	{
		id: "installation",
		group: "getting-started",
		badge: "Chapter 02",
		icon: "📦",
		title: "全平台安装指南（Windows / macOS / Linux / Termux / 桌面端）",
		titleEn: "Installation Guide (All Platforms, Termux & Desktop)",
		summary: "涵盖 npm 全局安装、npm 12+ 原生脚本放行、Linux 编译工具链、Android Termux 避坑指南、/webui 扩展与 Electron 桌面版。",
		summaryEn: "Complete installation instructions for npm, npm 12+ native scripts, Linux build tools, Android Termux, /webui extension, and Electron desktop.",
		contentZh: `
<h2 id="standard-install">1. 标准安装与首次运行向导</h2>
<pre><code class="language-bash"># 全局安装最新稳定版
npm i -g pi-web-ui@latest

# 启动服务
pi-web-ui</code></pre>
<p>首次打开浏览器时，若本机尚未初始化 <code>~/.pi/agent</code> 模型配置，界面会自动弹出<strong>首次配置向导（<code>PiSetupModal</code>）</strong>，引导你完成 API Key 或提供商 OAuth 登录配置。</p>

<h2 id="npm-12-allow-scripts">2. npm ≥ 12 原生模块脚本放行</h2>
<p>npm 12+ 默认阻止依赖安装脚本（会提示 <code>npm warn install-scripts … blocked</code>）。由于内置终端依赖原生模块 <code>node-pty</code>，安装时请显式放行：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="linux-build-deps">3. 🐧 Linux 编译工具链准备</h2>
<p><code>node-pty</code> 在 Linux 上安装时会自动通过 <code>node-gyp</code> 编译原生扩展，请先安装 C/C++ 工具链与 Python 3：</p>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get update && sudo apt-get install -y build-essential python3

# Fedora / RHEL / Rocky
sudo dnf install -y python3 make gcc-c++

# Arch Linux
sudo pacman -S --needed base-devel python</code></pre>

<h2 id="android-termux">4. 📱 Android / Termux 完整安装避坑指南</h2>
<p>pi-web-ui 支持在 Android 手机/平板的 <a href="https://termux.dev" target="_blank" rel="noreferrer">Termux</a> 中直接运行（配合手机端防误触边缘横滑抽屉手势体验极佳）：</p>
<pre><code class="language-bash"># 第一步：安装编译工具链（Termux 中 clang 提供 gcc/g++）
pkg update
pkg install nodejs python make clang git

# 第二步：注入 GYP 空变量（修复 node-pty 1.1.0 在 Android 下的未定义变量报错）
mkdir -p ~/.gyp
cat << 'EOF' > ~/.gyp/include.gypi
{
  'variables': {
    'android_ndk_path': ''
  }
}
EOF

# 第三步：开启 C++20 标志执行全局安装（兼容 Termux 默认的 Node.js v24+）
CXXFLAGS="-std=c++20" npm i -g pi-web-ui@latest</code></pre>

<h2 id="pi-extension-and-desktop">5. pi CLI <code>/webui</code> 扩展与 Electron 桌面版</h2>
<pre><code class="language-bash"># 作为 pi CLI 扩展安装，之后在 pi 终端输入 /webui 即可随时拉起网页端
pi install npm:pi-web-ui

# 运行或打包 Electron 独立桌面客户端（desktop/）
npm run build
npm --prefix desktop install
npm --prefix desktop start      # 启动桌面窗口（自动分配随机空闲端口）
npm --prefix desktop run dist   # 打包 Windows / macOS / Linux 原生安装包</code></pre>
`,
		contentEn: `
<h2 id="standard-install">1. Standard Install & Setup Wizard</h2>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui
# For npm 12+:
npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="android-termux">2. Linux & Android Termux</h2>
<pre><code class="language-bash"># Termux on Android:
pkg install nodejs python make clang git
mkdir -p ~/.gyp && echo "{'variables':{'android_ndk_path':''}}" > ~/.gyp/include.gypi
CXXFLAGS="-std=c++20" npm i -g pi-web-ui@latest</code></pre>
`,
	},
	{
		id: "cli-and-env",
		group: "getting-started",
		badge: "Chapter 03",
		icon: "⚙️",
		title: "CLI 启动参数与环境变量全表",
		titleEn: "CLI Flags & Environment Variables Reference",
		summary: "所有命令行启动参数与环境变量的完整对照表，涵盖端口、工作区、引擎切换、SDK 跟随与插件/预设源。",
		summaryEn: "Complete reference table for all CLI flags and environment variables.",
		contentZh: `
<h2 id="cli-overview">命令行语法概览</h2>
<p>每个核心配置既可用命令行 <code>--flag</code> 传入，也可用环境变量设置（命令行参数优先）：</p>
<pre><code class="language-bash">pi-web-ui --port 9000 --cwd /path/to/project --token my-secret-pass
pi-web-ui --engine dsh --port 8787</code></pre>

<h2 id="cli-env-interactive-table">启动参数与环境变量完整对照表</h2>
<div data-dynamic-table="cli-flags"></div>

<h2 id="sdk-resolution">全局 pi 引擎自动跟随与在线升级（<code>PI_WEB_SDK</code>）</h2>
<div class="doc-callout doc-callout-tip">
	<strong>🔄 智能引擎解析（#321）</strong>
	<p>默认 <code>PI_WEB_SDK=global</code>：启动时会自动探测机器上已安装的全局 <code>pi</code> CLI 等路径，若版本高于自带副本则自动采用最高版本；顶栏「更新面板」还会对比展示「当前运行中引擎版本 vs 本机已安装版本 vs npm 最新版」，并提供<strong>一键升级/安装全局引擎</strong>按钮。如需锁定自带版本排查问题，可设 <code>PI_WEB_SDK=bundled</code>。</p>
</div>
`,
		contentEn: `
<h2 id="cli-env-interactive-table">CLI Flags & Environment Variables Reference</h2>
<div data-dynamic-table="cli-flags"></div>
`,
	},
	{
		id: "chat-and-sessions",
		group: "workspace",
		badge: "Chapter 04",
		icon: "💬",
		title: "流式对话、划词引用、工作区快照回滚与多会话并发",
		titleEn: "Chat Cockpit, Selection Quote, Snapshot Rollback & Concurrency",
		summary: "详解 Steer 回复中插队与撤回、划词选中文字一键引用提问、按对话轮次一键回滚工作区文件改动、8 会话并发与跨设备过户。",
		summaryEn: "Master mid-turn steering, highlight-to-quote, per-turn workspace file rollback, 8-session concurrency, and cross-device takeover.",
		contentZh: `
<h2 id="streaming-and-steer">1. 流式对话、中途补充（Steer）与撤回</h2>
<ul>
	<li><strong>思考块与工具卡实时状态</strong>：实时展示思考耗时、工具执行进度（<code>执行中 → 已结束 · 等模型 · 耗时</code>）及终端回显。</li>
	<li><strong>中途补充（Steer 插队）</strong>：当 AI 正在流式输出或连续调用工具时，直接发送消息即可进入排队；当前工具回合一结算便立即注入你的补充指令，无需苦等整轮结束或强行中止。</li>
	<li><strong>排队气泡一键撤回（↩）</strong>：已发出的排队气泡旁提供 <code>✕ 移除</code> 与 <code>↩ 撤回</code> 按钮 —— 点击撤回后，文字会安全落回底部输入框（若输入框非空则自动换行追加，绝不覆盖你正在敲的草稿）。</li>
	<li><strong>编辑重问（Fork 历史分支）</strong>：点击任意历史用户提问的「编辑重问」，可从该轮次分叉出一条新对话分支重新提问，原对话历史不受任何影响。</li>
</ul>

<h2 id="selection-quote">2. 💬 划词选中即引用（Selection Quote）</h2>
<p>在阅读 AI 的长篇回复或打开文件预览窗口看代码时，想针对其中某几行追问？</p>
<div class="doc-callout doc-callout-tip">
	<strong>✨ 指哪打哪的划词引用（<code>SelectionQuoteButton</code> + <code>TextQuoteCard</code>）</strong>
	<p>只需用鼠标（或触屏长按）在<strong>助手消息正文</strong>或<strong>文件预览器</strong>中划词选中任意一段文字或代码，选区旁会立即浮现一个 <strong>「💬 引用」</strong> 按钮。点击后，该片段会作为一张带来源标识的结构化引用卡片挂入输入框上方（支持同时挂多段引用），让 AI 精准聚焦你指出的细节！</p>
</div>

<h2 id="workspace-rollback">3. ⏪ 工作区文件快照与按轮次一键回滚（Rollback）</h2>
<p>担心 AI 连续改坏多个文件难以手动恢复？pi-web-ui 内置了<strong>轮次级工作区文件快照引擎（<code>server/workspace-snapshot.ts</code> + <code>RollbackDialog</code>）</strong>：</p>
<ul>
	<li>每当智能体在一轮对话中修改、新建或删除工作区文件时，服务端都会自动建立该轮次的增量文件快照；</li>
	<li>如果你对某轮之后的代码改动不满意，只需点击该条历史消息操作栏上的 <strong>「⏪ 回滚」</strong> 按钮；</li>
	<li>弹窗会清晰列出本次回滚将还原/恢复的所有文件路径清单，确认后即可<strong>一键将工作区文件精准回滚到该轮对话之前的状态</strong>！</li>
</ul>

<h2 id="concurrent-ephemeral-takeover">4. 每项目 8 会话并发、临时对话与跨设备过户（Takeover）</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>⚡ 每项目 8 会话后台并发</h4>
		<p>每个对话拥有独立的服务端 Agent Runtime（单项目上限 8 个，后台子代理不计入）。切走对话或切换项目后，原对话仍在后台继续流式编码；左栏顶部「正在运行的对话」实时显示流式进度。</p>
	</div>
	<div class="doc-card">
		<h4>👻 临时对话（内存无痕 + 一键转正）</h4>
		<p>新建对话时可勾选「临时对话（Ephemeral）」：会话全程仅存于服务端内存，不落盘；聊到一半若想长期保留，点击顶栏<strong>「转为正式对话」</strong>即可原地持久化落盘（会话 ID 不变）。</p>
	</div>
	<div class="doc-card">
		<h4>📲 跨设备事务性过户（Takeover）</h4>
		<p>电脑上发起长任务后出门用手机打开页面（或断连后 30 分钟宽限期内重连），在左栏「另一处运行」点击<strong>「接管（Takeover）」</strong>，即可将运行中的 Runtime 本体（含未决问卷与浏览器桥）事务性迁移到当前设备，若迁移异常自动回滚，绝不产生幽灵会话。</p>
	</div>
	<div class="doc-card">
		<h4>🗜️ 可视化压缩与软上限（Soft Cap）</h4>
		<p>触发压缩时顶部横幅实时读秒并标明原因（手动/阈值/溢出），完成后生成可展开的摘要卡片；设置中可配置软上限 Token 数 <code>C</code>（动态注入 <code>reserveTokens = W - C</code>）提前触发优雅压缩。</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="streaming-and-steer">1. Streaming, Mid-Turn Steer & Queue Recall</h2>
<p>Send follow-up instructions while the agent is still executing tools. Recall queued messages (↩) back into your composer draft anytime, or fork any historical turn to explore alternative solutions.</p>

<h2 id="selection-quote">2. 💬 Highlight-to-Quote (Selection Quote)</h2>
<p>Select any text or code snippet inside an assistant message or file preview to pop up a floating <strong>Quote</strong> button that attaches the exact excerpt as a structured quote card in your composer.</p>

<h2 id="workspace-rollback">3. ⏪ Per-Turn Workspace Snapshot & Rollback</h2>
<p>Before and after file modifications in each turn, pi-web-ui records lightweight workspace snapshots. Click <strong>Rollback</strong> on any historical turn to preview affected files and restore your workspace to that exact point in time.</p>
`,
	},
	{
		id: "remote-ssh-projects",
		group: "workspace",
		badge: "Chapter 05 · 核心亮点",
		icon: "🌐",
		title: "打开 SSH 远程项目与全栈远程工作区",
		titleEn: "Remote SSH Projects & Full-Stack Remote Workspace",
		summary: "无需在远端服务器部署 Web 服务！直接从本机界面打开 ssh://user@host:port/path 远程项目，文件树、读写编辑、终端与 Git 全部无缝远端化。",
		summaryEn: "Open ssh://user@host:port/path remote projects directly from your local pi-web-ui. File tree, read/write/edit/bash tools, PTY terminals, and Git SCM all run seamlessly over SSH.",
		contentZh: `
<h2 id="why-remote-ssh">为什么需要「直接打开 SSH 远程项目」？</h2>
<p>许多开发者的代码跑在云端 Linux 开发机、GPU 训练服务器、Docker 容器宿主机或内网测试机上。过去你需要在每台远端服务器上安装 Node.js ≥ 22.19、部署 <code>pi-web-ui</code> 并配置端口转发或 Nginx 反代。</p>
<div class="doc-callout doc-callout-tip">
	<strong>🌐 原生 SSH 远程工作区（<code>server/remote-ssh-service.ts</code>）</strong>
	<p>现在，你只需要在<strong>本机（笔记本或台式机）</strong>运行一个 <code>pi-web-ui</code>，即可通过 <code>ssh://user@host:port/remote/path</code> 直接打开任何只有标准 SSH 服务的远程服务器目录！智能体脑子与会话历史留在本机，而<strong>文件树浏览/上传/下载、文件预览与编辑、AI 的 <code>read / write / edit / edit_soft / bash</code> 工具、内置多标签 PTY 终端、Git 源代码管理面板</strong>全部通过复用的 SSH/SFTP 加密通道在远端服务器上原生执行！</p>
</div>

<h2 id="how-to-open-ssh-project">如何连接并打开远程 SSH 项目？</h2>
<ol>
	<li><strong>打开项目切换器</strong>：点击右下角状态底栏的 <code>📁 &lt;当前路径&gt;</code>，或点击左栏顶部的「切换项目」按钮；</li>
	<li><strong>切换到远程页签</strong>：在弹出的目录浏览器（<code>DirectoryBrowser</code>）顶部切换到 <strong>「🌐 远程 SSH（Remote SSH）」</strong> 页签（也可以直接在输入框使用斜杠命令 <code>/cwd ssh://user@host:22/home/user/app</code>）；</li>
	<li><strong>填写主机与选择鉴权方式</strong>：
		<ul>
			<li><strong>主机地址（Host）与端口（Port，默认 22）</strong>、<strong>用户名（Username）</strong>；</li>
			<li><strong>三种鉴权方式任选</strong>：
				<ul>
					<li>🔑 <strong>私钥文件（Private Key）</strong>：弹窗会自动探测并列出本机 <code>~/.ssh/id_ed25519</code>、<code>id_rsa</code>、<code>id_ecdsa</code> 等私钥供一键点选，并支持填写私钥保护口令（Passphrase）；</li>
					<li>🔒 <strong>密码（Password）</strong>：直接输入 SSH 登录密码；</li>
					<li>🛡️ <strong>SSH Agent</strong>：直接复用本机正在运行的 <code>ssh-agent</code>（<code>$SSH_AUTH_SOCK</code>）。</li>
				</ul>
			</li>
		</ul>
	</li>
	<li><strong>浏览远端目录并打开项目</strong>：连接成功后，弹窗直接渲染远端服务器的实时目录树（支持输入远端路径跳转、在远端<strong>新建文件夹</strong>），选中目标目录后点击 <strong>「打开此远程项目」</strong> 即可！</li>
</ol>

<h2 id="remote-probe-and-bootstrap">🩺 远程环境自动探针与一键安装依赖（Remote Probe）</h2>
<p>连上远程 SSH 主机的瞬间，<code>pi-web-ui</code> 会自动执行一次非侵入式环境探测（Probe），在界面上清晰展示：</p>
<ul>
	<li>远端操作系统发行版（如 Ubuntu / Debian / CentOS / Alpine / macOS）、内核版本与 CPU 架构；</li>
	<li>远端可用的包管理器（<code>apt</code> / <code>dnf</code> / <code>yum</code> / <code>apk</code> / <code>pacman</code> / <code>brew</code>）；</li>
	<li>核心开发工具就绪状态（<code>git</code>、<code>node</code>、<code>bash</code>、<code>python3</code>、<code>rg (ripgrep)</code>）；</li>
	<li><strong>一键补齐远端基础工具</strong>：如果发现远端是一台刚初始化的裸机、缺少 <code>git</code> 或 <code>ripgrep</code>，界面上会直接出现 <strong>「⚡ 一键在远端安装缺失工具」</strong> 按钮，自动调用对应包管理器完成安装！</li>
</ul>

<h2 id="ssh-security-and-pooling">🔐 AES-256-GCM 凭据加密与连接池高可用架构</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🔒 AES-256-GCM 凭据加密持久化</h4>
		<p>你保存的 SSH 主机连接配置（Profiles）在服务端通过本机专属随机密钥（<code>0600</code> 权限）进行 <strong>AES-256-GCM 加密存储</strong>。密码与私钥口令<strong>永远不会以明文落盘，也永远不会下发回浏览器前端</strong>。下次打开时只需点击已保存的主机卡片即可一键秒连。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ 单飞握手连接池与本机历史归档</h4>
		<p>服务端按 <code>user@host:port</code> 维护复用连接池（并发请求共享单次握手，15 秒 Keepalive 心跳，断线自动重连，空闲 30 分钟自动释放）。同时，远程项目的对话历史 JSONL 保存在本机 <code>~/.pi-web/remote-workspaces/&lt;slug&gt;/</code> 下，即使远端服务器销毁重建，你的聊天与推理历史依然完好无损！</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="why-remote-ssh">Native Remote SSH Workspaces (<code>ssh://user@host:port/path</code>)</h2>
<p>Open any folder on a remote SSH server directly from your local browser without installing pi-web-ui on the remote machine. Click the bottom-right <code>📁 &lt;path&gt;</code> status bar item → switch to the <strong>🌐 Remote SSH</strong> tab → authenticate via <strong>Private Key</strong> (auto-discovers <code>~/.ssh/id_*</code>), <strong>Password</strong>, or <strong>SSH Agent</strong>.</p>
<ul>
	<li><strong>AES-256-GCM Encrypted Profiles</strong>: Saved credentials are encrypted on disk and never sent back to the browser.</li>
	<li><strong>Remote Environment Probe & One-Click Bootstrap</strong>: Automatically checks remote OS, package manager, and tools (<code>git</code>, <code>node</code>, <code>bash</code>, <code>python3</code>, <code>rg</code>) with one-click remote installation for missing tools.</li>
	<li><strong>Full-Stack Remote Execution</strong>: File tree (SFTP browse/upload/download), file preview & inline editing, agent tools (<code>read/write/edit/edit_soft/bash</code>), multi-tab PTY terminals, and Git SCM all execute directly on the remote host over a pooled SSH connection.</li>
</ul>
`,
	},
	{
		id: "file-tree-and-transfer",
		group: "workspace",
		badge: "Chapter 06 · 核心亮点",
		icon: "📁",
		title: "右栏文件列表全攻略：拖拽上传文件/文件夹、打包下载与压缩解压",
		titleEn: "File Tree Guide: Drag-Drop File/Folder Upload, Archive & Multi-Root",
		summary: "详解右栏文件列表的 20+ 项右键与拖拽能力：上传文件与整个文件夹、打包下载、在线压缩/解压、复制剪切粘贴、跨盘符 @root 浏览与多根工作区。",
		summaryEn: "Master 20+ file tree actions: drag-and-drop file/folder uploads, TAR stream folder transfers, ZIP/TAR compress & extract, copy/cut/paste, @root drive browsing, and multi-root workspaces.",
		contentZh: `
<h2 id="upload-files-and-folders">1. 📤 在文件列表中上传文件与整个文件夹</h2>
<p>pi-web-ui 的右侧文件树面板（支持本机工作区与 🌐 远程 SSH 工作区）内置了完整的文件传输中心（<code>RightPanel</code> + <code>FileTransferDialog</code>），提供三种丝滑的上传方式：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🖱️ 方式一：类 VSCode 直接拖拽上传</h4>
		<p>从操作系统文件管理器（资源管理器 / Finder）直接把一个或多个文件拖进右侧文件列表：<br/>
		• <strong>拖到某个文件夹行上</strong>：该文件夹行自动高亮，松手即直接上传进该子文件夹；<br/>
		• <strong>拖到普通文件行或列表空白处</strong>：松手即上传到当前正在浏览的目录。<br/>
		<em>（注：若拖到中间主聊天区域，则是作为当前对话的附件卡片引用）。</em></p>
	</div>
	<div class="doc-card">
		<h4>📂 方式二：右键上传单/多文件或「整个文件夹」</h4>
		<p>在右侧文件列表任意位置右键，菜单提供两个专用上传入口：<br/>
		• <strong>「上传文件到当前目录 / 文件夹」</strong>：可多选任意格式文件直接上传；<br/>
		• <strong>「上传文件夹（Upload Folder）」</strong>：选中本地整个目录后，前端自动将目录树打包为流式 TAR 管道上传并在目标位置原样还原完整子目录层级，弹窗实时展示<strong>已处理文件数、字节进度条与 MB/s 传输速率</strong>（支持中途取消）！</p>
	</div>
</div>

<h2 id="compress-extract-download">2. 🗜️ 在线压缩、在线解压与文件夹打包下载</h2>
<p>在远程服务器或容器环境中工作时，经常需要批量拉取产出物或解压数据集。右键文件列表中的任意文件或文件夹，即可直接调用内置归档引擎（<code>server/file-archives.ts</code>）：</p>
<ul>
	<li><strong>📦 打包下载整个文件夹（Compress & Download）</strong>：右键任意文件夹 → 点击<strong>「打包下载」</strong>，可选择归档格式（<code>.zip</code> / <code>.tar.gz</code> / <code>.tgz</code> / <code>.tar</code>），服务端流式打包后自动触发浏览器下载整个文件夹！</li>
	<li><strong>🗜️ 在线压缩（Compress）</strong>：右键文件或文件夹 → 点击<strong>「压缩…」</strong>，在工作区内直接生成指定名称与格式的压缩包；</li>
	<li><strong>📂 在线解压（Extract）</strong>：右键任意压缩包（支持 <code>.zip</code>、<code>.tar.gz</code>、<code>.tgz</code>、<code>.tar</code>、<code>.tar.bz2</code>、<code>.tar.xz</code>、<code>.7z</code> 等）→ 点击<strong>「解压…」</strong>，可自定义解压目标目录并实时查看解压进度；</li>
	<li><strong>⬇️ 单文件直接下载</strong>：右键任意文件 → 点击「下载」，直接原样下载到本地（自动绕过浏览器对脚本/配置文件的误报拦截）。</li>
</ul>

<h2 id="file-tree-context-menu">3. ✂️ 完备的文件管理操作（右键菜单 20+ 动作全集）</h2>
<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr><th>操作分类</th><th>支持动作</th><th>使用说明与快捷技巧</th></tr>
		</thead>
		<tbody>
			<tr><td><strong>新建与改名</strong></td><td>新建文件、新建文件夹、重命名</td><td>在顶部工具栏或右键菜单触发，列表内直接弹出内联输入框即时创建/改名</td></tr>
			<tr><td><strong>剪贴板与副本</strong></td><td>复制、剪切、粘贴、创建副本 (Duplicate)</td><td>支持跨子目录复制或移动文件/文件夹；点击「创建副本」可在同目录一键生成备份文件</td></tr>
			<tr><td><strong>送入 AI 对话</strong></td><td>附加到对话 (文件 / 整个文件夹)</td><td>点击行尾 <code>+</code> 号或右键「附加到对话」，可将单文件或<strong>整个文件夹引用</strong>一键挂入输入框</td></tr>
			<tr><td><strong>路径复制</strong></td><td>复制名称、复制绝对路径、复制相对路径</td><td>一键复制不同口径的路径，方便粘贴到终端或配置文件中</td></tr>
			<tr><td><strong>系统联动</strong></td><td>在文件管理器中显示、用默认程序打开</td><td>本机工作区下可一键唤起 Windows Explorer / macOS Finder 高亮该文件，或用系统关联软件打开</td></tr>
			<tr><td><strong>项目与多根</strong></td><td>以此目录打开项目、添加为工作区根</td><td>右键任意子目录可直接将其切换为主项目，或挂载为当前项目的<strong>额外工作区根（Multi-Root）</strong></td></tr>
		</tbody>
	</table>
</div>

<h2 id="machine-root-and-multi-root">4. 🖥️ 跨盘符机器根浏览（<code>@root</code>）与多根工作区（Multi-Root）</h2>
<ul>
	<li><strong>向上翻到机器根（<code>@root</code>）</strong>：点击文件列表顶部的 <code>..</code>（返回上级）按钮，可以一路向上突破当前项目根目录 —— 在 Windows 上到达顶层会列出本机所有磁盘盘符（<code>C:\</code>、<code>D:\</code>、<code>E:\</code> 等），在 macOS/Linux 上可浏览 <code>/</code> 根文件系统，并在任意目录右键选择「以此目录作为项目打开」！</li>
	<li><strong>多根工作区（最多 8 个额外根）</strong>：一个项目需要同时查阅前端仓、后端仓和公共协议库？在文件树顶部根切换器或右键目录选择「添加为工作区根」，最多可挂载 <strong>8 个额外根目录</strong>（按项目持久化保存，插件与 AI 只读查阅免额外弹窗授权）。</li>
</ul>
`,
		contentEn: `
<h2 id="upload-files-and-folders">1. 📤 Upload Files & Entire Folders in the File Tree</h2>
<ul>
	<li><strong>VSCode-Style Drag & Drop Upload</strong>: Drag files from your OS file manager directly into the right-side File Tree. Dropping onto a folder row uploads into that folder; dropping onto a file row or empty space uploads into the current directory.</li>
	<li><strong>Right-Click File & Folder Upload</strong>: Right-click any folder or empty area in the File Tree to <strong>Upload Files</strong> or <strong>Upload Folder</strong> (streams the entire directory tree via a live TAR pipeline with file count, byte progress bar, and MB/s speed indicator).</li>
</ul>

<h2 id="compress-extract-download">2. 🗜️ Compress, Extract & Download Folders as Archives</h2>
<p>Right-click any file or folder in the File Tree (works on both local and Remote SSH workspaces) to <strong>Compress</strong> (<code>.zip</code>, <code>.tar.gz</code>, <code>.tar</code>), <strong>Compress & Download Folder</strong> directly to your browser, or <strong>Extract</strong> archives in place.</p>

<h2 id="machine-root-and-multi-root">3. 🖥️ Machine Root (<code>@root</code>) & Multi-Root Workspaces</h2>
<p>Navigate up via <code>..</code> all the way to the machine root (lists all Windows drive letters <code>C:\</code>, <code>D:\</code>, <code>E:\</code> or POSIX <code>/</code>), copy/cut/paste/duplicate/rename/delete files, and mount up to <strong>8 additional workspace roots</strong> per project.</p>
`,
	},
	{
		id: "attachments-and-vision",
		group: "workspace",
		badge: "Chapter 07",
		icon: "📎",
		title: "零污染附件引用、Office/PDF 在线预览编辑与视觉桥",
		titleEn: "Zero-Bloat Attachments, Office/PDF Preview, Inline Edit & Vision Bridge",
		summary: "详解 reference/lines 路径引用、精确行号选择引用、.docx/.xlsx/.pptx/.pdf 原生预览、文本在线编辑保存、GBK 解码与 Vision Bridge 视觉转写。",
		summaryEn: "Learn how path/line references prevent context bloat, preview .docx/.xlsx/.pptx/.pdf files, edit text files inline, and use Vision Bridge for image Q&A.",
		contentZh: `
<h2 id="attachment-modes">1. 为什么 pi-web-ui 的文件附件不会撑爆上下文？</h2>
<p>许多聊天工具在上传或附加文件时，会把几千行文件内容直接拼接到用户消息里，不仅一次性烧光几万 Token，还会拖慢后续每一轮对话。pi-web-ui 采用<strong>按需引用机制</strong>：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📌 <code>reference</code>（轻量路径引用）</h4>
		<p>从文件树点击 <code>+</code> 附加文件/文件夹，或拖拽上传非图片文件时，仅向模型注入一条轻量级路径引用标签（显示为可折叠附件卡 + <code>ref</code> 徽章）。模型只在真正需要时通过 <code>read</code> 工具分页按需读取。</p>
	</div>
	<div class="doc-card">
		<h4>📏 <code>lines</code>（代码行号区间精确引用）</h4>
		<p>点击文件树中的文件打开预览弹窗 → 选中你需要讨论的第 N 行到第 M 行代码 → 点击<strong>「引用选中行」</strong>，即生成带精确起止行号的 <code>lines</code> 附件卡，引导 AI 直接定位目标行！</p>
	</div>
</div>

<h2 id="rich-file-preview-and-edit">2. 📄 全能文件预览器（支持 Office / PDF / 媒体流 / GBK）与在线编辑</h2>
<p>点击文件树或对话中的任意文件即可打开内置预览弹窗，支持远超普通代码查看器的丰富格式：</p>
<ul>
	<li><strong>📝 文本与源码在线编辑保存</strong>：预览代码、配置文件或 Markdown 时，不仅支持语法高亮与 Markdown 渲染切换，还可直接点击弹窗顶部的<strong>「编辑（Edit）」</strong>按钮在线修改内容并一键保存回磁盘（或远程 SSH 服务器）！</li>
	<li><strong>📊 Office 文档与 PDF 原生解析预览（<code>server/office-parse.ts</code>）</strong>：内置支持直接预览 <strong>Word（<code>.docx</code>）、Excel 表格（<code>.xlsx</code> / <code>.csv</code>）、PowerPoint 演示文稿（<code>.pptx</code>）与 PDF 文档</strong>，同时让 AI 的 <code>read</code> 工具也能直接提取其中的结构化文本内容！</li>
	<li><strong>🔤 UTF-8 / GBK / Latin1 智能嗅探防乱码</strong>：自动识别国内历史项目常见的 GBK / GB2312 编码中文源码、日志与导出文档，彻底告别乱码（Mojibake）。</li>
	<li><strong>🎬 音视频 HTTP Range 流与 HTML 沙盒预览</strong>：大体积视频/音频支持拖动进度条流式播放；HTML 文件支持一键在隔离沙盒或独立新窗口中渲染预览。</li>
</ul>

<h2 id="vision-bridge">3. 🌉 视觉桥（Vision Bridge）：让纯文本代码模型也能「看懂截图」</h2>
<p>支持在输入框直接 <code>Ctrl/Cmd + V</code> 粘贴剪贴板截图，或拖拽上传图片。如果你当前使用的主力编码模型（如部分纯文本 DeepSeek / 开源 Coder 模型）<strong>不支持原生多模态图片输入</strong>：</p>
<div class="doc-callout doc-callout-tip">
	<strong>🖼️ 自动视觉转写桥（Vision Bridge）</strong>
	<p>只需在「设置 → 模型」中指定一个辅助视觉模型（Vision Model）。当你向纯文本主模型发送图片时，服务端会自动先调用视觉模型将截图中的 UI 报错、布局细节或架构图转写为高密度文本描述，再无缝注入主对话上下文，并在附件卡片上标注 <code>bridged（已转写）</code> 说明。</p>
</div>

<h2 id="present-files-card">4. 🎨 <code>present_files</code>：AI 产出物可视化交付卡片</h2>
<p>当智能体生成了图表、图片、音频、视频、构建报告或关键文档时，会调用 <code>present_files</code> 工具在聊天流中直接渲染出<strong>交互式作品预览卡片</strong>（图片/音视频内联播放，支持一键全屏聚焦预览、打开所在目录、复制路径或下载）。</p>
`,
		contentEn: `
<h2 id="attachment-modes">1. Zero-Bloat File & Line-Range References</h2>
<p>Attach files or folders as lightweight <code>reference</code> tags or select specific code lines in the file preview dialog to attach precise <code>lines</code> ranges without dumping raw file contents into your prompt.</p>

<h2 id="rich-file-preview-and-edit">2. 📄 Inline File Editor & Office/PDF/Media Preview</h2>
<p>Preview and <strong>inline-edit</strong> source code and config files (with automatic UTF-8 → GBK fallback), inspect <strong>.docx, .xlsx, .pptx, and .pdf</strong> documents natively, stream audio/video via HTTP Range, and render HTML in a sandboxed preview.</p>

<h2 id="vision-bridge">3. 🌉 Vision Bridge for Text-Only Models</h2>
<p>Paste clipboard screenshots with <code>Ctrl+V</code>. When using a text-only coding model, Vision Bridge automatically transcribes images using a secondary vision model and marks the attachment card as <code>bridged</code>.</p>
`,
	},
	{
		id: "terminal-and-bash",
		group: "workspace",
		badge: "Chapter 08",
		icon: "💻",
		title: "内置多标签真 PTY 终端与 AI Bash 接管",
		titleEn: "Multi-Tab PTY Terminal & AI Bash Takeover",
		summary: "本机 node-pty 与远程 SSH 伪终端无缝切换，详解 AI Bash 可见接管、persist=true 持久 ai-bash 会话与 3 秒静默活力探测。",
		summaryEn: "Local node-pty and Remote SSH PTY terminals, AI Bash visible takeover, persistent ai-bash shell, and 3-second silence liveness probing.",
		contentZh: `
<h2 id="multi-tab-pty">1. 每会话独立的多标签真 PTY 终端</h2>
<p>点击右侧栏终端图标即可展开内置终端面板（<code>TerminalManager</code> + <code>@xterm/xterm</code>）：</p>
<ul>
	<li><strong>本机与远程 SSH 自动适配</strong>：在本机项目中底层调用 <code>node-pty</code> 拉起原生 Shell；在 <code>ssh://</code> 远程项目中，自动通过已鉴权的 SSH 连接在远端服务器的目标目录开启远程伪终端（Remote PTY）！</li>
	<li><strong>多标签与个性化</strong>：支持同时开启多个终端标签页、自定义标签名、字号缩放、终端内文本搜索与复制粘贴；终端 16 色调色板自动跟随当前界面主题实时变换。</li>
	<li><strong>路径与链接一键直达</strong>：终端输出中的网址与工作区文件路径（含编译报错的 <code>file.ts:line:col</code>）支持直接点击打开预览。</li>
</ul>

<h2 id="ai-bash-takeover">2. ⚡ AI Bash 可见终端接管（<code>terminalBash</code>）</h2>
<p>在「设置 → 工具」中开启 <strong>「默认 bash 走终端（Terminal Bash Override）」</strong> 后，智能体调用的 <code>bash</code> 工具将不再是看不见的后台黑盒进程，而是直接呈现在右侧终端面板中：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🔹 一次性终端模式（<code>persist = false</code>）</h4>
		<p>常规构建、单测与脚本命令在独立的一次性终端流中实时打印彩色输出，执行结束后自动收集退出码与输出返回给 AI。</p>
	</div>
	<div class="doc-card">
		<h4>🔸 持久终端模式（<code>persist = true</code> · <code>ai-bash</code>）</h4>
		<p>当 AI 需要跨多步命令保留 <code>cd</code> 目录位置、保持 Python <code>venv / conda</code> 激活态、维持 SSH 会话，或遇到交互式命令（如 <code>y/n</code> 确认提示、REPL）时，会设置 <code>persist=true</code> 复用名为 <code>ai-bash</code> 的持久终端标签页。你还可以随时在终端里直接敲键盘帮 AI 输入确认！</p>
	</div>
</div>

<h2 id="liveness-detection">3. 🩺 3 秒无输出活力探测器（Liveness Probe）</h2>
<p>当一条命令运行超过 3 秒没有新字符输出时，底栏与工具卡上的活力指示器会自动巡检操作系统子进程树，帮你立刻判断当前状况：</p>
<ul>
	<li>🟢 <strong>正常静默计算中</strong>：子进程正在高速消耗 CPU 或进行磁盘/网络 I/O（如 <code>vite build</code>、<code>cargo test</code>）；</li>
	<li>🟡 <strong>等待交互输入</strong>：检测到进程阻塞在标准输入（stdin）读取，提醒你点开终端输入 <code>y/n</code> 或回车；</li>
	<li>🔴 <strong>疑似挂起告警</strong>：检测到无活动子进程或疑似死锁，方便你及时中止并调整指令。</li>
</ul>
`,
		contentEn: `
<h2 id="multi-tab-pty">1. Multi-Tab Native & Remote SSH PTY Terminals</h2>
<p>Each conversation manages its own multi-tab terminal pool — spawning local <code>node-pty</code> shells for local workspaces or remote SSH PTY channels for <code>ssh://</code> workspaces.</p>

<h2 id="ai-bash-takeover">2. ⚡ AI Bash Terminal Takeover & 3s Liveness Probe</h2>
<p>Enable <strong>Default bash in terminal</strong> to route agent <code>bash</code> calls into visible <code>xterm.js</code> terminals. With <code>persist=true</code>, commands run inside a persistent <code>ai-bash</code> shell retaining <code>cd</code>, virtualenvs, and interactive prompts.</p>
`,
	},
	{
		id: "git-scm-and-ai-commit",
		group: "workspace",
		badge: "Chapter 09",
		icon: "🌿",
		title: "内置 Git 源代码管理与 AI 自动生成提交说明",
		titleEn: "Built-in Git SCM & One-Click AI Commit Message",
		summary: "无需切出浏览器即可完成 Stage/Unstage/Discard、高亮 Diff 检视、Stash 贮藏、分支切换，以及一键让 AI 根据 Diff 撰写提交说明。",
		summaryEn: "Stage, unstage, discard, inspect syntax-highlighted diffs, manage stashes/branches, and generate commit messages with AI in one click.",
		contentZh: `
<h2 id="scm-panel-overview">1. 完备的内置 Git 工作台（支持本机与远程 SSH）</h2>
<p>点击右侧栏的 Git 分支图标即可打开源代码管理面板（<code>SCMPanel</code>）：</p>
<ul>
	<li><strong>三区清晰分组</strong>：自动将变更划分为 <strong>Staged Changes（已暂存）</strong>、<strong>Changes（工作区修改）</strong> 与 <strong>Untracked（未跟踪新文件）</strong>；</li>
	<li><strong>一键暂存与回退</strong>：支持单文件或整组一键 <code>+</code>（Stage 暂存）、<code>-</code>（Unstage 取消暂存）以及 <code>↺</code>（Discard 丢弃工作区修改 / 删除未跟踪文件）；</li>
	<li><strong>语法高亮 Diff 检视器</strong>：点击列表中的任意变更文件，即可在弹窗中查看带行号与语法高亮的 Unified / Split Diff 对比视图；</li>
	<li><strong>远端同步与贮藏（Stash）</strong>：顶部工具栏直接提供 <strong>Pull（拉取）</strong>、<strong>Push（推送）</strong>、<strong>Fetch</strong>、<strong>分支切换</strong>与 <strong>Stash（贮藏 / 弹出贮藏）</strong> 操作。</li>
</ul>

<h2 id="ai-commit-message">2. ✨ AI 一键生成 Git Commit Message（<code>server/scm-commitmsg.ts</code>）</h2>
<div class="doc-callout doc-callout-tip">
	<strong>🪄 告别手写提交说明烦恼</strong>
	<p>在 Git 面板顶部的提交信息输入框旁，点击 <strong>「✨ AI 生成」</strong> 按钮：服务端会自动提取当前已暂存区（若暂存区为空则提取工作区修改）的 Git Diff 摘要，调用当前模型自动提炼出符合 Conventional Commits 规范（如 <code>feat(scope): ...</code> / <code>fix(scope): ...</code>）的精准提交说明并填入输入框，审阅无误后点 Commit 即可完成提交！</p>
</div>
`,
		contentEn: `
<h2 id="scm-panel-overview">1. Built-in Git Source Control Panel</h2>
<p>Manage Staged, Modified, and Untracked files, inspect syntax-highlighted diffs, switch branches, stash changes, and Pull/Push on both local and Remote SSH projects.</p>

<h2 id="ai-commit-message">2. ✨ One-Click AI Commit Message Generator</h2>
<p>Click the <strong>✨ AI Generate</strong> button next to the commit message box to automatically analyze your staged/unstaged diffs and draft a clean Conventional Commit message.</p>
`,
	},
	{
		id: "commands-and-shortcuts",
		group: "workspace",
		badge: "Chapter 10",
		icon: "⌨️",
		title: "斜杠命令与键盘/鼠键交互速查全表",
		titleEn: "Slash Commands & Keyboard/Mouse Shortcuts",
		summary: "内置斜杠命令与桌面/触屏快捷键、划词引用、拖拽上传手势全集。",
		summaryEn: "Complete reference for slash commands, keyboard shortcuts, selection quotes, and drag-and-drop gestures.",
		contentZh: `
<h2 id="slash-commands-ref">内置斜杠命令（Slash Commands）</h2>
<p>在底部输入框输入 <code>/</code> 即可弹出命令选择器，支持快速过滤<strong>内置命令、扩展命令、提示词模板与技能（Skills）</strong>：</p>
<div data-dynamic-table="slash-commands"></div>

<h2 id="keyboard-shortcuts-ref">键盘与鼠键交互快捷方式全表</h2>
<div data-dynamic-table="shortcuts"></div>
`,
		contentEn: `
<h2 id="slash-commands-ref">Built-in Slash Commands</h2>
<div data-dynamic-table="slash-commands"></div>

<h2 id="keyboard-shortcuts-ref">Keyboard & Mouse Shortcuts</h2>
<div data-dynamic-table="shortcuts"></div>
`,
	},
	{
		id: "subagents-and-delegation",
		group: "agent-modes",
		badge: "Chapter 11 · 核心亮点",
		icon: "🤖",
		title: "子代理系统 (Subagents)、六段式任务委派与点对点交接",
		titleEn: "Subagents, 6-Section Task Delegation, Templates & Handoff",
		summary: "全面掌握 pi-web-ui 的多智能体并发协作体系：subagent 生命周期管理、delegate_task 六段式任务书、专家子代理模板库、点对点 handoff 与 claim_files 文件排他锁。",
		summaryEn: "Master multi-agent orchestration: parallel subagent spawning, validated 6-section delegate_task briefs, specialist templates, peer-to-peer handoff, and exclusive claim_files locking.",
		contentZh: `
<h2 id="why-subagents">1. 为什么需要后台并发子代理（Subagents）？</h2>
<p>面对大型工程任务（例如：同时排查 5 个微服务模块的日志、一边阅读第三方库文档一边编写业务代码、或者让独立的审查专家对刚写好的代码进行挑刺），如果全部塞进主对话单线程串行处理，不仅耗时极长，还会让主对话上下文迅速被海量中间搜索结果塞满。</p>
<div class="doc-callout doc-callout-tip">
	<strong>🚀 独立上下文、并行执行的子代理引擎（<code>server/subagents.ts</code>）</strong>
	<p>pi-web-ui 内置了完整的后台子代理编排器：主智能体可以同时派生（Spawn）多个后台子代理并发执行任务。每个子代理拥有<strong>完全独立的上下文窗口与工具流</strong>，执行完毕后仅将精炼结论汇报给主对话（且子代理不占用每项目 8 个主对话的并发名额）！你还可以点击顶栏的 <strong>「🤖 子代理（Subagents）」</strong> 按钮实时查看所有活跃/历史子代理的思考流、工具调用，或直接手动干预。</p>
</div>

<h2 id="subagent-actions">2. <code>subagent</code> 工具的八大核心动作</h2>
<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr><th>动作 (<code>action</code>)</th><th>核心参数</th><th>功能与协作机制说明</th></tr>
		</thead>
		<tbody>
			<tr><td><code>spawn</code></td><td><code>prompt</code>, <code>template?</code>, <code>model?</code>, <code>persist?</code>, <code>cwd?</code></td><td>启动一个新的后台子代理会话并返回 <code>runId</code>（默认轻量内存态；设 <code>persist: true</code> 则作为正式落盘会话保存）</td></tr>
			<tr><td><code>wait_all</code></td><td><code>runIds?</code>, <code>timeoutSeconds?</code></td><td>并发等待一个或全部活跃子代理执行完毕，并一次性汇总取回所有子代理的最终交付结果</td></tr>
			<tr><td><code>get_result</code></td><td><code>runId</code></td><td>非阻塞查询指定子代理当前的运行状态（运行中 / 已完成 / 报错）及已产出的结果</td></tr>
			<tr><td><code>steer</code></td><td><code>runId</code>, <code>message</code></td><td>向正在运行或已暂停的子代理发送后续追问或修正指令（在同一子代理会话内继续推进，无需重新派生）</td></tr>
			<tr><td><code>handoff</code></td><td><code>toRunId</code>, <code>payload</code>, <code>fromRunId?</code></td><td><strong>子代理间点对点直接交接</strong>：将一个子代理的调研成果或上下文数据直接移交给另一个同侪子代理，免除主代理中转开销</td></tr>
			<tr><td><code>stop</code></td><td><code>runId</code></td><td>立即中止正在运行的指定子代理会话</td></tr>
			<tr><td><code>list</code></td><td><code>kind?</code> (<code>all</code> / <code>subagent</code> / <code>persistent</code>)</td><td>列出当前项目下所有运行中或已结束的子代理实例及其状态摘要</td></tr>
			<tr><td><code>templates</code></td><td>—</td><td>查询当前已启用的所有专家子代理模板（名称、职责说明与可用工具范围），供主代理按领域精准选型</td></tr>
		</tbody>
	</table>
</div>

<h2 id="delegate-task-brief">3. 📋 <code>delegate_task</code>：服务端强校验的「六段式专家委派」</h2>
<p>如果主模型只写一句含糊的 <em>"帮我修一下登录 bug"</em> 就把任务甩给子代理，子代理往往因为缺乏上下文和边界约束而乱改一通。为此，pi-web-ui 专门设计了优先于裸 <code>spawn</code> 的结构化委派工具 <strong><code>delegate_task</code>（<code>server/delegate-task.ts</code>）</strong>：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📝 必填六段式任务书（Six-Section Brief）</h4>
		<ol>
			<li><strong><code>agent</code></strong>：指定挂载的专家模板（如 <code>explore</code> / <code>oracle</code> / <code>review</code> / <code>librarian</code>）；</li>
			<li><strong><code>task</code></strong>：单一、原子的明确目标；</li>
			<li><strong><code>expected_outcome</code></strong>：具体的交付物格式与完成验收标准；</li>
			<li><strong><code>required_tools</code></strong>：显式授予该子代理的工具白名单（防止工具权限泛滥）；</li>
			<li><strong><code>must_do</code> / <code>must_not_do</code></strong>：详尽的必做规范与严禁越界的红线禁令；</li>
			<li><strong><code>context</code></strong>：关联文件路径、现有代码模式与架构约束。</li>
		</ol>
	</div>
	<div class="doc-card">
		<h4>🛡️ 服务端反敷衍硬校验 + 强制验货</h4>
		<p>• <strong>笼统任务书直接拒单</strong>：服务端会对六段内容进行实质性校验，任何敷衍空泛的字段都会被服务端直接拦截打回，倒逼主代理把需求想清楚再派活；<br/>
		• <strong>同一会话持续跟进</strong>：委派返回 <code>runId</code> 后，主代理通过 <code>wait_all / steer</code> 在同一个子代理会话上连续互动，并严格核验子代理产出是否符合 <code>must_do / must_not_do</code>。</p>
	</div>
</div>

<h2 id="subagent-templates-config">4. 🎭 专家子代理模板库（Subagent Templates）配置指南</h2>
<p>打开 <strong>「设置 → 子代理模板」</strong>，你可以自由创建、编辑或启停全局共享的专家角色模板（<code>server/subagent-templates.ts</code>）：</p>
<ul>
	<li><strong>内置常用专家角色</strong>：如 <code>explore</code>（高速代码库检索员）、<code>oracle</code>（高阶架构诊断与疑难排障专家）、<code>review</code>（严苛代码质量与安全审计员）、<code>librarian</code>（外部文档与 SDK 查证员）；</li>
	<li><strong>系统提示词组装模式</strong>：可选 <code>append</code>（在宿主基础提示词后追加专家人设）或 <code>replace</code>（完全使用专家独立提示词，极致精简上下文）；</li>
	<li><strong>工具白名单与专属模型绑定</strong>：可为每个模板勾选专属工具子集（例如给 <code>explore</code> 只开 <code>read / grep / find</code> 只读权限），并可绑定独立模型与推理强度（例如让低延迟模型跑检索，让旗舰推理模型跑架构决策；留空则自动跟随主对话当前模型）。</li>
</ul>

<h2 id="claim-files-lock">5. 🔒 <code>claim_files</code>：多代理并发改码的「文件认领排他锁」</h2>
<p>当多个子代理（或多个并发对话）在同一个项目里同时写代码时，怎么防止它们同时修改同一个文件造成互相覆盖？</p>
<div class="doc-callout doc-callout-warn">
	<strong>🛡️ 文件排他认领锁（<code>server/claim-files-tool.ts</code>）</strong>
	<p>智能体在动手修改文件前可调用 <code>claim_files</code> 工具认领目标文件列表的排他修改权（Claim Lock）。一旦某文件被子代理 A 认领，子代理 B 若尝试修改或认领同一文件，会立即收到「该文件已被会话 A 锁定」的明确提示，从而实现多智能体并行开发零踩踏！会话结束或释放后锁自动解除。</p>
</div>
`,
		contentEn: `
<h2 id="why-subagents">1. Parallel Background Subagents (<code>subagent</code> Tool & Topbar Panel)</h2>
<p>Spawn multiple background subagents concurrently to explore, implement, or review different modules in isolated context windows. Monitor live subagent progress from the topbar <strong>Subagents</strong> panel, steer running subagents mid-task, or transfer findings directly between peers via <code>handoff</code>.</p>

<h2 id="delegate-task-brief">2. 📋 Six-Section Validated Delegation (<code>delegate_task</code>)</h2>
<p>Enforces a rigorous 6-section brief (<code>task</code>, <code>expected_outcome</code>, <code>required_tools</code>, <code>must_do</code>, <code>must_not_do</code>, <code>context</code>) targeting a specialist <strong>Subagent Template</strong> (<code>explore</code>, <code>oracle</code>, <code>review</code>, <code>librarian</code>). Vague briefs are rejected server-side.</p>

<h2 id="claim-files-lock">3. 🔒 Exclusive File Locking (<code>claim_files</code>)</h2>
<p>Prevents concurrent sessions or parallel subagents from overwriting the same file simultaneously by acquiring exclusive file claims before editing.</p>
`,
	},
	{
		id: "modes-guide",
		group: "agent-modes",
		badge: "Chapter 12",
		icon: "🎯",
		title: "目标模式 2.0、计划模式与审查者委派模式",
		titleEn: "Goal Mode 2.0, Plan Mode & Reviewer Delegate Mode",
		summary: "详解 pi-web-ui 的三大高阶工程协作模式：双会话证据链审查（Goal Mode 2.0）、底层硬闸门只读规划（Plan Mode）与常驻主审从干（Delegate Mode）。",
		summaryEn: "Deep dive into Goal Mode 2.0's Reviewer-Executor loop, Plan Mode's hard read-only gate, and Reviewer Delegate Mode.",
		contentZh: `
<h2 id="goal-mode-2">1. 🎯 目标模式 2.0：把目标自治变成「执行对话干活 + 当前对话当审查官」</h2>
<p>在处理复杂长周期工程目标时，单会话 AI 极易出现「没跑测试就宣称改好了」或陷入局部死胡同。<strong>目标模式 2.0（<code>server/goal-service.ts</code>）</strong>将目标自治设计为完全透明的双会话闭环：</p>
<div class="doc-callout doc-callout-tip">
	<strong>🏛️ 目标模式 2.0 四大运行机制</strong>
	<ol>
		<li><strong>双会话职责分离</strong>：开启目标后，服务端自动创建一个独立落盘的<strong>「执行对话（Executor）」</strong>专门负责写代码、跑终端命令与修复测试；而你的<strong>当前主对话则作为「审查者（Reviewer）」</strong>专门负责验收与指导；</li>
		<li><strong>客观执行证据自动采集与注入（<code>goal-evidence.ts</code>）</strong>：每当执行对话完成一轮工作，服务端会自动提取工作区真实的 <code>git status</code>、变更文件 Diff 摘要、最近执行的命令与退出码等客观证据，连同执行者报告一起注入当前审查对话；</li>
		<li><strong>服务端全权管控轮次、代次与停滞熔断</strong>：最大轮次（Turns）、代次（Generations）与连续无进展熔断全部由服务端状态机严格控制，严禁模型自行调用 wait/spawn 绕过监督；</li>
		<li><strong>随时可介入或中止</strong>：你可以随时在主对话查看每一轮审查推理，在任意一方点击停止（Stop/Abort）即刻安全终止整个目标循环。</li>
	</ol>
</div>

<h2 id="plan-mode">2. 📐 计划模式（Plan Mode）：底层硬闸门只读规划</h2>
<p>面对陌生大型代码库或高风险重构时，点击目标栏展开行的 <strong>「只规划（Plan Only）」</strong> 即可进入计划模式（<code>server/plan-mode.ts</code>）：</p>
<ul>
	<li><strong>底层硬闸门剔除写工具</strong>：服务端动态剥离 <code>write</code>、<code>edit</code>、<code>edit_soft</code>、<code>patch</code> 等一切修改文件的工具，并硬性拦截在正文中直接倾倒大段源码的行为；</li>
	<li><strong>深度勘察与生成计划看板</strong>：智能体只能使用 <code>read</code>、<code>grep</code>、<code>find</code>、<code>lsp</code> 等只读工具摸清架构脉络，并输出结构化的分步<strong>实施计划看板（Plan Board）</strong>；</li>
	<li><strong>一键开始实施</strong>：当你审阅并认可计划看板后，点击看板上的 <strong>「开始实施」</strong> 按钮，系统即刻解除只读闸门并按计划步骤落地编码。</li>
</ul>

<h2 id="delegate-mode">3. 🛡️ 审查者委派模式（Reviewer Delegate Mode）</h2>
<p>开启顶栏/设置中的<strong>审查者模式（<code>server/delegate-mode.ts</code>）</strong>后，当前主会话被硬闸门锁定为纯只读的架构审查官（拦截一切写操作与子代理派发），你输入的开发指令会自动投递给绑定的<strong>常驻执行对话</strong>去完成编码修改。这样主会话上下文始终保持极高信噪比，专门用于架构决策与代码审查（注：计划模式优先级高于委派模式）。</p>
`,
		contentEn: `
<h2 id="goal-mode-2">1. 🎯 Goal Mode 2.0: Reviewer + Executor Dual-Session Loop</h2>
<p>Spawns a dedicated persistent <strong>Executor</strong> conversation while your current conversation acts as the <strong>Reviewer</strong>. Server-collected objective evidence (Git diffs, modified files, exit codes) is automatically injected into each review turn.</p>

<h2 id="plan-mode">2. 📐 Plan Mode & 🛡️ Reviewer Delegate Mode</h2>
<p><strong>Plan Mode</strong> enforces a hard server-side read-only gate until you click <em>Start Implementation</em> on the generated Plan Board. <strong>Reviewer Delegate Mode</strong> keeps your main session strictly read-only while auto-routing prompts to a persistent worker session.</p>
`,
	},
	{
		id: "tools-and-markers",
		group: "agent-modes",
		badge: "Chapter 13",
		icon: "🧰",
		title: "30+ 内置与扩展工具全表、延迟加载与内联标记",
		titleEn: "30+ Built-in Tools, Cache-Safe Lazy Loading & Inline Markers",
		summary: "涵盖核心读写工具、edit_soft 缩进容错、hashline 行哈希编辑、patch 补丁、lsp 语义查询、codemode 沙盒批处理、工具延迟加载与内联标记。",
		summaryEn: "Complete reference for all 30+ tools including edit_soft, hashline, patch, lsp, codemode, eval, cache-safe lazy loading, and inline markers.",
		contentZh: `
<h2 id="advanced-editing-tools">1. 高精度代码编辑与语义工具亮点</h2>
<p>除了基础的 <code>bash / read / edit / write / grep / find / ls</code> 外，pi-web-ui 还提供了一系列专为复杂工程打磨的进阶工具（可在「设置 → 工具」中按需开关，并支持<strong>逐工具自定义提示词覆盖</strong>）：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🔧 <code>edit_soft</code>（缩进容错替换）</h4>
		<p>当模型因空格/Tab 缩进漂移导致精确 <code>edit</code> 失败时，<code>edit_soft</code> 按每行 trim 后的内容进行智能匹配替换，大幅降低 JS/TS/JSON/Python 编辑报错率。</p>
	</div>
	<div class="doc-card">
		<h4>#️⃣ <code>hashline</code>（行内容短哈希锚定编辑）</h4>
		<p>为每行代码生成短内容哈希标签，编辑时同时校验行号与内容哈希锚点，彻底杜绝长文件多次修改后因行号偏移导致的「改错行」事故。</p>
	</div>
	<div class="doc-card">
		<h4>🩹 <code>patch</code> & 🧠 <code>lsp</code></h4>
		<p><code>patch</code> 支持原子化应用跨多文件的 Unified Diff 补丁（含新建/删除/重命名）；<code>lsp</code> 直接调用语言服务器查询符号定义、引用、悬停类型与编译诊断。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ <code>codemode</code> & 🧪 <code>eval</code></h4>
		<p><code>codemode</code> 允许模型在 QuickJS 沙盒中编写 JS 脚本一次性并发编排多个工具调用（<code>Promise.allSettled</code>）并过滤超大输出；<code>eval</code> 支持在持久沙盒中运行 Python 或 JS/TS 代码片段。</p>
	</div>
</div>

<h2 id="lazy-tool-loading">2. ⚡ 前缀缓存 100% 命中的工具延迟加载（<code>PI_WEB_TOOL_LAZY_LOADING=1</code>）</h2>
<p>系统提示词中的工具目录保持恒定不变（仅含工具名 + ≤80 字符英文摘要），外围工具的完整 JSON Schema 在模型调用 <code>load_tools</code> 时才以只追加（Append-Only）方式挂载。这样既节省数千 Token 上下文预算，又保证 LLM 供应商的 <strong>Prompt Prefix Cache 100% 命中</strong>！</p>

<h2 id="all-tools-catalog">3. 全部 30 项可控内置工具与内联标记速查表</h2>
<div data-dynamic-table="tools-catalog"></div>

<h2 id="inline-markers-syntax">4. ✨ 零延迟内联状态标记（Inline Markers）</h2>
<pre><code class="language-markdown"># 自动重命名当前对话标题
[[conv:rename:接入 SSH 远程工作区与多子代理编排]]

# 实时维护顶栏待办任务面板（零工具调用往返开销）
[[todo:add:实现 SFTP 目录树流式上传]]
[[todo:done:1]]

# 在输入框上方生成一键后续操作建议芯片
[[action:suggest:运行全量回归测试]]
[[action:suggest:检查 Git Diff,prompt=请检查当前 git diff 并生成提交说明]]

# 触发浏览器桌面通知与提示音
[[notify:所有集成测试已通过！]]</code></pre>
`,
		contentEn: `
<h2 id="all-tools-catalog">Complete Catalog of 30+ Configurable Agent Tools</h2>
<div data-dynamic-table="tools-catalog"></div>
`,
	},
	{
		id: "mcp-and-browser",
		group: "agent-modes",
		badge: "Chapter 14",
		icon: "🔌",
		title: "MCP 服务器管理、公开市场检索与浏览器页面控制",
		titleEn: "MCP Server Management, Public Market & Browser Control",
		summary: "可视化接入 Stdio/SSE/HTTP MCP 服务器、一键热重载、在线检索公开 MCP 市场，以及使用 Page Picker 扩展操控真实浏览器页面。",
		summaryEn: "Connect Stdio/SSE/HTTP MCP servers with hot-reload, search the public MCP marketplace, and inspect/control live browser tabs via Page Picker.",
		contentZh: `
<h2 id="mcp-servers-panel">1. 🔌 MCP (Model Context Protocol) 服务器管理与热重载</h2>
<p>在 <strong>「设置 → MCP 服务器（<code>McpServersPanel</code>）」</strong> 中，你可以零代码接入任意标准 MCP Server，将其工具无缝桥接给智能体使用（<code>server/mcp-manager.ts</code> + <code>mcp-bridge.ts</code>）：</p>
<ul>
	<li><strong>支持三种传输协议</strong>：本地子进程 <code>stdio</code>（配置命令、参数与环境变量）、远程 <code>SSE</code> 与 <code>Streamable HTTP</code>；</li>
	<li><strong>一键热重载（Hot Reload）与健康状态</strong>：修改 MCP 配置或启停单个 Server 后，支持在不重启会话的情况下实时热重载并展示已发现的 MCP 工具列表；</li>
	<li><strong>🛍️ 公开 MCP 市场在线检索</strong>：面板内置公开 MCP 市场搜索框，输入关键词（如 GitHub、Postgres、Notion、Brave Search、Filesystem）即可直接浏览并一键导入配置！</li>
	<li><strong>配合 <code>tool_search</code> 按需激活</strong>：当挂载了数十个 MCP 工具时，可开启 <code>tool_search</code>（BM25 检索）与工具延迟加载，避免海量 MCP Schema 挤占上下文。</li>
</ul>

<h2 id="browser-page-picker">2. 🌐 浏览器页面控制与 Page Picker 扩展（<code>browser_page</code>）</h2>
<p>在开发前端网页时，想让 AI 直接看到页面上的渲染结果、控制台报错，甚至直接点击页面上的某个 DOM 元素？</p>
<div class="doc-callout doc-callout-tip">
	<strong>🖱️ 浏览器视觉与 DOM 桥（<code>BrowserControl</code> + <code>plugins/page-picker</code>）</strong>
	<ol>
		<li>安装仓库自带的 Chrome/Edge 浏览器扩展（位于 <code>plugins/page-picker/extension</code>，可在设置页一键下载打包好的扩展）；</li>
		<li>在目标网页点击扩展图标授权连接至当前 <code>pi-web-ui</code> 会话，还可以直接在网页上<strong>点选拾取任意 DOM 元素</strong>发送给对话；</li>
		<li>授权后（扩展侧硬闸门保护，未经用户在浏览器扩展中显式授权的标签页 AI 绝无权限访问），AI 即可通过 <code>browser_page</code> 工具读取该页面的 DOM 结构、提取控制台日志、截图或执行点击/输入交互验证！</li>
	</ol>
</div>
`,
		contentEn: `
<h2 id="mcp-servers-panel">1. 🔌 MCP Server Management, Hot-Reload & Public Marketplace</h2>
<p>Add <code>stdio</code>, <code>SSE</code>, or <code>HTTP</code> Model Context Protocol servers in <strong>Settings → MCP</strong>, search the public MCP marketplace to import servers in one click, and hot-reload MCP tools without restarting your conversation.</p>

<h2 id="browser-page-picker">2. 🌐 Live Browser Page Control (<code>browser_page</code> & Page Picker Extension)</h2>
<p>Pair with the built-in Page Picker browser extension to let the agent inspect authorized browser tabs, pick DOM elements visually, read console logs, capture screenshots, and test UI interactions.</p>
`,
	},
	{
		id: "bg-tasks-and-scheduler",
		group: "agent-modes",
		badge: "Chapter 15",
		icon: "⏰",
		title: "后台长任务管家与定时/延时唤醒调度器",
		titleEn: "Background Tasks Manager & Scheduled Wake-Up Tasks",
		summary: "管理开发服务器等常驻后台进程（BgTasksModal），以及使用 schedule_task 让 AI 创建定时或延时自动唤醒任务。",
		summaryEn: "Monitor and stop background processes/daemons, and schedule delayed or recurring autonomous wake-up tasks.",
		contentZh: `
<h2 id="bg-tasks-manager">1. 🚀 后台长任务管家（<code>BgTasksModal</code> + <code>pm2-manager</code>）</h2>
<p>在开发过程中，你或 AI 经常需要启动长期运行的后台进程（如 <code>npm run dev</code>、数据库隧道、Mock Server 或编译监听器）：</p>
<ul>
	<li>点击顶栏的 <strong>「🚀 后台任务（Background Tasks）」</strong> 按钮，即可集中查看所有活跃的后台服务实例、PID、运行耗时与实时标准输出/错误日志流，并支持一键停止或重启；</li>
	<li>若安装了官方内置的 <strong><code>pm2-manager</code>（进程管家）</strong> 插件，AI 启动的常驻服务还会自动交由 PM2 托管，提供命名进程状态监控、日志翻阅与崩溃重启能力。</li>
</ul>

<h2 id="scheduler-panel">2. ⏰ 定时与延时唤醒调度器（<code>schedule_task</code> + <code>SchedulerPanel</code>）</h2>
<p>希望让 AI「30 分钟后检查一下 CI 构建结果」、「每天早上 9 点拉取最新代码跑一次安全审计」？</p>
<div class="doc-callout doc-callout-tip">
	<strong>⏱️ 智能体自主定时唤醒（<code>server/schedule-agent-tool.ts</code>）</strong>
	<ul>
		<li>你只需在对话中用自然语言吩咐，智能体即可调用 <code>schedule_task</code> 工具（支持 <code>create / list / cancel</code>）创建延时或周期性唤醒任务；</li>
		<li>当设定时间到达时，服务端会自动唤醒对应会话并注入预定提示词，让智能体自动执行检查并通过 <code>[[notify:...]]</code> 向你发送桌面与声音通知；</li>
		<li>在「设置 → 定时任务（<code>SchedulerPanel</code>）」中可随时查看所有倒计时中的任务并一键取消；底层采用 <code>armDelay</code> 6 小时分片定时器，彻底免疫 Node.js <code>setTimeout</code> 24.8 天 32 位整数溢出 Bug。</li>
	</ul>
</div>
`,
		contentEn: `
<h2 id="bg-tasks-manager">1. 🚀 Background Tasks Manager</h2>
<p>Inspect logs, PIDs, and status of long-running dev servers and background jobs directly from the topbar <strong>Background Tasks</strong> modal (or pair with the <code>pm2-manager</code> plugin).</p>

<h2 id="scheduler-panel">2. ⏰ Scheduled & Delayed Wake-Up Tasks (<code>schedule_task</code>)</h2>
<p>Ask the agent to wake itself up after a delay or on a schedule to check build results, run audits, or send notifications. Manage all active timers in <strong>Settings → Scheduler</strong>.</p>
`,
	},
	{
		id: "approval-and-security",
		group: "agent-modes",
		badge: "Chapter 16",
		icon: "🔒",
		title: "三级工具审批门禁与六大安全边界设计",
		titleEn: "Three-Tier Tool Approval Gate & Security Boundaries",
		summary: "详解 approval-rules.json 规则库、三级审批放行记忆、插件网络/模型权限管理，以及默认 Loopback、Origin 校验与密钥零下发。",
		summaryEn: "Three-tier tool approval gate, persistent rule sets, plugin permission grants, loopback defaults, Origin validation, and zero API key exposure.",
		contentZh: `
<h2 id="tool-approval-gate">1. 🛡️ 三级工具审批门禁（<code>server/tool-approval.ts</code>）</h2>
<p>在「设置 → 审批与安全」中开启工具审批门禁后，高风险工具调用前会在界面弹出实时审批卡片：</p>
<ul>
	<li><strong>持久化规则库（<code>~/.pi-web/approval-rules.json</code>）</strong>：支持按工具名与参数匹配规则配置 <code>allow</code>（自动放行）、<code>ask</code>（每次询问）、<code>deny</code>（严禁执行）；</li>
	<li><strong>三档放行策略</strong>：弹窗确认时可选择 <strong>① 仅允许本次</strong>、<strong>② 允许同类操作（当前会话内存记忆，随跨端过户自动迁移）</strong>、或 <strong>③ 本对话全部允许</strong>。</li>
</ul>

<h2 id="plugin-permissions">2. 🔑 插件目录授权与网络/LLM 能力动态授权</h2>
<p>第三方插件如果需要访问工作区以外的本机路径，或需要发起外部网络请求（<code>net</code>）/ 调用模型接口（<code>llm</code>），宿主会弹出显式授权确认框；你可在设置面板随时查看已授予各插件的目录白名单（<code>pluginGrants</code>）与能力权限（<code>pluginPermissions</code>），并支持一键撤销。</p>

<h2 id="security-boundaries">3. 🔐 六大底层安全边界</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>1. 默认仅绑定本机回环（<code>127.0.0.1</code>）</h4>
		<p>默认不向局域网或公网暴露端口，除非显式传 <code>--host 0.0.0.0</code> 或通过受控 Nginx 反向代理。</p>
	</div>
	<div class="doc-card">
		<h4>2. 严格的 WebSocket Origin / Host 校验</h4>
		<p><code>/ws</code> 握手阶段严格比对浏览器 <code>Origin</code> 与 <code>Host</code>（含主机名与端口），防御跨站 WebSocket 劫持（CSWSH）。</p>
	</div>
	<div class="doc-card">
		<h4>3. 共享口令鉴权（<code>PI_WEB_TOKEN</code>）</h4>
		<p>开启 <code>--token</code> 后保护全部页面、API 与 WebSocket，Token Cookie 经安全编码与解码校验。</p>
	</div>
	<div class="doc-card">
		<h4>4. API 密钥与 SSH 凭据零下发</h4>
		<p><code>models.json</code> 中的敏感 <code>headers</code> 与 SSH 密码/私钥在服务端严格脱敏，永远不会下发给浏览器前端。</p>
	</div>
	<div class="doc-card">
		<h4>5. 严禁将 <code>$HOME</code> 设为工作区根</h4>
		<p>服务端拦截将用户家目录根作为工作区，防止递归扫描海量应用缓存或坏挂载点导致卡死。</p>
	</div>
	<div class="doc-card">
		<h4>6. 20 分钟工具看门狗（Watchdog）</h4>
		<p>单次工具调用默认享有 20 分钟看门狗保护（<code>ask_user_question</code> 问卷自动豁免），超时仅安全中止当前会话。</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="tool-approval-gate">1. 🛡️ Three-Tier Tool Approval Gate & Plugin Grants</h2>
<p>Configure <code>allow</code>, <code>ask</code>, or <code>deny</code> rules in <code>~/.pi-web/approval-rules.json</code>, and inspect/revoke plugin directory and network/LLM permissions at any time.</p>

<h2 id="security-boundaries">2. 🔐 Six Core Security Boundaries</h2>
<p>Loopback-only default (<code>127.0.0.1</code>), strict WebSocket <code>Origin</code>/<code>Host</code> verification, optional <code>PI_WEB_TOKEN</code> auth, server-side API key & SSH secret redaction, <code>$HOME</code> root protection, and a 20-minute per-tool watchdog.</p>
`,
	},
	{
		id: "dual-engines-and-presets",
		group: "extensibility",
		badge: "Chapter 17",
		icon: "🔥",
		title: "双引擎 (pi & DSH)、OAuth 登录、预设社区共享与 10 国语言",
		titleEn: "Dual Engines (pi & DSH), OAuth, Preset Sharing & 10 Locales",
		summary: "pi 与 DeepSeek Harness (DSH) 双引擎切换、提供商 OAuth 一键登录、四道白名单闸门预设导入导出与社区分享、10 国界面语言与声音合成器。",
		summaryEn: "Switch between pi and DSH engines, authenticate providers via OAuth, share settings presets safely via 4-gate sanitization, and switch among 10 UI languages.",
		contentZh: `
<h2 id="pi-and-dsh-engines">1. 🔥 双引擎架构：<code>pi</code> 与 <code>DeepSeek Harness (DSH)</code></h2>
<p>通过 <code>--engine pi</code>（默认）或 <code>--engine dsh</code> 即可切换底层智能体运行时。在 DSH 引擎下：</p>
<ul>
	<li>内置 <strong>Default（全能默认）、Reviewer（代码审查）、Drafter（方案起草）、Vibe Coder（极速原型）</strong> 四大预置角色，采用独立 <code>file:</code> 克隆挂载隔离；</li>
	<li>支持在设置页管理 DSH 权限预设与 <code>&lt;dataDir&gt;/dsh-patches</code> 用户补丁文件；底栏实时消费直播帧展示精确 Token 速率与费用统计。</li>
</ul>

<h2 id="provider-oauth-and-models">2. 🔑 提供商 OAuth 一键登录与模型目录管理</h2>
<p>在「设置 → 模型（<code>ProviderOAuthControls</code> + <code>model-admin.ts</code>）」中：</p>
<ul>
	<li>支持主流 AI 提供商的 <strong>OAuth 浏览器授权一键登录</strong>，也支持自定义添加 OpenAI / Anthropic 兼容格式的中转或本地（Ollama / vLLM / Antigravity 反代）接口；</li>
	<li>支持在线拉取并幂等更新官方最新模型目录（<code>patch-remote-catalog.ts</code>），自动同步最新模型上下文窗口与定价元数据。</li>
</ul>

<h2 id="preset-sharing">3. 🎁 设置预设导入/导出与社区共享（四道白名单安全闸门）</h2>
<p>你可以将精心调校的<strong>系统提示词、30+ 工具开关、逐工具提示词覆盖、子代理模板与界面偏好</strong>一键导出为 JSON 预设，或分享到官方社区仓库 <a href="https://github.com/xing-shuyin/pi-web-ui-presets" target="_blank" rel="noreferrer">xing-shuyin/pi-web-ui-presets</a>：</p>
<ul>
	<li><strong>浏览社区分享</strong>：在设置页直接浏览社区精选预设，一键预览变更项并应用；</li>
	<li><strong>四道白名单净化闸门（<code>server/preset-share.ts</code>）</strong>：任何导入的外部 JSON 均经过版本校验、字段白名单过滤（剔除一切未知字段与凭据）、枚举合法性收敛与 Dry-Run 预览确认，确保 100% 安全。</li>
</ul>

<h2 id="ten-locales-and-sound">4. 🌍 10 国界面语言（<code>LocaleModal</code>）与可定制声音提醒（<code>SoundSettings</code>）</h2>
<ul>
	<li><strong>10 种界面语言即点即切</strong>：内置简体中文、English、Deutsch（德语）、Español（西班牙语）、Français（法语）、Italiano（意大利语）、日本語、한국어（韩语）、Português（葡萄牙语）、Русский（俄语）；</li>
	<li><strong>Web Audio 声音合成器与桌面通知</strong>：内置多种任务完成/报错/问卷等待提示音（可调节音量与试听），并针对 Windows 窗口最小化状态做了矩形尺寸精准检测，确保后台跑完任务必能收到通知提醒。</li>
</ul>
`,
		contentEn: `
<h2 id="pi-and-dsh-engines">1. 🔥 Dual Engines (pi & DSH) & Provider OAuth</h2>
<p>Run either <code>--engine pi</code> or <code>--engine dsh</code> (with isolated Default, Reviewer, Drafter, and Vibe Coder presets), authenticate providers via OAuth or custom API endpoints, and update model catalogs in one click.</p>

<h2 id="preset-sharing">2. 🎁 4-Gate Preset Sharing, 10 UI Languages & Sound Alerts</h2>
<p>Export, import, browse, and share settings presets safely via a 4-gate server-side whitelist sanitizer. Switch UI language across 10 built-in locales (ZH, EN, DE, ES, FR, IT, JA, KO, PT, RU) and customize completion sound alerts.</p>
`,
	},
	{
		id: "plugins-marketplace",
		group: "extensibility",
		badge: "Chapter 18",
		icon: "🧩",
		title: "插件生态与 21 款官方/社区插件全集",
		titleEn: "Plugin Ecosystem & 21 Official/Community Plugins",
		summary: "无需重编译即可扩展工作台！浏览全部 21 款官方与社区插件（VSCode 编辑器、数据库客户端、微信通道、语音输入、运行轨迹等），支持网页一键安装或 CLI 管理。",
		summaryEn: "Browse all 21 official and community plugins with one-click web installation or CLI management.",
		contentZh: `
<h2 id="how-plugins-work">1. 插件如何安装、更新与管理？</h2>
<p>插件安装在 <code>~/.pi-web/plugins/&lt;id&gt;/</code> 目录下，支持在 <strong>「设置 → 插件」</strong> 面板中直接浏览官方市场、一键安装/检查更新/启用/卸载（甚至支持安装前先自动检查仓库规范 <code>installInspect</code>），也支持通过命令行管理：</p>
<pre><code class="language-bash"># 从官方仓库子目录或社区独立仓库安装插件
pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/webmail
pi-web-ui plugin install EinErste/pi-web-multigit

# 安装本地开发中的插件目录（--force 覆盖更新，自动保留本地 config.json 凭据）
pi-web-ui plugin install ./my-plugin --name my-plugin --force

# 列出已安装插件 / 卸载插件
pi-web-ui plugin list
pi-web-ui plugin remove webmail</code></pre>

<h2 id="plugins-full-catalog">2. 21 款官方与社区插件完整目录</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
		contentEn: `
<h2 id="how-plugins-work">1. Installing & Managing Plugins</h2>
<pre><code class="language-bash">pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/webmail
pi-web-ui plugin list
pi-web-ui plugin remove webmail</code></pre>
<h2 id="plugins-full-catalog">2. Complete Catalog of 21 Plugins</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
	},
	{
		id: "plugin-sdk",
		group: "extensibility",
		badge: "Chapter 19",
		icon: "🛠️",
		title: "插件开发完全手册 (Plugin SDK v2 & 33 个 UI 插槽)",
		titleEn: "Plugin Developer Guide (SDK v2 & 33 UI Slots)",
		summary: "从零编写包含前端视图、33 个宿主 UI 插槽挂载、四层布局合并与后端 AI 工具注册的 pi-web-ui 插件。",
		summaryEn: "Build a full-stack pi-web-ui plugin with declarative UI slots, backend AI tools, HTTP routes, and publish to the catalog.",
		contentZh: `
<h2 id="plugin-anatomy">1. 插件目录结构（<code>PLUGIN_API_VERSION = 2</code>）</h2>
<pre><code class="language-text">my-plugin/
├── manifest.json   # 必填：插件 ID、名称、版本、apiVersion(2)、配置项与声明式 UI 插槽
├── index.mjs       # 可选（后端）：注册 AI 工具 (registerTool)、HTTP 路由、定时任务与事件监听
└── ui.mjs          # 可选（前端）：挂载独立视图、顶栏/底栏按钮、侧边栏、消息卡片或代码块渲染器</code></pre>

<h2 id="manifest-and-backend">2. 最小完整示例：<code>manifest.json</code> + <code>index.mjs</code> + <code>ui.mjs</code></h2>
<pre><code class="language-json">{
  "id": "hello-devkit",
  "name": "开发助手示例",
  "nameEn": "Hello DevKit",
  "version": "1.0.0",
  "apiVersion": 2,
  "icon": "🛠️",
  "description": "演示顶栏按钮、独立视图与 AI 工具联动的最小插件模板",
  "descriptionEn": "Minimal template demonstrating topbar action, view tab, and AI tool",
  "main": "index.mjs",
  "ui": {
    "entry": "ui.mjs",
    "tab": { "title": "开发助手", "titleEn": "DevKit", "icon": "🛠️" }
  }
}</code></pre>

<pre><code class="language-javascript">// index.mjs — 后端激活入口
export async function activate(api) {
  api.registerTool({
    name: "devkit_ping",
    label: "DevKit Ping",
    description: "Probe target HTTP endpoint latency and return structured status.",
    promptSnippet: "probe HTTP endpoint latency via DevKit",
    parameters: {
      type: "object",
      properties: { url: { type: "string", description: "URL to probe" } },
      required: ["url"]
    },
    async execute(_toolCallId, params) {
      const t0 = Date.now();
      const res = await fetch(params.url);
      return {
        content: [{ type: "text", text: \`HTTP \${res.status} (\${Date.now() - t0}ms)\` }],
        details: { status: res.status, latencyMs: Date.now() - t0 }
      };
    }
  });
}</code></pre>

<h2 id="ui-slots-and-arrange">3. 33 个宿主声明式 UI 扩展插槽与四层布局合并</h2>
<p>宿主提供 <strong>33 个声明式 UI 插槽（<code>web/src/ui-slots.ts</code>）</strong>，涵盖顶栏（<code>topbar.*</code>）、输入框工具条（<code>composer.*</code>）、状态底栏（<code>statusbar.*</code>）、侧边停靠栏（<code>sidedock.*</code>）、右键上下文菜单（<code>contextmenu.file / message</code>）、消息头尾（<code>message.*</code>）、围栏代码块（<code>fenced-code</code>）与主视图（<code>view</code>）。所有条目按<strong>「宿主默认 &lt; 插件声明 &lt; 插件 arrange &lt; 用户在设置页的拖拽排布/改名偏好」</strong>四层合并，用户可在「设置 → 布局」中自由拖拽排序、重命名或隐藏任意按钮！</p>
`,
		contentEn: `
<h2 id="plugin-anatomy">Plugin Structure & 33 Declarative Host UI Slots</h2>
<p>Plugins declare metadata in <code>manifest.json</code> (<code>apiVersion: 2</code>), register AI tools and HTTP routes in <code>index.mjs</code>, and mount UI into any of the 33 host UI slots in <code>ui.mjs</code> with full user drag-and-drop arrangement support.</p>
`,
	},
	{
		id: "themes-and-deployment",
		group: "extensibility",
		badge: "Chapter 20",
		icon: "🎨",
		title: "29 套内置主题定制与生产部署（守护进程 / Docker / Nginx 反代）",
		titleEn: "29 Built-in Themes, Background Daemon, Docker & Nginx Proxy",
		summary: "探索 29 套内置全站+终端联动主题，以及使用 pi-web-ui server 注册跨平台开机自启服务、Docker 容器化与 Nginx 子路径反向代理。",
		summaryEn: "Explore all 29 built-in themes, install background login services across macOS/Linux/Windows, run with Docker Compose, or proxy behind Nginx.",
		contentZh: `
<h2 id="daemon-service">1. 🚀 跨平台开机自启守护进程（<code>pi-web-ui server</code>）</h2>
<p>无需管理员/root 权限，一条命令即可将 <code>pi-web-ui</code> 注册为系统后台自启服务（macOS <code>launchd</code> / Linux <code>systemd --user</code> / Windows 注册表 <code>HKCU\\...\\Run</code>）：</p>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret
pi-web-ui server status      # 查看运行状态与健康检查
pi-web-ui server restart     # 升级版本后平滑重启服务
pi-web-ui server logs -f     # 实时跟随查看日志
pi-web-ui server stop        # 停止后台服务
pi-web-ui server uninstall   # 移除开机自启配置</code></pre>

<h2 id="docker-and-nginx">2. 🐳 Docker Compose 与 🛡️ Nginx 子路径（<code>/pi/</code>）反向代理</h2>
<pre><code class="language-nginx"># Nginx 子路径反代关键配置（完整示例见仓库 deploy/nginx-subpath.conf）
server {
    listen 443 ssl;
    server_name your-host;

    location /pi/ {
        proxy_pass http://127.0.0.1:8787/;
        proxy_http_version 1.1;
        # 必须传 $http_host（保留端口），否则 WebSocket Origin 校验会返回 403
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /ws {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
    }

    location /assets/         { proxy_pass http://127.0.0.1:8787; }
    location = /favicon.svg   { proxy_pass http://127.0.0.1:8787; }
    location = /api/file      { proxy_pass http://127.0.0.1:8787; }
    location = /api/health    { proxy_pass http://127.0.0.1:8787; }
}</code></pre>

<h2 id="all-29-themes-table">3. 🎨 全部 29 套内置主题色板一览（把自定义 <code>.css</code> 放入 <code>~/.pi-web/themes/</code> 即可热加载）</h2>
<div data-dynamic-table="themes-catalog"></div>
`,
		contentEn: `
<h2 id="daemon-service">1. 🚀 Background Daemon, Docker & Nginx Reverse Proxy</h2>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret
pi-web-ui server status
pi-web-ui server restart</code></pre>
<h2 id="all-29-themes-table">2. 🎨 All 29 Built-in Themes</h2>
<div data-dynamic-table="themes-catalog"></div>
`,
	},
];
