/**
 * Chapter 14: Model Context Protocol (MCP) & Real Browser Page Control (MCP与浏览器页面控制)
 */
export const ch14 = {
	id: "mcp-and-browser",
	group: "agent-modes",
	badge: "Chapter 14",
	icon: "🔌",
	navTitle: "14. MCP 工具与浏览器控制",
	navTitleEn: "14. MCP & Browser",
	title: "MCP 服务器管理、公开市场检索与真实浏览器控制",
	titleEn: "Model Context Protocol (MCP) & Browser Automation",
	summary: "让 AI 像插拔 USB 设备一样接入全世界的工具与数据源：支持 Stdio / SSE / HTTP MCP 一键接入、市场搜索，以及直接控制浏览器抓取与测试。",
	summaryEn: "Connect AI to universal tools via Model Context Protocol (Stdio, SSE, HTTP), search the public MCP registry, and automate real browser page interactions.",
	contentZh: `
<h2 id="what-is-mcp">1. 什么是 MCP (Model Context Protocol)？</h2>
<p><strong>Model Context Protocol (MCP)</strong> 是由开源生态与各大模型厂商共同推崇的通用工具接入协议。以往你想让 AI 连接公司内部的数据库、拉取 GitHub Issue 或调用天气查询接口，需要给每个工具单独写适配代码；而现在，只要该工具提供了 MCP 服务，AI 就可以<strong>像插入一个标准 USB 拓展坞一样直接使用它</strong>！</p>

<h2 id="managing-mcp-servers">2. 可视化接入与管理 MCP 服务器</h2>
<p>在设置面板中切换至 <strong>「MCP 服务器」</strong> 标签页，支持直接配置两类标准服务：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>💻 本地子进程 (Stdio Transport)</h4>
		<p>适用于本地安装的 CLI 工具包。例如连接 SQLite 数据库或本地文件系统服务：</p>
		<pre><code class="language-json">{
  "sqlite-db": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sqlite", "--db-path", "./data.db"]
  }
}</code></pre>
	</div>
	<div class="doc-card">
		<h4>🌐 远程云端服务 (SSE / Streamable HTTP)</h4>
		<p>适用于局域网或远程云服务器部署的 MCP 服务。只需填入服务 URL（如 <code>http://192.168.1.50:8000/sse</code>），支持自定义鉴权 Headers，一键连通远程企业知识库。</p>
	</div>
</div>

<div class="doc-callout doc-callout-tip">
	<strong>💡 热重载支持，无需重启主服务！</strong>
	<p>修改或新增 MCP 配置后，点击界面上的「立即重载」按钮，工作台会在后台毫秒级与各 MCP 节点重新握手并注册工具，绝不打断正在进行的对话。</p>
</div>

<h2 id="public-mcp-registry">3. 在线检索与一键安装公开 MCP 工具</h2>
<p>内置了与官方 MCP 清单同步的搜索界面。敲入关键词（例如 <code>github</code>、<code>postgres</code>、<code>slack</code>、<code>puppeteer</code>），即可查看工具介绍、星标数与作者，点击即可自动填入配置模板，新手免去手动写 JSON 的烦恼。</p>

<h2 id="browser-page-control">4. 真实浏览器页面控制 (Browser Page & Page Picker)</h2>
<p>前端开发常常需要验证网页在浏览器中的实际呈现效果、抓取外部 API 文档或复现前端报错。pi-web-ui 提供了强大的浏览器联动能力：</p>

<div class="doc-step-box">
	<div class="doc-step-num">🌐</div>
	<div class="doc-step-content">
		<h4>标签页拾取与实时对话引用 (Page Picker)</h4>
		<p>通过工作台扩展，你可以直接在输入框敲入 <code>@浏览器</code> 拾取你正在查看的任何网页标签页。AI 可以直接读取该标签页渲染后的真实 DOM 树与控制台日志，精准定位样式层叠冲突或脚本报错。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🤖</div>
	<div class="doc-step-content">
		<h4>无头浏览器自动化操作 (<code>browser_page</code>)</h4>
		<p>AI 可以自主调用内置的无头浏览器引擎，执行以下动作：</p>
		<ul>
			<li><strong>打开指定网址</strong>并抓取动态渲染后的页面结构；</li>
			<li><strong>自动截屏</strong>并回传给视觉分析工具检查排版瑕疵；</li>
			<li><strong>模拟点击、输入表单与滚动</strong>，自动化完成端到端 (E2E) 流程回归测试。</li>
		</ul>
	</div>
</div>
`,
	contentEn: `
<h2 id="what-is-mcp">1. What is Model Context Protocol (MCP)?</h2>
<p>MCP standardizes how LLMs interact with external databases, APIs, and microservices like plugging USB devices into your workbench.</p>

<h2 id="managing-mcp-servers">2. Managing MCP Servers</h2>
<p>Configure local stdio commands (e.g. SQLite, GitHub, Filesystem) or remote SSE endpoints directly in settings with instant hot-reloading.</p>

<h2 id="public-mcp-registry">3. Public MCP Registry Search</h2>
<p>Search and install community MCP servers in seconds right from the settings modal.</p>

<h2 id="browser-page-control">4. Browser Automation & Page Picker</h2>
<p>Pick active browser tabs into context with <code>@browser</code>, or let AI launch headless browsers to inspect DOMs, capture full-page screenshots, and run automated E2E tests.</p>
`,
};
