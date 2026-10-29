export const ch02 = {
  id: "installation",
  group: "getting-started",
  badge: "Chapter 02",
  icon: "📦",
  navTitle: "安装与配置",
  navTitleEn: "Installation",
  title: "安装与配置",
  titleEn: "Installation",
  summary: "选择安装方式，配置模型并处理平台依赖。",
  summaryEn:
    "Choose an installation method, configure a model, and resolve platform dependencies.",
  contentZh: `
<h2 id="desktop-releases-download">桌面下载</h2>
<p>从 GitHub Releases 按系统和架构选择发布文件。便携包是否包含 Node.js 与 Git 以该产物说明为准，下载后核实来源再运行。</p>
<span id="desktop-troubleshooting"></span>
<h2 id="npm-install">命令行</h2>
<p>确认 Node.js ≥ 22.19.0，在项目目录运行下方命令；临时试用可用 npx pi-web-ui@latest。启动前核对目录，避免打开错误项目。</p>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
<h2 id="first-setup-wizard">模型配置</h2>
<p>打开 localhost:8787，按向导选提供商，填写密钥或使用支持的登录方式。兼容接口需核对端点与模型名，发送短消息验证连接。</p>
<figure class="doc-figure"><img src="./assets/settings.jpeg" alt="模型与提供商设置" /><figcaption>模型配置</figcaption></figure>
<h2 id="npm-12-native-scripts">依赖脚本</h2>
<p>npm 12 及以上需放行相关原生依赖脚本，终端依赖 node-pty；安装失败时先查看编译输出。</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>
<h2 id="platform-specifics">平台依赖</h2>
<p>Windows 准备 Git Bash；Linux 编译需 Python 与编译工具。Termux 安装依赖，并以 CXXFLAGS="-std=c++20" 安装。</p>
<pre><code class="language-bash">pkg install nodejs python make clang git</code></pre>
<h2 id="install-faqs">端口</h2>
<p>端口冲突时用 pi-web-ui --port 9000。桌面端会选择可用端口，按实际地址访问。连接失败先核对密钥权限、模型名称和端点；保存成功后仍需验证，更换提供商时也要重新测试。</p>
`,
  contentEn: `
<h2 id="desktop-releases-download">Desktop</h2>
<p>Choose your system and architecture on GitHub Releases. Check portable bundle notes for included Node.js and Git, and verify the source.</p>
<span id="desktop-troubleshooting"></span>
<h2 id="npm-install">CLI</h2>
<p>With Node.js ≥ 22.19.0, run the commands in your project. For a temporary run, use npx pi-web-ui@latest.</p>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
<h2 id="first-setup-wizard">Models</h2>
<p>Open localhost:8787. Select a provider, enter credentials or sign in where supported, check endpoint and model, then test a message.</p>
<figure class="doc-figure"><img src="./assets/settings.jpeg" alt="Model and provider settings" /><figcaption>Model configuration</figcaption></figure>
<h2 id="npm-12-native-scripts">Scripts</h2>
<p>For npm 12+, allow the listed dependency scripts; inspect build output if installation fails.</p>
<pre><code class="language-bash">npm i -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>
<h2 id="platform-specifics">Platforms</h2>
<p>Prepare Git Bash on Windows, Python and build tools on Linux; Termux needs dependencies and CXXFLAGS="-std=c++20".</p>
<pre><code class="language-bash">pkg install nodejs python make clang git</code></pre>
<h2 id="install-faqs">Ports</h2>
<p>For conflicts use pi-web-ui --port 9000; desktop selects an available port. If connection fails, check key permissions, model, and endpoint. Retest new providers.</p>
`,
};
