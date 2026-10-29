/** Tools & Markers */
export const ch13 = {
  id: "tools-and-markers",
  group: "agent-modes",
  badge: "Chapter 13",
  icon: "🧰",
  navTitle: "工具与标记",
  navTitleEn: "Tools & Markers",
  title: "工具与标记",
  titleEn: "Tools & Markers",
  summary: "查阅共享工具目录，区分文件编辑、按需加载与回复标记。",
  summaryEn:
    "Consult the shared tool catalog and distinguish file editing, on-demand loading, and reply markers.",
  contentZh: `
<h2 id="how-ai-uses-tools">选择工具</h2>
<p>先查看当前可用工具和开关，再按返回结果继续。工具目录提供能力索引，实际可用性还取决于引擎、模式与依赖。下表由共享数据生成，便于集中维护。操作前确认范围。</p>

<h2 id="core-tools-overview">读写与补丁</h2>
<p>read 读取文件或列目录；目录下 limit 限条目，offset 忽略，file_path 是 path 别名。edit 精确替换，edit_soft 按去除首尾空白的行匹配，write 覆盖文件。patch 用 [path#TAG] 和 PUT、CUT、REM、MV；hashline 是文件内容摘要引擎。失败后重读确认。</p>
<div data-dynamic-table="tools-catalog"></div>

<h2 id="lazy-loading-architecture">按需加载</h2>
<p>延迟加载默认关闭，保存设置优先。启用后按需减少初始工具描述；关闭时不暴露 load_tools。codemode 组合调用，lsp 依赖语言服务，eval 使用持久 Python 或 Node 子进程，可访问实际文件。</p>

<h2 id="inline-markers">回复标记</h2>
<p>在回复中使用重命名、通知和动作建议标记，由界面处理。通知等级为 info、warning、error。标记表达状态或提供入口，操作结果仍用文件、命令输出等证据说明。</p>
`,
  contentEn: `
<h2 id="how-ai-uses-tools">Choose tools</h2>
<p>Check available tools and switches, then follow results. The shared catalog indexes capabilities; availability depends on engine, mode, and dependencies. Confirm scope before acting.</p>

<h2 id="core-tools-overview">Read and patch</h2>
<p>read accepts files or directories; directory limit caps entries and ignores offset. file_path aliases path. edit matches exactly; edit_soft trims line whitespace; write overwrites. patch uses [path#TAG] with PUT, CUT, REM, MV. Hashline hashes file content. Reread after failures.</p>
<div data-dynamic-table="tools-catalog"></div>

<h2 id="lazy-loading-architecture">Load on demand</h2>
<p>Lazy loading defaults off; saved settings prevail. When off, load_tools is hidden. codemode combines calls, lsp needs language services, and persistent Python/Node eval can access files.</p>

<h2 id="inline-markers">Reply markers</h2>
<p>Use rename, notice, and action markers in replies. Notice levels are info, warning, error. Support operation results with evidence.</p>
`,
};
