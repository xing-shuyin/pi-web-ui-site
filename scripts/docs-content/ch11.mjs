/** Subagents & Delegation */
export const ch11 = {
  id: "subagents-and-delegation",
  group: "agent-modes",
  badge: "Chapter 11",
  icon: "🤖",
  navTitle: "子代理与委派",
  navTitleEn: "Subagents & Delegation",
  title: "子代理与委派",
  titleEn: "Subagents & Delegation",
  summary: "拆分并行任务，明确文件范围、认领提示与交接内容。",
  summaryEn:
    "Split parallel work and define file scope, advisory claims, and handoff content.",
  contentZh: `
<h2 id="what-are-subagents">拆分任务</h2>
<p>把探索、实现和审查交给独立子代理。默认共享工作目录，文件与 Git 状态仍会互相影响；需要隔离时选择 worktree，完成后检查差异并整合。</p>
<figure class="doc-figure"><img src="./assets/trajectory.jpeg" alt="运行轨迹时间线与子代理执行" /></figure>

<h2 id="six-section-delegation">写任务书</h2>
<p>delegate_task 需选择可用模板，并填写 TASK、EXPECTED OUTCOME、REQUIRED TOOLS、MUST DO、MUST NOT DO、CONTEXT。明确产物、允许修改路径和验证方式，便于代理执行与主线程验收。</p>

<h2 id="claim-files-lock">认领文件</h2>
<p>开始写入前用 claim_files 发布认领，完成后释放。它只提醒并行会话避让，不会阻止编辑；冲突较多时重新划分文件或使用独立工作树。</p>

<h2 id="delegate-mode">委派模式</h2>
<p>服务端把请求路由给常驻执行对话，主对话该轮不直接运行模型。执行和再次派发受门控，计划模式优先。</p>

<h2 id="handoff-and-templates">交接结果</h2>
<p>模板复用角色配置；handoff 只发送指定消息。交接时列出结论、证据路径、改动文件、验证结果和剩余事项，主代理据此核验。核验后再合并。</p>
`,
  contentEn: `
<h2 id="what-are-subagents">Split work</h2>
<p>Assign exploration, implementation, and review to subagents. The default directory is shared; use worktree isolation when needed, then review and integrate changes.</p>
<figure class="doc-figure"><img src="./assets/trajectory.jpeg" alt="Execution Trajectory & Subagents" /></figure>

<h2 id="six-section-delegation">Write a brief</h2>
<p>Choose an available delegate_task template. Fill TASK, EXPECTED OUTCOME, REQUIRED TOOLS, MUST DO, MUST NOT DO, and CONTEXT with deliverables, paths, and validation.</p>

<h2 id="claim-files-lock">Claim files</h2>
<p>Publish claim_files claims before editing and release afterward. Claims advise others; they do not block writes. Split conflicting work or isolate it.</p>

<h2 id="delegate-mode">Delegate mode</h2>
<p>The server routes requests to a persistent executor instead of running the main model that turn. Execution is gated; plan mode takes priority.</p>

<h2 id="handoff-and-templates">Hand off results</h2>
<p>Templates reuse role settings. Handoff sends specified messages; include evidence, changed files, validation, and remaining work for review. Verify before merging.</p>
`,
};
