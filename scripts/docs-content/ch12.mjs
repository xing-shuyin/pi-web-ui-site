/**
 * Chapter 12: Advanced Modes: Goal Mode 2.0, Plan Mode & Delegate Mode (高阶模式指南)
 */
export const ch12 = {
	id: "modes-guide",
	group: "agent-modes",
	badge: "Chapter 12",
	icon: "🎯",
	navTitle: "12. 目标模式与计划模式",
	navTitleEn: "12. Goal & Plan Modes",
	title: "三大高阶工程模式：目标模式 2.0、计划模式与审查模式",
	titleEn: "Advanced Modes: Goal Mode 2.0, Plan Mode & Delegate Mode",
	summary: "拒绝“改完就跑”的半拉子工程！详解双会话自治证据链审查（目标模式 2.0）、底层硬闸门只读规划（计划模式）与主审从干（审查模式）。",
	summaryEn: "Explore industrial engineering modes: Dual-session evidence-driven review (Goal Mode 2.0), hard-gated read-only planning (Plan Mode), and reviewer delegation.",
	contentZh: `
<h2 id="why-engineering-modes">1. 为什么需要高阶工程模式？</h2>
<p>新手在日常使用 AI 写代码时，经常遇到两个让人抓狂的困境：</p>
<ul>
	<li><strong>困境一：言过其实、改完就跑</strong>。AI 回复了一句“我已经为您修复了全部 Bug 并优化了逻辑”，结果你一运行，连页面都打不开，代码里满是类型报错；</li>
	<li><strong>困境二：鲁莽动手、破坏结构</strong>。你本想让 AI 帮你评估一下架构选型或做一次方案规划，AI 却一上来就调用写工具，把你原本写得好好的几十个文件改得面目全非。</li>
</ul>
<p>为了从工程机制上彻底杜绝这些问题，pi-web-ui 打造了三大专属工程模式：</p>

<h2 id="goal-mode-2">2. 目标模式 2.0 (Goal Mode 2.0)：双会话闭环证据链审查</h2>
<p>点击底栏模式切换器的 <strong>「🎯 目标模式 2.0」</strong>，整个交互会进入严格的自治审查闭环：</p>

<div class="doc-step-box">
	<div class="doc-step-num">👨‍⚖️</div>
	<div class="doc-step-content">
		<h4>主会话化身“严苛审查官 (Reviewer)”</h4>
		<p>你所在的主对话不会直接动手写文件，而是扮演高标准的架构审查者，负责理解你的最终目标，并将任务拆解派发给后台常驻的落盘执行者。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🔨</div>
	<div class="doc-step-content">
		<h4>后台独立“落盘执行者 (Executor)”</h4>
		<p>执行者在后台负责阅读代码、修改文件、调用终端运行单元测试与构建命令。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">📜</div>
	<div class="doc-step-content">
		<h4>不见运行证据，审查官绝不放行！</h4>
		<p>执行者改完代码后必须向主审查者提交包含<strong>终端真实运行日志、测试用例通过报告、打包无报错输出的完整证据链（Evidence）</strong>。审查官会逐行核对证据：若测试失败，立即无情打回要求其继续修复；唯有所有验收条件全部通过，才会向你宣告任务圆满完成！</p>
	</div>
</div>

<h2 id="plan-mode">3. 计划模式 (Plan Mode)：先出详尽方案，确认后再动手</h2>
<p>点击底栏模式切换器的 <strong>「📋 计划模式」</strong>，工作台底层会立即激活写操作硬闸门：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 绝对安全的只读沙盒探索</strong>
	<p>在计划模式下，系统在底层物理级剥离并拦截了 <code>write</code>、<code>edit</code> 等一切具备文件改动能力的写工具。AI 只能调用 <code>read</code>、<code>find</code>、<code>grep</code> 深入阅读你的整个代码库，并输出详尽的<strong>技术实施计划书、风险评估与模块改动清单</strong>。</p>
</div>

<p>你可以悠闲地审阅 AI 给出的方案，提出你的修改建议；当你对整套规划满意后，只需点击计划看板上的 <strong>「🚀 开始实施」</strong> 按钮，系统才会正式解除只读保护、进入编码实施阶段。</p>

<h2 id="delegate-mode">4. 审查者委派模式 (Delegate Mode)</h2>
<p>面向复杂长线工程：开启委派模式后，当前会话常驻为总设计师，任何时候你在该会话中输入的指令，都会被自动转译并派发给常驻的执行工作流去落实，适合带领 AI 进行千万行级大型仓库的持续演进。</p>
`,
	contentEn: `
<h2 id="why-engineering-modes">1. Why Engineering Modes?</h2>
<p>Standard AI coding tools often suffer from "hallucinated completion" (claiming code is fixed without testing) or "reckless overwrites" (modifying files when only research was asked).</p>

<h2 id="goal-mode-2">2. Goal Mode 2.0 (Dual-Session Review)</h2>
<p>Splits responsibility between a Reviewer (active chat) and an Executor (background). The Reviewer rejects any pull request until the Executor provides ironclad runtime evidence (e.g., passing tests, green linter).</p>

<h2 id="plan-mode">3. Plan Mode (Hard-Gated Read-Only)</h2>
<p>Physically disables write/edit tools. The AI reads your repository and crafts a comprehensive blueprint. Click <strong>Start Implementation</strong> only when you approve.</p>

<h2 id="delegate-mode">4. Reviewer Delegate Mode</h2>
<p>Keeps the main session focused purely on architectural oversight while streaming tasks to worker sessions.</p>
`,
};
