/**
 * Chapter 01: Overview & Quick Start (新手概览与极速入门)
 */
export const ch01 = {
	id: "overview",
	group: "getting-started",
	badge: "Chapter 01",
	icon: "🚀",
	navTitle: "01. 概览与极速起步",
	navTitleEn: "01. Overview & Quickstart",
	title: "项目概览与新手极速起步指南",
	titleEn: "Project Overview & Beginner Quickstart Guide",
	summary: "带你零基础了解 pi-web-ui：工作台核心界面全景、三大核心优势、30 秒启动环境，以及让 AI 帮写第一个网页实战。",
	summaryEn: "Get started with pi-web-ui from scratch: full workspace layout, top advantages, 30s launch, and building your first app with AI.",
	contentZh: `
<h2 id="what-is-pi-web-ui">1. 什么是 pi-web-ui？</h2>
<p><strong>pi-web-ui</strong> 是一个专为开发者打造的<strong>现代化全栈 AI 编程工作台</strong>。它既可以通过浏览器直接打开使用（Web 端），也提供无需打开浏览器的独立客户端（Electron 桌面版）。</p>
<p>在传统的命令行终端或普通 AI 聊天网页中，你常常需要在不同窗口之间来回复制代码、手动跑测试、手动解决冲突；而在 pi-web-ui 中，所有研发环节都被整合在一个极具美感且功能完备的双栏/三栏工作台中：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>💬 懂代码的深度对话</h4>
		<p>支持流式打字输出、划词高亮精准追问、历史修改差异高亮，以及<strong>一键按轮次撤回回滚修改</strong>，写错代码随时还原。</p>
	</div>
	<div class="doc-card">
		<h4>🌐 SSH 远程项目直连</h4>
		<p>无需在远程服务器安装任何 Web 界面！通过 <code>ssh://</code> 一键直连远程主机，远端文件树、终端和 Git 全套沉浸式透传。</p>
	</div>
	<div class="doc-card">
		<h4>📁 类 VSCode 拖拽文件树</h4>
		<p>右侧直接展现项目工程结构，支持拖拽文件/整个文件夹秒级上传、打包 ZIP 下载、在线解压和在线修改保存。</p>
	</div>
	<div class="doc-card">
		<h4>🖥️ 内置多标签真 PTY 终端与 Git</h4>
		<p>具备完整的 xterm.js 真终端体验，支持交互式命令与 AI 透明接管；可视化 Git 暂存与一键 AI 生成规范提交说明。</p>
	</div>
</div>

<h2 id="workspace-layout">2. 工作台界面全景导览</h2>
<p>首次进入 pi-web-ui，工作台划分为清晰的五大功能分区。我们用一张全景实拍截图带你一目了然：</p>

<figure class="doc-figure">
	<img src="./assets/site-home-preview.png" alt="pi-web-ui 全景工作台界面导览" />
	<figcaption>
		<strong>图 1.1 全景工作台导览：</strong>
		① 顶部导航与会话切换 ｜ ② 主对话与代码流式区 ｜ ③ 底栏提示词与快捷芯片 ｜ ④ 右侧文件树与在线预览 ｜ ⑤ 底部真 PTY 终端与 Git
	</figcaption>
</figure>

<div class="doc-step-box">
	<div class="doc-step-num">1</div>
	<div class="doc-step-content">
		<h4>顶部导航栏 (Top Bar)</h4>
		<p>显示当前连接的工作区路径（本机文件夹或 SSH 远程项目），左侧支持会话下拉切换、一键新建临时/正式会话，右侧提供全局设置、主题切换、模型指示器与状态监控。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">2</div>
	<div class="doc-step-content">
		<h4>主对话视窗 (Main Chat Area)</h4>
		<p>AI 的思考过程（思维链折叠）、工具调用卡片、代码修改差异（Diff）以及回复正文在此流式展现。在任何回复中选中文字，均可点击浮出的「引用」按钮针对该段发起追问。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">3</div>
	<div class="doc-step-content">
		<h4>底栏提示词输入区 (Composer Strip)</h4>
		<p>包含多行自适应输入框、一键快捷短语行（芯片标签，点击即可填入常用提示词）、模式切换器（默认模式、目标模式 2.0、计划模式）以及工具开关与语音输入按钮。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">4</div>
	<div class="doc-step-content">
		<h4>右侧文件工作台 (Right Workbench)</h4>
		<p>实时同步当前项目目录结构。支持新建文件/文件夹、重命名、拖拽文件上传、打包下载 ZIP，并可在右栏直接预览图片、音视频、PDF 和 Office 文档。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">5</div>
	<div class="doc-step-content">
		<h4>底部可折叠面板 (Bottom Drawer)</h4>
		<p>随时可通过快捷键或底栏按钮呼出。内嵌支持 ANSI 彩色与交互式命令的<strong>真 PTY 终端</strong>、<strong>Git 源代码管理面板</strong>（一键 Stage 与 AI Commit）以及<strong>运行轨迹时间线</strong>。</p>
	</div>
</div>

<h2 id="thirty-second-quickstart">3. 新手 3 步：30 秒极速启动</h2>
<p>无需繁复的环境配置，仅需本地安装有 <strong>Node.js (≥ 22.19.0)</strong>，在终端中执行以下命令即可：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 推荐日常使用方式：全局安装最新版</strong>
	<p>全局安装后，在任何想要进行开发的工程目录下打开命令行，敲入 <code>pi-web-ui</code> 即可自动以该目录为工作区启动！</p>
</div>

<pre><code class="language-bash"># 第 1 步：全局安装最新版本
npm i -g pi-web-ui@latest

# 第 2 步：进入你的项目目录并启动
cd /path/to/your-project
pi-web-ui

# 第 3 步：在浏览器访问
# http://localhost:8787</code></pre>

<p>如果你只是想先体验一下、不想在全局安装任何模块，可以使用 <code>npx</code> 临时试跑：</p>
<pre><code class="language-bash">npx pi-web-ui@latest</code></pre>

<h2 id="first-ai-task">4. 新手实战：让 AI 完成你的第一个任务</h2>
<p>启动服务并在浏览器打开后，你会看到清爽的工作台界面。让我们试着给 AI 发送第一条指令：</p>

<div class="doc-callout">
	<strong>🎯 尝试复制以下指令发送给 AI：</strong>
	<p><code>请在当前目录下帮我编写一个带有深色模式切换、计时与重置功能的轻量秒表网页 (index.html)，并自动用当前目录的内置静态服务告诉我如何预览。</code></p>
</div>

<p>发送后你将观察到：</p>
<ul>
	<li>AI 首先在对话中展开思考，规划 HTML 结构与 CSS 样式；</li>
	<li>AI 自动调用 <code>write</code> 工具创建 <code>index.html</code> 文件，右侧文件树瞬间刷新并高亮显示新文件；</li>
	<li>你可以直接在右侧文件树双击该文件查看代码，也可以点击「实时预览」插件直接在界面内把玩你的秒表！</li>
	<li>如果不满意，在对话框输入 <code>把背景换成深蓝渐变色，计时字体增大</code>，AI 会精准调用 <code>edit</code> 进行局部微调。</li>
</ul>

<h2 id="chapter-01-faq">5. 新手常见疑问 (FAQ)</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 我需要自己准备大模型的 API Key 吗？</div>
	<div class="doc-faq-a">是的。pi-web-ui 本身是一个运行在你本地的智能工作台，不收取任何订阅费。你可以使用 DeepSeek（深度求索）、Anthropic Claude、OpenAI、月之暗面 Kimi、智谱 GLM、硅基流动，或者本地运行的 Ollama / vLLM 模型。首次进入系统会弹出向导协助你配置（详见第 02 章）。</div>
</div>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 它会未经我同意就修改我电脑上的文件吗？</div>
	<div class="doc-faq-a">不会！pi-web-ui 拥有严密的三级审批机制（Approval Rules），所有命令执行、文件覆盖均受你掌控；并且每一轮对话前都会自动记录工作区快照，万一改错只需一键即可还原（详见第 04 章与第 16 章）。</div>
</div>
`,
	contentEn: `
<h2 id="what-is-pi-web-ui">1. What is pi-web-ui?</h2>
<p><strong>pi-web-ui</strong> is a modern, full-stack AI coding workbench designed for developers. Available both as a sleek web application in your browser and as a standalone Electron desktop application.</p>
<p>Unlike bare-bones chat apps or fragmented command-line tools, pi-web-ui gathers streaming conversation, selection quotes, turn rollbacks, file tree uploads, real PTY terminals, and visual Git management into a single cohesive cockpit.</p>

<h2 id="workspace-layout">2. Workspace Tour</h2>
<figure class="doc-figure">
	<img src="./assets/site-home-preview.png" alt="pi-web-ui workspace tour" />
	<figcaption>
		<strong>Figure 1.1: Full Workspace Layout:</strong>
		① Top navigation & session selector ｜ ② Main streaming chat ｜ ③ Bottom composer strip ｜ ④ Right file tree ｜ ⑤ Bottom PTY terminal & Git SCM.
	</figcaption>
</figure>

<h2 id="thirty-second-quickstart">3. 30-Second Quickstart</h2>
<pre><code class="language-bash"># Step 1: Install globally (Node.js >= 22.19.0 required)
npm i -g pi-web-ui@latest

# Step 2: Launch in your project directory
cd /path/to/project
pi-web-ui

# Step 3: Open in your browser
# http://localhost:8787</code></pre>

<h2 id="first-ai-task">4. Your First AI Task</h2>
<p>Once opened, try prompting AI: <code>Create a modern stopwatch web page (index.html) with dark mode toggle and sleek animations.</code> Watch the AI create files on the fly and inspect them right inside the right file tree!</p>

<h2 id="chapter-01-faq">5. Beginner FAQs</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ Do I need my own API Key?</div>
	<div class="doc-faq-a">Yes. pi-web-ui is open source and self-hosted on your machine. You can plug in DeepSeek, Claude, OpenAI, or local Ollama endpoints in Chapter 02.</div>
</div>
`,
};
