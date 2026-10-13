/**
 * Chapter 10: Slash Commands, Keyboard Shortcuts & @ Mentions (斜杠命令、快捷键与@多源引用速查)
 */
export const ch10 = {
	id: "commands-and-shortcuts",
	group: "workspace",
	badge: "Chapter 10",
	icon: "⌨️",
	navTitle: "10. 斜杠命令与快捷键",
	navTitleEn: "10. Commands & Shortcuts",
	title: "斜杠命令、键盘快捷键与 @ 多源引用新手速查表",
	titleEn: "Slash Commands, Keyboard Shortcuts & @ Mentions",
	summary: "让你的双手离不开键盘！全局高频快捷键速查表、系统斜杠命令、强大的 @ 四合一多源上下文引用，以及点击即发的快捷短语芯片栏。",
	summaryEn: "Master fast keyboard workflows: global shortcuts table, built-in slash commands, four-in-one @ mentions, and one-click quick prompt chips.",
	contentZh: `
<h2 id="shortcuts-table">1. 新手高频键盘快捷键对照表</h2>
<p>熟练运用快捷键可以让你的研发效率翻倍。以下是工作台中最常用的按键组合：</p>

<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>快捷键 (Windows / Linux)</th>
				<th>快捷键 (macOS)</th>
				<th>功能说明</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>Ctrl + K</code></td>
				<td><code>Cmd + K</code></td>
				<td>唤起全局模糊搜索与命令面板</td>
			</tr>
			<tr>
				<td><code>Ctrl + Enter</code></td>
				<td><code>Cmd + Enter</code></td>
				<td>立即发送当前提示词消息</td>
			</tr>
			<tr>
				<td><code>Ctrl + &#96;</code> (反引号)</td>
				<td><code>Cmd + &#96;</code></td>
				<td>展开 / 收起底部真 PTY 终端面板</td>
			</tr>
			<tr>
				<td><code>Ctrl + B</code></td>
				<td><code>Cmd + B</code></td>
				<td>展开 / 收起右侧文件工作台树</td>
			</tr>
			<tr>
				<td><code>Esc</code></td>
				<td><code>Esc</code></td>
				<td>关闭所有打开的弹窗浮层，或打断正在生成的 AI 回复</td>
			</tr>
			<tr>
				<td><code>Shift + Enter</code></td>
				<td><code>Shift + Enter</code></td>
				<td>在输入框中另起新行输入（不触发发送）</td>
			</tr>
		</tbody>
	</table>
</div>

<h2 id="slash-commands">2. 常用斜杠命令全表</h2>
<p>在输入框以 <code>/</code> 开头，工作台会自动弹出命令补全菜单，输入常用命令即可执行系统级快捷操作：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4><code>/model [名称]</code></h4>
		<p>快速切换当前会话所使用的大模型（如 <code>/model claude-3-5-sonnet</code> 或 <code>/model deepseek-chat</code>）。</p>
	</div>
	<div class="doc-card">
		<h4><code>/clear</code></h4>
		<p>清空当前对话视窗的历史滚动内容，释放浏览器渲染内存（不破坏已落盘记录）。</p>
	</div>
	<div class="doc-card">
		<h4><code>/reload</code></h4>
		<p>热重载服务配置与系统提示词规则，无需重启后端服务即可生效。</p>
	</div>
	<div class="doc-card">
		<h4><code>/export</code></h4>
		<p>调出对话长图海报导出浮层，生成高清长截图或下载 Markdown 对话记录。</p>
	</div>
</div>

<h2 id="at-mentions">3. 强大的 <code>@</code> 四合一多源上下文引用</h2>
<p>在输入框中敲入 <code>@</code> 符号，即可呼出智能上下文提示菜单。支持无缝引用以下四类信息源：</p>

<div class="doc-step-box">
	<div class="doc-step-num">📄</div>
	<div class="doc-step-content">
		<h4><code>@文件名</code>：引用项目中的具体代码文件</h4>
		<p>例如输入 <code>@src/index.ts</code>，系统自动将其转化为轻量引用芯片。模型在需要时能精准读取，比手动复制粘贴优雅太多。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🌐</div>
	<div class="doc-step-content">
		<h4><code>@浏览器标签页</code>：引用正在浏览的真实网页</h4>
		<p>配合内置的 Page Picker 扩展，敲入 <code>@浏览器</code> 即可将当前在浏览器中查看的 API 文档、报错排查帖作为实时上下文送给 AI！</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">💬</div>
	<div class="doc-step-content">
		<h4><code>@跨会话引用</code>：引用其他历史对话的成果</h4>
		<p>敲入 <code>@会话标题</code>，AI 可以调阅另一个专门负责架构设计的会话中的结论，实现多任务之间的知识贯通。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">📚</div>
	<div class="doc-step-content">
		<h4><code>@文档</code>：项目内置知识库与规范</h4>
		<p>直接引用项目中的 <code>README.md</code> 或 <code>docs/api.md</code>，让 AI 严格按照团队既定的开发规范进行编码。</p>
	</div>
</div>

<h2 id="quick-prompt-chips">4. 快捷短语芯片栏 (Quick Prompt Chips)</h2>
<p>在底部输入框上方，常驻着一行实底的小芯片标签：</p>
<ul>
	<li><strong>排查报错</strong>：一键填入 <code>“请分析上述终端执行报错的根本原因，并给出最小修改方案”</code>；</li>
	<li><strong>补全单测</strong>：一键要求 AI 为刚才编写的函数自动补齐 Vitest / Jest 单元测试用例；</li>
	<li><strong>代码审查与优化</strong>：一键要求 AI 审查是否存在潜在内存泄漏或未处理的异常；</li>
	<li>你还可以在设置面板中自由增减、自定义你最常用的专属快捷短语！</li>
</ul>
`,
	contentEn: `
<h2 id="shortcuts-table">1. Essential Keyboard Shortcuts</h2>
<p>Boost your productivity with key combinations: <code>Ctrl + K</code> for fuzzy search, <code>Ctrl + Enter</code> to send, <code>Ctrl + &#96;</code> for the terminal drawer, and <code>Ctrl + B</code> for the file tree.</p>

<h2 id="slash-commands">2. Slash Commands</h2>
<p>Type <code>/</code> in composer to switch models (<code>/model</code>), clear messages (<code>/clear</code>), reload settings (<code>/reload</code>), or export chats (<code>/export</code>).</p>

<h2 id="at-mentions">3. Powerful @ Mentions</h2>
<p>Type <code>@</code> to quote project files (<code>@src/app.ts</code>), live browser tabs (<code>@browser</code>), past conversations (<code>@conv</code>), or markdown documents.</p>

<h2 id="quick-prompt-chips">4. Quick Prompt Chips</h2>
<p>Click prompt chips above the composer to trigger one-click bug diagnosis, test writing, or code reviews.</p>
`,
};
