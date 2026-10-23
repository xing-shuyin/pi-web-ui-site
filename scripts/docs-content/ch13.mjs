/**
 * Chapter 13: 30+ Built-in Tools, Lazy Loading & Inline Markers (30+ 工具全表与内联标记)
 */
export const ch13 = {
	id: "tools-and-markers",
	group: "agent-modes",
	badge: "Chapter 13",
	icon: "🧰",
	navTitle: "13. 30+ 工具与内联标记",
	navTitleEn: "13. Tools & Markers",
	title: "30+ 内置与扩展工具全表、延迟加载与内联标记",
	titleEn: "30+ Built-in Tools, Lazy Loading & Inline Markers",
	summary: "揭秘 AI 的“双手”：核心读写编辑工具、缩进容错 edit_soft、LSP 语义分析、极速批处理 codemode、零破坏前缀缓存的延迟加载与内联标记。",
	summaryEn: "Explore the AI toolchain: robust file editors, indentation-tolerant edit_soft, LSP symbol inspection, codemode sandbox batching, lazy tool loading, and inline markers.",
	contentZh: `
<h2 id="how-ai-uses-tools">1. AI 是如何操作你的电脑的？</h2>
<p>新手常常好奇：AI 究竟是如何帮你创建文件、修改代码、执行测试的？答案是：<strong>工具调用 (Tool Calling)</strong>。AI 并不直接改动文件，而是生成一段结构化参数，交由本地工作台执行并返回结果。</p>

<h2 id="core-tools-overview">2. 核心日常工具全览速查</h2>

<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>工具名称</th>
				<th>主要用途</th>
				<th>新手使用建议</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>read</code></td>
				<td>读取指定文件内容或列出目录清单</td>
				<td>支持行号区间（offset/limit），读取大文件时自动分页保护</td>
			</tr>
			<tr>
				<td><code>write</code></td>
				<td>创建全新文件或整篇覆写现有文件</td>
				<td>适用于从零生成新组件、新配置文件或重写模板</td>
			</tr>
			<tr>
				<td><code>edit</code></td>
				<td>基于精确文本匹配替换指定代码块</td>
				<td>支持一次性提交多个互不重叠的代码修改段，保持原有风格</td>
			</tr>
			<tr>
				<td><code>edit_soft</code></td>
				<td>缩进与空格容错的高宽容度代码替换</td>
				<td>当跨操作系统（CRLF / LF）或缩进（Tab / 空格）混杂时自动抹平差异</td>
			</tr>
			<tr>
				<td><code>bash</code></td>
				<td>在当前环境或 SSH 远端执行 Shell 脚本</td>
				<td>透明打字回显到可见真终端中，可随时按 Ctrl+C 打断</td>
			</tr>
			<tr>
				<td><code>grep</code> / <code>find</code></td>
				<td>全仓库毫秒级正则搜索与文件名匹配</td>
				<td>自动遵循 <code>.gitignore</code> 过滤无用的 node_modules 与产物</td>
			</tr>
			<tr>
				<td><code>lsp</code></td>
				<td>调取语言服务器协议进行符号跳转与定义查找</td>
				<td>像 VSCode 一样精准定位函数实现位置与类型报错</td>
			</tr>
			<tr>
				<td><code>codemode</code></td>
				<td>在安全的 QuickJS 沙盒中并发批处理多项工具</td>
				<td>一次性批量改动数十个文件，耗时比逐个轮询缩短 70% 以上</td>
			</tr>
		</tbody>
	</table>
</div>

<h2 id="lazy-loading-architecture">3. 延迟加载 (Lazy Loading)：硬核前缀缓存保护</h2>
<p>绝大多数工具把数十个工具说明全塞进首句系统提示词，白白吃掉 4000+ Token 并破坏厂商 Prompt Cache。<code>{{tools}}</code> 目录保持完整恒定、新工具要点随 <code>load_tools</code> 回执进入对话、注册表只追加不修改（事实源 <code>server/tool-manager.ts</code>，<code>PI_WEB_TOOL_LAZY_LOADING</code> 默认 <code>0</code> 关闭、设 <code>1</code> 开启）。</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 pi-web-ui 的延迟加载机制</strong>
	<p>系统默认关闭延迟加载（<code>PI_WEB_TOOL_LAZY_LOADING</code> 默认 <code>0</code>，与 pi 命令行一致全量挂载；设为 <code>1</code> 则开启）：</p>
	<ul>
		<li>基础读写命令始终保持在精简目录中，前缀完全恒定不变，<strong>享受各大厂商高达 50%~90% 的 Prompt Cache 命中折扣</strong>；</li>
		<li>当 AI 遇到需要高级功能（如 <code>browser_page</code> 浏览器操控、<code>lsp</code> 诊断）时，才通过 <code>load_tools</code> 动态挂载该工具，兼具超高扩展性与极低成本。</li>
	</ul>
</div>

<h2 id="inline-markers">4. 内联标记 (Inline Markers)：交互式按钮一键生成</h2>
<p>在日常对话中，你会发现 AI 回复的末尾经常会出现几个漂亮的<strong>圆角动作按钮（建议芯片）</strong>，或者会话标题被自动提炼为一个简练名字。这是由内置的内联标记驱动的：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4><code>[[action:suggest:...]]</code></h4>
		<p>AI 在给出结论后，可自动生成后续行动建议按钮（如 <code>[运行测试]</code>、<code>[提交到 Git]</code>），用户只需用鼠标点一下按钮即可瞬间将对应指令发送出去，省去打字功夫！</p>
	</div>
	<div class="doc-card">
		<h4><code>[[conv:rename:...]]</code></h4>
		<p>在理解了你提出的需求后，AI 可在第一轮自动将默认的“新会话”优雅重命名为语义清晰的标题（例如“重构微信支付模块”），方便日后查阅。</p>
	</div>
</div>
`,
	contentEn: `
<h2 id="how-ai-uses-tools">1. How AI Uses Tools</h2>
<p>AI interacts with your system through structured tool calls executed locally or on remote SSH servers.</p>

<h2 id="core-tools-overview">2. Core Tools Summary</h2>
<p>Includes file I/O (<code>read</code>, <code>write</code>), precise editing (<code>edit</code>), indentation-tolerant editing (<code>edit_soft</code>), grep/find, shell execution (<code>bash</code>), language server symbols (<code>lsp</code>), and batch sandboxing (<code>codemode</code>).</p>

<h2 id="lazy-loading-architecture">3. Lazy Loading & Cache Protection</h2>
<p>By keeping initial schemas lean, <code>PI_WEB_TOOL_LAZY_LOADING</code> protects provider prompt cache prefixes and cuts token waste by thousands per turn.</p>

<h2 id="inline-markers">4. Inline Markers</h2>
<p>AI renders interactive next-action buttons (<code>[[action:suggest:...]]</code>) and auto-renames conversations (<code>[[conv:rename:...]]</code>) seamlessly.</p>
`,
};
