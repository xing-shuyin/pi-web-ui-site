/** MCP & Browser */
export const ch14 = {
  id: "mcp-and-browser",
  group: "agent-modes",
  badge: "Chapter 14",
  icon: "🔌",
  navTitle: "MCP 与浏览器",
  navTitleEn: "MCP & Browser",
  title: "MCP 与浏览器",
  titleEn: "MCP & Browser",
  summary: "配置外部 MCP 工具，并通过扩展操作已授权浏览器页面。",
  summaryEn:
    "Configure external MCP tools and use the extension to operate authorized browser pages.",
  contentZh: `
<h2 id="what-is-mcp">连接 MCP</h2>
<p>按服务文档选择本地 stdio 或远程 Streamable HTTP。HTTP 支持事件流响应；连接后检查实际注册工具，确认服务能力和访问范围，再让模型调用。</p>

<h2 id="managing-mcp-servers">配置与重载</h2>
<p>在面板填写命令、参数、目录和环境变量，或 URL 与请求头。保存后检查连接状态和工具返回。配置支持监视与重载；内容不变不重启，非法 JSON 保留旧实例。失败时检查配置及服务日志。</p>

<h2 id="public-mcp-registry">寻找服务</h2>
<p>市场搜索过滤市场与目录入口卡片，便于跳转查找。找到服务后核对依赖、凭据和配置，实际连接确认可用性；卡片不是实时服务器安装清单。</p>

<h2 id="browser-page-control">授权浏览器</h2>
<p>用户要求操作页面时，先启用 browser_page 并配对 Page Picker 扩展，再用 pages 查看已授权页面；缺少目标时请用户授权。它转发到用户自己的浏览器，支持读取、点击、输入、导航、等待和截图。eval 需另开扩展开关，截图用 maxEdge；页面引用与操作授权分别处理。</p>
`,
  contentEn: `
<h2 id="what-is-mcp">Connect MCP</h2>
<p>Choose stdio or Streamable HTTP from the service documentation. HTTP supports event streams. Inspect registered tools and access scope before use.</p>

<h2 id="managing-mcp-servers">Configure and reload</h2>
<p>Enter commands, arguments, directory, and environment, or a URL and headers. Check connection results. Configuration supports watching and reload: unchanged content avoids restarts; invalid JSON retains existing instances. Inspect logs on failure.</p>

<h2 id="public-mcp-registry">Find services</h2>
<p>Market search filters directory-link cards. Follow links, check dependencies and credentials, then connect to verify availability.</p>

<h2 id="browser-page-control">Authorize browser access</h2>
<p>When requested, enable browser_page, pair Page Picker, and call pages. Ask the user to authorize missing pages. Requests operate their browser with reads, clicks, typing, navigation, waits, and screenshots. eval needs a separate switch; screenshots use maxEdge. Context references and action authorization remain separate.</p>
`,
};
