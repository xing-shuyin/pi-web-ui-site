/**
 * Chapter 03: CLI Arguments & Environment Variables (CLI 命令行参数与环境变量速查)
 */
export const ch03 = {
	id: "cli-and-env",
	group: "getting-started",
	badge: "Chapter 03",
	icon: "⚙️",
	navTitle: "03. CLI 与环境变量全表",
	navTitleEn: "03. CLI & Env Flags",
	title: "CLI 启动参数与环境变量新手速查表",
	titleEn: "CLI Flags & Environment Variables Reference",
	summary: "常用命令行启动参数与环境变量全览：自定义端口、指定工作目录、局域网共享与密码鉴权、注册开机自启后台守护服务。",
	summaryEn: "Comprehensive reference for CLI startup flags, environment variables, token authentication, and background daemon service management.",
	contentZh: `
<h2 id="cli-options">1. 常用 CLI 命令行参数</h2>
<p>在终端启动 <code>pi-web-ui</code> 时，可以通过传递参数快速定制运行行为：</p>

<div class="doc-table-wrap">
	<table class="doc-table">
		<thead>
			<tr>
				<th>参数</th>
				<th>说明</th>
				<th>默认值</th>
				<th>示例</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>--port &lt;number&gt;</code></td>
				<td>设置 Web 服务监听的 HTTP 端口</td>
				<td><code>8787</code></td>
				<td><code>pi-web-ui --port 9000</code></td>
			</tr>
			<tr>
				<td><code>--host &lt;string&gt;</code></td>
				<td>绑定监听的网络 IP 地址（<code>0.0.0.0</code> 允许局域网访问）</td>
				<td><code>127.0.0.1</code></td>
				<td><code>pi-web-ui --host 0.0.0.0</code></td>
			</tr>
			<tr>
				<td><code>--cwd &lt;path&gt;</code></td>
				<td>指定 AI 工作区根目录（绝对或相对路径）</td>
				<td>当前终端目录</td>
				<td><code>pi-web-ui --cwd /home/dev/app</code></td>
			</tr>
			<tr>
				<td><code>PI_WEB_TOKEN</code>（仅环境变量）</td>
				<td>启用共享口令鉴权，防止他人未经授权访问；无 <code>--token</code> 参数，必须用环境变量传入</td>
				<td>空（免密码）</td>
				<td><code>PI_WEB_TOKEN=mysecret888 pi-web-ui</code></td>
			</tr>
			<tr>
				<td><code>--data-dir &lt;path&gt;</code></td>
				<td>持久化配置文件与插件的存放目录</td>
				<td><code>&lt;cwd&gt;/.pi-web</code></td>
				<td><code>pi-web-ui --data-dir ~/.custom-pi</code></td>
			</tr>
			<tr>
				<td><code>--sdk &lt;mode&gt;</code></td>
				<td>引擎 SDK 选择：<code>global</code>（优先机器更新版本）或 <code>bundled</code>（自带版本）</td>
				<td><code>global</code></td>
				<td><code>pi-web-ui --sdk bundled</code></td>
			</tr>
		</tbody>
	</table>
</div>

<h2 id="env-vars">2. 常用环境变量 (Environment Variables)</h2>
<p>你也可以在 shell profile（<code>~/.bashrc</code> / <code>~/.zshrc</code>）或 <code>.env</code> 文件中声明环境变量，行为与 CLI 参数完全对应：</p>

<pre><code class="language-bash"># 设置持久环境变量示例
export PI_WEB_PORT=9000
export PI_WEB_HOST=0.0.0.0
export PI_WEB_TOKEN="your_secure_password"
export PI_WEB_SDK="global"
pi-web-ui</code></pre>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4><code>PI_WEB_TOOL_LAZY_LOADING</code></h4>
		<p>工具延迟加载开关。默认为 <code>0</code>（关闭，全量挂载，与 pi 命令行一致）；设为 <code>1</code> 则仅核心工具常驻、其余按需加载，保护前缀缓存（Prompt Cache）并节约 Token 开销。</p>
	</div>
	<div class="doc-card">
		<h4><code>PI_WEB_TOOL_TIMEOUT_MS</code></h4>
		<p>工具看门狗执行超时时间（毫秒）。默认 20 分钟（1,200,000 ms），遇到死循环脚本时自动熔断中止并保护会话安全。</p>
	</div>
	<div class="doc-card">
		<h4><code>PI_WEB_PRESET_REPO</code></h4>
		<p>预设社区共享仓库（默认 <code>xing-shuyin/pi-web-ui-presets</code>）。设为 <code>off</code> 关闭一键分享，亦可在设置页一键导出为纯净 JSON。</p>
	</div>
	<div class="doc-card">
		<h4><code>PI_WEB_ALLOW_ORIGINS</code></h4>
		<p>额外允许跨域访问的 Origin 白名单（逗号分隔）。用于特殊反向代理、子路径挂载或不同端口的 WebSocket 握手。</p>
	</div>
</div>

<h2 id="daemon-service">3. 一键注册开机自启动守护服务 (Daemon)</h2>
<p>想让 pi-web-ui 像本地服务器一样在后台默默运行、开机自启，而不用每次都保持终端窗口打开？内置了跨平台服务管理命令：</p>

<div class="doc-step-box">
	<div class="doc-step-num">⚡</div>
	<div class="doc-step-content">
		<h4>跨平台安装后台服务</h4>
		<pre><code class="language-bash"># 注册为当前用户的系统后台自启服务
pi-web-ui server install --port 8787 --cwd /path/to/workspace

# 查看后台服务运行状态
pi-web-ui server status

# 停止或重启服务
pi-web-ui server restart
pi-web-ui server stop

# 卸载开机自启服务
pi-web-ui server uninstall</code></pre>
		<p>系统自动适配：Windows（登录 Run 项，免管理员提权）、macOS（Launchd 代理）、Linux（Systemd 用户级服务）。</p>
	</div>
</div>

<h2 id="docker-compose">4. 使用 Docker Compose 一键起跑</h2>
<p>在 NAS 或远程容器宿主机上，可以使用官方 Docker 方案：</p>
<pre><code class="language-yaml"># docker-compose.yml
services:
  pi-web-ui:
    image: xingshuyin/pi-web-ui:latest
    container_name: pi-web-ui
    restart: unless-stopped
    ports:
      - "8787:8787"
    volumes:
      - ./workspace:/app/workspace
      - ~/.pi-web:/root/.pi-web
    environment:
      - PI_WEB_HOST=0.0.0.0
      - PI_WEB_TOKEN=your_secure_password</code></pre>
`,
	contentEn: `
<h2 id="cli-options">1. Common CLI Flags</h2>
<p>Launch <code>pi-web-ui</code> with command-line flags to customize port, host, workspace, and security tokens:</p>
<pre><code class="language-bash"># Examples:
pi-web-ui --port 9000
pi-web-ui --host 0.0.0.0
PI_WEB_TOKEN=mysecret pi-web-ui --host 0.0.0.0
pi-web-ui --cwd /path/to/my-repo</code></pre>

<h2 id="env-vars">2. Environment Variables</h2>
<p>All CLI arguments map directly to environment variables such as <code>PI_WEB_PORT</code>, <code>PI_WEB_HOST</code>, and <code>PI_WEB_TOKEN</code>.</p>

<h2 id="daemon-service">3. Background Daemon Service</h2>
<p>Register pi-web-ui as an OS auto-starting background service with zero configuration:</p>
<pre><code class="language-bash">pi-web-ui server install --port 8787 --cwd /path/to/project
pi-web-ui server status
pi-web-ui server stop</code></pre>
`,
};
