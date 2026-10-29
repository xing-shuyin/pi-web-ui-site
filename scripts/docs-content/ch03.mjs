export const ch03 = {
  id: "cli-and-env",
  group: "getting-started",
  badge: "Chapter 03",
  icon: "⚙️",
  navTitle: "启动与部署",
  navTitleEn: "Startup & Deployment",
  title: "启动与部署",
  titleEn: "Startup & Deployment",
  summary: "查阅启动参数，配置环境变量与后台部署。",
  summaryEn:
    "Look up startup flags and configure environment variables and deployment.",
  contentZh: `
<h2 id="cli-options">启动</h2>
<p>在项目目录启动，或明确指定工作区和端口。参数见动态表，安装版本用帮助命令核对。工作区默认取启动目录，服务数据默认放在 ~/.pi-web，两者用途不同。</p>
<div data-dynamic-table="cli-flags"></div>
<pre><code class="language-bash">pi-web-ui --help
pi-web-ui --port 9000 --cwd /path/to/project</code></pre>
<h2 id="env-vars">环境变量</h2>
<p>变量由 shell、服务或容器传入，CLI 不自动读取 .env。支持映射时命令行优先。用 PI_WEB_SDK=bundled 固定自带 SDK，没有 --sdk 参数。对外监听时设置主机与共享口令。</p>
<h2 id="daemon-service">后台服务</h2>
<p>安装时指定项目，随后查询状态；登录或开机启动取决于系统服务机制。模型凭据和必要环境变量也应配置到服务环境，不能只在当前终端设置。</p>
<pre><code class="language-bash">pi-web-ui server install --cwd /path/to/project
pi-web-ui server status
pi-web-ui server stop</code></pre>
<h2 id="docker-compose">容器部署</h2>
<p>使用源码仓库 Compose 本地构建，先修改共享口令。挂载项目时将 PI_WEB_CWD 指向容器路径，持久卷对应 /app/.pi-web；启动后检查日志与项目路径。部署后核对实际项目路径与配置是否保留，再开放给其他设备使用。</p>
<pre><code class="language-bash">docker compose up -d --build
docker compose logs -f</code></pre>
`,
  contentEn: `
<h2 id="cli-options">Startup</h2>
<p>Launch in your project or specify a workspace and port. Use the dynamic table and installed help. Data defaults to ~/.pi-web.</p>
<div data-dynamic-table="cli-flags"></div>
<pre><code class="language-bash">pi-web-ui --help
pi-web-ui --port 9000 --cwd /path/to/project</code></pre>
<h2 id="env-vars">Environment</h2>
<p>Pass variables through your shell, service, or container; .env is not loaded automatically. Flags override mapped variables. PI_WEB_SDK=bundled pins the SDK; --sdk is unsupported.</p>
<h2 id="daemon-service">Service</h2>
<p>Install with the project path, then check status. Startup depends on system services; configure credentials and variables in that environment.</p>
<pre><code class="language-bash">pi-web-ui server install --cwd /path/to/project
pi-web-ui server status
pi-web-ui server stop</code></pre>
<h2 id="docker-compose">Containers</h2>
<p>Use repository Compose, change the shared token, mount the project with PI_WEB_CWD, and persist /app/.pi-web. For external access, set host and authentication; check logs. Verify project paths and saved settings before sharing access.</p>
<pre><code class="language-bash">docker compose up -d --build
docker compose logs -f</code></pre>
`,
};
