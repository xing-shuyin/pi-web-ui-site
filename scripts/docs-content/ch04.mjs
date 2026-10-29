export const ch04 = {
  id: "chat-and-sessions",
  group: "workspace",
  badge: "Chapter 04",
  icon: "💬",
  navTitle: "对话与恢复",
  navTitleEn: "Chat & Recovery",
  title: "对话与恢复",
  titleEn: "Chat & Recovery",
  summary: "追问、引用、管理会话，并了解文件恢复的前提。",
  summaryEn:
    "Follow up, quote text, manage sessions, and understand file recovery requirements.",
  contentZh: `
<h2 id="streaming-chat-overview">查看结果</h2>
<p>写清目标文件、预期结果与约束。任务执行时查看工具卡、命令输出与文件差异；模型报告完成后，运行预览或验证步骤，确认实际行为符合要求。</p>
<h2 id="steer-and-interrupt">补充要求</h2>
<p>用插队或排队补充要求，生效时机取决于执行状态。方向错误时停止并重新说明目标；停止不会撤销已经写入的文件，继续前先检查状态。</p>
<h2 id="selection-quote">引用</h2>
<p>选中消息或代码后引用，补充文件路径、函数名与报错条件。长日志只引用相关片段，便于模型定位，也便于你检查答复依据。</p>
<h2 id="turn-rollback">恢复</h2>
<p>文件恢复需 Git 仓库、成功的任务快照及选择恢复工作区。它可能覆盖人工或并发修改、清理新增未跟踪文件；先保留重要成果。对话回退不能撤销部署等外部操作。</p>
<h2 id="multi-sessions">多个会话</h2>
<p>按任务分会话，共享目录并发编辑可能冲突。跨设备接管需连接同一服务，任务仍在服务端运行。</p>
`,
  contentEn: `
<h2 id="streaming-chat-overview">Results</h2>
<p>State files, expected results, and constraints. Review tool cards, command output, and diffs, then preview or verify the result.</p>
<h2 id="steer-and-interrupt">Follow-ups</h2>
<p>Steer or queue instructions; timing depends on execution state. Stop to correct direction, then inspect existing edits before continuing.</p>
<h2 id="selection-quote">Quotes</h2>
<p>Quote relevant messages or code with paths, function names, and error conditions. Keep long logs focused.</p>
<h2 id="turn-rollback">Recovery</h2>
<p>File recovery needs Git, a successful task snapshot, and workspace restoration selected. Save work first: restoration can overwrite edits and remove untracked files, but cannot undo deployments.</p>
<h2 id="multi-sessions">Sessions</h2>
<p>Separate tasks into sessions; shared-directory edits can conflict. Device takeover connects to the same server, where execution continues.</p>
`,
};
