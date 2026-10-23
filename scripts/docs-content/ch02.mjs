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
	title: "全平台安装、桌面客户端下载与首次配置向导",
	titleEn: "Installation Guide, Desktop Releases & First-Time Setup",
	summary: "桌面安装包免配环境即开即用，亦支持 npm 全局安装、Termux 移动端与首次模型接入向导。",
	summaryEn: "Pre-built desktop installers with zero setup, plus npm global install, Android Termux, and model wizard.",
	contentZh: `
<h2 id="desktop-releases-download">1. 桌面客户端 Release 下载（免配环境）</h2>
<p>不想碰命令行、或电脑没装 Node.js，直接下载预编译桌面客户端，双击即用：</p>

<div class="doc-callout doc-callout-tip">
	<strong>🎁 官方发布通道：</strong>
	<p>👉 <strong><a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer" style="font-weight:700;color:var(--accent);">前往 GitHub Releases 获取最新客户端安装包 ↗</a></strong></p>
</div>

<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>平台</th>
				<th>类型</th>
				<th>文件名</th>
				<th>说明</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Windows 10 / 11 (64 位)</strong></td>
				<td>安装包</td>
				<td><code>pi-web-ui-Setup-*.exe</code></td>
				<td>双击安装，创建桌面快捷方式，支持后台静默升级</td>
			</tr>
			<tr>
				<td><strong>Windows 便携版</strong></td>
				<td>免安装 ZIP</td>
				<td><code>pi-web-ui-*-win-x64-portable.zip</code></td>
				<td>内置 Node.js 与 Git，解压即用，适合企业内网/办公机</td>
			</tr>
			<tr>
				<td><strong>macOS (Apple Silicon / Intel)</strong></td>
				<td>DMG</td>
				<td><code>pi-web-ui-*.dmg</code></td>
				<td>拖拽进 Applications 即可</td>
			</tr>
			<tr>
				<td><strong>Linux</strong></td>
				<td>AppImage</td>
				<td><code>pi-web-ui-*.AppImage</code></td>
				<td><code>chmod +x</code> 后双击启动</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="desktop-troubleshooting">首次运行避坑</h3>
<ul>
	<li><strong>Windows SmartScreen拦截</strong>：点击「更多信息」→「仍要运行」；</li>
	<li><strong>macOS 未验证开发者</strong>：按住 <code>Control</code> 右键点击图标 →「打开」加入白名单；</li>
	<li><strong>Linux 无权限</strong>：<code>chmod +x pi-web-ui-*.AppImage && ./pi-web-ui-*.AppImage</code>。</li>
</ul>

<h2 id="npm-install">2. npm / npx 命令行运行（开发者推荐）</h2>
<p>前置要求 <strong>Node.js ≥ 22.19.0</strong>：</p>
<pre><code class="language-bash"># 主力：全局安装后在任意工程目录启动
npm i -g pi-web-ui@latest
cd my-project && pi-web-ui

# 试用：免安装单次运行
npx pi-web-ui@latest</code></pre>

<h2 id="first-setup-wizard">3. 首次启动配置向导（填入 API Key）</h2>
<p>浏览器打开 <code>http://localhost:8787</code>（桌面端自动加载），未配置模型时会弹出向导：</p>

<figure class="doc-figure">
	<img src="./assets/settings.jpeg" alt="pi-web-ui 设置面板与首次配置向导" />
	<figcaption><strong>图 2.1 设置中心与模型配置向导。</strong></figcaption>
</figure>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🤖 DeepSeek</h4>
		<p><a href="https://platform.deepseek.com" target="_blank" rel="noreferrer">开放平台</a>获取 Key，模型选 <code>deepseek-chat</code>。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ Claude / OpenAI</h4>
		<p>填入官方 Key，或用界面 <strong>OAuth 一键登录</strong>免密授权。</p>
	</div>
	<div class="doc-card">
		<h4>🦙 本地模型 (Ollama / vLLM)</h4>
		<p><code>ollama run qwen2.5-coder:7b</code> 后端点填 <code>http://127.0.0.1:11434/v1</code>，任意 Key 连通。</p>
	</div>
	<div class="doc-card">
		<h4>🇨🇳 聚合服务（硅基流动/智谱/Kimi）</h4>
		<p>输入兼容 OpenAI 接口的 Base URL（如 <code>https://api.siliconflow.cn/v1</code>）+ 密钥。</p>
	</div>
</div>

<h2 id="npm-12-native-scripts">4. 避坑：npm ≥ 12 脚本放行</h2>
<p>npm 12+ 默认拦截依赖编译脚本，而真 PTY 终端依赖原生模块 <code>node-pty</code>，全局安装时显式放行：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="platform-specifics">5. 各系统补充</h2>
<ul>
	<li><strong>Windows</strong>：配合 Git Bash 运行；便携包已自带 Git；</li>
	<li><strong>Linux</strong>：npm 安装需编译链 <code>sudo apt-get install -y build-essential python3</code>；</li>
	<li><strong>Android / Termux</strong>：<code>pkg install nodejs python make clang git</code>，<code>CXXFLAGS="-std=c++20"</code> 下安装运行。</li>
</ul>

<h2 id="install-faqs">6. 常见问答</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 端口 8787 被占用？</div>
	<div class="doc-faq-a">桌面版自动探测空闲随机端口；命令行启动加 <code>--port 9000</code> 更换（全部启动参数见第 03 章）。</div>
</div>
`,
	contentEn: `
<h2 id="desktop-releases-download">1. Desktop Releases (Zero-Setup)</h2>
<p>Skip the CLI: download pre-built binaries from <a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer"><strong>GitHub Releases (.exe / .dmg / .AppImage) ↗</strong></a>.</p>
<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr><th>Platform</th><th>Format</th><th>Filename</th></tr>
		</thead>
		<tbody>
			<tr><td>Windows (x64)</td><td>Installer</td><td><code>pi-web-ui-Setup-*.exe</code></td></tr>
			<tr><td>Windows Portable</td><td>Zip</td><td><code>pi-web-ui-*-win-x64-portable.zip</code></td></tr>
			<tr><td>macOS</td><td>DMG</td><td><code>pi-web-ui-*.dmg</code></td></tr>
			<tr><td>Linux</td><td>AppImage</td><td><code>pi-web-ui-*.AppImage</code></td></tr>
		</tbody>
	</table>
</div>
<p>Windows SmartScreen → More info → Run anyway. macOS → Ctrl-click → Open. Linux → <code>chmod +x</code> first.</p>

<h2 id="npm-install">2. npm / npx CLI Methods</h2>
<pre><code class="language-bash"># Global install (Node.js >= 22.19.0 required)
npm i -g pi-web-ui@latest
pi-web-ui
# npm 12+: npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="first-setup-wizard">3. First-Time Setup Wizard</h2>
<p>Open <code>http://localhost:8787</code> and fill in your model key: DeepSeek, Claude/OpenAI (or OAuth), local Ollama (<code>http://127.0.0.1:11434/v1</code>), or any OpenAI-compatible relay.</p>
`,
};
