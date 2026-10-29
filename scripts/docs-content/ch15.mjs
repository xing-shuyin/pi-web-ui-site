export const ch15 = {
  id: "bg-tasks-and-scheduler",
  group: "agent-modes",
  badge: "Guide",
  icon: "⏳",
  navTitle: "后台任务与调度",
  navTitleEn: "Background Tasks & Scheduling",
  title: "后台任务与调度",
  titleEn: "Background Tasks & Scheduling",
  summary: "查看后台服务，创建延时或周期任务，并了解调度的运行条件。",
  summaryEn:
    "Inspect background services, create delayed or recurring tasks, and understand when scheduling runs.",
  contentZh: `
<h2 id="why-background-tasks">启动服务</h2>
<p>让智能体运行 <code>npm run dev</code> 等常驻命令时，说明需要后台运行，并确认启动结果和端口。一次性构建、测试则等待退出后检查结果。</p>
<h2 id="manage-background-tasks">管理后台任务</h2>
<p>打开后台任务面板，查看监听端口、进程、运行时间、命令及插件任务。停止前核对服务归属；重启时确认旧进程退出，再执行启动命令。排错可回到原终端，或让智能体读取日志。插件任务按其提供的停止方式清理。</p>
<h2 id="schedule-tasks-automation">安排调度</h2>
<p>让智能体调用 <code>schedule</code> 创建任务，例如“二十分钟后检查日志”。支持相对时间和五字段 Cron，最短间隔六十秒。默认绑定当前对话、单次执行后删除；周期执行需设置 <code>recurring=true</code>。创建后用列表核对下次时间、目标对话和重复状态，不用时取消。任务持久化保存，触发需要服务运行；停机后的补跑取决于任务策略。</p>
`,
  contentEn: `
<h2 id="why-background-tasks">Start a service</h2>
<p>Ask the agent to run persistent commands such as <code>npm run dev</code> in the background, then confirm startup and port. Wait for builds and tests to finish.</p>
<h2 id="manage-background-tasks">Manage tasks</h2>
<p>Open background tasks to inspect ports, processes, uptime, commands and plugin tasks. Verify ownership before stopping. Restart after the old process exits. Read logs in the original terminal. Plugin cleanup follows its implementation.</p>
<h2 id="schedule-tasks-automation">Schedule work</h2>
<p>Ask the agent to use <code>schedule</code>. Relative delays and five-field Cron require at least sixty seconds. Tasks target this conversation and run once by default; set <code>recurring=true</code> to repeat. Check timing, target and recurrence in the list; cancel unused tasks. Persisted tasks require a running service; recovery follows the catch-up policy.</p>
`,
};
