/**
 * Chapter 08: Built-in Multi-Tab Real PTY Terminal & AI Bash Takeover (内置多标签真PTY终端与AI接管)
 */
export const ch08 = {
	id: "terminal-and-bash",
	group: "workspace",
	badge: "Chapter 08",
	icon: "🖥️",
	navTitle: "08. 真 PTY 终端与 AI 接管",
	navTitleEn: "08. Terminal & Bash Takeover",
	title: "内置多标签真 PTY 终端与 AI 命令透明接管执行",
	titleEn: "Multi-Tab Real PTY Terminal & AI Bash Execution Takeover",
	summary: "告别在独立终端软件与网页之间反复横跳！基于 node-pty 与 xterm.js 的真实终端体验，AI 命令透明可见打字执行，支持交互式程序与虚拟环境。",
	summaryEn: "Full PTY terminal backed by node-pty and xterm.js. Transparent AI command execution in visible terminals, interactive CLI support, and persistent shells.",
	contentZh: `
<h2 id="real-pty-experience">1. 什么是“真 PTY 终端”？</h2>
<p>市面上许多 AI 网页工具所谓的“终端”，仅仅是通过 <code>child_process.exec</code> 抓取一次性的文字输出。这种伪终端有诸多致命缺陷：无法处理彩色 ANSI 字符、不支持光标跳动，<strong>一旦执行了带 <code>[y/N]</code> 确认提示或需要按方向键选择的交互式命令（如 <code>npm init</code>、<code>vim</code>、<code>htop</code>），就会立即死锁卡死</strong>。</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 pi-web-ui 的真 PTY 架构</strong>
	<p>服务端使用高性能的 C++ 原生伪终端模块 <code>node-pty</code>，前端接入工业级 <code>@xterm/xterm</code> 渲染引擎。无论是本机环境还是远程 SSH 主机，它都是一个<strong>真实完整的系统控制台</strong>：支持键盘快捷键交互、颜色高亮、光标任意移动与所有全屏终端应用！</p>
</div>

<figure class="doc-figure">
	<img src="./assets/terminal.jpeg" alt="内置多标签真 PTY 终端" />
	<figcaption>
		<strong>图 8.1 内置多标签真 PTY 终端面板：</strong>
		支持新建多个终端标签、全屏展开/折叠、主题自适应与 AI 命令透明接管执行。
	</figcaption>
</figure>

<h2 id="ai-bash-takeover">2. AI 命令透明接管：拒绝暗箱黑盒操作</h2>
<p>新手使用 AI 编程助手时，最担心的就是 AI 在背后偷偷敲命令，把自己的开发环境搞乱。</p>

<div class="doc-step-box">
	<div class="doc-step-num">👀</div>
	<div class="doc-step-content">
		<h4>可见终端透明打字回显</h4>
		<p>当 AI 调用 <code>bash</code> 工具运行测试（如 <code>npm test</code>）或安装依赖（如 <code>pip install</code>）时，你会看到它直接在当前活动的终端标签中<strong>像真人操作一样打出命令并实时回显执行日志</strong>！</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🛑</div>
	<div class="doc-step-content">
		<h4>随时人工介入打断</h4>
		<p>如果发现 AI 敲错了命令或进入了无限等待，你可以随时将鼠标点击进入终端按 <code>Ctrl + C</code> 发送中断信号，安全掌控权始终握在你自己手中。</p>
	</div>
</div>

<h2 id="persist-shell-state">3. 一次性命令 vs 持久终端 (Persistent Shell)</h2>
<p>在默认情况下，一次性的脚本执行完毕后会清理环境；但许多深度开发需要保持状态：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🔄 持久终端会话 (<code>persist=true</code>)</h4>
		<p>AI 可以开启名为 <code>ai-bash</code> 的持久终端。你在终端中激活的 Python 虚拟环境（<code>source .venv/bin/activate</code>）或切换的目录（<code>cd backend</code>），在后续对话轮次中会被一直保留，无需重复初始化。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ 3 秒静默活力探测机制</h4>
		<p>如果 AI 误触发了一个等待键盘输入的交互命令（如 <code>Are you sure? (yes/no)</code>），工作台内置的看门狗会在 3 秒无输出时自动感知并给模型返回提示，绝不让会话挂死。</p>
	</div>
</div>

<h2 id="terminal-tips">4. 新手操作小技巧</h2>
<ul>
	<li><strong>快捷呼出与收起</strong>：随时按下快捷键 <code>Ctrl + &#96;</code>（反引号）或点击底栏终端图标，即可展开/收起底部终端面板；</li>
	<li><strong>多标签管理</strong>：点击终端顶部的 <code>+</code> 号即可新建第 2、第 3 个独立的终端会话，一个跑服务，一个跑测试；</li>
	<li><strong>跟随界面主题</strong>：终端的背景色、字体前景色与光标颜色完全跟随你所选的 26+ 主题，视觉浑然一体。</li>
</ul>
`,
	contentEn: `
<h2 id="real-pty-experience">1. What is a Real PTY Terminal?</h2>
<p>Unlike basic child process wrappers, pi-web-ui uses <code>node-pty</code> and <code>@xterm/xterm</code> to deliver a genuine terminal supporting full ANSI color sequences, cursor jumps, and interactive CLI programs like <code>vim</code> and <code>htop</code>.</p>
<figure class="doc-figure">
	<img src="./assets/terminal.jpeg" alt="Multi-Tab Real PTY Terminal" />
	<figcaption>
		<strong>Figure 8.1 Real PTY Terminal Panel:</strong>
		Multi-tab shell management, responsive theme coloring, and live AI command execution.
	</figcaption>
</figure>

<h2 id="ai-bash-takeover">2. Transparent AI Bash Execution</h2>
<p>When AI runs shell scripts, commands appear and execute right before your eyes inside the active terminal tab. Press <code>Ctrl + C</code> at any time to cancel.</p>

<h2 id="persist-shell-state">3. Persistent Shell Sessions</h2>
<p>Using <code>persist=true</code> keeps working directories and active Python <code>venv</code> environments alive across turns.</p>

<h2 id="terminal-tips">4. Shortcuts</h2>
<p>Toggle the drawer with <code>Ctrl + &#96;</code>, add tabs with <code>+</code>, and resize splits easily.</p>
`,
};
