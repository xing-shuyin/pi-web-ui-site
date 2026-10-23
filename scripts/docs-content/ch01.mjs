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
	summary: "零基础了解 pi-web-ui：工作台界面全景、两条启动路径、首个 AI 实战任务。",
	summaryEn: "Get started with pi-web-ui from scratch: workspace layout, two launch paths, and your first AI task.",
	contentZh: `
<h2 id="what-is-pi-web-ui">1. 什么是 pi-web-ui？</h2>
<p><strong>pi-web-ui</strong> 是运行在本地的<strong>全栈 AI 编程工作台</strong>：浏览器 Web 版与 Electron 桌面版共用同一套界面。对话、文件树、真 PTY 终端、Git 面板收拢在一个工作台内，无需在多个窗口间复制粘贴。</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>💬 懂代码的深度对话</h4>
		<p>流式输出、划词追问、按轮次回滚改错代码（详见第 04 章）。</p>
	</div>
	<div class="doc-card">
		<h4>🌐 SSH 远程项目直连</h4>
		<p>远端零安装，<code>ssh://</code> 直连后文件树、终端、Git 全量透传（详见第 05 章）。</p>
	</div>
	<div class="doc-card">
		<h4>📁 类 VSCode 文件树</h4>
		<p>拖拽上传、ZIP 打包下载、在线解压、在线预览编辑（详见第 06、07 章）。</p>
	</div>
	<div class="doc-card">
		<h4>🖥️ 真 PTY 终端与 Git</h4>
		<p>交互式命令、AI 透明接管、可视化暂存与 AI 提交说明（详见第 08、09 章）。</p>
	</div>
</div>

<h2 id="workspace-layout">2. 工作台界面全景导览</h2>
<figure class="doc-figure">
	<img src="./assets/site-home-preview.png" alt="pi-web-ui 全景工作台界面导览" />
	<figcaption>
		<strong>图 1.1 全景工作台导览：</strong>
		① 顶栏（工作区路径/会话切换/设置） ｜ ② 主对话区（思维链/工具卡/Diff） ｜ ③ 输入区（快捷短语/模式切换） ｜ ④ 右侧文件树 ｜ ⑤ 底部终端与 Git 面板
	</figcaption>
</figure>

<h3 id="demo-video">🎬 官方 2 分钟实机演示</h3>
<div class="doc-video-card" style="margin:20px 0 28px;background:var(--bg-elev);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:var(--shadow-lg);">
	<div style="position:relative;background:#000;aspect-ratio:16/9;width:100%;overflow:hidden;">
		<video controls preload="metadata" poster="./assets/demo-video-poster.png" playsinline style="width:100%;height:100%;object-fit:contain;display:block;">
			<source src="./assets/demo-video.mp4" type="video/mp4" />
			<source src="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4" type="video/mp4" />
			您的浏览器不支持 HTML5 视频，请直接访问：<a href="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4">下载演示视频</a>
		</video>
	</div>
	<div style="padding:10px 16px;background:var(--bg-elev2);font-size:0.84rem;color:var(--text-dim);">
		<span>✨ 实录涵盖：双引擎流式生成、子代理委派、真 PTY 终端 AI 接管、Git 变更审查一键提交。</span>
	</div>
</div>

<h2 id="thirty-second-quickstart">3. 启动方式：二选一</h2>

<div class="doc-grid-2">
	<div class="doc-card" style="border-color:var(--accent);">
		<h4>🖥️ 方式 A：桌面客户端（免配环境）</h4>
		<p>前往 GitHub Releases 下载 <code>.exe</code> / <code>.zip</code> 便携版 / <code>.dmg</code>，双击即用（详见第 02 章）。</p>
		<p style="margin-top:10px;"><a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer" style="color:var(--accent);font-weight:600;">👉 前往 GitHub Releases 获取最新客户端 ↗</a></p>
	</div>
	<div class="doc-card">
		<h4>💻 方式 B：npm 全局安装</h4>
		<p>需 <strong>Node.js ≥ 22.19.0</strong>，任意项目目录下启动 Web 版：</p>
		<pre style="margin-top:8px;"><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
		<p>仅想试用：<code>npx pi-web-ui@latest</code></p>
	</div>
</div>

<h2 id="first-ai-task">4. 首个任务：让 AI 写一个秒表网页</h2>
<p>浏览器打开 <code>http://localhost:8787</code> 后，发送：</p>
<div class="doc-callout">
	<strong>🎯 复制发送给 AI：</strong>
	<p><code>请在当前目录编写一个带深色模式切换与计时重置功能的秒表网页 index.html，并告诉我如何预览。</code></p>
</div>
<ul>
	<li>AI 调用 <code>write</code> 创建文件，右侧文件树即时刷新高亮；</li>
	<li>不满意就追一句（如 <code>背景换成深蓝渐变，计时字体增大</code>），AI 用 <code>edit</code> 局部修改；</li>
	<li>改错了可按轮次一键回滚（见第 04 章 §4）。</li>
</ul>

<h2 id="chapter-01-faq">5. 新手常见疑问</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 需要自己准备大模型 API Key 吗？</div>
	<div class="doc-faq-a">是的。pi-web-ui 不收订阅费，模型可接 DeepSeek、Claude、OpenAI、Kimi、GLM、硅基流动或本地 Ollama / vLLM。首次启动有配置向导（详见第 02 章 §3）。</div>
</div>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ AI 会未经同意改我电脑上的文件吗？</div>
	<div class="doc-faq-a">不会。文件写入与命令执行受三级审批门禁约束（见第 16 章），且每轮对话前自动记录工作区快照，一键还原（见第 04 章 §4）。</div>
</div>
`,
	contentEn: `
<h2 id="what-is-pi-web-ui">1. What is pi-web-ui?</h2>
<p><strong>pi-web-ui</strong> is a locally-run <strong>full-stack AI coding workbench</strong>: the browser web app and the Electron desktop app share one UI. Chat, file tree, real PTY terminal, and Git panel live in a single cockpit.</p>
<ul>
	<li>💬 Deep chat: streaming output, selection quotes, per-turn rollback (Ch.04);</li>
	<li>🌐 SSH remote projects with zero remote install (Ch.05);</li>
	<li>📁 VSCode-like file tree with upload/zip/preview (Ch.06–07);</li>
	<li>🖥️ Real PTY terminal & visual Git with AI commits (Ch.08–09).</li>
</ul>

<h2 id="workspace-layout">2. Workspace Tour</h2>
<figure class="doc-figure">
	<img src="./assets/site-home-preview.png" alt="pi-web-ui workspace tour" />
	<figcaption>
		<strong>Figure 1.1: Full Workspace Layout:</strong>
		① Top bar ｜ ② Main streaming chat ｜ ③ Composer strip ｜ ④ Right file tree ｜ ⑤ Bottom terminal & Git.
	</figcaption>
</figure>

<h3 id="demo-video-en">🎬 Official 2-Minute Live Demo</h3>
<div class="doc-video-card" style="margin:20px 0 28px;background:var(--bg-elev);border:1px solid var(--border);border-radius:14px;overflow:hidden;">
	<div style="position:relative;background:#000;aspect-ratio:16/9;width:100%;overflow:hidden;">
		<video controls preload="metadata" poster="./assets/demo-video-poster.png" playsinline style="width:100%;height:100%;object-fit:contain;display:block;">
			<source src="./assets/demo-video.mp4" type="video/mp4" />
			<source src="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4" type="video/mp4" />
			Your browser does not support HTML5 video. <a href="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4">Download Demo Video</a>
		</video>
	</div>
</div>

<h2 id="thirty-second-quickstart">3. Launch: Pick One</h2>
<pre><code class="language-bash"># Option A: desktop client from GitHub Releases (no Node.js needed)
# Option B: npm global install (Node.js >= 22.19.0 required)
npm i -g pi-web-ui@latest
cd /path/to/project && pi-web-ui
# → http://localhost:8787</code></pre>

<h2 id="first-ai-task">4. Your First AI Task</h2>
<p>Prompt AI: <code>Create a stopwatch page (index.html) with dark mode toggle.</code> Files appear live in the right file tree; iterate with follow-ups, rollback any bad turn (Ch.04 §4).</p>

<h2 id="chapter-01-faq">5. Beginner FAQs</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ Do I need my own API Key?</div>
	<div class="doc-faq-a">Yes. pi-web-ui charges no subscription. Bring DeepSeek, Claude, OpenAI, or local Ollama keys via the first-run wizard (Ch.02 §3).</div>
</div>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ Can AI modify my files without consent?</div>
	<div class="doc-faq-a">No. Writes and commands go through a 3-tier approval gate (Ch.16), and every turn snapshots the workspace for one-click rollback (Ch.04 §4).</div>
</div>
`,
};
