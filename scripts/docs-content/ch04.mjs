/**
 * Chapter 04: Streaming Chat, Selection Quote, Rollback & Multi-Sessions (流式对话、划词引用与代码回滚)
 */
export const ch04 = {
	id: "chat-and-sessions",
	group: "workspace",
	badge: "Chapter 04",
	icon: "💬",
	navTitle: "04. 流式对话与代码回滚",
	navTitleEn: "04. Chat, Quotes & Rollback",
	title: "流式对话实战、划词引用、代码快照回滚与多会话",
	titleEn: "Streaming Chat, Selection Quotes, Turn Rollback & Sessions",
	summary: "手把手掌握高效对话技巧：实时插队与撤回、划词一键精准提问、改错代码一键回滚历史轮次，以及多会话并发与跨设备过户。",
	summaryEn: "Master streaming conversation: steer mid-turn, quote highlighted text with one click, rollback file edits by turn, and multi-session concurrency.",
	contentZh: `
<h2 id="streaming-chat-overview">1. 沉浸式流式对话体验</h2>
<p>在 pi-web-ui 中，AI 以打字机般流畅的速度逐字输出，思考过程、工具调用卡片和代码 Diff 高亮实时渲染在对话流中：</p>

<figure class="doc-figure">
	<img src="./assets/chat-prompts.jpeg" alt="流式对话、提示词与右侧文件树" />
	<figcaption>
		<strong>图 4.1 流式交互与提示词体验：</strong>
		思考过程折叠展现、工具调用卡片实时展开、划词浮动引用与底部快捷短语芯片栏。
	</figcaption>
</figure>

<h2 id="steer-and-interrupt">2. 插队指导 (Steer) 与随时打断</h2>
<p>AI 回复到一半时想补充限制条件，无需苦等它讲完：</p>

<div class="doc-step-box">
	<div class="doc-step-num">🎯</div>
	<div class="doc-step-content">
		<h4>实时插队 (Steer)</h4>
		<p>无需等待模型输出完毕！在 AI 正在打字输出时，你可以直接在输入框敲入补充要求并回车。系统会立即以 <strong>Steer（实时航向校正）</strong> 机制将新指令注入当前推理链路，模型会无缝吸纳新条件并调整下文行为，大幅节省宝贵时间。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">⏹️</div>
	<div class="doc-step-content">
		<h4>一键打断与撤回</h4>
		<p>随时点击输入框右侧的红色停止按钮或按 <code>Esc</code> 键中断当前任务；若上一次提问想调整，可点击该轮气泡下方的「撤回并重新编辑」，原提示词自动恢复至输入框中。</p>
	</div>
</div>

<h2 id="selection-quote">3. 划词精准引用 (Selection Quote)</h2>
<p>只想针对长回答中的某一行深入提问时，无需手动复制粘贴：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 划词即引用：极速追问体验</strong>
	<p>用鼠标在任何消息气泡中<strong>高亮选中文本或某行代码</strong>，鼠标旁会瞬间浮出 <span class="doc-badge-pill">💬 引用提问</span> 浮标。点击后，该段文字将自动以精准的代码块或引用格式注入到底部输入框，你只需接着敲入 <code>“这段代码是什么意思？”</code> 或 <code>“这里有内存泄漏隐患吗？”</code> 即可！</p>
</div>

<h2 id="turn-rollback">4. 代码版本保险箱：按轮次一键回滚 (Turn Rollback)</h2>
<p>这是让新手彻底告别「担心 AI 把已有代码改崩」的杀手级功能：</p>

<div class="doc-step-box">
	<div class="doc-step-num">⏪</div>
	<div class="doc-step-content">
		<h4>工作区快照自动存档</h4>
		<p><strong>每次</strong> AI 准备调用 <code>write</code>、<code>edit</code> 等工具修改你的磁盘文件之前，工作台都会在底层自动为你记录一份精确的工作区文件改动快照（Zero-overhead Snapshot）。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🛡️</div>
	<div class="doc-step-content">
		<h4>一键撤回所有修改</h4>
		<p>如果 AI 在第 5 轮对话中改错了文件、引入了语法错误，你只需找到该轮对话卡片右上方的 <strong>「⏪ 回滚本轮文件改动」</strong> 按钮并轻点一下：<strong>该轮对话中被修改的所有文件瞬间精确还原到改动前的状态！</strong> 彻底摆脱手动使用 git stash / git reset 的繁琐操作。</p>
	</div>
</div>

<h2 id="multi-sessions">5. 多会话并发与跨设备过户 (Takeover)</h2>
<ul>
	<li><strong>多会话并发（上限 8 / 项目，子代理不计）</strong>：前端优化与后端重构并行不悖，互不阻塞；</li>
	<li><strong>文件夹归类整理</strong>：会话列表中支持新建文件夹，将相关的对话拖拽或归类整理，项目脉络清爽分明；</li>
	<li><strong>临时会话 (Ephemeral Chat)</strong>：支持新建临时会话，随用随关不留残余记录，也可随时点击「转为正式」落盘；</li>
	<li><strong>跨设备无缝过户 (Takeover)</strong>：你在办公室电脑上启动的长任务，下班路上用手机浏览器打开该网页，只需点击顶部「接管运行 (Takeover)」，即可将运行中的任务本体与控制流完整迁移至手机继续跟进！</li>
</ul>
`,
	contentEn: `
<h2 id="streaming-chat-overview">1. Streaming Conversation Experience</h2>
<p>pi-web-ui renders reasoning chains, tool cards, file diffs, and AI output in real time without lag.</p>
<figure class="doc-figure">
	<img src="./assets/chat-prompts.jpeg" alt="Streaming Chat & Prompt Chips" />
	<figcaption>
		<strong>Figure 4.1 Streaming Chat & Quick Prompts:</strong>
		Live reasoning folding, tool call cards, selection quote pill, and prompt chips.
	</figcaption>
</figure>

<h2 id="steer-and-interrupt">2. Steer & Interrupt</h2>
<p>Type extra guidance mid-turn while the model is still streaming. The system steers the active generation on the fly without waiting.</p>

<h2 id="selection-quote">3. Selection Quote</h2>
<p>Highlight any text or code snippet in the chat with your mouse. Click the floating <strong>Quote</strong> button to instantly paste formatted context into the composer.</p>

<h2 id="turn-rollback">4. Workspace Snapshots & Turn Rollback</h2>
<p>Automatic workspace snapshots safeguard your code before every write/edit. If AI makes a mistake, click <strong>Rollback Turn</strong> to revert all affected files in milliseconds!</p>
`,
};
