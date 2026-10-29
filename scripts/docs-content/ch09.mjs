/** Git & Commits */
export const ch09 = {
  id: "git-scm-and-ai-commit",
  group: "workspace",
  badge: "Chapter 09",
  icon: "🌿",
  navTitle: "Git 与提交",
  navTitleEn: "Git & Commits",
  title: "Git 与提交",
  titleEn: "Git & Commits",
  summary: "查看工作区差异、准备暂存内容，并核对 AI 生成的提交说明。",
  summaryEn:
    "Inspect workspace changes, prepare staged content, and review AI-generated commit messages.",
  contentZh: `
<h2 id="git-scm-overview">检查状态</h2>
<p>打开源码管理，确认当前目录属于目标仓库，再查看工作区、暂存区和文件差异。按文件阅读具体修改，确定本次提交范围；多人或多代理共用仓库时，特别留意已有暂存内容。</p>
<figure class="doc-figure"><img src="./assets/git.jpeg" alt="Git SCM 源代码管理面板" /></figure>

<h2 id="visual-git-operations">暂存与提交</h2>
<p>面板支持暂存、取消暂存和提交。提交全部会先执行 git add -A，应先排除无关文件。写操作通过终端命令执行；实例关闭终端标签时，对应入口也受限。完成后查看输出并刷新状态。</p>

<h2 id="ai-commit-generation">生成说明</h2>
<p>AI 优先描述暂存差异，无暂存时参考工作区和未跟踪变化；未跟踪文件只提供名字。说明沿用近期提交的风格与语言，生成后填入输入框。核对内容与提交范围，再执行提交。</p>

<h2 id="branch-and-history-quote">分支与历史</h2>
<p>通过分支选择、push、pull 和历史入口继续操作。远程分支切换可能建立本地跟踪分支；查看历史用于理解已有改动。切换或同步前检查当前修改，避免把无关工作混入提交。</p>
`,
  contentEn: `
<h2 id="git-scm-overview">Inspect status</h2>
<p>Open source control, confirm the repository, and inspect working-tree and staged diffs. Check existing staged content when sharing a repository.</p>
<figure class="doc-figure"><img src="./assets/git.jpeg" alt="Git SCM & AI Commit Generation" /></figure>

<h2 id="visual-git-operations">Stage and commit</h2>
<p>Stage or unstage files, then commit. Commit-all runs git add -A first, so exclude unrelated changes. Writes run through terminal commands and depend on terminal-tab availability. Refresh status afterward.</p>

<h2 id="ai-commit-generation">Generate a message</h2>
<p>AI describes staged changes first, otherwise working-tree and untracked changes. Untracked files supply names only. The generated input follows recent commit style and language; review its scope before committing.</p>

<h2 id="branch-and-history-quote">Branches and history</h2>
<p>Use branch selection, push, pull, and history. Remote checkout may create a tracking branch. Check local changes before switching or synchronizing.</p>
`,
};
