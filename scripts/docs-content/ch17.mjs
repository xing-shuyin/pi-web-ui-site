/**
 * Chapter 17: Dual Engines (pi & DSH), OAuth Login & Presets Sharing (双引擎与预设社区)
 */
export const ch17 = {
	id: "dual-engines-and-presets",
	group: "extensibility",
	badge: "Chapter 17",
	icon: "🔄",
	navTitle: "17. 双引擎与预设分享",
	navTitleEn: "17. Engines & Presets",
	title: "双引擎协同 (pi & DSH)、OAuth 登录与社区预设共享",
	titleEn: "Dual Engines (pi & DSH), OAuth Login & Community Presets",
	summary: "无缝切换 pi 原生引擎与 DeepSeek Harness (DSH)、主流提供商 OAuth 一键免密授权，以及四道安全闸门的设置预设导入、导出与社区共享。",
	summaryEn: "Seamlessly toggle between the native pi engine and DeepSeek Harness (DSH), authenticate via OAuth, and share clean settings presets safely.",
	contentZh: `
<h2 id="dual-engines-comparison">1. 什么是“双引擎架构”？</h2>
<p>不同于大多数绑定单一后端的 AI 工具，pi-web-ui 创新地实现了<strong>双引擎双轨驱动</strong>架构，满足不同场景下的极致需求：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🚀 引擎一：pi 原生引擎 (默认推荐)</h4>
		<p>基于 <code>@earendil-works/pi-coding-agent</code> SDK 打造。功能版图最完整：原生支持 30+ 扩展工具、子代理并发委派、真 PTY 终端接管、工作区快照回滚与软上限压缩（Soft Cap）。</p>
	</div>
	<div class="doc-card">
		<h4>⚡ 引擎二：DeepSeek Harness (DSH) 引擎</h4>
		<p>针对 DeepSeek 深度优化。采用创新的预设克隆隔离机制，专为高强度推理链与代码快速打字调优，底栏实时呈现 Token 吞吐与直播统计。</p>
	</div>
</div>

<p>你可以在设置面板中随时一键平滑切换当前会话所使用的底层引擎，原有历史对话与工作区文件丝毫无损。</p>

<h2 id="oauth-one-click-login">2. 提供商 OAuth 一键免密授权</h2>
<p>新手往往觉得去各个模型平台注册账号、充值、寻找 API Key 页面很繁琐。工作台集成了主流 AI 提供商的 <strong>OAuth 一键登录</strong>功能：</p>

<p>导出即得 <code>.json</code>；导入先 <code>dryRun</code> 预览，白名单外字段自动丢弃。</p>

<h2 id="community-presets-hub">4. 社区预设中心：一键浏览与应用</h2>
<p>工作台内置了官方维护的 <strong>社区预设浏览中心 (Community Presets)</strong>：</p>
<ul>
	<li>在此可一键浏览来自全球资深开发者分享的热门配置；</li>
	<li>涵盖「全栈开发专家预设」、「Rust 严谨代码审查预设」、「轻量级前端极速预设」等；</li>
	<li>找到心仪的配置，点击「一键应用」即可瞬间加载，小白也能瞬间拥有技术大佬的顶级调校！</li>
</ul>
`,
	contentEn: `
<h2 id="dual-engines-comparison">1. Dual-Engine Architecture</h2>
<p>Switch between the full-featured <strong>pi engine</strong> (supporting subagents, PTY bash takeover, and snapshots) and the <strong>DSH engine</strong> (fine-tuned for DeepSeek reasoning speed).</p>

<h2 id="oauth-one-click-login">2. OAuth One-Click Login</h2>
<p>Connect official model providers through secure browser OAuth authorization without manually pasting long API key strings.</p>

<h2 id="presets-import-export">3. Settings Presets & Four-Gate Sanitization</h2>
<p>Export prompts and layouts to JSON. Imports pass <code>server/preset-share.ts</code> whitelist sanitization (unknown fields dropped) with <code>dryRun</code> preview before applying.</p>

<h2 id="community-presets-hub">4. Community Presets Hub</h2>
<p>Browse community-curated presets (Full-Stack Pro, Rust Reviewer, Minimalist Frontend) and apply them with one click.</p>
`,
};
