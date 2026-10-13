/**
 * Chapter 02: Full-Platform Installation & First-Time Setup Wizard (全平台安装与首次配置向导)
 */
export const ch02 = {
	id: "installation",
	group: "getting-started",
	badge: "Chapter 02",
	icon: "📦",
	navTitle: "02. 全平台安装配置",
	navTitleEn: "02. Installation & Setup",
	title: "全平台安装指南与新手首次配置向导",
	titleEn: "Installation Guide & First-Time Setup Wizard",
	summary: "零基础完成全平台环境安装（Windows / macOS / Linux / 桌面端），详解首次启动配置向导（填入 API Key 与切换模型），以及常见避坑要点。",
	summaryEn: "Install on Windows, macOS, Linux, and Desktop. Step-by-step first-launch setup wizard to configure API keys and models without pain.",
	contentZh: `
<h2 id="prerequisites">1. 前置环境准备 (Node.js)</h2>
<p>pi-web-ui 采用前沿技术栈，要求本地安装有 <strong>Node.js ≥ 22.19.0</strong>。请先打开终端检查你的 Node 版本：</p>
<pre><code class="language-bash">node -v
# 输出应当为 v22.19.0 或更高版本，例如 v22.20.0, v23.x, v25.x</code></pre>
<div class="doc-callout doc-callout-warn">
	<strong>⚠️ 如果你的 Node.js 版本低于 22.19.0 或尚未安装：</strong>
	<p>请前往 <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js 官方网站</a> 下载最新的 Current 版本或 LTS 版本，推荐使用版本管理器工具（如 <code>fnm</code> 或 <code>nvm</code>）进行一键升级。</p>
</div>

<h2 id="install-methods">2. 选择最适合你的安装方式</h2>

<div class="doc-step-box">
	<div class="doc-step-num">A</div>
	<div class="doc-step-content">
		<h4>方式一：npm 全局安装（🌟 推荐主力开发者使用）</h4>
		<p>一次安装，终生受益。可在电脑中任何代码目录敲入 <code>pi-web-ui</code> 随时呼出工作台：</p>
		<pre><code class="language-bash">npm i -g pi-web-ui@latest
# 进入你的任意项目文件夹并启动：
cd my-cool-project
pi-web-ui</code></pre>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">B</div>
	<div class="doc-step-content">
		<h4>方式二：npx 免安装直接运行</h4>
		<p>适合临时试用或测试最新特性，不会在你的全局环境变量中写入包文件：</p>
		<pre><code class="language-bash">npx pi-web-ui@latest</code></pre>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">C</div>
	<div class="doc-step-content">
		<h4>方式三：Electron 原生桌面客户端（独立 App 体验）</h4>
		<p>无需打开 Chrome / Edge 等浏览器标签页，提供独立的窗口、菜单栏与托盘图标，自动挑选空闲端口：</p>
		<pre><code class="language-bash">git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
npm install && npm run build
npm --prefix desktop install
npm --prefix desktop start</code></pre>
	</div>
</div>

<h2 id="first-setup-wizard">3. 首次启动配置向导（填入 API Key）</h2>
<p>启动后在浏览器打开 <code>http://localhost:8787</code>。如果你的机器尚未配置过 AI 模型，系统会自动弹出<strong>首次配置向导</strong>引导你完成接入：</p>

<figure class="doc-figure">
	<img src="./assets/settings.jpeg" alt="pi-web-ui 设置面板与首次配置向导" />
	<figcaption>
		<strong>图 2.1 设置中心与模型配置：</strong>
		在此面板可配置 DeepSeek、Claude、OpenAI 等主流大模型密钥，或切换本地 Ollama，亦可切换赛博朋克/暗夜等 26+ 主题。
	</figcaption>
</figure>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🤖 推荐配置一：DeepSeek (深度求索)</h4>
		<p>高性价比的代码推理模型。在设置面板填入从 <a href="https://platform.deepseek.com" target="_blank" rel="noreferrer">DeepSeek 开放平台</a> 获取的 API Key，模型选择 <code>deepseek-chat</code> 或 <code>deepseek-reasoner</code> 即可。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ 推荐配置二：Anthropic Claude / OpenAI</h4>
		<p>支持配置 Claude 3.5 Sonnet / GPT-4o。直接填入对应的官方 API Key，或者利用内置的提供商 OAuth 按钮进行一键免密授权。</p>
	</div>
	<div class="doc-card">
		<h4>🦙 推荐配置三：本地离线模型 (Ollama / vLLM)</h4>
		<p>完全断网离线也能写代码！本地启动 <code>ollama run qwen2.5-coder:7b</code> 后，将端点配置为 <code>http://127.0.0.1:11434/v1</code>，输入任意 Key 即可连通。</p>
	</div>
	<div class="doc-card">
		<h4>🇨🇳 推荐配置四：国内聚合中转 (硅基流动 / 智谱 / 月之暗面)</h4>
		<p>支持任意兼容 OpenAI 接口规范的提供商中转。只需自定义 Base URL（例如 <code>https://api.siliconflow.cn/v1</code>）并填入专属 Token 即可使用。</p>
	</div>
</div>

<h2 id="npm-12-native-scripts">4. 避坑指南：npm ≥ 12 原生模块脚本放行</h2>
<p>如果你使用的是较新的 npm 12+，在全局安装时可能会看到警告 <code>npm warn install-scripts … blocked</code>。由于工作台内置的高性能终端依赖 C++ 原生伪终端模块 <code>node-pty</code>，请在安装时加上放行参数：</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="platform-specifics">5. 各平台环境特殊说明</h2>
<div class="doc-step-box">
	<div class="doc-step-num">🪟</div>
	<div class="doc-step-content">
		<h4>Windows 系统</h4>
		<p>推荐使用 <strong>Git Bash</strong> 或 Windows Terminal。系统内置终端原生支持 Windows PTY，无需安装额外虚拟机。</p>
	</div>
</div>
<div class="doc-step-box">
	<div class="doc-step-num">🐧</div>
	<div class="doc-step-content">
		<h4>Linux 系统（Ubuntu / Debian / CentOS / Arch）</h4>
		<p>构建 <code>node-pty</code> 时需要 C++ 编译工具链。如果报错，请先安装基础编译包：</p>
		<pre><code class="language-bash"># Ubuntu / Debian
sudo apt-get update && sudo apt-get install -y build-essential python3

# Fedora / CentOS
sudo dnf install -y gcc-c++ make python3</code></pre>
	</div>
</div>
<div class="doc-step-box">
	<div class="doc-step-num">📱</div>
	<div class="doc-step-content">
		<h4>Android / Termux 移动端</h4>
		<p>在安卓手机上随时编写代码！安装 Termux 后执行：</p>
		<pre><code class="language-bash">pkg update && pkg install nodejs python make clang git
mkdir -p ~/.gyp && echo "{'variables':{'android_ndk_path':''}}" > ~/.gyp/include.gypi
CXXFLAGS="-std=c++20" npm i -g pi-web-ui@latest</code></pre>
	</div>
</div>

<h2 id="install-faqs">6. 常见安装排错问题 (FAQ)</h2>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 启动时提示端口 8787 已被占用 (EADDRINUSE)？</div>
	<div class="doc-faq-a">可以使用 <code>--port</code> 参数指定任意未被占用的端口，例如：<code>pi-web-ui --port 9000</code>。</div>
</div>
<div class="doc-faq-card">
	<div class="doc-faq-q">❓ 怎样让局域网内其他设备（比如 iPad 或手机）访问我电脑上的工作台？</div>
	<div class="doc-faq-a">默认为了安全仅监听本地 <code>127.0.0.1</code>。若需局域网访问，启动时加上 <code>--host 0.0.0.0 --token 你的自定义密码</code>，然后手机浏览器访问 <code>http://电脑IP:8787</code> 并输入密码即可。</div>
</div>
`,
	contentEn: `
<h2 id="prerequisites">1. Prerequisites (Node.js)</h2>
<p>pi-web-ui requires <strong>Node.js ≥ 22.19.0</strong>. Check your version with <code>node -v</code>. If outdated, install or upgrade via <a href="https://nodejs.org" target="_blank" rel="noreferrer">nodejs.org</a> or <code>fnm</code> / <code>nvm</code>.</p>

<h2 id="install-methods">2. Choose Your Installation Method</h2>
<pre><code class="language-bash"># Global npm install (Recommended for daily coding)
npm i -g pi-web-ui@latest

# Or launch directly with npx
npx pi-web-ui@latest</code></pre>

<h2 id="first-setup-wizard">3. First-Time Setup Wizard</h2>
<figure class="doc-figure">
	<img src="./assets/settings.jpeg" alt="Settings & Model Setup Wizard" />
	<figcaption>
		<strong>Figure 2.1: Settings Center & Model Configuration:</strong>
		Configure DeepSeek, Claude, OpenAI, or local Ollama endpoints with one click.
	</figcaption>
</figure>
<p>On your first launch, the setup wizard will appear automatically. Simply paste your API key (DeepSeek, Claude, OpenAI, or compatible proxy) and select your preferred model.</p>

<h2 id="npm-12-native-scripts">4. npm ≥ 12 Script Permission</h2>
<p>If npm 12+ blocks <code>node-pty</code> build scripts, pass <code>--allow-scripts</code>:</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>

<h2 id="platform-specifics">5. Platform-Specific Notes</h2>
<p>Linux machines need standard build tools (<code>sudo apt install build-essential python3</code>). Android users can install inside Termux with clang and c++20 flags.</p>
`,
};
