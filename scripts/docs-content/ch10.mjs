/** Commands & References */
export const ch10 = {
  id: "commands-and-shortcuts",
  group: "workspace",
  badge: "Chapter 10",
  icon: "⌨️",
  navTitle: "命令与引用",
  navTitleEn: "Commands & References",
  title: "命令与引用",
  titleEn: "Commands & References",
  summary: "查阅共享快捷键与命令表，把上下文引用加入输入。",
  summaryEn:
    "Use the shared shortcut and command tables and add context references to your input.",
  contentZh: `
<h2 id="shortcuts-table">快捷键</h2>
<p>下表列出共享快捷键。先确认焦点在全局界面、输入框还是终端，再使用对应组合。发送规则受输入偏好影响；浏览器和系统也可能占用按键。需要停止回复时使用界面停止按钮。</p>
<div data-dynamic-table="shortcuts"></div>

<h2 id="slash-commands">斜杠命令</h2>
<p>输入 / 查看当前候选，下表提供共享命令索引。扩展、技能和模板可增加入口，以候选及 /help 为准。按提示填写参数，例如 /model 可带模型名称，/plan 用于设置计划状态。</p>
<div data-dynamic-table="slash-commands"></div>

<h2 id="at-mentions">引用上下文</h2>
<p>输入 @ 选择文件等上下文。来源随项目、连接和功能开关变化；选中后核对路径及内容。优先引用与问题相关的部分，并在正文写明希望分析或修改的范围。浏览器页面操作还需要扩展授权。</p>

<h2 id="quick-prompt-chips">快捷短语</h2>
<p>用快捷短语复用检查差异、解释代码等常见要求。点击前检查路径、任务范围和约束，按当前界面设置决定填入或发送。需要组合多项要求时，先在输入框整理完整指令，再一起提交。</p>
`,
  contentEn: `
<h2 id="shortcuts-table">Shortcuts</h2>
<p>Use the shared table below. Check whether focus is global, in the composer, or in a terminal. Sending follows input preferences; use the stop button to stop replies.</p>
<div data-dynamic-table="shortcuts"></div>

<h2 id="slash-commands">Slash commands</h2>
<p>Type / for current candidates and consult the shared table or /help. Extensions, skills, and templates can add commands. Supply required arguments, such as a model name for /model.</p>
<div data-dynamic-table="slash-commands"></div>

<h2 id="at-mentions">Context references</h2>
<p>Type @ to select relevant files or other available sources. Check paths and state the requested scope. Browser operations also require extension authorization.</p>

<h2 id="quick-prompt-chips">Quick prompts</h2>
<p>Reuse common instructions with prompt chips. Check paths, scope, constraints, and whether clicking inserts or sends. Combine requirements in the composer before submitting when needed.</p>
`,
};
