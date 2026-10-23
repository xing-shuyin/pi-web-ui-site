/**
 * Chapter 20: Plugin SDK v2 Development & Production Deployment (插件开发与生产部署完全指南)
 */
export const ch20 = {
	id: "plugin-sdk-and-deployment",
	group: "extensibility",
	badge: "Chapter 20",
	icon: "🚀",
	navTitle: "20. 插件开发与生产部署",
	navTitleEn: "20. Plugin SDK & Deploy",
	title: "插件开发完全手册与生产部署（守护服务 / Docker / Nginx 反代）",
	titleEn: "Plugin SDK v2 Guide & Production Deployment (Docker / Nginx)",
	summary: "从零编写你自己的工作台插件！详解 Plugin SDK v2 规范与 UI 插槽注册，以及生产环境开机自启、Docker 容器化与 Nginx 子路径反向代理配置。",
	summaryEn: "Build custom plugins with Plugin SDK v2, plus comprehensive production deployment recipes: OS daemon services, Docker Compose, and subpath Nginx reverse proxy.",
	contentZh: `
<h2 id="plugin-sdk-quickstart">1. 5 分钟极速开发你的第一个插件</h2>
<p>基于 <strong>Plugin SDK v2</strong>，编写一个属于你自己的工作台插件仅需两个轻量文件：</p>

<div class="doc-step-box">
	<div class="doc-step-num">1</div>
	<div class="doc-step-content">
		<h4>编写清单配置文件：<code>manifest.json</code></h4>
		<p>声明插件的元数据、作者与需要挂载的 33 个 UI 插槽位置：</p>
		<pre><code class="language-json">{
  "id": "my-cool-tool",
  "name": "极客工具箱",
  "nameEn": "Geek Toolkit",
  "version": "1.0.0",
  "apiVersion": 2,
  "icon": "⚡",
  "description": "一键执行自定义清理与格式化脚本",
  "ui": [
    {
      "slot": "topbar.right",
      "type": "button",
      "label": "一键清理",
      "icon": "🧹",
      "action": "run-clean"
    }
  ]
}</code></pre>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">2</div>
	<div class="doc-step-content">
		<h4>编写执行逻辑入口：<code>index.mjs</code></h4>
		<p>导出一个 <code>activate(host)</code> 函数，调用宿主提供的安全 Host API：</p>
		<pre><code class="language-javascript">export async function activate(host) {
  // 监听顶栏按钮点击事件
  host.ui.onAction("run-clean", async () => {
    // 弹出宿主提示消息
    host.notify.info("正在执行代码格式化与临时文件清理...");
    // 安全调用宿主终端执行脚本
    const res = await host.exec("npm run format && rm -rf .tmp");
    host.notify.success("清理完成！");
  });

  // 监听会话状态变化
  host.events.on("conversation:message", (msg) => {
    console.log("收到新消息:", msg);
  });
}

export async function deactivate() {
  // 插件被卸载或停用时的资源清理
}</code></pre>
	</div>
</div>

<h2 id="production-daemon">2. 方案 A：操作系统级后台守护服务 (推荐)</h2>
<p>生产服务器或个人开发机上，推荐使用内置的 <code>pi-web-ui server</code> 命令一键托管：</p>

<pre><code class="language-bash"># 一键将当前项目注册为开机自启后台服务
pi-web-ui server install --port 8787 --cwd /var/www/my-repo

# 查看状态与健康度
pi-web-ui server status

# 优雅重启或停止
pi-web-ui server restart
pi-web-ui server stop</code></pre>

<h2 id="production-docker">3. 方案 B：Docker / Docker Compose 容器化</h2>
<p>在私有云或云服务器上，可直接使用官方 Docker 镜像运行：</p>
<pre><code class="language-yaml">version: "3.8"
services:
  pi-web-ui:
    image: xingshuyin/pi-web-ui:latest
    container_name: pi-web-ui
    restart: always
    ports:
      - "8787:8787"
    environment:
      - PI_WEB_HOST=0.0.0.0
      - PI_WEB_PORT=8787
      - PI_WEB_TOKEN=your_secure_password
    volumes:
      - ./data:/root/.pi-web
      - ./workspace:/app/workspace</code></pre>

<h2 id="production-nginx">4. 方案 C：Nginx 反向代理配置（含 WebSocket 升级）</h2>
<p>如果你需要通过域名访问，或者将 pi-web-ui 挂载在某个二级子路径（例如 <code>https://example.com/ai/</code>）下，由于系统所有资源路径均严格经 <code>appUrl()</code> 封装，配置极度简单：</p>

<pre><code class="language-nginx">server {
    listen 80;
    server_name ai.example.com;

    location / {
        proxy_pass http://127.0.0.1:8787;
        proxy_http_version 1.1;

        # 核心：必须开启 WebSocket 双向升级通道
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # 传递真实主机名与客户端 IP
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 关闭大文件传输缓冲
        proxy_buffering off;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}</code></pre>

<h2 id="security-best-practices">5. 生产环境安全合规清单</h2>
<ul>
	<li><strong>必须设置安全访问口令</strong>：通过环境变量 <code>PI_WEB_TOKEN</code>（无 <code>--token</code> 参数）强制启用身份鉴权；</li>
	<li><strong>配置 HTTPS 证书</strong>：建议在反向代理层（如 Nginx / Caddy）启用 SSL 证书，防止传输过程中的 Token 被中间人窃听；</li>
	<li><strong>定期备份配置数据</strong>：所有插件与会话配置均集中存储在数据目录（默认 <code>&lt;cwd&gt;/.pi-web</code>，可用 <code>--data-dir</code> 指定），定期打包备份该目录即可实现无缝迁移。</li>
</ul>
`,
	contentEn: `
<h2 id="plugin-sdk-quickstart">1. 5-Minute Plugin SDK v2 Quickstart</h2>
<p>Build custom plugins with just two files: <code>manifest.json</code> to declare UI slots and <code>index.mjs</code> to implement logic with safe <code>host</code> APIs.</p>

<h2 id="production-daemon">2. Option A: OS Background Daemon</h2>
<p>Install system-level background auto-start services with <code>pi-web-ui server install --port 8787</code>.</p>

<h2 id="production-docker">3. Option B: Docker Compose</h2>
<p>Deploy using standard Docker compose containers mounting volumes for <code>/root/.pi-web</code> and <code>/app/workspace</code>.</p>

<h2 id="production-nginx">4. Option C: Nginx Reverse Proxy with WebSockets</h2>
<p>Configure Nginx to proxy <code>http://127.0.0.1:8787</code> with <code>Upgrade $http_upgrade</code> and <code>proxy_read_timeout 86400s</code> for full-duplex WebSocket streaming.</p>

<h2 id="security-best-practices">5. Security Checklist</h2>
<p>Always enforce <code>PI_WEB_TOKEN</code>, terminate SSL at Nginx, and back up <code>~/.pi-web/</code> regularly.</p>
`,
};
