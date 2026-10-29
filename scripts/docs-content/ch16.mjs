export const ch16 = {
  id: "approval-and-security",
  group: "agent-modes",
  badge: "Guide",
  icon: "🛡️",
  navTitle: "工具审批与安全",
  navTitleEn: "Approval & Security",
  title: "工具审批与安全",
  titleEn: "Approval & Security",
  summary: "理解审批规则、放行范围与访问控制，按实际执行路径判断风险。",
  summaryEn:
    "Understand approval rules, permission scope and access controls for each execution path.",
  contentZh: `
<h2 id="why-security-matters">检查执行环境</h2>
<p>开始前确认当前引擎、项目目录与工具权限。审批作用于支持的执行路径；插件权限和系统账户权限也需分别配置。</p>
<h2 id="three-tier-approval">处理审批</h2>
<p>规则动作包括询问、拒绝和放行。弹窗可单次允许、在本对话允许同类，或扩大本对话的放行范围。全局审批开关会影响弹窗；根路径、破坏性操作和敏感密钥写入等仍有额外检查。修改规则时核对工具、参数与路径范围。</p>
<h2 id="high-risk-bash-alerts">核对命令</h2>
<p>查看完整命令、工作目录和命中原因，特别留意删除目标、重定向与组合命令。支持改写执行时，检查修改后的参数再确认。规则提示用于辅助判断，覆盖范围取决于实际调用路径。</p>
<h2 id="six-security-boundaries">配置访问控制</h2>
<p>远程部署时配置访问口令环境变量和 HTTPS，按需设置 Host 白名单。结合监听地址、来源校验、工作区约束与插件授权控制访问；让服务账户只获得任务所需的文件和网络权限。</p>
`,
  contentEn: `
<h2 id="why-security-matters">Check the environment</h2>
<p>Confirm the engine, project directory and tool permissions. Approval covers supported execution paths; configure plugin and operating-system permissions separately.</p>
<h2 id="three-tier-approval">Handle approval</h2>
<p>Rules ask, deny or allow. Allow once, remember a category, or broaden permission within the conversation. The global switch affects prompts. Root paths, destructive operations and sensitive key writes have additional checks. Review tool, parameter and path matching when editing rules.</p>
<h2 id="high-risk-bash-alerts">Review commands</h2>
<p>Read the command, directory and match reason, including deletion targets, redirection and compound commands. Verify edited parameters before approval. Coverage depends on the execution path.</p>
<h2 id="six-security-boundaries">Configure access</h2>
<p>For remote access, configure the access-token environment variable, HTTPS and any Host allowlist. Combine listener, origin, workspace and plugin controls with minimal account permissions.</p>
`,
};
