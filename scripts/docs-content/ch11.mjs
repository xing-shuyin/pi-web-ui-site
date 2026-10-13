/**
 * Chapter 11: Subagents System, 6-Section Delegation & File Locks (子代理系统、六段式委派与排他锁)
 */
export const ch11 = {
	id: "subagents-and-delegation",
	group: "agent-modes",
	badge: "Chapter 11 · 核心亮点",
	icon: "🤖",
	navTitle: "11. 并发子代理与任务委派",
	navTitleEn: "11. Subagents & Delegation",
	title: "子代理系统 (Subagents)、六段式任务委派与防冲突排他锁",
	titleEn: "Subagents System, 6-Section Delegation & File Locking",
	summary: "告别单兵作战！让主代理运筹帷幄，派生多个专业子代理并行写前端、写后端与跑测试，配合六段式任务书与 claim_files 防并发冲突排他锁。",
	summaryEn: "Parallel multi-agent collaboration: spawn specialized subagents for frontend, backend and QA, guided by 6-section task briefs and claim_files mutual exclusion locks.",
	contentZh: `
<h2 id="what-are-subagents">1. 什么是子代理系统 (Subagents)？</h2>
<p>在传统的 AI 编码工具中，AI 只能“单线程”地干活：写完前端，才能开始写后端；写完后端，才能去写测试。一旦遇到规模较大的重构，单次对话的上下文会迅速被海量日志占满，导致模型遗忘前文要求或发生幻觉。</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 多智能体军团协同作战</strong>
	<p>pi-web-ui 引入了完整的<strong>子代理系统 (Subagents)</strong>：主对话作为“架构总监”，可以根据项目需求并行派生（spawn）多个独立的专业后台子代理。每个子代理拥有<strong>独立的上下文窗口与工具执行环境</strong>，前端子代理、后端子代理与测试子代理同时全速推进！</p>
</div>

<figure class="doc-figure">
	<img src="./assets/trajectory.jpeg" alt="运行轨迹时间线与子代理执行" />
	<figcaption>
		<strong>图 11.1 运行轨迹与子代理执行时间线：</strong>
		全景审查子代理思维链演进、工具调用轨迹、耗时统计与最终交付成果。
	</figcaption>
</figure>

<h2 id="six-section-delegation">2. 六段式任务委派规范 (<code>delegate_task</code>)</h2>
<p>为什么普通 AI 派生任务容易“跑偏”？因为口头指令缺乏严格边界。pi-web-ui 制定了标准化的<strong>六段式任务书</strong>，确保子代理领到任务后执行百分之百精准：</p>

<div class="doc-step-box">
	<div class="doc-step-num">1</div>
	<div class="doc-step-content">
		<h4>目标 (Goal)</h4>
		<p>极其明确的一句话核心业务诉求（例如：<code>“为购物车结算模块增加微信支付回调签名校验”</code>）。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">2</div>
	<div class="doc-step-content">
		<h4>约束条件 (Constraints)</h4>
		<p>严禁跨越的红线（例如：<code>“严禁修改现有数据库 Schema，严禁引入未在 package.json 声明的第三方依赖”</code>）。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">3</div>
	<div class="doc-step-content">
		<h4>输入上下文 (Context)</h4>
		<p>子代理开展工作所需的关键文件路径与前置设计文档列表。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">4</div>
	<div class="doc-step-content">
		<h4>实施策略 (Strategy)</h4>
		<p>推荐遵循的设计模式、函数拆分原则与异常处理规约。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">5</div>
	<div class="doc-step-content">
		<h4>交付物标准 (Deliverables)</h4>
		<p>明确列出需要创建或修改的具体文件路径（例如 <code>src/pay/wechat.ts</code> 与 <code>tests/wechat.spec.ts</code>）。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">6</div>
	<div class="doc-step-content">
		<h4>验证方案 (Verification)</h4>
		<p>子代理完工判定依据（例如：<code>“必须在终端运行 npm test wechat 并确保所有测试用例 100% 通过”</code>）。</p>
	</div>
</div>

<h2 id="claim-files-lock">3. <code>claim_files</code> 文件排他锁：杜绝并发写入冲突</h2>
<p>当多个子代理并行开发时，最危险的情况就是「子代理 A」和「子代理 B」同时修改同一个配置文件，导致代码互相踩踏覆盖：</p>

<div class="doc-step-box">
	<div class="doc-step-num">🔒</div>
	<div class="doc-step-content">
		<h4>声明式文件认领机制</h4>
		<p>子代理在动手修改代码前，必须先调用 <code>claim_files</code> 工具声明认领目标文件（如 <code>paths: ["src/config.ts"]</code>）。其他正在运行的子代理若尝试修改已被认领的文件，将被自动阻塞或收到协同警示，彻底保证并发安全性！</p>
	</div>
</div>

<h2 id="handoff-and-templates">4. 模板库与点对点移交 (Handoff)</h2>
<ul>
	<li><strong>预设专家模板库</strong>：工作台自带「代码审查专家」、「单元测试生成专家」、「重构优化专家」等成熟模板，开箱即用；</li>
	<li><strong>点对点接力移交 (Handoff)</strong>：前端子代理完成 UI 骨架后，可以直接将上下文与交付物 <code>handoff</code> 移交给接口联调子代理，形成流水线式的全自动流水作业。</li>
</ul>
`,
	contentEn: `
<h2 id="what-are-subagents">1. What are Subagents?</h2>
<p>Break free from single-thread prompts! The main agent orchestrates multiple concurrent subagents with isolated context windows, working on frontend, backend, and tests simultaneously.</p>
<figure class="doc-figure">
	<img src="./assets/trajectory.jpeg" alt="Execution Trajectory & Subagents" />
	<figcaption>
		<strong>Figure 11.1 Run Trajectory Timeline:</strong>
		Full inspection of subagent thought processes, tool call traces, and final deliverables.
	</figcaption>
</figure>

<h2 id="six-section-delegation">2. Six-Section Task Brief</h2>
<p>Tasks are rigorously structured: ① Goal ｜ ② Constraints ｜ ③ Context ｜ ④ Strategy ｜ ⑤ Deliverables ｜ ⑥ Verification.</p>

<h2 id="claim-files-lock">3. claim_files File Locks</h2>
<p>Subagents claim target file paths before editing, preventing race conditions and file overwrite collisions across concurrent tasks.</p>

<h2 id="handoff-and-templates">4. Subagent Templates & Handoff</h2>
<p>Utilize expert templates (Code Reviewer, Test Writer, Refactor Lead) and pass context from one subagent to another with <code>handoff</code>.</p>
`,
};
