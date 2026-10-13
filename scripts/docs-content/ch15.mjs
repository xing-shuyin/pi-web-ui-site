/**
 * Chapter 15: Background Long-Running Tasks & Scheduled Wake-Up (后台长任务管家与调度器)
 */
export const ch15 = {
	id: "bg-tasks-and-scheduler",
	group: "agent-modes",
	badge: "Chapter 15",
	icon: "⏳",
	navTitle: "15. 后台长任务与调度器",
	navTitleEn: "15. Bg Tasks & Scheduler",
	title: "后台长任务管家与定时/延时自动唤醒调度器",
	titleEn: "Background Long-Running Tasks & Scheduled Wake-Up",
	summary: "常驻开发服务器不再阻塞对话！后台长任务日志实时查看、一键重启与销毁，配合 schedule_task 让 AI 定时或延时自动唤醒干活。",
	summaryEn: "Manage persistent servers (npm run dev, python server) without blocking chat. Real-time log inspection, process management, and schedule_task automation.",
	contentZh: `
<h2 id="why-background-tasks">1. 为什么你需要“后台长任务管家”？</h2>
<p>在编写全栈应用时，我们经常需要启动持续常驻的服务，例如 <code>npm run dev</code>、<code>python manage.py runserver</code>、<code>docker compose up</code> 或是持续监听文件的构建工具。而在普通 AI 工具中，一旦执行这类前台常驻命令：</p>
<ul>
	<li>命令永远不会自动退出，导致整个 AI 对话和终端彻底卡死挂起；</li>
	<li>或者工具超时报错中止，把正在跑的开发服务器给强行杀掉了。</li>
</ul>

<div class="doc-callout doc-callout-tip">
	<strong>💡 pi-web-ui 后台长任务管家 (BgTasks)</strong>
	<p>系统自动将常驻监听命令转入<strong>后台受控守护进程池</strong>中运行。会话绝不阻塞，你可以一边与 AI 畅聊修改代码，一边让前端开发服务器在后台持续热重载！</p>
</div>

<h2 id="manage-background-tasks">2. 后台任务控制台实操 (BgTasksModal)</h2>
<p>点击底栏的齿轮或快捷图标，可随时唤起 <strong>「后台长任务管理器」</strong>：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📋 运行中进程全景清单</h4>
		<p>清晰显示所有由你或 AI 启动的后台服务：进程 PID、启动命令、工作目录、运行持续时间与内存消耗一清二楚。</p>
	</div>
	<div class="doc-card">
		<h4>📜 独立实时日志视窗</h4>
		<p>单击任意任务，即可弹窗查看该服务的标准输出（stdout）与错误输出（stderr）日志流，支持自动滚屏与日志检索。</p>
	</div>
	<div class="doc-card">
		<h4>🔄 一键优雅重启 / 彻底销毁</h4>
		<p>服务改动后需要重启？点击「重启」按钮无缝重载；不再需要时点击红色「终止」按钮，系统会递归清理进程树，绝不残留孤儿进程。</p>
	</div>
	<div class="doc-card">
		<h4>🛡️ 自动活力看门狗</h4>
		<p>如果后台任务由于端口冲突或语法错误意外崩溃，系统会立即在聊天界面右下角弹出轻量通知提醒你排查。</p>
	</div>
</div>

<h2 id="schedule-tasks-automation">3. 定时与延时自动唤醒 (<code>schedule_task</code>)</h2>
<p>除了手动触发对话，pi-web-ui 还支持让 AI 具备<strong>时间感知与自我定时唤醒能力</strong>：</p>

<div class="doc-step-box">
	<div class="doc-step-num">⏰</div>
	<div class="doc-step-content">
		<h4>延时执行任务</h4>
		<p>例如对 AI 说：<code>“我刚启动了一个需要跑 20 分钟的数据训练脚本，请在 20 分钟后自动唤醒检查日志，确认训练是否收敛。”</code> AI 会自动调用 <code>schedule_task</code> 注册一个延时任务，倒计时结束系统会自动唤醒会话并替你核验结果！</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">📅</div>
	<div class="doc-step-content">
		<h4>Cron 周期性定时巡检</h4>
		<p>支持配置标准的 Cron 表达式（例如每天凌晨 2 点、或每隔 4 小时），让 AI 周期性自动巡检代码库是否有依赖安全漏洞、更新文档或备份数据库。</p>
	</div>
</div>

<div class="doc-callout doc-callout-warn">
	<strong>🔒 远期定时器溢出防死循环保护：</strong>
	<p>Node.js 原生 <code>setTimeout</code> 超过 24.8 天（2^31-1 ms）会发生整型溢出导致瞬间触发。pi-web-ui 底层采用了分片时间轮算法（armDelay），即便设置几个月后的调度任务也能稳健分片休眠，绝无资源泄漏隐患。</p>
</div>
`,
	contentEn: `
<h2 id="why-background-tasks">1. Why Background Tasks?</h2>
<p>Development servers like <code>npm run dev</code> or <code>vite</code> must run continuously without hanging your active chat session.</p>

<h2 id="manage-background-tasks">2. Background Task Manager</h2>
<p>Inspect active background processes, view live streaming stdout/stderr logs, restart servers with one click, and terminate process trees cleanly without orphaned processes.</p>

<h2 id="schedule-tasks-automation">3. Scheduled Tasks (<code>schedule_task</code>)</h2>
<p>Let AI set delayed alarms (e.g. "Check test status after 15 minutes") or recurring Cron triggers for repo health checks and build monitoring.</p>
`,
};
