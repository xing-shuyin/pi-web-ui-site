/** Goal, Plan & Delegate Modes */
export const ch12 = {
  id: "modes-guide",
  group: "agent-modes",
  badge: "Chapter 12",
  icon: "🎯",
  navTitle: "目标、计划与委派",
  navTitleEn: "Goal, Plan & Delegate Modes",
  title: "目标、计划与委派",
  titleEn: "Goal, Plan & Delegate Modes",
  summary: "理解三种模式的调度、调用限制和验收边界。",
  summaryEn:
    "Understand scheduling, tool restrictions, and acceptance boundaries in the three modes.",
  contentZh: `
<h2 id="why-engineering-modes">选择模式</h2>
<p>先写明目标、允许修改范围和验收方式。调研方案用计划模式，持续执行与审查用目标模式，把请求交给常驻执行者用委派模式。根据任务选择入口，再按结果核验完成情况。</p>

<h2 id="goal-mode-2">目标模式</h2>
<p>目标模式 2.0 由服务端创建执行角色对话、发送任务、等待并采样，再让当前对话审查，不依赖模型自行 spawn 或 wait。需要角色桥能力；审查 verdict 为 pass 时结束，验收仍应检查证据。</p>

<h2 id="plan-mode">计划模式</h2>
<p>计划模式允许调研，限制写工具、非允许命令和绕路派发。计划确认后，由用户点击计划看板的「开始实施」，关闭只规划闸门并在当前对话发起实施轮，继续遵守任务范围。</p>

<h2 id="modes-delegate-mode">委派与停止</h2>
<p>委派模式自动路由请求，主对话该轮不直接运行模型，计划模式优先。目标模式另有轮次预算、停滞及失败等停止条件；进入 blocked 或 exhausted 后，检查原因、证据与剩余事项，再决定如何继续。</p>
`,
  contentEn: `
<h2 id="why-engineering-modes">Choose a mode</h2>
<p>Define the goal, allowed paths, and acceptance checks. Use plan mode for proposals, goal mode for execution and review, or delegate mode for a persistent executor.</p>

<h2 id="goal-mode-2">Goal mode</h2>
<p>The server creates the executor, sends work, waits, samples state, and requests review; model-driven spawn or wait is unnecessary. A role bridge is required. A pass verdict ends the loop; inspect acceptance evidence.</p>

<h2 id="plan-mode">Plan mode</h2>
<p>Plan mode gates writes and unsupported commands. After review, click “Start implementing” on the plan board to close the planning gate and begin implementation in the current conversation.</p>

<h2 id="modes-delegate-mode">Delegation and stopping</h2>
<p>Delegate mode routes requests instead of running the main model; plan mode takes priority. Goal budgets or failures can stop execution. Inspect blocked or exhausted results before continuing.</p>
`,
};
