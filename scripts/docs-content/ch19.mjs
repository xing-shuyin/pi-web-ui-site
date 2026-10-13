/**
 * Chapter 19: Plugins Ecosystem & 21 Official/Community Plugins (插件生态与21款插件全集)
 */
export const ch19 = {
	id: "plugins-marketplace",
	group: "extensibility",
	badge: "Chapter 19",
	icon: "🧩",
	navTitle: "19. 插件市场与实用精选",
	navTitleEn: "19. Plugins Marketplace",
	title: "插件生态全景与 21 款实用官方/社区插件盘点",
	titleEn: "Plugins Ecosystem & Top 21 Official/Community Plugins",
	summary: "让工作台能力无限延伸：涵盖 VSCode 编辑器、可视化数据库客户端、手机微信通道、Live Server 实时预览、Mermaid 流程图等 21 款高频插件。",
	summaryEn: "Extend your workbench: 21 pre-packaged plugins including VSCode editor, Database client, WeChat bridge, Live Server preview, and Mermaid diagram renderer.",
	contentZh: `
<h2 id="why-plugins-matter">1. 为什么需要插件生态？</h2>
<p>每个开发者的业务场景截然不同：前端工程师需要实时网页预览，后端工程师离不开数据库查询，运维人员需要监控服务器进程。pi-web-ui 拥有基于 <strong>Plugin SDK v2</strong> 打造的开放插件体系，让工作台成为你定制化的研发中枢。</p>

<h2 id="top-featured-plugins">2. 官方精选高频实用插件一览</h2>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>💻 VSCode 编辑器 (<code>vscode-editor</code>)</h4>
		<p>在右侧文件工作台内直接嵌入轻量级 VSCode 编辑器，支持多标签页、语法高亮、智能缩进与就地保存，无需频繁切换外部编辑器。</p>
	</div>
	<div class="doc-card">
		<h4>🗄️ 数据库客户端 (<code>db-client</code>)</h4>
		<p>无需安装 Navicat 或 DBeaver！可视化连接 MySQL、PostgreSQL 与 SQLite 数据库，一键浏览表结构、执行 SQL 查询并导出数据。</p>
	</div>
	<div class="doc-card">
		<h4>📱 微信通道接入 (<code>wechat-ilink</code>)</h4>
		<p>不在电脑旁也能让 AI 帮你干活！通过扫码绑定微信公众号或企业微信，直接在手机微信中给工作台发送任务，随时随地查进度。</p>
	</div>
	<div class="doc-card">
		<h4>🌐 Live Server 实时预览 (<code>live-preview</code>)</h4>
		<p>编写 HTML / CSS / JS 静态网页或组件时，在右侧实时启动热重载开发服务器，AI 修改完代码后页面自动秒级刷新预览。</p>
	</div>
	<div class="doc-card">
		<h4>🌿 多仓库 Git 总览 (<code>pi-web-multigit</code>)</h4>
		<p>面向大型微服务项目：在一个面板中统一聚合展示当前工作区内所有子 Git 仓库的未提交修改、分支状态与超前落后提交数。</p>
	</div>
	<div class="doc-card">
		<h4>📊 Mermaid 图表渲染 (<code>mermaid</code>)</h4>
		<p>在聊天回复与右栏直接将 AI 生成的 Mermaid 代码实时渲染为高清架构图、时序图、类图与状态流转图，支持一键下载 SVG。</p>
	</div>
	<div class="doc-card">
		<h4>⏱️ 运行轨迹时间线 (<code>run-trace</code>)</h4>
		<p>以精美的垂直时间轴展现子代理与工具调用的完整耗时分布、入参出参以及决策链路，便于性能优化与排查卡点。</p>
	</div>
	<div class="doc-card">
		<h4>📝 极客随手记与备忘 (<code>notes</code>)</h4>
		<p>在侧边栏常驻 Markdown 笔记草稿本，随时随地记录架构灵感、待办事项或临时代码片段，自动本地持久化同步。</p>
	</div>
</div>

<h2 id="install-and-manage-plugins">3. 插件安装与热插拔管理</h2>

<div class="doc-step-box">
	<div class="doc-step-num">🛍️</div>
	<div class="doc-step-content">
		<h4>图形化插件市场一键安装</h4>
		<p>在设置面板打开「插件市场」，浏览数十款官方与社区插件，点击「安装」按钮，系统自动拉取资源并在 2 秒内完成热加载，无需重启服务。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">💻</div>
	<div class="doc-step-content">
		<h4>CLI 命令行管理</h4>
		<p>你也可以在终端中通过极简命令行管理插件：</p>
		<pre><code class="language-bash"># 安装插件
pi-web-ui plugin install xing-shuyin/pi-web-ui/plugins/vscode-editor

# 查看已安装列表
pi-web-ui plugin list

# 卸载插件
pi-web-ui plugin uninstall vscode-editor</code></pre>
	</div>
</div>
`,
	contentEn: `
<h2 id="why-plugins-matter">1. Extensible Plugin Ecosystem</h2>
<p>Transform your workbench into a full development hub tailored for frontend, backend, or ops needs.</p>

<h2 id="top-featured-plugins">2. Top Featured Plugins</h2>
<p>Highlights from the 21+ catalog: embedded <strong>VSCode Editor</strong>, <strong>DB Client</strong> for SQL queries, <strong>WeChat Bridge</strong> for mobile coding, <strong>Live Server</strong> for preview, and <strong>Mermaid</strong> diagram rendering.</p>

<h2 id="install-and-manage-plugins">3. Installation & Management</h2>
<p>Install plugins in 2 seconds right from the graphical marketplace or via CLI (<code>pi-web-ui plugin install ...</code>).</p>
`,
};
