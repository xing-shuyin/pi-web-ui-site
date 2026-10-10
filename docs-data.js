/**
 * Comprehensive 20-Chapter Documentation Portal Data for pi-web-ui
 * Fully covers every single feature: Remote SSH, File Tree upload/archive,
 * Subagents & 6-section delegate_task, Turn Rollback, Selection Quote,
 * Office/PDF preview, Git commit history quote, Export long image,
 * Custom wallpapers, MCP market, Scheduler, 10 locales, etc.
 * Features concise `navTitle` to ensure zero sidebar truncation.
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
		title: "双引擎、界面定制、插件与部署",
		titleEn: "Customization, Plugins & Deploy",
		items: [
			"dual-engines-and-presets",
			"ui-customization-and-export",
			"plugins-marketplace",
			"plugin-sdk-and-deployment",
		],
	},
];

export const DOCS_CHAPTERS = [
	{
		id: "overview",
		group: "getting-started",
		badge: "Chapter 01",
		icon: "🚀",
		navTitle: "01. 概览与快速开始",
		navTitleEn: "01. Overview & Start",
		title: "项目概览与 30 秒快速开始",
		titleEn: "Overview & 30-Second Quick Start",
		summary: "全面了解 pi-web-ui 的功能版图：从流式对话、SSH 远程项目、文件树拖拽上传、并发子代理到目标模式 2.0。",
		summaryEn: "Discover the full landscape of pi-web-ui: streaming chat, Remote SSH workspaces, file tree uploads, parallel subagents, and Goal Mode 2.0.",
		contentZh: `
<h2 id="what-is-pi-web-ui">什么是 pi-web-ui？</h2>
<p><strong>pi-web-ui</strong> 是基于 <code>@earendil-works/pi-coding-agent</code> SDK 与 DeepSeek Harness (DSH) 构建的<strong>跨平台全栈 AI 研发工作台（同时提供 Web 端与 Electron 原生桌面客户端）</strong>：</p>
<div class="doc-callout doc-callout-tip">
	<strong>💡 核心定位：多智能体协同，全栈 AI 研发工作台（Full-Stack AI Coding Workbench）</strong>
	<p>无论你习惯使用<strong>原生桌面客户端（Desktop App）</strong>还是<strong>浏览器（Web / 移动端）</strong>，无论项目位于本机磁盘还是<strong>远程 SSH 服务器（<code>ssh://user@host/path</code>）</strong>，都能在一个统一的工作台中完成：流式对话、划词引用提问、按轮次一键回滚代码、派发并发子代理（Subagents）、浏览并拖拽上传文件/文件夹、在线解压/打包下载、预览 Office/PDF/媒体、使用多标签真 PTY 终端、管理 Git 暂存与 AI 生成提交说明，以及运行多轮自治的目标模式 2.0 审查。</p>
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

<h2 id="full-feature-matrix">全功能版图速览</h2>
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
<p>A cross-platform, full-stack AI coding workbench available as both a <strong>native Electron Desktop app</strong> and a <strong>Web application</strong>. Work on local repositories or connect directly to <strong>Remote SSH servers (<code>ssh://user@host/path</code>)</strong> with streaming chat, selection quotes, turn rollbacks, parallel subagents, drag-drop file/folder uploads, PTY terminals, and Git SCM.</p>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
`,
	},
	{
		id: "installation",
		group: "getting-started",
		badge: "Chapter 02",
		icon: "📦",
		navTitle: "02. 全平台安装指南",
		navTitleEn: "02. Installation Guide",
		title: "全平台安装指南（Windows / macOS / Linux / Termux / 桌面端）",
		titleEn: "Installation Guide (All Platforms, Termux & Desktop)",
		summary: "涵盖 npm 全局安装、npm 12+ 原生脚本放行、Linux 编译工具链、Android Termux 避坑指南、/webui 扩展与 Electron 桌面版。",
		summaryEn: "Complete installation instructions for npm, npm 12+ native scripts, Linux build tools, Android Termux, /webui extension, and Electron desktop.",
		contentZh: `
<h2 id="standard-install">1. 标准安装与首次配置向导</h2>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
<p>首次打开浏览器时，若本机尚未初始化模型配置，界面会自动弹出<strong>首次配置向导（<code>PiSetupModal</code>）</strong>，引导你完成 API Key 或提供商 OAuth 登录配置。</p>

<h2 id="npm-12-allow-scripts">2. npm ≥ 12 原生模块脚本放行</h2>
<p>npm 12+ 默认阻止依赖安装脚本（提示 <code>npm warn install-scripts … blocked</code>）。由于内置终端依赖原生模块 <code>node-pty</code>，安装时请显式放行：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="linux-build-deps">3. 🐧 Linux 编译工具链准备</h2>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get update && sudo apt-get install -y build-essential python3
# Fedora / RHEL
sudo dnf install -y python3 make gcc-c++
# Arch Linux
sudo pacman -S --needed base-devel python</code></pre>

<h2 id="android-termux">4. 📱 Android / Termux 避坑指南</h2>
<pre><code class="language-bash">pkg update && pkg install nodejs python make clang git
mkdir -p ~/.gyp && echo "{'variables':{'android_ndk_path':''}}" > ~/.gyp/include.gypi
CXXFLAGS="-std=c++20" npm i -g pi-web-ui@latest</code></pre>

<h2 id="pi-extension-and-desktop">5. pi CLI <code>/webui</code> 扩展与 Electron 桌面客户端</h2>
<pre><code class="language-bash"># 在 pi CLI 中作为扩展加载
pi install npm:pi-web-ui   # 在终端中输入 /webui 随时拉起

# 独立 Electron 桌面版（desktop/）
npm run build && npm --prefix desktop install
npm --prefix desktop start      # 桌面版开发预览
npm --prefix desktop run dist   # 构建原生安装包（Windows EXE / macOS DMG / Linux AppImage）</code></pre>
`,
		contentEn: `
<h2 id="standard-install">Standard Install & Multi-Platform Guide</h2>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>
`,
	},
	{
		id: "cli-and-env",
		group: "getting-started",
		badge: "Chapter 03",
		icon: "⚙️",
		navTitle: "03. CLI 参数与环境变量",
		navTitleEn: "03. CLI & Env Flags",
		title: "CLI 启动参数与环境变量全表",
		titleEn: "CLI Flags & Environment Variables Reference",
		summary: "所有命令行启动参数与环境变量的完整对照表，涵盖端口、工作区、引擎切换、SDK 跟随与插件/预设源。",
		summaryEn: "Complete reference table for all CLI flags and environment variables.",
		contentZh: `
<h2 id="cli-overview">命令行参数概览</h2>
<pre><code class="language-bash">pi-web-ui --port 9000 --cwd /path/to/project --token my-secret-pass
pi-web-ui --engine dsh --port 8787</code></pre>

<h2 id="cli-env-interactive-table">启动参数与环境变量速查表</h2>
<div data-dynamic-table="cli-flags"></div>

<h2 id="sdk-resolution">全局引擎版本自动跟随（<code>PI_WEB_SDK</code>）</h2>
<div class="doc-callout doc-callout-tip">
	<strong>🔄 智能引擎解析（#321）</strong>
	<p>默认 <code>PI_WEB_SDK=global</code>：自动扫描机器上的全局 <code>pi</code> 引擎，有更新版本自动优先使用；顶栏「更新面板」对比展示运行中版本与最新版，并提供<strong>一键安装/升级全局引擎</strong>入口。锁定自带版本可设 <code>PI_WEB_SDK=bundled</code>。</p>
</div>
`,
		contentEn: `
<h2 id="cli-env-interactive-table">CLI Flags & Environment Variables</h2>
<div data-dynamic-table="cli-flags"></div>
`,
	},
	{
		id: "chat-and-sessions",
		group: "workspace",
		badge: "Chapter 04",
		icon: "💬",
		navTitle: "04. 流式对话与快照回滚",
		navTitleEn: "04. Chat & Rollback",
		title: "流式对话、划词引用、工作区快照回滚与多会话并发",
		titleEn: "Chat Cockpit, Selection Quote, Snapshot Rollback & Concurrency",
		summary: "详解 Steer 回复中插队与撤回、划词选中文字一键引用提问、按对话轮次一键回滚工作区文件改动、8 会话并发与跨设备过户。",
		summaryEn: "Master mid-turn steering, highlight-to-quote, per-turn workspace file rollback, 8-session concurrency, and cross-device takeover.",
		contentZh: `
<h2 id="streaming-and-steer">1. 流式对话、中途补充（Steer）与撤回</h2>
<ul>
	<li><strong>思考块与工具卡实时状态</strong>：实时展示耗时与状态（<code>执行中 → 已结束 · 等模型 · 耗时</code>）。</li>
	<li><strong>中途补充（Steer 插队）</strong>：流式输出途中发送消息直接进入排队，当前工具结算后立即注入指令。</li>
	<li><strong>排队气泡一键撤回（↩）</strong>：排队消息可点 <code>✕ 移除</code> 或 <code>↩ 撤回</code>（文字安全回到输入框，绝不覆盖已有草稿）。</li>
	<li><strong>编辑重问（Fork 分支）</strong>：任意历史问题一键分叉出独立新分支重新提问。</li>
</ul>

<h2 id="selection-quote">2. 💬 划词选中即引用（Selection Quote）</h2>
<div class="doc-callout doc-callout-tip">
	<strong>✨ 指哪打哪的划词引用</strong>
	<p>在<strong>助手消息正文</strong>或<strong>文件预览窗口</strong>中，划词选中任意一段文字或代码，选区旁立即浮现 <strong>「💬 引用」</strong> 按钮，点击即可生成带来源标签的结构化引用卡片（<code>TextQuoteCard</code>）送入输入框，指哪问哪！</p>
</div>

<h2 id="workspace-rollback">3. ⏪ 工作区文件快照与按轮次一键回滚（Rollback）</h2>
<div class="doc-callout doc-callout-warn">
	<strong>🛡️ 轮次级文件快照引擎（<code>server/workspace-snapshot.ts</code>）</strong>
	<p>每当 AI 修改工作区文件时自动记录增量快照。对某轮改动不满意？点击该条消息操作栏上的 <strong>「⏪ 回滚」</strong> 按钮，弹窗会列出受影响文件清单，确认后<strong>一键将工作区文件精准还原到该轮改动之前</strong>！</p>
</div>

<h2 id="concurrent-ephemeral-takeover">4. 8 会话并发、临时对话、跨端过户与压缩前历史</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>⚡ 8 会话后台并发</h4>
		<p>单项目支持同时运行最多 8 个独立 Agent Runtime（子代理不计入）；切走后后台继续流式，左栏实时显示进度。</p>
	</div>
	<div class="doc-card">
		<h4>👻 临时对话（内存无痕）</h4>
		<p>勾选临时对话：纯内存运行不落盘，适合随手问答；聊到一半可点击顶栏「转为正式对话」一键落盘持久化。</p>
	</div>
	<div class="doc-card">
		<h4>📲 跨设备事务性接管（Takeover）</h4>
		<p>手机与电脑切换，在「另一处运行」列表点击「接管」，事务性迁移正在运行的会话实体（含未决问卷与状态）。</p>
	</div>
	<div class="doc-card">
		<h4>🔍 查看压缩前原始历史</h4>
		<p>上下文触发压缩后生成摘要卡片，点击卡片可按需展开查看<strong>被压缩前的原始完整对话记录</strong>！</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="selection-quote">Highlight-to-Quote & Workspace Rollback</h2>
<p>Highlight text in messages/files to attach quote chips. Click <strong>Rollback</strong> on any historical turn to undo file modifications. Run 8 concurrent sessions and take over across devices.</p>
`,
	},
	{
		id: "remote-ssh-projects",
		group: "workspace",
		badge: "Chapter 05 · 核心亮点",
		icon: "🌐",
		navTitle: "05. 🌐 打开 SSH 远程项目",
		navTitleEn: "05. 🌐 Remote SSH",
		title: "打开 SSH 远程项目与全栈远程工作区",
		titleEn: "Remote SSH Projects & Full-Stack Remote Workspace",
		summary: "无需在远端部署 Web 服务！直接打开 ssh://user@host:port/path 远程项目，文件树、读写编辑、终端与 Git 全部无缝远端化。",
		summaryEn: "Open ssh://user@host:port/path remote projects directly from your local pi-web-ui. File tree, read/write/edit/bash tools, PTY terminals, and Git SCM all run seamlessly over SSH.",
		contentZh: `
<h2 id="why-remote-ssh">为什么需要「原生 SSH 远程项目」？</h2>
<p>代码跑在云服务器、GPU 机器或内部测试机上，过去必须在远端安装 Node.js、启动 <code>pi-web-ui</code> 并做端口转发。</p>
<div class="doc-callout doc-callout-tip">
	<strong>🌐 原生 SSH 远程工作区（<code>server/remote-ssh-service.ts</code>）</strong>
	<p>现在，只需在本机运行 <code>pi-web-ui</code>，即可通过 <code>ssh://user@host:port/remote/path</code> 直接打开远端目录！智能体与会话历史保留在本机，而<strong>文件树（SFTP 上传/下载）、文件在线预览编辑、AI 工具（read/write/edit/bash）、内置 PTY 终端与 Git SCM 全部无缝在远端服务器上执行</strong>！</p>
</div>

<h2 id="how-to-open-ssh-project">如何连接并打开远程 SSH 项目？</h2>
<ol>
	<li>点击底栏 <code>📁 &lt;路径&gt;</code> 打开项目切换器，切换到 <strong>「🌐 远程 SSH」</strong> 页签；</li>
	<li>填写 Host、Port（默认 22）、用户名，选择鉴权方式：
		<ul>
			<li>🔑 <strong>私钥文件（Private Key）</strong>：自动列出本机 <code>~/.ssh/id_*</code> 私钥供一键点选，支持 Passphrase；</li>
			<li>🔒 <strong>密码（Password）</strong>：直接输入登录密码；</li>
			<li>🛡️ <strong>SSH Agent</strong>：复用本机 <code>$SSH_AUTH_SOCK</code> 代理。</li>
		</ul>
	</li>
	<li>连接成功后弹窗实时浏览远端目录，支持新建文件夹并点击「打开此远程项目」！</li>
</ol>

<h2 id="remote-probe-and-bootstrap">🩺 远程环境探针与一键补齐依赖（Remote Probe）</h2>
<p>连接成功瞬间自动探测远端系统（Ubuntu/Debian/CentOS/Alpine/macOS）、CPU 架构、包管理器（<code>apt/dnf/apk/pacman</code>）与基础工具（<code>git/node/bash/python3/ripgrep</code>）；若缺少 <code>git</code> 或 <code>ripgrep</code>，界面提供 <strong>「⚡ 一键在远端安装缺失工具」</strong> 按钮！</p>

<h2 id="ssh-security-and-pooling">🔐 AES-256-GCM 凭据加密与连接池</h2>
<p>保存的 SSH Profiles 在服务端通过本机专属密钥进行 <strong>AES-256-GCM 加密存储</strong>，密码与私钥口令永不下发前端；服务端维护复用连接池（心跳保活、断线重连、空闲自动释放），远程对话历史安全保存在本机 <code>~/.pi-web/remote-workspaces/&lt;slug&gt;/</code>。</p>
`,
		contentEn: `
<h2 id="why-remote-ssh">Remote SSH Workspaces (<code>ssh://user@host:port/path</code>)</h2>
<p>Open any folder on a remote SSH server directly from local pi-web-ui. Authenticate via <strong>Private Key</strong>, <strong>Password</strong>, or <strong>SSH Agent</strong>. Credentials are saved encrypted with <strong>AES-256-GCM</strong>. Remote probe verifies OS & tools with one-click installation for missing dependencies. File tree, tools, terminals, and Git execute natively on the remote host.</p>
`,
	},
	{
		id: "file-tree-and-transfer",
		group: "workspace",
		badge: "Chapter 06 · 核心亮点",
		icon: "📁",
		navTitle: "06. 📁 文件树上传与解压",
		navTitleEn: "06. 📁 File Upload",
		title: "右栏文件列表全攻略：拖拽上传文件/文件夹、打包下载与压缩解压",
		titleEn: "File Tree Guide: Drag-Drop File/Folder Upload, Archive & Multi-Root",
		summary: "详解右栏文件列表的 20+ 项右键与拖拽能力：上传文件与整个文件夹、打包下载、在线压缩/解压、复制剪切粘贴、跨盘符 @root 浏览与多根工作区。",
		summaryEn: "Master 20+ file tree actions: drag-and-drop file/folder uploads, TAR stream folder transfers, ZIP/TAR compress & extract, copy/cut/paste, @root drive browsing, and multi-root workspaces.",
		contentZh: `
<h2 id="upload-files-and-folders">1. 📤 在文件列表中上传文件与整个文件夹</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🖱️ 类 VSCode 拖拽上传</h4>
		<p>直接把文件从系统文件管理器拖进右栏文件列表：拖到文件夹行即上传进该文件夹（高亮目标行）；拖到文件行或列表空白处即上传到当前目录。</p>
	</div>
	<div class="doc-card">
		<h4>📂 右键上传单/多文件或「整个文件夹」</h4>
		<p>右键菜单选择「上传文件到当前目录」或<strong>「上传文件夹（Upload Folder）」</strong>：流式 TAR 管道上传原样保留子目录层级，弹窗实时展示已处理文件数、进度条与 MB/s 传输速率！</p>
	</div>
</div>

<h2 id="compress-extract-download">2. 🗜️ 在线压缩、在线解压与打包下载</h2>
<ul>
	<li><strong>📦 打包下载整个文件夹</strong>：右键任意文件夹 → 点击「打包下载」，打包为 <code>.zip / .tar.gz / .tar</code> 直接触发浏览器下载；</li>
	<li><strong>🗜️ 在线压缩（Compress）</strong>：右键文件/文件夹生成指定格式压缩包；</li>
	<li><strong>📂 在线解压（Extract）</strong>：右键任意 <code>.zip / .tar.gz / .tgz / .tar / .7z</code> 压缩包在线解压到指定目标目录；</li>
	<li><strong>⬇️ 单文件直接下载</strong>：右键任意文件一键原样下载到本地。</li>
</ul>

<h2 id="file-tree-context-menu">3. ✂️ 20+ 项文件管理右键菜单动作</h2>
<p>支持新建文件/文件夹、重命名、复制、剪切、粘贴、<strong>创建副本（Duplicate）</strong>、删除、<strong>附加到对话（单文件或整个文件夹引用）</strong>、复制绝对/相对路径、在系统文件管理器中显示、用默认程序打开、以此目录打开项目，以及挂载为<strong>额外工作区根（Multi-Root）</strong>。</p>

<h2 id="machine-root-and-multi-root">4. 🖥️ 跨盘符机器根浏览（<code>@root</code>）与多根工作区</h2>
<p>点击文件树顶部的 <code>..</code>（返回上级）可一路突破工作区，到达机器根 <code>@root</code>：Windows 上列出全部磁盘盘符（<code>C:\ / D:\ / E:\</code>），macOS/Linux 浏览 <code>/</code> 根目录；支持为当前项目挂载最多 <strong>8 个额外工作区根目录</strong>。</p>
`,
		contentEn: `
<h2 id="upload-files-and-folders">Drag-and-Drop Upload, Folder Streaming & Archives</h2>
<p>Drag files into folder rows to upload into them. Right-click to <strong>Upload Folder</strong> via streaming TAR pipeline, <strong>Compress & Download</strong> directories as ZIP/TAR.GZ, <strong>Extract</strong> archives in place, browse <code>@root</code> Windows drive letters, and mount 8 multi-root workspaces.</p>
`,
	},
	{
		id: "attachments-and-vision",
		group: "workspace",
		badge: "Chapter 07",
		icon: "📎",
		navTitle: "07. 📎 附件/Office/视觉桥",
		navTitleEn: "07. 📎 Vision & Office",
		title: "零污染附件引用、Office/PDF 在线预览编辑与视觉桥",
		titleEn: "Zero-Bloat Attachments, Office/PDF Preview, Inline Edit & Vision Bridge",
		summary: "详解 reference/lines 路径引用、精确行号选择引用、.docx/.xlsx/.pptx/.pdf 原生预览、文本在线编辑保存、GBK 解码与 Vision Bridge 视觉转写。",
		summaryEn: "Learn how path/line references prevent context bloat, preview .docx/.xlsx/.pptx/.pdf files, edit text files inline, and use Vision Bridge for image Q&A.",
		contentZh: `
<h2 id="attachment-modes">1. 零上下文污染的轻量引用（Reference vs Lines）</h2>
<p>附加文件时不把几千行内容塞入 Prompt：<code>reference</code> 模式只传递轻量路径标签，模型按需通过 <code>read</code> 读取；在文件预览中选中代码行并点击<strong>「引用选中行」</strong>则生成精确到起止行号的 <code>lines</code> 卡片。</p>

<h2 id="rich-file-preview-and-edit">2. 📄 Office/PDF 原生解析预览与源码在线编辑保存</h2>
<ul>
	<li><strong>📝 源码在线编辑保存</strong>：文件预览弹窗内可直接点击「编辑」按钮在线修改代码或配置并一键保存回磁盘（或远程 SSH 服务器）；</li>
	<li><strong>📊 Office 与 PDF 原生预览（<code>server/office-parse.ts</code>）</strong>：原生解析 <strong>.docx、.xlsx、.pptx、.pdf</strong> 文档，AI 的 <code>read</code> 工具亦可直接读取其中结构化文字；</li>
	<li><strong>🔤 GBK / UTF-8 自动回退</strong>：智能嗅探中文编码，彻底杜绝乱码；音视频支持 HTTP Range 拖动播放。</li>
</ul>

<h2 id="vision-bridge">3. 🌉 视觉桥（Vision Bridge）与 <code>present_files</code> 作品卡</h2>
<p><code>Ctrl+V</code> 粘贴截图或拖拽图片：非多模态模型自动通过辅助视觉模型将 UI 截图转写为结构化描述；AI 产出图片、视频、图表或报告时自动调用 <code>present_files</code> 渲染交付卡片。</p>
`,
		contentEn: `
<h2 id="rich-file-preview-and-edit">Office/PDF Preview, Inline Edit & Vision Bridge</h2>
<p>Preview and inline-edit source code, inspect .docx/.xlsx/.pptx/.pdf documents natively, and transcribe images for text-only coding models via Vision Bridge.</p>
`,
	},
	{
		id: "terminal-and-bash",
		group: "workspace",
		badge: "Chapter 08",
		icon: "💻",
		navTitle: "08. 💻 真终端与 AI Bash",
		navTitleEn: "08. 💻 PTY & AI Bash",
		title: "内置多标签真 PTY 终端与 AI Bash 接管",
		titleEn: "Multi-Tab PTY Terminal & AI Bash Takeover",
		summary: "本机 node-pty 与远程 SSH 伪终端无缝切换，详解 AI Bash 可见接管、persist=true 持久 ai-bash 会话与 3 秒静默活力探测。",
		summaryEn: "Local node-pty and Remote SSH PTY terminals, AI Bash visible takeover, persistent ai-bash shell, and 3-second silence liveness probing.",
		contentZh: `
<h2 id="multi-tab-pty">1. 本机真 PTY + 远程 SSH 伪终端</h2>
<p>本机调用 <code>node-pty</code> 拉起真实 Shell；远程 SSH 项目自动通过 SSH 连接在远端开启伪终端；支持多标签、字号缩放、输出路径点击跳转，16 色板跟随主题实时变色。</p>

<h2 id="ai-bash-takeover">2. ⚡ AI Bash 可见终端接管</h2>
<p>开启「默认 bash 走终端」后，AI 执行命令实时呈现在终端面板中：一次性命令（<code>persist=false</code>）滚动打印；持久命令（<code>persist=true</code> · <code>ai-bash</code>）保持 <code>cd</code>/虚拟环境/交互提示状态，支持随时按键介入交互。</p>

<h2 id="liveness-detection">3. 🩺 3 秒无输出活力探测器</h2>
<p>3 秒无输出时自动探测进程树：🟢 正常计算消耗 CPU/IO；🟡 等待交互输入（提醒你输入 <code>y/n</code> 或密码）；🔴 疑似卡死挂起告警。</p>
`,
		contentEn: `
<h2 id="ai-bash-takeover">Native/SSH PTY Terminals & AI Bash Takeover</h2>
<p>Route AI bash commands into visible terminals with persistent <code>ai-bash</code> sessions and 3-second silence process liveness probing.</p>
`,
	},
	{
		id: "git-scm-and-ai-commit",
		group: "workspace",
		badge: "Chapter 09",
		icon: "🌿",
		navTitle: "09. 🌿 Git 管理与 AI 提交",
		navTitleEn: "09. 🌿 Git SCM & Commit",
		title: "内置 Git 源代码管理与 AI 自动生成提交说明",
		titleEn: "Built-in Git SCM & One-Click AI Commit Message",
		summary: "无需切出浏览器即可完成 Stage/Unstage/Discard、高亮 Diff 检视、Stash 贮藏、分支切换、一键 AI 生成提交说明与提交历史引用。",
		summaryEn: "Stage, unstage, discard, inspect syntax-highlighted diffs, manage stashes/branches, generate commit messages with AI, and quote git commits.",
		contentZh: `
<h2 id="scm-panel-overview">1. 完备的内置 Git 工作台</h2>
<p>分组展示 Staged / Changes / Untracked；单文件或全量 Stage、Unstage 与 Discard 丢弃修改；点击文件查看语法高亮 Diff；顶部提供 Pull、Push、Fetch、分支切换与 Stash 贮藏。</p>

<h2 id="ai-commit-message">2. ✨ AI 一键生成 Git Commit Message</h2>
<p>点击提交框旁的「✨ AI 生成」按钮：自动根据当前 Diff 摘要生成符合 Conventional Commits 规范的精准提交说明。</p>

<h2 id="git-commit-history">3. 📜 Git 提交历史翻阅与引用 Commit 到对话</h2>
<p>Git 面板支持翻阅完整的 Git Log 提交历史树、按作者/关键字搜索过滤、查看历史 Commit 的具体改动 Diff，并支持<strong>一键将某个历史 Commit 引用到当前对话</strong>让 AI 协助审查或解释！</p>
`,
		contentEn: `
<h2 id="ai-commit-message">Git SCM, AI Commit Message & Commit Quotes</h2>
<p>Stage, diff, stash, and commit with one-click AI commit messages. Browse Git log history and quote past commits into chat.</p>
`,
	},
	{
		id: "commands-and-shortcuts",
		group: "workspace",
		badge: "Chapter 10",
		icon: "⌨️",
		navTitle: "10. ⌨️ 快捷键与@引用",
		navTitleEn: "10. ⌨️ Shortcuts & @Ref",
		title: "斜杠命令、键盘快捷键与 @ 多源引用速查",
		titleEn: "Slash Commands, Shortcuts & @Multi-Source Mentions",
		summary: "内置斜杠命令表、键盘快捷键、@ 四合一引用（文件/技能/浏览器标签/跨对话引用）与快捷短语芯片栏。",
		summaryEn: "Complete reference for slash commands, keyboard shortcuts, @ mentions (files, skills, browser tabs, conversations), and quick phrases.",
		contentZh: `
<h2 id="at-mentions">1. @ 多源智能引用（<code>at-mention.ts</code>）</h2>
<p>在输入框中输入 <code>@</code> 即可唤起多源选择器，支持一键引用：<strong>① 工作区文件（<code>@file</code>）</strong>、<strong>② 技能（<code>@skill</code>）</strong>、<strong>③ 已授权浏览器标签页（<code>@page</code>）</strong>、<strong>④ 其他历史会话（<code>&lt;conversation-ref&gt;</code>，AI 通过 <code>conversation_read</code> 按需读取）</strong> 以及插件数据源！</p>

<h2 id="slash-commands-ref">2. 内置斜杠命令全表</h2>
<div data-dynamic-table="slash-commands"></div>

<h2 id="keyboard-shortcuts-ref">3. 键盘与鼠键交互快捷方式</h2>
<div data-dynamic-table="shortcuts"></div>
`,
		contentEn: `
<h2 id="slash-commands-ref">Slash Commands & Keyboard Shortcuts</h2>
<div data-dynamic-table="slash-commands"></div>
<div data-dynamic-table="shortcuts"></div>
`,
	},
	{
		id: "subagents-and-delegation",
		group: "agent-modes",
		badge: "Chapter 11 · 核心亮点",
		icon: "🤖",
		navTitle: "11. 🤖 子代理与任务委派",
		navTitleEn: "11. 🤖 Subagents & Task",
		title: "子代理系统 (Subagents)、六段式任务委派与点对点交接",
		titleEn: "Subagents, 6-Section Task Delegation, Templates & Handoff",
		summary: "全面掌握 pi-web-ui 的多智能体并发协作体系：subagent 生命周期管理、delegate_task 六段式任务书、专家子代理模板库、点对点 handoff 与 claim_files 文件排他锁。",
		summaryEn: "Master multi-agent orchestration: parallel subagent spawning, validated 6-section delegate_task briefs, specialist templates, peer-to-peer handoff, and exclusive claim_files locking.",
		contentZh: `
<h2 id="why-subagents">1. 为什么需要后台并发子代理（Subagents）？</h2>
<p>大型工程任务若全塞进主对话串行处理，既耗时又让上下文迅速撑爆。pi-web-ui 允许主智能体派生多个后台子代理<strong>并发执行，独立上下文</strong>，执行完毕只汇报核心交付物（不占主会话并发名额）；顶栏「子代理」面板可实时监控与干预。</p>

<h2 id="subagent-actions">2. <code>subagent</code> 工具的八大动作</h2>
<p>涵盖 <code>spawn</code>（内存态 vs <code>persist:true</code> 落盘态）、<code>wait_all</code>（并发汇总等待）、<code>get_result</code>、<code>steer</code>（中途指导修正）、<code>handoff</code>（<strong>子代理间点对点成果交接</strong>，免除主代理中转）、<code>stop</code>、<code>list</code> 与 <code>templates</code>。</p>

<h2 id="delegate-task-brief">3. 📋 <code>delegate_task</code>：服务端强校验的六段式专家委派</h2>
<p>强制填写六段式任务书：<code>agent</code>（专家模板）、<code>task</code>（原子目标）、<code>expected_outcome</code>（验收标准）、<code>required_tools</code>（显式工具白名单）、<code>must_do / must_not_do</code>（红线禁令）与 <code>context</code>（代码上下文）。<strong>空泛笼统的任务书会被服务端直接拦截打回</strong>！</p>

<h2 id="subagent-templates-config">4. 🎭 专家子代理模板库（Subagent Templates）</h2>
<p>在「设置 → 子代理模板」中管理 <code>explore</code>、<code>oracle</code>、<code>review</code>、<code>librarian</code> 等角色，可配置提示词模式（Append/Replace）、工具白名单与专属独立模型/思考强度。</p>

<h2 id="claim-files-lock">5. 🔒 <code>claim_files</code>：多智能体并发改码的文件排他认领锁</h2>
<p>并发修改文件前调用 <code>claim_files</code> 认领排他修改权，防止多个子代理或并发会话同时覆盖同一个文件导致冲突代码丢失！</p>
`,
		contentEn: `
<h2 id="why-subagents">Parallel Subagents & 6-Section Delegation</h2>
<p>Spawn parallel subagents via <code>subagent</code>, enforce server-validated 6-section briefs via <code>delegate_task</code> targeting specialist templates (<code>explore</code>, <code>oracle</code>, <code>review</code>), handoff payloads peer-to-peer, and lock files with <code>claim_files</code>.</p>
`,
	},
	{
		id: "modes-guide",
		group: "agent-modes",
		badge: "Chapter 12",
		icon: "🎯",
		navTitle: "12. 🎯 目标 2.0 与计划模式",
		navTitleEn: "12. 🎯 Goal 2.0 & Plan",
		title: "目标模式 2.0、计划模式与审查者委派模式",
		titleEn: "Goal Mode 2.0, Plan Mode & Reviewer Delegate Mode",
		summary: "详解 pi-web-ui 的三大高阶工程协作模式：双会话证据链审查（Goal Mode 2.0）、底层硬闸门只读规划（Plan Mode）与常驻主审从干（Delegate Mode）。",
		summaryEn: "Deep dive into Goal Mode 2.0's Reviewer-Executor loop, Plan Mode's hard read-only gate, and Reviewer Delegate Mode.",
		contentZh: `
<h2 id="goal-mode-2">1. 🎯 目标模式 2.0：执行会话干活 + 当前会话当审查官</h2>
<p>服务端自动开辟落盘的<strong>执行会话（Executor）</strong>专职写码跑测，<strong>当前主会话化身为审查者（Reviewer）</strong>。每轮执行完毕，服务端自动采集客观证据（<code>goal-evidence.ts</code>：Git Diff、退出码等）注入审查指令，轮次与熔断由服务端严格掌控。</p>

<h2 id="plan-mode">2. 📐 计划模式（Plan Mode）：底层硬闸门只读规划</h2>
<p>目标栏勾选「只规划」：服务端硬闸门剥离一切写工具并拦截代码倾倒，AI 只能勘察代码并生成结构化实施计划看板；确认后点击看板「开始实施」正式解锁编码。</p>

<h2 id="delegate-mode">3. 🛡️ 审查者委派模式（Reviewer Delegate Mode）</h2>
<p>主会话被硬闸门锁定为只读审查角色，用户输入自动派发给常驻执行会话干活，主会话上下文保持清爽纯粹。</p>
`,
		contentEn: `
<h2 id="goal-mode-2">Goal Mode 2.0, Plan Mode & Delegate Mode</h2>
<p>Spawns persistent Executor with Reviewer evidence loop. Plan Mode locks read-only exploration until plan approval. Delegate Mode auto-routes prompts to worker sessions.</p>
`,
	},
	{
		id: "tools-and-markers",
		group: "agent-modes",
		badge: "Chapter 13",
		icon: "🧰",
		navTitle: "13. 🧰 30+ 工具与内联标记",
		navTitleEn: "13. 🧰 30+ Tools & Mark",
		title: "30+ 内置与扩展工具全表、延迟加载与内联标记",
		titleEn: "30+ Built-in Tools, Cache-Safe Lazy Loading & Inline Markers",
		summary: "涵盖核心读写工具、edit_soft 缩进容错、hashline 行哈希编辑、patch 补丁、lsp 语义查询、codemode 沙盒批处理、工具延迟加载与内联标记。",
		summaryEn: "Complete reference for all 30+ tools including edit_soft, hashline, patch, lsp, codemode, eval, cache-safe lazy loading, and inline markers.",
		contentZh: `
<h2 id="advanced-editing-tools">1. 高阶编辑与语义工具矩阵</h2>
<p>包括：<code>edit_soft</code>（缩进容错替换）、<code>hashline</code>（行内容短哈希防漂移编辑）、<code>patch</code>（多文件 Unified Diff 补丁）、<code>lsp</code>（语言服务器语义查询）、<code>codemode</code>（QuickJS 沙盒多工具批处理并发）、<code>eval</code>（状态化 Python/JS 沙盒）以及 <code>claim_files</code>（文件排他认领锁）。支持在设置页逐工具编辑提示词覆盖！</p>

<h2 id="lazy-tool-loading">2. ⚡ 前缀缓存安全的工具延迟加载（<code>load_tools</code>）</h2>
<p>系统提示词工具目录保持恒定，外围工具 Schema 按需通过 <code>load_tools</code> 追加，确保供应商 Prompt Prefix Cache 100% 命中！</p>

<h2 id="all-tools-catalog">3. 30 项可控内置工具速查表</h2>
<div data-dynamic-table="tools-catalog"></div>

<h2 id="inline-markers-syntax">4. ✨ 零延迟内联状态标记（Inline Markers）</h2>
<pre><code class="language-markdown">[[conv:rename:新标题]]
[[todo:add:待办任务项]]
[[todo:done:1]]
[[action:suggest:下一步建议按钮]]
[[notify:完成通知与提示音]]</code></pre>
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
		navTitle: "14. 🔌 MCP 与浏览器控制",
		navTitleEn: "14. 🔌 MCP & Browser",
		title: "MCP 服务器管理、公开市场检索与浏览器页面控制",
		titleEn: "MCP Server Management, Public Market & Browser Control",
		summary: "可视化接入 Stdio/SSE/HTTP MCP 服务器、一键热重载、在线检索公开 MCP 市场，以及使用 Page Picker 扩展操控真实浏览器页面。",
		summaryEn: "Connect Stdio/SSE/HTTP MCP servers with hot-reload, search the public MCP marketplace, and inspect/control live browser tabs via Page Picker.",
		contentZh: `
<h2 id="mcp-servers-panel">1. 🔌 MCP 服务器管理、热重载与公开市场检索</h2>
<p>在「设置 → MCP」中配置 Stdio、SSE 与 HTTP MCP 服务；支持免重启热重载与公开 MCP 市场在线搜索一键导入配置。</p>

<h2 id="browser-page-picker">2. 🌐 浏览器页面控制（<code>browser_page</code> + Page Picker）</h2>
<p>搭配 Chrome/Edge 扩展授权连接，在真实网页上点选拾取 DOM 元素，让 AI 读取页面 DOM、控制台日志、截图并执行交互。</p>
`,
		contentEn: `
<h2 id="mcp-servers-panel">MCP Server Management & Live Browser Control</h2>
<p>Connect MCP servers with hot-reload and public marketplace search. Inspect and control authorized browser tabs via the Page Picker extension.</p>
`,
	},
	{
		id: "bg-tasks-and-scheduler",
		group: "agent-modes",
		badge: "Chapter 15",
		icon: "⏰",
		navTitle: "15. ⏰ 后台任务与定时唤醒",
		navTitleEn: "15. ⏰ Tasks & Scheduler",
		title: "后台长任务管家与定时/延时唤醒调度器",
		titleEn: "Background Tasks Manager & Scheduled Wake-Up Tasks",
		summary: "管理开发服务器等常驻后台进程（BgTasksModal），以及使用 schedule_task 让 AI 创建定时或延时自动唤醒任务。",
		summaryEn: "Monitor and stop background processes/daemons, and schedule delayed or recurring autonomous wake-up tasks.",
		contentZh: `
<h2 id="bg-tasks-manager">1. 🚀 后台长任务管家（<code>BgTasksModal</code>）</h2>
<p>顶栏一键查看所有后台常驻服务实例、PID、实时日志流并一键管理，可配合 <code>pm2-manager</code> 插件进行进程托管。</p>

<h2 id="scheduler-panel">2. ⏰ 定时与延时唤醒调度器（<code>schedule_task</code>）</h2>
<p>AI 可调用 <code>schedule_task</code> 创建延时或周期性唤醒任务；到达预定时间自动唤醒会话并执行巡检，底层采用 <code>armDelay</code> 6 小时分片定时器免疫溢出。</p>
`,
		contentEn: `
<h2 id="bg-tasks-manager">Background Tasks & Scheduled Wake-Ups</h2>
<p>Inspect background process logs from the topbar modal, and schedule autonomous follow-up wake-ups with <code>schedule_task</code>.</p>
`,
	},
	{
		id: "approval-and-security",
		group: "agent-modes",
		badge: "Chapter 16",
		icon: "🔒",
		navTitle: "16. 🔒 三级审批与安全边界",
		navTitleEn: "16. 🔒 Security & Approval",
		title: "三级工具审批门禁与六大安全边界设计",
		titleEn: "Three-Tier Tool Approval Gate & Security Boundaries",
		summary: "详解 approval-rules.json 规则库、三级审批放行记忆、高危 Shell 红色预警、插件动态授权、Loopback 与密钥零下发。",
		summaryEn: "Three-tier tool approval gate, persistent rule sets, plugin permission grants, loopback defaults, Origin validation, and zero API key exposure.",
		contentZh: `
<h2 id="tool-approval-gate">1. 🛡️ 三级工具审批门禁与高危命令预警</h2>
<p>通过 <code>~/.pi-web/approval-rules.json</code> 配置规则库；触发审批时可选择仅允许本次、允许同类操作（内存记忆随过户迁移）或本对话全部允许；对 <code>rm -rf</code> 等危险命令自动做醒目红色高亮预警（<code>bash-danger.tsx</code>）。</p>

<h2 id="security-boundaries">2. 🔐 六大底层安全边界</h2>
<p>默认 Loopback (<code>127.0.0.1</code>)、严格 WebSocket Origin 校验、共享口令鉴权（<code>PI_WEB_TOKEN</code>）、敏感 API 密钥与 SSH 凭据零下发、禁止 <code>$HOME</code> 设为工作区，以及 20 分钟单工具看门狗。</p>
`,
		contentEn: `
<h2 id="security-boundaries">Three-Tier Approval & Security Boundaries</h2>
<p>Approval rules with memory grants, high-risk command warnings, loopback defaults, Origin verification, and zero credential exposure.</p>
`,
	},
	{
		id: "dual-engines-and-presets",
		group: "extensibility",
		badge: "Chapter 17",
		icon: "🔥",
		navTitle: "17. 🔥 双引擎与预设共享",
		navTitleEn: "17. 🔥 Engines & Presets",
		title: "双引擎 (pi & DSH)、OAuth 登录与预设社区共享",
		titleEn: "Dual Engines (pi & DSH), OAuth & Community Presets",
		summary: "pi 与 DeepSeek Harness (DSH) 双引擎切换、提供商 OAuth 一键登录、四道白名单闸门预设导入导出与社区分享仓库。",
		summaryEn: "Switch between pi and DSH engines, authenticate providers via OAuth, and share settings presets safely via 4-gate sanitization.",
		contentZh: `
<h2 id="pi-and-dsh-engines">1. 🔥 双引擎架构（<code>--engine pi | dsh</code>）</h2>
<p>支持原生 pi 引擎与 DeepSeek Harness (DSH) 引擎（内置 Default / Reviewer / Drafter / Vibe Coder 四大预设隔离角色）；底栏实时消费直播帧展示精确 Token 速率。</p>

<h2 id="provider-oauth-and-presets">2. 🔑 提供商 OAuth 登录与预设社区共享</h2>
<p>支持主流 AI 提供商浏览器 OAuth 一键授权；设置预设经四道白名单闸门（格式校验、字段白名单、枚举收敛、Dry-Run 确认）安全净化，一键浏览与分享至 <a href="https://github.com/xing-shuyin/pi-web-ui-presets" target="_blank" rel="noreferrer">pi-web-ui-presets</a> 社区仓库。</p>
`,
		contentEn: `
<h2 id="pi-and-dsh-engines">Dual Engines & 4-Gate Preset Sharing</h2>
<p>Run pi or DSH engine, authenticate providers via OAuth, and export/import/share presets safely through a 4-gate whitelist sanitizer.</p>
`,
	},
	{
		id: "ui-customization-and-export",
		group: "extensibility",
		badge: "Chapter 18",
		icon: "🎨",
		navTitle: "18. 🎨 界面定制与长图导出",
		navTitleEn: "18. 🎨 UI & Long Image",
		title: "界面定制：33 插槽布局、壁纸、长图导出与 10 国语言",
		titleEn: "UI Customization: 33 Slots, Wallpaper, Image Export & 10 Locales",
		summary: "33 个 UI 插槽自由拖拽排布、自定义背景壁纸、左右栏宽度无级拖拽、会话分组文件夹、导出对话长图高清卡片、10 国语言与声音合成器。",
		summaryEn: "Drag-and-drop 33 UI slots, set custom wallpapers, resize panels via sash, organize chats into folders, export conversations as long images, and switch 10 languages.",
		contentZh: `
<h2 id="layout-editor-and-slots">1. 33 个 UI 插槽可视化拖拽排布（<code>LayoutEditor</code>）</h2>
<p>在「设置 → 布局」中，可对顶栏、输入框、底栏、侧边停靠栏等 33 个 UI 插槽进行拖拽排序、重命名或隐藏，还可通过图标编辑器（<code>IconEditor</code>）定制按钮图标。</p>

<h2 id="wallpaper-and-panel-sash">2. 🖼️ 自定义壁纸、主对话宽度与侧栏无级拖拽</h2>
<ul>
	<li><strong>自定义背景壁纸（<code>wallpaper.ts</code>）</strong>：支持上传自定义图片作为聊天区背景，自由调节高斯模糊（Blur）与遮罩透明度；</li>
	<li><strong>侧栏宽度拖拽调节（<code>panel-sash.ts</code>）</strong>：鼠标拖拽分隔条可无级调整左栏会话列表与右栏文件树/终端的宽度，并在设置中切换主聊天区宽度（标准 / 宽屏 / 全宽）。</li>
</ul>

<h2 id="export-long-image-and-groups">3. 📸 对话导出为高清长图与会话分组文件夹</h2>
<ul>
	<li><strong>导出为长图（<code>SaveImageDialog</code>）</strong>：勾选单条或多条对话消息，一键渲染并保存为带代码高亮的高清长图（PNG）分享；</li>
	<li><strong>会话分组文件夹（<code>conv-groups.ts</code>）</strong>：左栏支持创建自定义文件夹分组归类海量历史会话，支持会话置顶与批量管理。</li>
</ul>

<h2 id="ten-locales-and-tts">4. 🌍 10 国界面语言与声音播报</h2>
<p>内置 10 种语言（中、英、德、西、法、意、日、韩、葡、俄）；助手回复支持一键语音朗读播报（TTS），并内置可调音量的 Web Audio 任务完成提示音。</p>
`,
		contentEn: `
<h2 id="layout-editor-and-slots">UI Customization & Long Image Export</h2>
<p>Rearrange 33 UI slots via drag-and-drop, set custom wallpapers, resize sidebars via sash, group conversations into folders, export messages as high-res PNG long images, and switch among 10 UI languages.</p>
`,
	},
	{
		id: "plugins-marketplace",
		group: "extensibility",
		badge: "Chapter 19",
		icon: "🧩",
		navTitle: "19. 🧩 21 款插件市场",
		navTitleEn: "19. 🧩 21 Plugins",
		title: "插件生态与 21 款官方/社区插件全集",
		titleEn: "Plugin Ecosystem & 21 Official/Community Plugins",
		summary: "涵盖 VSCode 编辑器、数据库客户端、微信通道、语音输入、运行轨迹、多仓 Git 等 21 款插件，支持网页一键安装或 CLI 管理。",
		summaryEn: "Browse all 21 official and community plugins with one-click web installation or CLI management.",
		contentZh: `
<h2 id="how-plugins-work">1. 插件管理与批量更新</h2>
<pre><code class="language-bash">pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/webmail
pi-web-ui plugin list
pi-web-ui plugin remove webmail</code></pre>
<p>在网页「设置 → 插件」中可直接点击安装/更新/卸载，顶栏更新面板还支持<strong>一键批量更新所有插件（Update All）</strong>。</p>

<h2 id="plugins-full-catalog">2. 21 款插件完整目录速查</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
		contentEn: `
<h2 id="plugins-full-catalog">Complete Catalog of 21 Plugins</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
	},
	{
		id: "plugin-sdk-and-deployment",
		group: "extensibility",
		badge: "Chapter 20",
		icon: "🛠️",
		navTitle: "20. 🛠️ 插件开发与生产部署",
		navTitleEn: "20. 🛠️ SDK & Deploy",
		title: "插件开发完全手册与生产部署（守护服务 / Docker / Nginx 反代）",
		titleEn: "Plugin SDK v2 & Production Deployment (Daemon, Docker, Nginx)",
		summary: "从零编写 Plugin SDK v2 插件，以及使用 pi-web-ui server 注册跨平台后台自启守护服务、Docker 容器化与 Nginx 子路径反向代理。",
		summaryEn: "Plugin SDK v2 architecture, and production deployment with system daemon, Docker Compose, and Nginx subpath reverse proxy.",
		contentZh: `
<h2 id="plugin-sdk-v2">1. 🛠️ 插件开发完全手册（<code>PLUGIN_API_VERSION = 2</code>）</h2>
<pre><code class="language-text">my-plugin/
├── manifest.json   # 插件元信息、版本、声明式 UI 插槽
├── index.mjs       # 后端：api.registerTool 注册 AI 工具、HTTP 路由
└── ui.mjs          # 前端：mount 挂载到 33 个宿主 UI 插槽之一</code></pre>

<h2 id="daemon-service">2. 🚀 跨平台后台自启守护进程（<code>pi-web-ui server</code>）</h2>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret
pi-web-ui server status      # 查看运行状态与健康检查
pi-web-ui server restart     # 平滑重启服务（npm 升级后必跑）
pi-web-ui server logs -f     # 实时跟随日志
pi-web-ui server uninstall   # 卸载自启服务</code></pre>

<h2 id="docker-and-nginx">3. 🐳 Docker Compose 与 🛡️ Nginx 子路径（<code>/pi/</code>）反向代理</h2>
<pre><code class="language-nginx">server {
    listen 443 ssl;
    server_name your-host;

    location /pi/ {
        proxy_pass http://127.0.0.1:8787/;
        proxy_http_version 1.1;
        proxy_set_header Host $http_host; # 必须用 $http_host 保留端口
    }

    location /ws {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}</code></pre>

<h2 id="all-29-themes-table">4. 🎨 全部 29 套内置主题色板一览</h2>
<div data-dynamic-table="themes-catalog"></div>
`,
		contentEn: `
<h2 id="daemon-service">Plugin SDK v2, Background Daemon, Docker & Nginx Proxy</h2>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret
pi-web-ui server status
pi-web-ui server restart</code></pre>
<div data-dynamic-table="themes-catalog"></div>
`,
	},
];
