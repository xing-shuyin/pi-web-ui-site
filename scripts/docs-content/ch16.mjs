/**
 * Chapter 16: 3-Tier Approval Gates & 6 Core Security Boundaries (三级工具审批与安全边界)
 */
export const ch16 = {
	id: "approval-and-security",
	group: "agent-modes",
	badge: "Chapter 16",
	icon: "🛡️",
	navTitle: "16. 工具审批与安全防线",
	navTitleEn: "16. Approval & Security",
	title: "三级工具审批门禁与六大安全边界设计",
	titleEn: "Three-Tier Tool Approval Gates & Core Security Boundaries",
	summary: "保障你的代码库与电脑环境绝对安全：详解 approval-rules 规则库、三级放行记忆、高危 Shell 红色告警，以及默认 Loopback 等六大底层安全边界。",
	summaryEn: "Keep your machine and codebase safe: 3-tier approval rules, high-risk bash alerts, local loopback defaults, and token security boundaries.",
	contentZh: `
<h2 id="why-security-matters">1. 新手的安全顾虑：AI 会毁坏我的电脑吗？</h2>
<p>很多新手不敢给 AI 开放终端或写入权限。在 pi-web-ui 中，每次副作用调用（终端、覆写文件、网络请求）都过审批门禁（事实源 <code>server/tool-approval.ts</code>，规则库 <code>&lt;dataDir&gt;/approval-rules.json</code>，记忆只在内存、随会话过户搬迁）：</p>

<h2 id="three-tier-approval">2. 三级工具审批门禁 (Tool Approval Gates)</h2>
<p>系统为每一个可能产生副作用的工具调用（如执行终端命令、覆写文件、发起网络请求）设立了清晰的三级门禁机制：</p>

<div class="doc-step-box">
	<div class="doc-step-num">1</div>
	<div class="doc-step-content">
		<h4>逐次询问确认 (Ask) · 默认推荐档位</h4>
		<p>当 AI 试图执行 Shell 命令或改写重要文件时，界面会自动弹出<strong>悬浮审批卡片</strong>，清晰罗列出将要执行的命令文本或文件改动 Diff。只有你手动点击「允许」后，工具才会真正执行；点击「拒绝」则立即向 AI 返回用户取消提示。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">2</div>
	<div class="doc-step-content">
		<h4>同类工具记忆放行 (Remember Allow)</h4>
		<p>在审批弹窗中勾选「在本会话中记住此选择」后，当前会话后续调用同一类安全工具（例如普通的读取或测试命令）将自动放行，无需频繁点击确认，兼顾效率与安全。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">3</div>
	<div class="doc-step-content">
		<h4>全局严苛拒绝 (Deny)</h4>
		<p>可在规则库中将某些敏感工具（例如 <code>bash</code> 或外部网络访问）一键设置为永久拒绝，杜绝任何外部命令执行的可能性。</p>
	</div>
</div>

<h2 id="high-risk-bash-alerts">3. 高危 Shell 脚本红色醒目预警</h2>
<p>内置的命令安全审计引擎会在后台毫秒级分析即将执行的 Shell 语句：</p>
<ul>
	<li>如果发现包含 <code>rm -rf</code>、格式化磁盘、删除数据库、强行推送 <code>git push -f</code> 或覆写系统系统级配置的命令，<strong>审批卡片会自动变为高饱和红色高亮，并附带醒目的风险警告提示</strong>；</li>
	<li>新手可以一眼看出潜在危害，避免手滑误点。</li>
</ul>

<h2 id="six-security-boundaries">4. 六大底层安全架构设计</h2>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🔒 1. 默认仅监听本地回环 (127.0.0.1)</h4>
		<p>未经显式配置 <code>--host 0.0.0.0</code>，外部局域网任何设备均无法扫描或连接到你的开发端口，默认完全封闭在你的本机内部。</p>
	</div>
	<div class="doc-card">
		<h4>🔑 2. API Key 与凭据永不下发浏览器</h4>
		<p>你配置的所有大模型 API Key 与 SSH 密钥仅由服务端进程安全持有，下发给前端界面的快照流中绝不包含任何敏感密钥文本，杜绝 XSS 泄密。</p>
	</div>
	<div class="doc-card">
		<h4>🛡️ 3. WebSocket 来源严格校验</h4>
		<p>全双工 WS 连接在握手阶段自动核验 Origin 与 Host 头，有效防御跨站 WebSocket 劫持 (CSWSH) 攻击。</p>
	</div>
	<div class="doc-card">
		<h4>📁 4. 严禁工作区根绑定家目录</h4>
		<p>安全策略严格拦截将操作系统的 <code>$HOME</code> 或根目录 <code>/</code> 作为工作区，防止遍历扫描导致系统挂死或隐私泄露。</p>
	</div>
	<div class="doc-card">
		<h4>🍪 5. 安全 Token Cookie 防重放</h4>
		<p>启用密码访问时，口令经过严格的 URL 解码与比对，存储在带 HttpOnly 标志的 Cookie 中，会话安全可控。</p>
	</div>
	<div class="doc-card">
		<h4>⏪ 6. 工作区自动快照秒级容灾</h4>
		<p>配合第 04 章详解的快照回滚机制，即便 AI 执行了错误的代码变动，你随时都可以一键精确还原工作区文件。</p>
	</div>
</div>
`,
	contentEn: `
<h2 id="why-security-matters">1. Why Security Matters</h2>
<p>Never worry about AI running dangerous commands like <code>rm -rf /</code> or overwriting uncommitted code.</p>

<h2 id="three-tier-approval">2. Three-Tier Approval Gates</h2>
<p>Choose between Ask (prompt every dangerous tool), Remember (whitelist within active session), or Deny (block permanently).</p>

<h2 id="high-risk-bash-alerts">3. High-Risk Bash Red Alerts</h2>
<p>Dangerous scripts containing forced pushes, file deletions, or system directory writes trigger high-contrast red warning banners.</p>

<h2 id="six-security-boundaries">4. Six Core Security Boundaries</h2>
<p>Default 127.0.0.1 loopback binding, zero client-side API key exposure, WebSocket origin validation, and root workspace guards.</p>
`,
};
