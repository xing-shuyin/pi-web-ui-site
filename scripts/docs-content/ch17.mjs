export const ch17 = {
  id: "dual-engines-and-presets",
  group: "extensibility",
  badge: "Guide",
  icon: "🔄",
  navTitle: "引擎、登录与预设",
  navTitleEn: "Engines, Login & Presets",
  title: "引擎、登录与预设",
  titleEn: "Engines, Login & Presets",
  summary: "按能力选择引擎，完成提供商登录，并导入或分享设置预设。",
  summaryEn:
    "Choose an engine by capability, sign in to providers, and import or share settings presets.",
  contentZh: `
<h2 id="dual-engines-comparison">选择引擎</h2>
<p>按任务选择 pi 或 DSH。pi 提供宿主工具；DSH 使用独立进程，可用功能以引擎能力声明为准。切换前结束当前任务，再检查模型、工具和上下文；依赖特定引擎的流程可在新对话继续，切换不保证状态无损迁移。</p>
<h2 id="oauth-one-click-login">登录提供商</h2>
<p>在支持 OAuth 的提供商设置中启动登录，按提示打开授权链接，完成验证并填写所需信息。成功后核对模型是否可用；不同引擎使用的凭据和配置需分别确认。</p>
<h2 id="presets-import-export">导入与导出</h2>
<p>在设置的预设面板保存、应用或导出配置，也可从 JSON 文件或网址导入。先保存当前设置，检查来源，再应用并核对模型、工具和布局。本机路径、凭据及环境依赖需自行配置。</p>
<h2 id="community-presets-hub">社区预设</h2>
<p>社区面板可浏览、导入或准备发布预设。发布前检查名称、说明和内容，移除个人信息与密钥；试用他人配置后，验证版本、插件依赖和关键操作。</p>
`,
  contentEn: `
<h2 id="dual-engines-comparison">Choose an engine</h2>
<p>Choose pi for host tools or DSH for its separate runtime, following reported capabilities. Finish tasks before switching, then check model, tools and context. Use a new conversation for engine-specific workflows; state migration is not guaranteed.</p>
<h2 id="oauth-one-click-login">Sign in</h2>
<p>Start OAuth in a supported provider's settings. Follow the authorization link, verify and supply requested information. Check available models afterward and confirm credentials separately for each engine.</p>
<h2 id="presets-import-export">Exchange presets</h2>
<p>Save, apply or export in settings; import JSON files or URLs. Save current settings, inspect the source, then verify models, tools and layout. Configure local paths, credentials and dependencies separately.</p>
<h2 id="community-presets-hub">Community presets</h2>
<p>Browse, import or prepare publication in the community panel. Remove personal information and keys before sharing. Verify compatibility, plugins and essential operations after import.</p>
`,
};
