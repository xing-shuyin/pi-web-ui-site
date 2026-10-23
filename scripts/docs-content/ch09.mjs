/**
 * Chapter 09: Built-in Git SCM & AI Commit Message Generator (内置 Git 源代码管理与 AI 自动生成提交说明)
 */
export const ch09 = {
	id: "git-scm-and-ai-commit",
	group: "workspace",
	badge: "Chapter 09",
	icon: "🌿",
	navTitle: "09. Git 管理与 AI 提交",
	navTitleEn: "09. Git SCM & AI Commit",
	title: "内置 Git 源代码管理与 AI 自动生成规范提交说明",
	titleEn: "Built-in Git SCM & One-Click AI Commit Message Generation",
	summary: "新手无需死记繁琐 Git 命令！可视化暂存与放弃改动、红绿对比高亮 Diff，以及点击一键让 AI 智能分析暂存区并生成标准提交说明。",
	summaryEn: "Visual Git source control for everyone: stage/unstage/discard, inline diff inspection, and one-click AI commit messages following Conventional Commits.",
	contentZh: `
<h2 id="git-scm-overview">1. 为什么无需切出外部 Git 客户端？</h2>
<p>版本控制不用再切外部客户端，底部抽屉内直接集成完整 Git 面板：</p>

<figure class="doc-figure">
	<img src="./assets/git.jpeg" alt="Git SCM 源代码管理面板" />
	<figcaption>
		<strong>图 9.1 Git 源代码管理与差异对比：</strong>
		暂存区管理、红绿高亮 Diff 检视、分支快速切换以及「一键 AI 生成提交说明」按钮。
	</figcaption>
</figure>

<h2 id="visual-git-operations">2. 新手零门槛图形化版本控制</h2>
<p>即使你完全不懂 <code>git add</code>、<code>git checkout</code> 的底层参数，也能轻松上手：</p>

<div class="doc-step-box">
	<div class="doc-step-num">➕</div>
	<div class="doc-step-content">
		<h4>暂存与取消暂存 (Stage / Unstage)</h4>
		<p>面板清晰将改动归类为「未暂存的更改」与「已暂存的更改」。点击文件旁的 <code>+</code> 号即可暂存，点击 <code>-</code> 号即可取消暂存，亦可点击顶部的双加号一键全部暂存。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">👀</div>
	<div class="doc-step-content">
		<h4>逐行对比差异 (Inline Diff)</h4>
		<p>单击列表中的任何被改动文件，右侧即刻展开优雅的 Diff 视图：红色背景清晰标注删除的旧代码，绿色背景标注 AI 新增或修改的新代码，所有修改历历在目。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🗑️</div>
	<div class="doc-step-content">
		<h4>放弃单个文件的更改 (Discard)</h4>
		<p>如果发现某一个文件的修改不需要，点击文件旁的撤回小图标（Discard），该文件瞬间还原为 HEAD 版本的纯净状态。</p>
	</div>
</div>

<h2 id="ai-commit-generation">3. 亮点体验：一键 AI 自动生成提交说明</h2>
<p>新手写提交说明常草草写个 <code>update</code>，不利维护：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 点击一下，自动分析并生成专业 Commit 消息！</strong>
	<p>暂存好你想提交的文件后，点击提交输入框右上方的 <strong>「✨ AI 生成提交说明」</strong> 按钮。模型会深入分析暂存区内的所有代码 Diff，在 1 秒内为你自动撰写出符合业界规范的 <strong>Conventional Commits</strong> 消息（如 <code>feat(auth): add OAuth2 token refresh logic</code> 或 <code>fix(table): prevent horizontal overflow on mobile</code>）。</p>
</div>

<p>确认文案无误后，点击「提交 (Commit)」或使用快捷键 <code>Ctrl + Enter</code>，即可瞬间完成版本提交，整个流程一气呵成！</p>

<h2 id="branch-and-history-quote">4. 分支切换、Stash 贮藏与历史提交引用</h2>
<ul>
	<li><strong>分支快速切换</strong>：在面板顶部一键拉取分支列表、新建特性分支或切换主干，支持自动展示未提交警告；</li>
	<li><strong>临时贮藏 (Git Stash)</strong>：临时需要切换分支时，一键保存当前工作进度至 Stash 并在切回时无损弹出恢复；</li>
	<li><strong>历史提交一键引用回对话</strong>：在提交历史列表中点击「引用至对话」，可将某次 commit 的哈希与差异直接带入聊天窗口，让 AI 针对某次历史重构进行代码审查或写发布说明。</li>
</ul>
`,
	contentEn: `
<h2 id="git-scm-overview">1. Integrated Git SCM</h2>
<p>No need to switch to external Git GUI apps or terminal commands. Manage your entire Git repository right from the bottom drawer.</p>
<figure class="doc-figure">
	<img src="./assets/git.jpeg" alt="Git SCM & AI Commit Generation" />
	<figcaption>
		<strong>Figure 9.1 Git SCM & Commit Generator:</strong>
		Staged changes, color-coded inline diff, branch switcher, and AI commit message button.
	</figcaption>
</figure>

<h2 id="visual-git-operations">2. Intuitive Version Control</h2>
<p>Stage, unstage, or discard file changes with a single click. Inspect colored line-by-line diffs effortlessly.</p>

<h2 id="ai-commit-generation">3. One-Click AI Commit Message Generation</h2>
<p>Click the <strong>AI Generate</strong> button to inspect your staged diff and produce standard Conventional Commits messages in one second.</p>

<h2 id="branch-and-history-quote">4. Branches, Stashes & History Quotes</h2>
<p>Switch branches, stash WIP edits, and quote past commit diffs directly into conversation for code reviews.</p>
`,
};
