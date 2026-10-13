/**
 * Chapter 02: Full-Platform Installation, Desktop Releases & Setup Wizard (全平台安装、桌面Release下载与配置向导)
 */
export const ch02 = {
	id: "installation",
	group: "getting-started",
	badge: "Chapter 02 · 核心指引",
	icon: "📦",
	navTitle: "02. 全平台安装与下载",
	navTitleEn: "02. Install & Releases",
	title: "全平台安装指南、桌面客户端 Release 下载与首次配置向导",
	titleEn: "Installation Guide, Desktop Releases & First-Time Setup",
	summary: "小白与新手首选：无需配置 Node.js 即可下载 Windows / macOS / Linux 桌面安装包；亦支持 npm 全局安装、Termux 移动端与首次大模型接入向导。",
	summaryEn: "Download pre-built Desktop installers (.exe / .dmg / .AppImage) without installing Node.js, plus npm global setup, Android Termux, and model wizard.",
	contentZh: `
<h2 id="desktop-releases-download">1. 🖥️ 官方桌面客户端 Release 下载（新手首选 · 免配环境）</h2>
<p>如果你不想在命令行敲代码，或者你的电脑尚未安装 Node.js，<strong>最推荐直接下载官方打包好的预编译桌面客户端 (Desktop App)</strong>。双击安装即用，体验就和使用普通桌面软件一模一样：</p>

<div class="doc-callout doc-callout-tip">
	<strong>🎁 官方 Release 资产发布通道</strong>
	<p>GitHub Releases 页面每次版本发布都会自动构建 Windows、macOS 与 Linux 的独立可执行安装包：<br />
	👉 <strong><a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer" style="font-weight:700;color:var(--accent);">点击前往 GitHub Releases 获取最新官方客户端安装包 ↗</a></strong>
	</p>
</div>

<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>操作系统平台</th>
				<th>安装包类型</th>
				<th>文件名格式</th>
				<th>新手适用场景与特性</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>🪟 Windows 10 / 11 (64位)</strong></td>
				<td>图形标准安装包</td>
				<td><code>pi-web-ui-Setup-*.exe</code></td>
				<td>双击自动安装、创建桌面快捷方式，支持后台静默升级</td>
			</tr>
			<tr>
				<td><strong>🪟 Windows 便携绿色版</strong></td>
				<td>免安装 ZIP 压缩包</td>
				<td><code>pi-web-ui-*-win-x64-portable.zip</code></td>
				<td><strong>🌟 强烈推荐企业内网或办公机！</strong> 内置独立 Node.js 与 Git 运行环境，解压即开即用，无需系统管理员权限</td>
			</tr>
			<tr>
				<td><strong>🍎 macOS (Apple Silicon / Intel)</strong></td>
				<td>DMG 磁盘映像</td>
				<td><code>pi-web-ui-*.dmg</code></td>
				<td>原生支持 M1/M2/M3/M4 系列芯片与 Intel 架构，拖拽进 Applications 即可</td>
			</tr>
			<tr>
				<td><strong>🐧 Linux (Ubuntu/Debian/Arch)</strong></td>
				<td>AppImage 独立单文件</td>
				<td><code>pi-web-ui-*.AppImage</code></td>
				<td>单文件跨主流发行版运行，赋予执行权限后双击即可启动</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="desktop-troubleshooting">桌面客户端首次运行新手避坑</h3>
<div class="doc-step-box">
	<div class="doc-step-num">🪟</div>
	<div class="doc-step-content">
		<h4>Windows SmartScreen 提示“已保护你的电脑”？</h4>
		<p>开源软件由于暂未购买昂贵的商业机构代码签名证书，Windows 可能会弹出蓝色提示框。只需点击提示框中的 <strong>「更多信息」</strong>，随后点击 <strong>「仍要运行」</strong> 即可顺利完成安装。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🍎</div>
	<div class="doc-step-content">
		<h4>macOS 提示“无法打开，因为无法验证开发者”？</h4>
		<p>按住键盘 <code>Control</code> 键点击应用图标（或鼠标右键单击），在弹出的快捷菜单中选择 <strong>「打开」</strong>，并在弹窗中再次点击「打开」即可永久加入白名单信任。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🐧</div>
	<div class="doc-step-content">
		<h4>Linux 运行 AppImage 提示没有权限？</h4>
		<p>在终端中给文件赋予执行权限：<code>chmod +x pi-web-ui-*.AppImage && ./pi-web-ui-*.AppImage</code> 即可。</p>
	</div>
</div>

<h2 id="npm-install">2. 💻 npm / npx 命令行运行方式（开发者主力推荐）</h2>
<p>如果你本身是开发人员，希望在任何项目目录下敲一行命令就能打开网页版工作台，建议使用 npm 全局安装：</p>

<div class="doc-callout">
	<strong>前置环境确认：</strong>
	<p>需确保本机已安装 <strong>Node.js ≥ 22.19.0</strong>。若版本较低，可至 <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js 官网</a> 下载最新版本。</p>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">A</div>
	<div class="doc-step-content">
		<h4>方式一：npm 全局安装（日常主力）</h4>
		<pre><code class="language-bash">npm i -g pi-web-ui@latest
# 进入任意工程目录启动工作台：
cd my-project
pi-web-ui</code></pre>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">B</div>
	<div class="doc-step-content">
		<h4>方式二：npx 免安装试跑</h4>
		<pre><code class="language-bash">npx pi-web-ui@latest</code></pre>
	</div>
</div>

<h2 id="first-setup-wizard">3. 首次启动配置向导（填入 API Key）</h2>
<p>启动后在浏览器打开 <code>http://localhost:8787</code>（桌面端会自动加载），如果你的机器尚未配置过大模型，系统会立即弹出<strong>首次配置向导</strong>：</p>

<figure class="doc-figure">
	<img src="./assets/settings.jpeg" alt="pi-web-ui 设置面板与首次配置向导" />
	<figcaption>
		<strong>图 2.1 设置中心与模型配置向导：</strong>
		在此面板可配置 DeepSeek、Claude、OpenAI、本地 Ollama 密钥，或切换主题与提示词规则。
	</figcaption>
</figure>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🤖 接入 DeepSeek (深度求索)</h4>
		<p>进入 <a href="https://platform.deepseek.com" target="_blank" rel="noreferrer">DeepSeek 开放平台</a> 获取 API Key，在向导中填入并选择模型 <code>deepseek-chat</code> 即可享受极致代码推理能力。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ 接入 Anthropic Claude / OpenAI</h4>
		<p>填入官方 API Key，或者利用界面集成的 <strong>OAuth 一键登录</strong>功能完成免密授权认证。</p>
	</div>
	<div class="doc-card">
		<h4>🦙 接入本地离线模型 (Ollama / vLLM)</h4>
		<p>断网也能写代码！本地启动 <code>ollama run qwen2.5-coder:7b</code> 后，将端点指向 <code>http://127.0.0.1:11434/v1</code>，输入任意 Key 即可连通。</p>
	</div>
	<div class="doc-card">
		<h4>🇨🇳 接入国内聚合服务 (硅基流动 / 智谱 / 月之暗面)</h4>
		<p>支持任意兼容 OpenAI 标准接口的中转服务。只需输入自定义 Base URL（例如 <code>https://api.siliconflow.cn/v1</code>）并粘贴密钥即可。</p>
	</div>
</div>

<h2 id="npm-12-native-scripts">4. 避坑要点：npm ≥ 12 原生模块脚本放行</h2>
<p>新版本 npm 12+ 默认阻止依赖模块编译脚本（提示 <code>npm warn install-scripts … blocked</code>）。因真 PTY 终端依赖原生伪终端模块 <code>node-pty</code>，请在全局安装时显式放行：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="platform-specifics">5. 各操作系统环境特殊指南</h2>
<ul>
	<li><strong>Windows 用户</strong>：推荐配合 Git Bash 运行，桌面版便携压缩包已自带 Git，免任何配置；</li>
	<li><strong>Linux 用户</strong>：如果使用 npm 安装，请确保安装了基础编译链：<code>sudo apt-get install -y build-essential python3</code>；</li>
	<li><strong>Android / Termux 用户</strong>：在手机终端中执行 <code>pkg install nodejs python make clang git</code> 并在 <code>CXXFLAGS="-std=c++20"</code> 下安装运行。</li>
</ul>

<h2 id="install-faqs">6. 新手常见问答 (FAQ)</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 我完全是编程小白，不想看命令行，怎么用最简单？</div>
	<div class="doc-faq-a">直接前往 <a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer">GitHub Releases</a> 下载 Windows <code>.exe</code> 或 macOS <code>.dmg</code> 客户端，双击安装打开，填入 API Key 就能立刻开始写代码！</div>
</div>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 提示端口 8787 已被占用？</div>
	<div class="doc-faq-a">桌面版会自动探测空闲随机端口；若是命令行启动，可加上 <code>--port 9000</code> 更换端口。</div>
</div>
`,
	contentEn: `
<h2 id="desktop-releases-download">1. Desktop Releases Download (Zero-Setup for Beginners)</h2>
<p>If you prefer a native desktop app without installing Node.js, download official pre-built binaries directly from GitHub Releases:</p>
<div class="doc-callout doc-callout-tip">
	<strong>🎁 Official GitHub Releases:</strong>
	<p><a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer"><strong>Download Latest Desktop Installers (.exe / .dmg / .AppImage) ↗</strong></a></p>
</div>
<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>Platform</th>
				<th>Format</th>
				<th>Filename</th>
				<th>Features</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Windows (x64)</td>
				<td>Installer</td>
				<td><code>pi-web-ui-Setup-*.exe</code></td>
				<td>Standard setup with desktop shortcut & auto updates</td>
			</tr>
			<tr>
				<td>Windows Portable</td>
				<td>Zip Archive</td>
				<td><code>pi-web-ui-*-win-x64-portable.zip</code></td>
				<td>Zero install, includes bundled Git & Node runtime, ideal for enterprise PCs</td>
			</tr>
			<tr>
				<td>macOS</td>
				<td>DMG</td>
				<td><code>pi-web-ui-*.dmg</code></td>
				<td>Native for Apple Silicon (M1-M4) & Intel Macs</td>
			</tr>
			<tr>
				<td>Linux</td>
				<td>AppImage</td>
				<td><code>pi-web-ui-*.AppImage</code></td>
				<td>Standalone executable across Ubuntu, Debian, Arch, and Fedora</td>
			</tr>
		</tbody>
	</table>
</div>

<h2 id="npm-install">2. npm / npx CLI Methods</h2>
<pre><code class="language-bash"># Global npm install (Node.js >= 22.19.0 required)
npm i -g pi-web-ui@latest
pi-web-ui</code></pre>

<h2 id="first-setup-wizard">3. First-Time Setup Wizard</h2>
<p>Configure your model API key (DeepSeek, Claude, OpenAI, or local Ollama) right in the onboarding popup.</p>
`,
};
