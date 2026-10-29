/** Terminal & Commands */
export const ch08 = {
  id: "terminal-and-bash",
  group: "workspace",
  badge: "Chapter 08",
  icon: "🖥️",
  navTitle: "终端与命令",
  navTitleEn: "Terminal & Commands",
  title: "终端与命令",
  titleEn: "Terminal & Commands",
  summary: "在终端中运行命令，理解持久会话、交互输入与权限边界。",
  summaryEn:
    "Run commands in terminals and understand persistent sessions, interactive input, and permissions.",
  contentZh: `
<h2 id="real-pty-experience">打开终端</h2>
<p>内置终端通过真实 shell 运行命令。先核对目录，再用不同标签分开服务、测试和临时操作。手动创建的用户终端在工作区共享显示，AI 终端归属对应对话；切换对话后注意选择正确标签。输入前确认当前程序是否正在等待回应。</p>
<figure class="doc-figure"><img src="./assets/terminal.jpeg" alt="内置多标签真 PTY 终端" /></figure>

<h2 id="ai-bash-takeover">启用接管</h2>
<p>启用终端接管后，bash 在专用 AI 终端执行。终端标签配置、AI 工具开关和计划模式分别控制入口，遇到拒绝时按提示检查设置。</p>

<h2 id="persist-shell-state">保留会话</h2>
<p>接管下，persist=true 复用 ai-bash，保留存活会话的目录和环境；false 使用一次性终端，省略则采用设置默认值。交互程序用持久终端，再用 terminal_input、terminal_key 输入。</p>

<h2 id="terminal-tips">查看结果</h2>
<p>用 terminal_read 或 terminal_wait 查看后续输出。达到静默阈值时返回控制权，程序可能仍在运行；先读输出再输入。聚焦终端后用 Ctrl+C 中断，关闭前确认所需服务已停止。</p>
`,
  contentEn: `
<h2 id="real-pty-experience">Open a terminal</h2>
<p>Check the directory, then use separate shell tabs for services and tests. User terminals are shared across the workspace; AI terminals belong to their conversation. Check whether a program is awaiting input before typing.</p>
<figure class="doc-figure"><img src="./assets/terminal.jpeg" alt="Multi-Tab Real PTY Terminal" /></figure>

<h2 id="ai-bash-takeover">Enable takeover</h2>
<p>Terminal takeover runs bash in dedicated AI terminals. Tab configuration, tool switches, and plan mode control different entry points.</p>

<h2 id="persist-shell-state">Keep shell state</h2>
<p>Use persist=true to reuse ai-bash and retain its live directory and environment; false creates a one-shot terminal. Omission follows settings. Drive interactive programs with terminal_input and terminal_key.</p>

<h2 id="terminal-tips">Inspect results</h2>
<p>Read subsequent output with terminal_read or terminal_wait. A silence return can leave the program running. Inspect output before typing; focus the terminal for Ctrl+C, and check services before closing.</p>
`,
};
