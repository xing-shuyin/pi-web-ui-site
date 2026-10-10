/**
 * Comprehensive Documentation Chapters for pi-web-ui
 * Supports bilingual display (zh / en), deep anchor links, and full-text search.
 */
export const DOCS_GROUPS = [
	{
		id: "getting-started",
		title: "入门与安装",
		titleEn: "Getting Started",
		items: ["overview", "installation", "cli-and-env"],
	},
	{
		id: "workspace",
		title: "核心工作台指南",
		titleEn: "Core Workspace",
		items: ["chat-and-sessions", "commands-and-shortcuts", "files-and-vision", "terminal-and-git"],
	},
	{
		id: "agent-modes",
		title: "智能体协作与工具",
		titleEn: "Agent Modes & Tools",
		items: ["modes-guide", "tools-and-markers", "approval-and-security", "dual-engines"],
	},
	{
		id: "extensibility",
		title: "插件、主题与预设",
		titleEn: "Plugins, Themes & Presets",
		items: ["settings-and-presets", "plugins-marketplace", "plugin-sdk", "themes-guide"],
	},
	{
		id: "deployment",
		title: "生产部署与运维",
		titleEn: "Deployment & Ops",
		items: ["daemon-and-proxy"],
	},
];

export const DOCS_CHAPTERS = [
	{
		id: "overview",
		group: "getting-started",
		badge: "Chapter 01",
		icon: "🚀",
		title: "项目概览与快速开始",
		titleEn: "Overview & Quick Start",
		summary: "30 秒了解 pi-web-ui 的核心设计理念、架构优势，并用一条命令启动你的浏览器 AI 编程工作台。",
		summaryEn: "Understand pi-web-ui's philosophy, architecture, and launch your browser AI coding cockpit in 30 seconds.",
		contentZh: `
<h2 id="what-is-pi-web-ui">什么是 pi-web-ui？</h2>
<p><strong>pi-web-ui</strong> 是基于 <code>@earendil-works/pi-coding-agent</code> SDK 与 DeepSeek Harness (DSH) 构建的全栈浏览器端 AI 编程智能体工作台。它的核心理念只有一句话：</p>
<div class="doc-callout doc-callout-tip">
	<strong>💡 核心宗旨：打开浏览器，什么都能干（Just open your browser — get all your work done）</strong>
	<p>聊天对话、思考推理、阅读与修改代码、管理多根文件树、使用真 PTY 终端、执行 Git 版本控制、运行多轮自治目标审查 —— 全部浓缩在一个浏览器标签页内，无需在 IDE、终端和聊天窗口之间来回切换。</p>
</div>

<h2 id="thirty-second-quickstart">30 秒极速体验</h2>
<p>确保本机已安装 <strong>Node.js ≥ 22.19.0</strong> 且已配置好 <code>pi</code>（<code>~/.pi/agent</code>），在终端运行：</p>
<pre><code class="language-bash"># 方式一：全局安装（推荐日常使用）
npm i -g pi-web-ui
pi-web-ui

# 方式二：免安装直接运行最新版
npx pi-web-ui

# 启动后在浏览器访问：
# http://localhost:8787</code></pre>

<h2 id="core-architecture">核心架构速览</h2>
<p>pi-web-ui 采用<strong>服务端进程内运行态 + WebSocket 快照流驱动</strong>架构，兼顾极致的流式响应速度与跨设备状态一致性：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>⚡ 60ms 节流快照 + 增量通道</h4>
		<p>服务端作为唯一事实源（Single Source of Truth），以 60ms 节流推送 <code>snapshot_delta</code> 增量状态，同时通过 <code>message_delta</code> 实时通道传输流式文本与思考过程，彻底杜绝前端状态撕裂。</p>
	</div>
	<div class="doc-card">
		<h4>🔄 多会话并发与跨端接管</h4>
		<p>每个项目支持同时运行最多 <strong>8 个独立对话 Runtime</strong>（后台子代理不占额度）。切走对话或关闭标签页后任务仍在服务端后台继续执行；手机与电脑间可随时一键<strong>过户接管（Takeover）</strong>正在运行的会话。</p>
	</div>
	<div class="doc-card">
		<h4>🖥️ 真 PTY 终端与 AI Bash 桥接</h4>
		<p>每个会话拥有独立的 <code>node-pty</code> 终端池，经二进制/文本桥转发至浏览器 <code>xterm.js</code>。开启「默认 bash 走终端」后，AI 执行的每一条命令都在可见终端内实时回显并支持人工按键介入。</p>
	</div>
	<div class="doc-card">
		<h4>🧩 插件 API v2 与 33 个扩展点</h4>
		<p>宿主提供 33 个声明式 UI 插槽（顶栏、输入框、底栏、侧边停靠栏、消息卡片、独立视图等），支持四层优先级合并与自由拖拽排布，目前已内置/收录 <strong>21 款官方与社区插件</strong>。</p>
	</div>
</div>

<h2 id="tech-stack-table">技术栈一览</h2>
<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr><th>层级</th><th>采用技术</th><th>核心职责</th></tr>
		</thead>
		<tbody>
			<tr><td><strong>后端服务</strong></td><td>Node.js (≥22.19) + Express + <code>ws</code></td><td>静态资源托管、<code>/api/health</code>、<code>/api/file</code> Range 流媒体预览、<code>/ws</code> 双向协议通道</td></tr>
			<tr><td><strong>前端界面</strong></td><td>React 19 + Vite 8 + highlight.js</td><td>响应式工作台、Markdown/代码高亮渲染、浮动面板与拖拽布局</td></tr>
			<tr><td><strong>智能体引擎</strong></td><td><code>@earendil-works/pi-coding-agent</code> / DSH</td><td>进程内 Agent 会话、工具注册表、上下文压缩、子代理与目标编排</td></tr>
			<tr><td><strong>终端与 SCM</strong></td><td><code>node-pty</code> + <code>@xterm/xterm</code> + Git CLI</td><td>多标签伪终端、AI Bash 接管、3 秒静默活力探测、Git 暂存/提交/Diff</td></tr>
			<tr><td><strong>桌面端壳</strong></td><td>Electron (<code>desktop/</code>)</td><td>自动挑选空闲端口拉起同一套后端服务，原生窗口体验，网页版代码零改动</td></tr>
		</tbody>
	</table>
</div>
`,
		contentEn: `
<h2 id="what-is-pi-web-ui">What is pi-web-ui?</h2>
<p><strong>pi-web-ui</strong> is a full-stack browser cockpit for AI coding agents (<code>@earendil-works/pi-coding-agent</code> and DeepSeek Harness) built around a single principle:</p>
<div class="doc-callout doc-callout-tip">
	<strong>💡 Core Philosophy: Just open your browser — get all your work done</strong>
	<p>Chat, inspect thinking blocks, edit files, browse multi-root file trees, run native PTY terminals, manage Git commits/diffs, and orchestrate autonomous Goal Mode 2.0 reviews — all in one browser tab.</p>
</div>

<h2 id="thirty-second-quickstart">30-Second Quick Start</h2>
<p>Make sure you have <strong>Node.js ≥ 22.19.0</strong> and a configured <code>pi</code> installation (<code>~/.pi/agent</code>):</p>
<pre><code class="language-bash"># Option 1: Global install (recommended)
npm i -g pi-web-ui
pi-web-ui

# Option 2: Run directly with npx
npx pi-web-ui

# Open in your browser:
# http://localhost:8787</code></pre>

<h2 id="core-architecture">Architecture Highlights</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>⚡ 60ms Snapshot Engine + Delta Stream</h4>
		<p>The server acts as the single source of truth, pushing throttled <code>snapshot_delta</code> updates every 60ms alongside real-time <code>message_delta</code> frames.</p>
	</div>
	<div class="doc-card">
		<h4>🔄 8 Concurrent Sessions & Seamless Takeover</h4>
		<p>Run up to 8 independent agent runtimes per project concurrently. Switch tabs or devices anytime and take over active runs transactionally.</p>
	</div>
	<div class="doc-card">
		<h4>🖥️ Native PTY Terminal & AI Bash Takeover</h4>
		<p>Per-conversation <code>node-pty</code> terminals bridged to <code>xterm.js</code>. Route AI bash calls directly into visible terminals with live 3-second silence liveness detection.</p>
	</div>
	<div class="doc-card">
		<h4>🧩 Plugin SDK v2 & 33 UI Extension Slots</h4>
		<p>33 declarative UI slots with 4-layer arrangement merging and drag-and-drop customization, powering 21 official and community plugins.</p>
	</div>
</div>
`,
	},
	{
		id: "installation",
		group: "getting-started",
		badge: "Chapter 02",
		icon: "📦",
		title: "安装指南（Windows / macOS / Linux / Termux / 桌面端）",
		titleEn: "Installation Guide (All Platforms & Desktop)",
		summary: "涵盖 npm 全局安装、npm 12+ 原生脚本放行、Linux 编译工具链、Android Termux 避坑指南与 Electron 桌面版。",
		summaryEn: "Complete installation instructions for npm, npm 12+ native scripts, Linux build tools, Android Termux, and Electron desktop.",
		contentZh: `
<h2 id="standard-install">标准安装（Windows / macOS / Linux）</h2>
<pre><code class="language-bash"># 推荐：全局安装最新稳定版
npm i -g pi-web-ui@latest

# 或者免安装直接运行
npx pi-web-ui@latest

# 或者从源码克隆并本地全局链接
git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
npm install && npm run build
npm i -g .</code></pre>

<h2 id="npm-12-allow-scripts">npm ≥ 12 原生模块脚本放行</h2>
<p>如果你使用的是 <strong>npm 12 及以上版本</strong>，npm 默认会拦截依赖包的安装脚本（提示 <code>npm warn install-scripts … blocked</code>）。由于内置终端依赖原生模块 <code>node-pty</code>，安装时请显式放行脚本：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="linux-build-deps">🐧 Linux 编译工具链准备</h2>
<p><code>node-pty</code> 仅提供 macOS 与 Windows 的预编译二进制包，在 Linux 上安装时会自动回退到 <code>node-gyp</code> 源码编译。请在安装 <code>pi-web-ui</code> 之前先安装 C/C++ 编译工具链与 Python 3：</p>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get update && sudo apt-get install -y build-essential python3

# Fedora / RHEL / Rocky
sudo dnf install -y python3 make gcc-c++

# Arch Linux
sudo pacman -S --needed base-devel python</code></pre>
<div class="doc-callout doc-callout-warn">
	<strong>⚠️ 常见报错提示</strong>
	<p>若看到 <code>Rebuilding because directory .../node-pty/prebuilds/linux-x64 does not exist</code> 及 <code>make: g++: No such file or directory</code>，说明缺少上述 C++ 编译依赖，安装后再执行一次 <code>npm i -g pi-web-ui</code> 即可。</p>
</div>

<h2 id="android-termux">📱 Android / Termux 完整安装避坑指南</h2>
<p>pi-web-ui 完全支持在 Android 手机/平板的 <a href="https://termux.dev" target="_blank" rel="noreferrer">Termux</a> 环境中运行（配合手机端手势抽屉体验极佳）。由于 Termux 的 NDK 环境特殊，请按以下三步操作：</p>
<pre><code class="language-bash"># 1. 安装编译工具链（Termux 中 clang 即提供 gcc/g++）
pkg update
pkg install nodejs python make clang git

# 2. 注入 GYP 环境变量（解决 node-pty 1.1.0 的 Android 编译配置缺失）
mkdir -p ~/.gyp
cat << 'EOF' > ~/.gyp/include.gypi
{
  'variables': {
    'android_ndk_path': ''
  }
}
EOF

# 3. 执行全局安装（若使用 Node.js v24+，需开启 C++20 标志）
CXXFLAGS="-std=c++20" npm i -g pi-web-ui@latest</code></pre>

<h2 id="pi-extension-webui">在 pi CLI 中通过 <code>/webui</code> 扩展启动</h2>
<p>如果你已经在终端中使用 <code>pi</code> 命令行，可以把 <code>pi-web-ui</code> 作为 pi 扩展加载，在对话中随时输入 <code>/webui</code> 一键拉起浏览器界面：</p>
<pre><code class="language-bash"># 安装为 pi package
pi install npm:pi-web-ui

# 然后在 pi 交互会话中输入：
/webui</code></pre>

<h2 id="desktop-electron">🖥️ Electron 桌面客户端（Desktop App）</h2>
<p>除了浏览器访问外，仓库内置了轻量级 <strong>Electron 桌面壳（<code>desktop/</code>）</strong>：启动时自动在本地挑选随机空闲端口拉起同一套后端服务，自带原生应用窗口与系统托盘，网页版代码零改动。</p>
<pre><code class="language-bash"># 在仓库根目录运行桌面开发版
npm run build
npm --prefix desktop install
npm --prefix desktop start

# 打包当前系统桌面安装包（Windows NSIS / macOS DMG / Linux AppImage）
npm --prefix desktop run dist</code></pre>
`,
		contentEn: `
<h2 id="standard-install">Standard Installation (Windows / macOS / Linux)</h2>
<pre><code class="language-bash"># Global installation (recommended)
npm i -g pi-web-ui@latest

# Or run immediately via npx
npx pi-web-ui@latest</code></pre>

<h2 id="npm-12-allow-scripts">npm ≥ 12 Native Build Scripts</h2>
<p>npm 12+ blocks install scripts by default. Because <code>node-pty</code> is a native addon, allow its build script explicitly:</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="linux-build-deps">🐧 Linux Build Prerequisites</h2>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get install -y build-essential python3
# Fedora / RHEL
sudo dnf install -y python3 make gcc-c++
# Arch
sudo pacman -S --needed base-devel python</code></pre>

<h2 id="android-termux">📱 Android / Termux Guide</h2>
<pre><code class="language-bash">pkg install nodejs python make clang git
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
		summary: "所有命令行启动参数与环境变量的完整对照表，支持实时筛选搜索。",
		summaryEn: "Complete reference table for all CLI flags and environment variables with interactive filtering.",
		contentZh: `
<h2 id="cli-overview">命令行语法概览</h2>
<p>每一个核心配置既可以通过命令行 <code>--flag</code> 传入，也可以通过环境变量设置（命令行参数优先级高于环境变量）：</p>
<pre><code class="language-bash"># 基础前台启动（默认监听 http://127.0.0.1:8787）
pi-web-ui

# 指定端口、默认工作区目录与访问口令
pi-web-ui --port 9000 --cwd /path/to/project --token my-secret-pass

# 切换为 DeepSeek Harness (DSH) 引擎启动
pi-web-ui --engine dsh --port 8787</code></pre>

<h2 id="cli-env-interactive-table">启动参数与环境变量速查表</h2>
<div data-dynamic-table="cli-flags"></div>

<h2 id="sdk-resolution">引擎版本跟随机制（<code>PI_WEB_SDK</code>）</h2>
<div class="doc-callout doc-callout-tip">
	<strong>🔄 智能跟随最新全局 pi 引擎（#321）</strong>
	<p>默认 <code>PI_WEB_SDK=global</code>：启动时会自动扫描机器上的全局 <code>pi</code> CLI 等祖先路径，若发现比自带版本<strong>更新</strong>的 SDK 副本则自动采用最高版本；若未安装或更旧则安全回退到自带副本。在顶栏「更新面板」中还会直观展示「当前运行中版本 vs 机器上可用版本」，并提供一键升级入口。如需复现问题或锁定自带版本，可设 <code>PI_WEB_SDK=bundled</code>。</p>
</div>
`,
		contentEn: `
<h2 id="cli-overview">CLI Usage Overview</h2>
<pre><code class="language-bash">pi-web-ui --port 9000 --cwd /path/to/project --token my-secret-pass
pi-web-ui --engine dsh --port 8787</code></pre>
<h2 id="cli-env-interactive-table">CLI Flags & Environment Variables Table</h2>
<div data-dynamic-table="cli-flags"></div>
`,
	},
	{
		id: "chat-and-sessions",
		group: "workspace",
		badge: "Chapter 04",
		icon: "💬",
		title: "对话工作台与多会话并发",
		titleEn: "Chat Cockpit & Concurrent Sessions",
		summary: "深入了解流式快照、回复中插队补充（Steer）、历史编辑重问分支、每项目 8 会话并发、临时对话与跨设备过户接管。",
		summaryEn: "Master streaming snapshots, mid-turn steering, branch re-asking, 8-session concurrency, ephemeral chats, and cross-device takeover.",
		contentZh: `
<h2 id="streaming-and-steer">流式对话与中途补充（Steer 插队）</h2>
<ul>
	<li><strong>思考块与工具卡实时计时</strong>：每一步思考过程、工具调用与 Bash 输出都会实时显示状态（<code>执行中 → 已结束 · 等模型 · 耗时</code>）。</li>
	<li><strong>补充消息（Steer）</strong>：当 AI 正在流式回复或执行工具链时，你无需等待它停下，直接在输入框发送跟进指令即可排队。当前回合工具结算后会自动注入你的补充指令（对应 pi CLI 的 Enter 打断语义）。</li>
	<li><strong>排队气泡可撤回（↩）</strong>：处于排队中的消息气泡既可以点击 <code>✕</code> 移除，也可以点击 <code>↩ 撤回</code> —— 文字会安全回到输入框（若输入框已有草稿则另起一行追加，绝不覆盖正在打的字）。</li>
	<li><strong>编辑重问（Fork 分支）</strong>：点击任意历史用户消息的「编辑重问」，即可从该节点分叉出一条新分支重新提问，原分支历史完好保留。</li>
</ul>

<h2 id="concurrent-sessions">每项目多对话并发（最多 8 个独立 Runtime）</h2>
<p>pi-web-ui 为每个对话维护独立的服务端 Agent Runtime：</p>
<ul>
	<li>切换对话或切换项目后，原对话仍在后台继续流式生成与执行工具；</li>
	<li>左栏顶部的<strong>「正在运行的对话」</strong>区域实时显示后台会话的流式进度，点击即可瞬间切回；</li>
	<li>单项目支持同时活跃运行最多 <strong>8 个用户对话</strong>（后台派发的 Subagent 子代理不计入此上限）。</li>
</ul>

<h2 id="ephemeral-and-takeover">临时对话（Ephemeral）与跨设备过户（Takeover）</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>👻 临时对话（内存无痕）</h4>
		<p>新建对话时可选择「临时对话」：全程仅驻留在服务端内存中，不写入磁盘会话历史，适合随手提问或敏感代码片段分析。若聊到一半觉得有保存价值，点击顶栏<strong>「转为正式对话」</strong>即可一键落盘（会话 ID 保持不变）。</p>
	</div>
	<div class="doc-card">
		<h4>📲 跨设备事务性过户（Takeover）</h4>
		<p>每个浏览器标签页拥有独立的 <code>clientId</code>。当你在电脑上发起长任务后出门用手机打开页面，或在断连 30 分钟宽限期（<code>PI_WEB_OFFLINE_ROWS_TTL_MS</code>）内重连，只需在会话列表点击<strong>「接管（Takeover）」</strong>，即可将正在运行的 Runtime 事务性完整迁移到当前设备继续交互（含未决问卷与浏览器桥）。</p>
	</div>
</div>

<h2 id="compaction-and-soft-cap">上下文可视化压缩与软上限（Soft Cap）</h2>
<ul>
	<li><strong>压缩过程透明可见</strong>：触发上下文压缩时，顶部横幅实时显示计时（如 <code>正在压缩 · 12s</code>）及触发原因（手动 <code>/compact</code> / 阈值触发 / 溢出恢复）；完成后生成一张可展开的「已压缩 N tokens」摘要卡片。</li>
	<li><strong>压缩软上限（Soft Cap）</strong>：在设置面板中可设定上下文软上限 Token 数 <code>C</code>，服务端会动态计算 <code>reserveTokens = W - C</code> 实时注入 pi 引擎，让长对话在达到昂贵长窗口阶梯计价前提前优雅压缩。</li>
</ul>
`,
		contentEn: `
<h2 id="streaming-and-steer">Streaming & Mid-Turn Steering</h2>
<p>Send follow-up instructions while the agent is still running tools — your steer message is injected immediately after the current tool settles. Queued messages can be cancelled (✕) or recalled (↩) back into your draft composer without overwriting existing text.</p>

<h2 id="concurrent-sessions">Multi-Session Concurrency & Takeover</h2>
<p>Up to 8 conversations can run simultaneously per project in the background. Switch between desktop and mobile seamlessly using transactional <strong>Session Takeover</strong> (with a 30-minute offline grace period).</p>
`,
	},
	{
		id: "commands-and-shortcuts",
		group: "workspace",
		badge: "Chapter 05",
		icon: "⌨️",
		title: "斜杠命令与键盘快捷键速查",
		titleEn: "Slash Commands & Keyboard Shortcuts",
		summary: "内置斜杠命令与桌面/触屏快捷键全集，助你双手不离键盘高效操控全局。",
		summaryEn: "Complete reference for slash commands and keyboard shortcuts across desktop and touch devices.",
		contentZh: `
<h2 id="slash-commands-ref">内置斜杠命令（Slash Commands）</h2>
<p>在输入框中输入 <code>/</code> 即可弹出命令选择器，支持匹配<strong>内置命令、扩展命令、提示词模板与技能（Skills）</strong>：</p>
<div data-dynamic-table="slash-commands"></div>

<h2 id="keyboard-shortcuts-ref">键盘快捷键全表</h2>
<div data-dynamic-table="shortcuts"></div>
`,
		contentEn: `
<h2 id="slash-commands-ref">Built-in Slash Commands</h2>
<div data-dynamic-table="slash-commands"></div>

<h2 id="keyboard-shortcuts-ref">Keyboard Shortcuts</h2>
<div data-dynamic-table="shortcuts"></div>
`,
	},
	{
		id: "files-and-vision",
		group: "workspace",
		badge: "Chapter 06",
		icon: "📁",
		title: "多根文件树、零污染附件与视觉桥",
		titleEn: "Multi-Root Files, Attachments & Vision Bridge",
		summary: "为什么 pi-web-ui 的文件引用不会撑爆上下文？详解 lines/reference 模式、多根工作区、GBK 预览与非多模态模型视觉桥。",
		summaryEn: "Learn how path/line references prevent context bloat, how multi-root workspaces work, and how Vision Bridge enables image Q&A on text-only models.",
		contentZh: `
<h2 id="multi-root-workspace">多根工作区（Multi-Root Workspace）</h2>
<p>除了当前项目的主工作目录（<code>cwd</code>）外，你可以在右侧文件树面板为当前项目挂载最多 <strong>8 个额外工作区根目录</strong>：</p>
<ul>
	<li>所有额外根目录在权限上等同于工作区内，文件树浏览、搜索与插件只读访问免额外弹窗授权；</li>
	<li>AI 默认只在主 <code>cwd</code> 下执行命令，同时可跨根查阅关联项目代码（如前端仓 + 后端仓 + 共享组件库）。</li>
</ul>

<h2 id="attachment-modes">零上下文污染的附件机制（Reference vs Lines）</h2>
<p>传统 Web UI 往往将上传或引用的文件内容整块塞入 Prompt，瞬间耗尽几万 Token。pi-web-ui 采用<strong>按需路径引用</strong>设计：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📌 <code>reference</code>（路径引用模式）</h4>
		<p>从文件树点「+ 附加」或上传文件时，仅向模型发送轻量级文件路径引用标签，模型只在真正需要时通过 <code>read</code> 工具分页读取对应片段。</p>
	</div>
	<div class="doc-card">
		<h4>📏 <code>lines</code>（行号范围精确引用）</h4>
		<p>在文件预览弹窗中选中代码行并点击「引用选中行」，会生成精确到起止行号的 <code>lines</code> 徽章卡片，让 AI 直奔目标代码段。</p>
	</div>
</div>

<h2 id="vision-bridge">🖼️ 视觉桥（Vision Bridge）：让纯文本模型也能「看图」</h2>
<p>支持直接 <code>Ctrl+V</code> 粘贴剪贴板截图或拖拽上传图片。如果你当前使用的主力编码模型（如部分 DeepSeek / 开源代码模型）<strong>不支持原生多模态图片输入</strong>：</p>
<div class="doc-callout doc-callout-tip">
	<strong>🌉 自动视觉转写（Vision Bridge）</strong>
	<p>只需在设置面板配置一个辅助视觉模型（Vision Provider/Model），当你向非视觉主模型发送图片时，服务端会自动先调取视觉桥模型将截图中的 UI 布局、报错堆栈或架构图转写为高密度结构化描述，再无缝注入主编码模型上下文，并在附件卡上标明「已转写（bridged）」。</p>
</div>

<h2 id="file-preview-and-present">智能编码嗅探预览与 <code>present_files</code> 作品卡</h2>
<ul>
	<li><strong>GBK / UTF-8 自动回退解码</strong>：内置文件预览器（上限 512KB）采用 <code>UTF-8 → GBK → latin1</code> 智能嗅探链路，打开国内历史遗留的 GBK/GB2312 中文源码、日志或 CSV 绝不乱码。</li>
	<li><strong>音视频 HTTP Range 流与 HTML 沙盒预览</strong>：支持大体积视频/音频拖动进度条流式播放，HTML 文件支持一键在隔离沙盒或新标签页渲染预览。</li>
	<li><strong><code>present_files</code> 交付卡片</strong>：当 AI 生成了图表、截图、报告或构建产物时，会自动调用 <code>present_files</code> 在聊天流中展示精美预览卡（支持立即聚焦弹窗查看、在系统文件管理器中显示或安全下载）。</li>
</ul>
`,
		contentEn: `
<h2 id="multi-root-workspace">Multi-Root Workspace</h2>
<p>Mount up to 8 additional workspace root directories per project in the file tree panel for cross-repo reference while keeping agent execution scoped to the primary <code>cwd</code>.</p>

<h2 id="attachment-modes">Zero-Bloat Attachments & Vision Bridge</h2>
<p>Attachments pass lightweight path references (<code>reference</code> or <code>lines</code>) instead of dumping raw file contents into the prompt. For text-only coding models, <strong>Vision Bridge</strong> automatically transcribes pasted screenshots via a configured vision model.</p>
`,
	},
	{
		id: "terminal-and-git",
		group: "workspace",
		badge: "Chapter 07",
		icon: "💻",
		title: "内置真 PTY 终端与 Git 源代码管理",
		titleEn: "Built-in PTY Terminal & Git SCM",
		summary: "多标签 node-pty 终端、AI Bash 可见接管、3 秒静默活力探测以及内置 Git Stage/Commit/Diff 完整工作流。",
		summaryEn: "Multi-tab node-pty terminals, AI Bash live takeover, 3-second liveness probing, and built-in Git source control.",
		contentZh: `
<h2 id="multi-tab-pty">多标签真 PTY 终端</h2>
<p>每个对话都配有一个独立的服务端 <code>TerminalManager</code>，底层使用 <code>node-pty</code> 启动真实系统 Shell（Windows 下支持 PowerShell / Git Bash / CMD，macOS/Linux 下为 zsh/bash）：</p>
<ul>
	<li>支持新建多个终端标签页、重命名、字体大小缩放与随主题自动变色；</li>
	<li>终端输出的本地文件路径与 URL 支持直接点击跳转或打开文件预览；</li>
	<li>新开终端自动定位于当前项目的工作区根目录（<code>cwd</code>）。</li>
</ul>

<h2 id="ai-bash-takeover">AI Bash 可见终端接管（<code>terminalBash</code>）</h2>
<p>在设置面板开启<strong>「默认 bash 走终端」</strong>后，AI 调用 <code>bash</code> 工具将不再是黑盒后台进程，而是直接分流到可见终端面板中运行：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>⚡ 一次性命令（<code>persist=false</code>）</h4>
		<p>普通构建与测试命令在独立一次性终端流中实时滚动显示输出，执行完毕后自动采集退出码与输出回传给模型。</p>
	</div>
	<div class="doc-card">
		<h4>🔒 持久终端（<code>persist=true</code> · <code>ai-bash</code>）</h4>
		<p>当需要保持 <code>cd</code> 目录状态、激活 Python 虚拟环境（<code>venv/conda</code>）、維持 SSH 会话或驱动交互式 REPL（如 <code>y/n</code> 确认提示）时，AI 会复用名为 <code>ai-bash</code> 的持久终端，你也可以随时在终端里直接按键协助输入！</p>
	</div>
</div>

<h2 id="liveness-detection">🩺 3 秒无输出活力探测（Liveness Probe）</h2>
<p>当命令运行超过 3 秒没有新输出时，底栏状态指示器会自动探测子进程树状态，帮你一眼区分：</p>
<ul>
	<li>🟢 <strong>正常静默计算中</strong>（如 <code>tsc</code>、<code>cargo build</code>、大数据处理正在消耗 CPU/IO）；</li>
	<li>🟡 <strong>等待交互输入</strong>（子进程阻塞在 stdin 读取，提醒你打开终端输入 <code>y/n</code> 或密码）；</li>
	<li>🔴 <strong>疑似卡死告警</strong>（如在 Windows Git Bash 中误用了交互命令或未设超时的挂起任务）。</li>
</ul>

<h2 id="builtin-git-scm">🌿 内置 Git 源代码管理面板</h2>
<p>点击右侧栏的 Git 图标即可打开源代码管理面板：</p>
<ul>
	<li>清晰分组展示 <strong>Staged（已暂存）</strong>、<strong>Changes（工作区修改）</strong> 与 <strong>Untracked（未跟踪文件）</strong>；</li>
	<li>点击任意文件即可在内置对比视图中查看语法高亮的 Unified / Split Diff；</li>
	<li>支持单文件或全部一键 Stage / Unstage / Discard（丢弃修改）；</li>
	<li>在顶部输入框填写 Commit Message 后一键提交，并支持 Pull / Push / Stash 及分支切换。</li>
</ul>
`,
		contentEn: `
<h2 id="multi-tab-pty">Multi-Tab PTY Terminal & AI Bash Takeover</h2>
<p>Enable <strong>Default bash in terminal</strong> in Settings to watch every AI command run live in an <code>xterm.js</code> terminal. With <code>persist=true</code>, the agent reuses a persistent <code>ai-bash</code> shell retaining <code>cd</code>, <code>venv</code>, and SSH sessions.</p>

<h2 id="builtin-git-scm">Built-in Git SCM Panel</h2>
<p>Stage, unstage, inspect syntax-highlighted diffs, commit, push, pull, and stash directly from the right sidebar.</p>
`,
	},
	{
		id: "modes-guide",
		group: "agent-modes",
		badge: "Chapter 08",
		icon: "🎯",
		title: "目标模式 2.0、计划模式与审查者模式",
		titleEn: "Goal Mode 2.0, Plan Mode & Reviewer Delegate Mode",
		summary: "详解 pi-web-ui 最具代表性的三大高阶工程协作模式：如何用硬闸门与双会话证据链解决复杂软件工程任务。",
		summaryEn: "Deep dive into Goal Mode 2.0's Reviewer-Executor architecture, Plan Mode's hard read-only gate, and Reviewer Delegate Mode.",
		contentZh: `
<h2 id="goal-mode-2">🎯 目标模式 2.0：把目标自治变成「执行者 + 审查官」双会话对话</h2>
<p>在处理复杂长周期需求时，单会话 AI 极易出现「自说自话、测试没跑通就宣称完成、或陷入死循环」。<strong>目标模式 2.0（Goal Mode 2.0）</strong>在服务端构建了严谨的双会话编排链路：</p>
<div class="doc-callout doc-callout-tip">
	<strong>🏛️ 目标模式 2.0 铁律架构（<code>server/goal-service.ts</code>）</strong>
	<ol>
		<li><strong>角色分离</strong>：当前对话作为<strong>审查者（Reviewer）</strong>，服务端自动另起一个落盘的<strong>执行对话（Executor）</strong>专门干活；</li>
		<li><strong>客观执行证据自动注入（Goal Evidence）</strong>：每当执行对话跑完一轮，服务端会自动收集工作区 Git 状态、变更文件 Diff 摘要、最近执行的命令与退出码等客观证据（<code>goal-evidence.ts</code>），连同执行者的汇报一起注入审查对话；</li>
		<li><strong>服务端全权管控轮次与熔断</strong>：最大轮次（Turns）、代次（Generations）与连续停滞熔断全部由服务端状态机严格把控，严禁模型自行调用 wait/spawn 绕过监督；</li>
		<li><strong>随时可干预或中止</strong>：审查过程完全在当前主对话中透明呈现，用户在任意一方点击中止（Abort）即刻安全停止循环。</li>
	</ol>
</div>

<h2 id="plan-mode">📐 计划模式（Plan Mode）：底层硬闸门只读规划</h2>
<p>面对陌生大型代码库或高风险重构时，在目标栏展开行勾选<strong>「只规划（Plan Only）」</strong>即可进入计划模式：</p>
<ul>
	<li><strong>服务端硬闸门剥离写工具</strong>：不仅在系统提示词中约束，更在底层动态剔除 <code>write</code>、<code>edit</code>、<code>edit_soft</code> 等一切写操作工具，并拦截在回复正文中倾倒大段完整源码的行为；</li>
	<li><strong>专注勘察与方案设计</strong>：智能体只能使用 <code>read</code>、<code>grep</code>、<code>find</code> 等只读工具摸清代码脉络，最终产出一份结构化的<strong>实施计划看板（Plan Board）</strong>；</li>
	<li><strong>一键解锁实施</strong>：当你审阅并认可计划看板后，点击看板上的<strong>「开始实施」</strong>按钮，系统即刻解除只读闸门并按计划步骤自动推进编码落地。</li>
</ul>

<h2 id="delegate-mode">🛡️ 审查者委派模式（Reviewer Delegate Mode）</h2>
<p>开启<strong>审查者模式</strong>后，主会话将常驻保持「只审不干」的架构师身份：</p>
<ul>
	<li>主会话被硬闸门拦截一切写类工具与子代理派发，上下文永远不会被几千行的工具输出和编译日志污染；</li>
	<li>你在主会话输入的开发指令会自动投递给绑定的<strong>常驻执行对话</strong>去完成修改与测试；</li>
	<li>注意优先级：若同时开启计划模式与审查者模式，<strong>计划模式优先级高于委派模式</strong>（先在当前会话完成只读规划）。</li>
</ul>
`,
		contentEn: `
<h2 id="goal-mode-2">🎯 Goal Mode 2.0: Reviewer + Executor Dual-Session Loop</h2>
<p>In Goal Mode 2.0, your current conversation acts as the <strong>Reviewer</strong> while the server spawns a persistent <strong>Executor</strong> conversation. After each executor turn, server-extracted objective evidence (Git diffs, modified files, command exit codes) is injected into the Reviewer prompt. Turn limits, generations, and stagnation circuit-breakers are enforced server-side.</p>

<h2 id="plan-mode">📐 Plan Mode: Hard Server-Side Read-Only Gate</h2>
<p>Strips all write tools at the runtime gate and prevents large code dumps until you review the generated Plan Board and click <strong>Start Implementation</strong>.</p>

<h2 id="delegate-mode">🛡️ Reviewer Delegate Mode</h2>
<p>Keeps your main conversation strictly read-only for architectural review while automatically dispatching user prompts to a persistent worker conversation.</p>
`,
	},
	{
		id: "tools-and-markers",
		group: "agent-modes",
		badge: "Chapter 09",
		icon: "🧰",
		title: "内置工具目录、延迟加载与内联标记",
		titleEn: "Built-in Tools Catalog, Lazy Loading & Inline Markers",
		summary: "完整拆解 pi-web-ui 的可配置工具体系、零缓存破坏的 Schema 延迟加载机制，以及零延迟内联状态标记语法。",
		summaryEn: "Explore all configurable agent tools, prompt-cache-safe lazy tool loading, and zero-latency inline marker syntax.",
		contentZh: `
<h2 id="lazy-tool-loading">⚡ 工具延迟加载（Lazy Tool Loading）：省 Token 且绝不破坏前缀缓存</h2>
<p>当启用大量内置工具、插件工具与 MCP 工具时，如果把几十个工具的完整 JSON Schema 全部塞进每轮请求，不仅消耗数千上下文 Token，而且一旦动态增删工具定义就会导致 LLM 供应商的 <strong>Prompt Prefix Cache（前缀缓存）失效</strong>，大幅增加首字延迟与费用。</p>
<div class="doc-callout doc-callout-tip">
	<strong>🛡️ 前缀缓存 100% 命中的延迟加载机制（<code>PI_WEB_TOOL_LAZY_LOADING=1</code>）</strong>
	<ul>
		<li>系统提示词中的 <code>{{tools}}</code> 目录始终保持完整且固定（仅包含工具名 + 一行精炼英文触发摘要，≤80 字符），<strong>绝不随工具激活状态改变</strong>；</li>
		<li>未激活的高频外围工具初始不挂载庞大参数 Schema；当模型需要调用某工具时，先通过一次轻量级 <code>load_tools</code> 调用按需挂载其完整 Schema（支持一次加载 1~20 个工具）；</li>
		<li>工具注册表采用<strong>只追加（Append-Only）</strong>策略，确保整个长对话周期内系统提示词前缀零变动，完美命中 Anthropic / OpenAI / DeepSeek 的前缀缓存！</li>
	</ul>
</div>

<h2 id="all-tools-catalog">内置与扩展工具全表（支持分类筛选）</h2>
<div data-dynamic-table="tools-catalog"></div>

<h2 id="inline-markers-syntax">✨ 零延迟内联标记（Inline Markers）</h2>
<p>对于更新待办事项、重命名对话、生成下一步建议按钮或发送完成通知等轻量级状态操作，如果让模型发起正式 Tool Call 会白白浪费一轮模型往返（Roundtrip）。pi-web-ui 独创了<strong>内联标记流式拦截器</strong> —— 模型只需在回复正文中输出特定标记，服务端与前端会实时执行对应动作并将标记从显示文本中无痕剥离：</p>
<pre><code class="language-markdown"># 1. 自动重命名当前对话标题
[[conv:rename:重构订单支付状态机与幂等校验]]

# 2. 维护顶栏实时任务清单（Todo Panel）
[[todo:add:编写支付回调签名校验单元测试]]
[[todo:done:1]]
[[todo:clear:all]]

# 3. 在输入框上方生成一键后续操作建议芯片（Action Chips）
[[action:suggest:运行全量单元测试]]
[[action:suggest:查看 Git Diff,prompt=请帮我检查当前工作区的 git diff 并总结变更点]]
[[action:clear:all]]

# 4. 触发浏览器桌面通知与提示音
[[notify:数据库迁移脚本已生成并通过校验]]</code></pre>
`,
		contentEn: `
<h2 id="lazy-tool-loading">⚡ Prompt-Cache-Safe Lazy Tool Loading</h2>
<p>With <code>PI_WEB_TOOL_LAZY_LOADING=1</code> (default), the system prompt catalog remains immutable so provider prompt prefix caches stay 100% warm, while full JSON parameter schemas for secondary tools are attached on demand via <code>load_tools</code>.</p>

<h2 id="all-tools-catalog">Configurable Agent Tools Reference</h2>
<div data-dynamic-table="tools-catalog"></div>
`,
	},
	{
		id: "approval-and-security",
		group: "agent-modes",
		badge: "Chapter 10",
		icon: "🔒",
		title: "工具审批门禁与安全边界设计",
		titleEn: "Tool Approval Gate & Security Architecture",
		summary: "从三级工具审批放行、持久化规则库到默认 Loopback、Origin 校验与 API Key 零下发的全方位安全体系。",
		summaryEn: "Three-tier tool approval gate, persistent rule sets, loopback defaults, Origin validation, and zero API key exposure.",
		contentZh: `
<h2 id="tool-approval-gate">🛡️ 三级工具审批门禁（<code>server/tool-approval.ts</code>）</h2>
<p>当你希望在 AI 执行高风险操作（如执行特定 Shell 命令、修改核心配置或调用外部工具）前进行人工把关时，可开启工具审批门禁：</p>
<ul>
	<li><strong>持久化规则库（<code>~/.pi-web/approval-rules.json</code>）</strong>：支持按工具名与参数特征配置 <code>allow</code>（直接放行）、<code>ask</code>（弹窗询问）、<code>deny</code>（直接拦截）；</li>
	<li><strong>三级灵活放行</strong>：当触发审批弹窗时，你可以选择：
		<ol>
			<li><strong>仅允许本次</strong>：单次放行当前工具调用；</li>
			<li><strong>允许同类操作</strong>：在当前会话内存中记住同类签名（随会话过户自动迁移）；</li>
			<li><strong>本对话全部允许</strong>：当前会话免除后续审批弹窗。</li>
		</ol>
	</li>
</ul>

<h2 id="security-boundaries">🔐 六大安全边界保障</h2>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>1. 默认仅绑定本机回环（Loopback）</h4>
		<p>服务端默认监听 <code>127.0.0.1:8787</code>，不向局域网或公网暴露端口，除非你显式指定 <code>--host 0.0.0.0</code> 或通过受控反向代理暴露。</p>
	</div>
	<div class="doc-card">
		<h4>2. 严格的 WebSocket Origin / Host 校验</h4>
		<p><code>/ws</code> 握手阶段严格比对浏览器 <code>Origin</code> 与 <code>Host</code>（包含主机名与端口），彻底防御跨站 WebSocket 劫持（CSWSH）。</p>
	</div>
	<div class="doc-card">
		<h4>3. 共享口令鉴权（<code>PI_WEB_TOKEN</code>）</h4>
		<p>设置 <code>--token</code> 后，所有静态页面、<code>/api/*</code> 接口与 <code>/ws</code> 连接均受口令保护（支持 URL 首次自动种下经安全编码的 <code>pi_web_token</code> Cookie）。</p>
	</div>
	<div class="doc-card">
		<h4>4. API 密钥与 Provider Headers 零下发</h4>
		<p><code>~/.pi/agent/models.json</code> 中的敏感 <code>headers</code>（如 API Key / Authorization）在服务端脱敏，<strong>永远不会发送到浏览器前端</strong>；前端编辑模型其他字段时服务端自动保留原密钥。</p>
	</div>
	<div class="doc-card">
		<h4>5. 禁止将 <code>$HOME</code> 设为工作区根</h4>
		<p>服务端硬性拦截将用户家目录根设为工作区，防止文件树递归扫描遇到海量缓存目录或损坏的网络挂载点导致事件循环卡死。</p>
	</div>
	<div class="doc-card">
		<h4>6. 20 分钟工具看门狗（Watchdog）</h4>
		<p>单个工具执行默认享有 20 分钟看门狗保护（<code>PI_WEB_TOOL_TIMEOUT_MS</code>），超时仅安全中止当前卡死会话，不影响服务端与其他后台会话（交互问卷 <code>ask_user_question</code> 自动豁免）。</p>
	</div>
</div>
`,
		contentEn: `
<h2 id="tool-approval-gate">🛡️ Three-Tier Tool Approval Gate</h2>
<p>Configure <code>allow</code>, <code>ask</code>, or <code>deny</code> rules in <code>~/.pi-web/approval-rules.json</code>. Approve once, allow similar calls in memory, or allow all for the current conversation.</p>

<h2 id="security-boundaries">🔐 Six Security Boundaries</h2>
<p>Loopback-only default (<code>127.0.0.1</code>), strict WebSocket <code>Origin</code>/<code>Host</code> verification, optional <code>PI_WEB_TOKEN</code> auth, server-side provider header redaction, <code>$HOME</code> root protection, and a 20-minute per-tool watchdog.</p>
`,
	},
	{
		id: "dual-engines",
		group: "agent-modes",
		badge: "Chapter 11",
		icon: "🔥",
		title: "双引擎支持：pi 与 DeepSeek Harness (DSH)",
		titleEn: "Dual Engines: pi & DeepSeek Harness (DSH)",
		summary: "一套 Web 工作台同时支持 pi SDK 与 DeepSeek Harness (DSH) 引擎，详解四大 DSH 预置角色与实时底栏统计。",
		summaryEn: "Run either the pi SDK or DeepSeek Harness (DSH) engine with four isolated preset roles and live frame token metrics.",
		contentZh: `
<h2 id="pi-vs-dsh">一套界面，双核驱动</h2>
<p>pi-web-ui 默认使用进程内 <code>@earendil-works/pi-coding-agent</code> 引擎，同时也原生支持切换到 <strong>DeepSeek Harness (DSH)</strong> 引擎：</p>
<pre><code class="language-bash"># 使用默认 pi 引擎启动
pi-web-ui

# 切换到 DSH 引擎启动（自动探测本机 dsh 或通过 --dsh-cli 指定路径）
pi-web-ui --engine dsh
pi-web-ui --engine dsh --dsh-cli /path/to/deepseek-harness/dist/cli.js</code></pre>

<h2 id="dsh-presets">DSH 四大预置角色与 <code>file:</code> 克隆隔离</h2>
<p>在 DSH 引擎模式下，pi-web-ui 提供四个开箱即用的预置角色（Presets），每个预设通过 <code>preset-clones.ts</code> 采用独立的 <code>file:</code> 克隆挂载隔离，互不串味：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>1. 🛠️ Default（全能工程默认）</h4>
		<p>标准全工具链开发模式，适合日常编码、调试与构建任务。</p>
	</div>
	<div class="doc-card">
		<h4>2. 🔍 Reviewer（深度代码审查官）</h4>
		<p>强化代码审计、边界条件检查、安全漏洞扫描与架构一致性评审。</p>
	</div>
	<div class="doc-card">
		<h4>3. ✍️ Drafter（方案与文档起草）</h4>
		<p>适合撰写技术设计文档（RFC）、API 规范与变更说明。</p>
	</div>
	<div class="doc-card">
		<h4>4. ⚡ Vibe Coder（极速原型创造）</h4>
		<p>面向快速迭代、UI 原型验证与创意编程的高响应预设。</p>
	</div>
</div>

<h2 id="dsh-live-metrics">底栏实时直播帧统计（<code>dsh-usage.ts</code>）</h2>
<p>针对 DSH 引擎，底栏统计组件同时消费流式直播帧（Live Frames）与 <code>assistant/message.usage</code>，实时滚动展示输入/输出 Token、缓存命中率与上下文占用百分比；问卷与技能过滤钩子精准挂载在 <code>agent</code> scope，确保交互零丢失。</p>
`,
		contentEn: `
<h2 id="pi-vs-dsh">Dual-Engine Architecture</h2>
<p>Launch with <code>--engine pi</code> (default) or <code>--engine dsh</code> (DeepSeek Harness). In DSH mode, choose between four isolated presets (<strong>Default</strong>, <strong>Reviewer</strong>, <strong>Drafter</strong>, <strong>Vibe Coder</strong>) with live token frame telemetry.</p>
`,
	},
	{
		id: "settings-and-presets",
		group: "extensibility",
		badge: "Chapter 12",
		icon: "🎛️",
		title: "设置面板、子代理模板与社区预设共享",
		titleEn: "Settings, Subagent Templates & Preset Sharing",
		summary: "自定义系统提示词、配置专家子代理模板（Subagent Templates），以及通过四道白名单闸门安全导入/导出/分享设置预设。",
		summaryEn: "Customize system prompts, configure specialist subagent templates, and export/import/share settings presets safely.",
		contentZh: `
<h2 id="subagent-templates">🤖 专家子代理模板（Subagent Templates）</h2>
<p>在「设置 → 子代理模板」中，你可以定义全局共享的专家角色（如 <code>explore</code> 代码探索员、<code>oracle</code> 架构顾问、<code>review</code> 审查员、<code>librarian</code> 文档检索员）：</p>
<ul>
	<li><strong>提示词策略</strong>：支持 <code>append</code>（在基础系统提示词后追加角色指令）或 <code>replace</code>（完全替换系统提示词）；</li>
	<li><strong>工具白名单</strong>：为每个模板精确勾选允许使用的工具子集（防止子代理权限泛滥）；</li>
	<li><strong>独立模型与思考强度</strong>：可为特定模板指定专属模型（例如让轻量快速模型跑 <code>explore</code> 检索，让高推理模型跑 <code>oracle</code> 决策；留空则自动跟随主对话模型）；</li>
	<li><strong>一键启停</strong>：停用后的模板对 AI 完全不可见，不占任何提示词预算。</li>
</ul>

<h2 id="preset-sharing">🎁 设置预设导入、导出与社区共享（<code>pi-web-ui-presets</code>）</h2>
<p>觉得自己调教的系统提示词、工具开关、逐工具文案覆盖和子代理模板非常好用？pi-web-ui 内置了完整的<strong>设置预设交换生态</strong>：</p>
<div class="doc-callout doc-callout-tip">
	<strong>🛡️ 四道白名单安全净化闸门（<code>server/preset-share.ts</code>）</strong>
	<p>导入任何外部预设 JSON 时，服务端绝不直接盲目合并，而是依次经过：<strong>① 格式与版本校验 → ② 严格字段白名单过滤（<code>preset-fields.ts</code>，剔除一切未知字段与敏感凭据）→ ③ 工具名与枚举合法性收敛 → ④ Dry-Run 变更预览确认</strong>，确认无误后才应用到你的环境。</p>
</div>
<ul>
	<li><strong>浏览社区分享</strong>：在设置面板点击「浏览分享」，即可实时拉取 <a href="https://github.com/xing-shuyin/pi-web-ui-presets" target="_blank" rel="noreferrer">xing-shuyin/pi-web-ui-presets</a> 官方社区仓库中的精选预设，一键预览并应用；</li>
	<li><strong>一键分享你的预设</strong>：填写预设名称与简介即可一键分享（自动调用本机 <code>gh</code> CLI 或 GitHub Token API 提交，未安装 <code>gh</code> 时自动复制 JSON 并打开预填好的 GitHub Issue 页面，点一下 Submit 即可完成投稿！）。</li>
</ul>
`,
		contentEn: `
<h2 id="subagent-templates">🤖 Specialist Subagent Templates</h2>
<p>Create reusable specialist personas with custom prompts (append/replace), strict tool whitelists, and optional dedicated models/thinking levels.</p>

<h2 id="preset-sharing">🎁 Community Preset Sharing (4-Gate Sanitizer)</h2>
<p>Export, import, browse, and one-click share settings presets via <a href="https://github.com/xing-shuyin/pi-web-ui-presets" target="_blank" rel="noreferrer">pi-web-ui-presets</a>. Every imported JSON passes through a strict 4-gate server-side whitelist sanitizer with dry-run preview.</p>
`,
	},
	{
		id: "plugins-marketplace",
		group: "extensibility",
		badge: "Chapter 13",
		icon: "🧩",
		title: "插件系统与 21 款官方/社区插件全集",
		titleEn: "Plugin Ecosystem & 21 Official/Community Plugins",
		summary: "无需重编译即可扩展 UI 面板与 AI 工具！浏览全部 21 款官方与社区插件，支持 Web 界面一键安装或 CLI 管理。",
		summaryEn: "Extend UI panels and AI tools without rebuilding. Browse all 21 official and community plugins with one-click or CLI installation.",
		contentZh: `
<h2 id="how-plugins-work">插件如何管理与安装？</h2>
<p>pi-web-ui 的插件存放在数据目录 <code>~/.pi-web/plugins/&lt;id&gt;/</code> 下，支持两种安装与管理方式：</p>
<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🌐 方式一：Web 设置面板一键安装</h4>
		<p>打开「设置 → 插件」，在「插件市场」列表中直接点击<strong>安装 / 更新 / 启用 / 卸载</strong>，或粘贴任意 GitHub 仓库地址安装，无需重启即可热加载生效。</p>
	</div>
	<div class="doc-card">
		<h4>💻 方式二：命令行 <code>pi-web-ui plugin</code></h4>
		<p>支持从 GitHub 简写、GitHub 子目录、完整 Git URL 或本地目录直接安装，升级时自动保留插件本地的 <code>config.json</code> 凭据配置。</p>
	</div>
</div>

<pre><code class="language-bash"># 安装官方仓库子目录插件
pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/webmail

# 安装社区独立仓库插件
pi-web-ui plugin install EinErste/pi-web-multigit

# 安装本地正在开发的插件目录（带 --force 覆盖更新）
pi-web-ui plugin install ./my-plugin --name my-plugin --force

# 查看已安装插件 / 卸载插件
pi-web-ui plugin list
pi-web-ui plugin remove webmail</code></pre>

<h2 id="plugins-full-catalog">21 款官方与社区插件全表（点击可复制安装命令）</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
		contentEn: `
<h2 id="how-plugins-work">Installing & Managing Plugins</h2>
<pre><code class="language-bash">pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/webmail
pi-web-ui plugin install EinErste/pi-web-multigit
pi-web-ui plugin list
pi-web-ui plugin remove webmail</code></pre>
<h2 id="plugins-full-catalog">Complete Catalog of 21 Plugins</h2>
<div data-dynamic-table="plugins-catalog"></div>
`,
	},
	{
		id: "plugin-sdk",
		group: "extensibility",
		badge: "Chapter 14",
		icon: "🛠️",
		title: "插件开发完全手册 (Plugin SDK v2 & 33 UI 插槽)",
		titleEn: "Plugin Developer Guide (SDK v2 & 33 UI Slots)",
		summary: "从零编写一个包含前端视图、33 个宿主 UI 插槽挂载与后端 AI 工具注册的 pi-web-ui 插件，并发布到官方市场。",
		summaryEn: "Build a full-stack pi-web-ui plugin with UI slots, backend AI tools, HTTP routes, and publish to the official catalog.",
		contentZh: `
<h2 id="plugin-anatomy">插件目录结构（<code>PLUGIN_API_VERSION = 2</code>）</h2>
<p>一个标准的 pi-web-ui 插件只需放在 <code>~/.pi-web/plugins/&lt;plugin-id&gt;/</code> 下，包含最多三个文件：</p>
<pre><code class="language-text">my-plugin/
├── manifest.json   # 必填：插件元信息、版本、API 版本(2)、配置 Schema 与声明式 UI 插槽
├── index.mjs       # 可选（后端）：注册 AI 工具 (registerTool)、HTTP 路由、定时任务与事件监听
└── ui.mjs          # 可选（前端）：渲染独立面板、顶栏/底栏按钮、消息卡片或代码块渲染器</code></pre>

<h2 id="manifest-schema">1. 编写 <code>manifest.json</code></h2>
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

<h2 id="backend-plugin-api">2. 后端入口 <code>index.mjs</code>：给 AI 注册专属工具与路由</h2>
<pre><code class="language-javascript">// index.mjs
export async function activate(api) {
  // 1. 注册一个可供 AI 调用的工具
  api.registerTool({
    name: "devkit_ping",
    label: "DevKit Ping",
    description: "Check target service latency and return structured diagnostics.",
    promptSnippet: "check service health or latency via DevKit",
    parameters: {
      type: "object",
      properties: {
        url: { type: "string", description: "Target URL to probe" }
      },
      required: ["url"]
    },
    async execute(_toolCallId, params) {
      const start = Date.now();
      const res = await fetch(params.url);
      return {
        content: [{ type: "text", text: \`HTTP \${res.status} in \${Date.now() - start}ms\` }],
        details: { status: res.status, latencyMs: Date.now() - start }
      };
    }
  });

  // 2. 注册插件专属 HTTP 路由 (/api/plugins/hello-devkit/status)
  api.registerHttpRoute("GET", "/status", async (_req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
  });
}</code></pre>

<h2 id="frontend-ui-slots">3. 前端入口 <code>ui.mjs</code> 与 33 个宿主 UI 扩展点</h2>
<p>宿主提供 <strong>33 个声明式 UI 插槽（UI Slots）</strong>，涵盖：顶栏（<code>topbar-*</code>）、输入框工具条（<code>composer-*</code>）、状态底栏（<code>statusbar-*</code>）、侧边停靠栏（<code>sidedock-*</code>）、消息头部/尾部（<code>message-*</code>）、围栏代码块（<code>fenced-code</code>）与主视图（<code>view</code>）。所有插槽遵循<strong>「宿主默认 &lt; 插件声明 &lt; 插件 arrange &lt; 用户偏好」四层合并规则</strong>，插件严禁直接篡改宿主 DOM：</p>
<pre><code class="language-javascript">// ui.mjs
export function mount(container, host) {
  container.innerHTML = \`
    <div style="padding: 20px;">
      <h3>🛠️ Hello DevKit Panel</h3>
      <button id="ask-btn">让 AI 检查服务状态</button>
    </div>
  \`;
  container.querySelector("#ask-btn").onclick = () => {
    host.sendPrompt("请调用 devkit_ping 检查 https://api.github.com 的响应延迟");
  };
  return () => { container.innerHTML = ""; };
}</code></pre>
<div class="doc-callout doc-callout-warn">
	<strong>📌 插件升级铁律：修改代码必须递增 <code>version</code></strong>
	<p>内置同步器（<code>syncBuiltinPlugins</code>）与插件更新器均以 <code>compareVersions(srcVer, tgtVer) &gt; 0</code> 作为覆盖更新的唯一权威判定。修改插件代码后请务必同步递增 <code>manifest.json</code>（及 <code>package.json</code>）中的 <code>version</code>。</p>
</div>
`,
		contentEn: `
<h2 id="plugin-anatomy">Plugin Structure (<code>PLUGIN_API_VERSION = 2</code>)</h2>
<p>Each plugin lives in <code>~/.pi-web/plugins/&lt;id&gt;/</code> with <code>manifest.json</code>, optional backend <code>index.mjs</code> (for AI tools, HTTP routes, cron tasks, MCP bridges), and optional frontend <code>ui.mjs</code> (mounting into any of the 33 declarative host UI slots).</p>
`,
	},
	{
		id: "themes-guide",
		group: "extensibility",
		badge: "Chapter 15",
		icon: "🎨",
		title: "主题系统与 29 套内置配色定制指南",
		titleEn: "Theme System & 29 Built-in Palettes Guide",
		summary: "探索 29 套开箱即用的深浅色/赛博/国风朱批主题，或只需几十行 CSS 变量打造你自己的专属全站 + 终端主题。",
		summaryEn: "Explore all 29 built-in dark, light, cyberpunk, and vermilion themes, or craft your own custom CSS theme.",
		contentZh: `
<h2 id="theme-architecture">主题工作原理：CSS 变量基线 + 终端联动</h2>
<p>pi-web-ui 的所有样式基线统一在 <code>web/src/styles.css</code> 中定义，而每一套主题都是一个标准的 <code>.css</code> 文件：</p>
<ul>
	<li>不仅可覆盖背景色（<code>--bg</code>、<code>--bg-elev</code>）、文字色（<code>--text</code>）、强调色（<code>--accent</code>），还能通过完整的 CSS 选择器定制圆角、阴影、毛玻璃与字体；</li>
	<li><strong>内置终端与代码高亮自动跟随主题</strong>：主题文件中的 <code>--term-bg</code>、<code>--term-fg</code> 及 <code>--term-black</code> ~ <code>--term-bright-white</code> 16 色调色板会自动实时同步给 <code>xterm.js</code> 终端实例！</li>
	<li><strong>自定义主题热加载</strong>：将你的 <code>my-theme.css</code> 放入 <code>~/.pi-web/themes/</code> 目录，打开设置面板或输入 <code>/reload</code> 即可立即选用。</li>
</ul>

<h2 id="custom-theme-template">最小自定义主题模板</h2>
<pre><code class="language-css">/* theme-name: 极光暗夜 */
/* theme-name-en: Aurora Night */
/* theme-group: custom */

:root {
  color-scheme: dark;
  --bg: #0b0f19;
  --bg-elev: #111827;
  --bg-elev2: #1f2937;
  --bg-hover: #283548;
  --border: #2e3c51;
  --text: #f3f4f6;
  --text-dim: #9ca3af;
  --accent: #38bdf8;
  --accent-dim: rgba(56, 189, 248, 0.16);
  --green: #34d399;
  --red: #f87171;
  --amber: #fbbf24;

  /* xterm.js 终端配色同步 */
  --term-bg: #080c14;
  --term-fg: #e5e7eb;
  --term-cursor: #38bdf8;
}</code></pre>
<div class="doc-callout doc-callout-tip">
	<strong>🔍 对比度质量守卫</strong>
	<p>向官方仓库贡献主题时，CI 单测（<code>theme-inline-code-contrast.test.ts</code> 与 <code>css-tokens.test.ts</code>）会自动校验所有 CSS 变量是否先定义后引用，并确保内联代码（Inline Code）前景色与背景色的 WCAG 对比度 <strong>≥ 2:1</strong>。</p>
</div>

<h2 id="all-29-themes-table">内置 29 套主题色板一览（可在首页「主题演播室」实时交互预览）</h2>
<div data-dynamic-table="themes-catalog"></div>
`,
		contentEn: `
<h2 id="theme-architecture">How Themes Work</h2>
<p>Drop any <code>.css</code> file into <code>~/.pi-web/themes/</code> to customize the entire UI and <code>xterm.js</code> terminal palette simultaneously.</p>
<h2 id="all-29-themes-table">All 29 Built-in Themes</h2>
<div data-dynamic-table="themes-catalog"></div>
`,
	},
	{
		id: "daemon-and-proxy",
		group: "deployment",
		badge: "Chapter 16",
		icon: "🌐",
		title: "后台守护进程、Docker 与 Nginx 反向代理",
		titleEn: "Daemon Service, Docker & Nginx Reverse Proxy",
		summary: "一条命令注册 macOS/Linux/Windows 开机自启守护服务，以及 Docker 容器化与 Nginx 子路径 (/pi/) 反向代理完整配置。",
		summaryEn: "One-command background daemon across macOS, Linux, and Windows, Docker Compose setup, and Nginx subpath reverse proxy.",
		contentZh: `
<h2 id="daemon-service">🚀 内置跨平台守护服务（<code>pi-web-ui server</code>）</h2>
<p>不想每次打开终端手动运行？pi-web-ui 内置了零依赖的跨平台守护进程管理器，自动适配三大操作系统的原生自启机制（<strong>均无需管理员/root 权限</strong>）：</p>
<ul>
	<li><strong>macOS</strong>：自动生成并加载 <code>~/Library/LaunchAgents/com.pi-web-ui.plist</code>（<code>launchd</code>）；</li>
	<li><strong>Linux</strong>：自动生成并启用 <code>~/.config/systemd/user/pi-web-ui.service</code>（<code>systemd --user</code>）；</li>
	<li><strong>Windows</strong>：写入当前用户注册表自启项 <code>HKCU\\...\\Run</code> + 无窗口后台启动包装器。</li>
</ul>
<pre><code class="language-bash"># 安装并立即启动开机自启服务（可附带自定义端口、目录与口令）
pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret

# 日常管理命令
pi-web-ui server status      # 查看运行状态、PID、监听地址与健康检查
pi-web-ui server restart     # 平滑重启服务（npm 升级版本后必跑）
pi-web-ui server stop        # 停止后台服务
pi-web-ui server start       # 启动后台服务
pi-web-ui server logs -f     # 实时跟随查看服务日志
pi-web-ui server uninstall   # 停止并彻底移除开机自启配置</code></pre>

<h2 id="docker-deployment">🐳 Docker & Docker Compose 部署</h2>
<pre><code class="language-bash"># 使用仓库内置的 docker-compose.yml 一键后台启动
docker compose up -d

# 或直接使用 docker run 启动并挂载工作区与配置目录
docker run -d \\
  --name pi-web-ui \\
  -p 127.0.0.1:8787:8787 \\
  -e PI_WEB_TOKEN=change-me \\
  -v ~/.pi:/root/.pi \\
  -v ~/.pi-web:/root/.pi-web \\
  -v $(pwd):/workspace \\
  pi-web-ui:latest</code></pre>

<h2 id="nginx-reverse-proxy">🛡️ Nginx 子路径反向代理（<code>https://your-host/pi/</code>）</h2>
<p>pi-web-ui 默认绑定 <code>127.0.0.1:8787</code>，服务端所有内部路由与静态资源均经过 <code>appUrl()</code> 包装，完美支持通过同机 Nginx 以<strong>根路径或子路径（如 <code>/pi/</code>）</strong>对外提供 HTTPS 访问：</p>
<pre><code class="language-nginx"># pi-web-ui 运行在 127.0.0.1:8787，对外暴露为 https://your-host/pi/
server {
    listen 443 ssl;
    server_name your-host;

    # 1. 应用主入口（注意 proxy_pass 末尾斜杠剥离 /pi/ 前缀）
    location /pi/ {
        proxy_pass http://127.0.0.1:8787/;
        proxy_http_version 1.1;
        # 关键：必须用 $http_host（保留端口号），否则 Origin 校验会因端口丢失返回 403！
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 2. WebSocket 实时通道（必须原样转发 Host 与 Upgrade 头）
    location /ws {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
    }

    # 3. 根路径静态资源与健康检查转发
    location /assets/         { proxy_pass http://127.0.0.1:8787; }
    location = /favicon.svg   { proxy_pass http://127.0.0.1:8787; }
    location = /api/file      { proxy_pass http://127.0.0.1:8787; }
    location = /api/health    { proxy_pass http://127.0.0.1:8787; }
}</code></pre>
<div class="doc-callout doc-callout-warn">
	<strong>⚠️ Nginx 反代三大避坑要点</strong>
	<ol>
		<li><strong><code>proxy_set_header Host $http_host;</code> 缺一不可</strong>：pi-web-ui 的 Origin 安全校验同时比对 hostname 与端口号。若写成 <code>$host</code>（会丢弃非标端口）或不写（变成 <code>127.0.0.1:8787</code>），WebSocket 连接会被 403 拒绝（表现为页面能打开但一直显示重连中）。</li>
		<li><strong>何时需要设置 <code>PI_WEB_ALLOW_ORIGINS</code>？</strong>普通同源反代无需设置；仅当前端浏览器看到的 Origin 与反代传给后端的 Host 不一致时，才需传入 <code>--allow-origins https://your-host:port</code>。</li>
		<li><strong>谨慎开启 <code>proxy_protocol</code></strong>：除非链路全程配置了 PROXY 协议头，否则在 Nginx 或 frp 中开启会导致普通直连请求全部被拒。完整可运行配置示例见仓库 <code>deploy/nginx-subpath.conf</code>。</li>
	</ol>
</div>
`,
		contentEn: `
<h2 id="daemon-service">🚀 Cross-Platform Background Daemon (<code>pi-web-ui server</code>)</h2>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/workspace --token your-secret
pi-web-ui server status
pi-web-ui server restart
pi-web-ui server logs -f</code></pre>

<h2 id="nginx-reverse-proxy">🛡️ Nginx Subpath Reverse Proxy</h2>
<p>Always pass <code>proxy_set_header Host $http_host;</code> on both <code>/pi/</code> and <code>/ws</code> locations so WebSocket Origin verification (which compares hostname and port) succeeds without 403 errors.</p>
`,
	},
];
