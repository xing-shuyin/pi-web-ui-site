export const ch19 = {
  id: "plugins-marketplace",
  group: "extensibility",
  badge: "Guide",
  icon: "🧩",
  navTitle: "插件管理",
  navTitleEn: "Plugin Management",
  title: "插件管理",
  titleEn: "Plugin Management",
  summary: "查找、安装和管理插件，按权限与依赖选择扩展能力。",
  summaryEn:
    "Find, install and manage plugins according to their permissions and dependencies.",
  contentZh: `
<h2 id="why-plugins-matter">选择插件</h2>
<p>插件可以增加工具、设置、界面入口和外部集成。在插件管理中查看来源、说明、系统支持、权限与依赖，再按任务选择。仓库目录或市场条目存在，不代表当前安装已启用；同类插件的工具名和操作也可能不同。</p>
<h2 id="top-featured-plugins">按任务配置</h2>
<p>代码编辑可查看 <code>vscode-editor</code>，数据库操作可查看 <code>db-client</code>，远程文件传输可查看 <code>sftp</code>。浏览器、桌面自动化需要本机环境或辅助进程配合，微信通道按说明连接和配对。完成配置后，用小任务验证连接与权限。</p>
<h2 id="install-and-manage-plugins">安装与维护</h2>
<p>安装或启用所需条目，按提示重载、授权并填写连接参数，再确认工具和入口出现。排错时分别核对安装状态、启用状态和外部连接，查看插件诊断及日志。</p>
<p>升级前检查配置与依赖变更；不再使用时禁用或卸载，并整理外部进程和凭据。宿主会清理登记的资源，自建资源由插件负责。备份必要配置，公开反馈和共享预设中移除密钥。</p>
`,
  contentEn: `
<h2 id="why-plugins-matter">Choose plugins</h2>
<p>Plugins add tools, settings, interface entries and integrations. Review source, platform support, permissions and dependencies in plugin management. Repository or marketplace presence does not imply enablement; similar plugins may use different tools.</p>
<h2 id="top-featured-plugins">Configure by task</h2>
<p>Consider <code>vscode-editor</code> for editing, <code>db-client</code> for databases and <code>sftp</code> for file transfer. Browser and desktop automation require local support; follow connection and pairing instructions for WeChat. Verify permissions with a small task.</p>
<h2 id="install-and-manage-plugins">Install and maintain</h2>
<p>Install or enable, reload, grant permissions and configure connections as prompted. Confirm entries and tools appear. Diagnose installation, enablement and connectivity separately using diagnostics and logs. Review changes before upgrading. Disable unused plugins and review external processes and credentials. The host cleans registered resources; plugins handle custom resources. Back up configuration without exposing keys.</p>
`,
};
