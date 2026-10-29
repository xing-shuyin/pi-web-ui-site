export const ch20 = {
  id: "plugin-sdk-and-deployment",
  group: "extensibility",
  badge: "Guide",
  icon: "🚀",
  navTitle: "插件开发与部署",
  navTitleEn: "Plugin Development & Deployment",
  title: "插件开发与部署",
  titleEn: "Plugin Development & Deployment",
  summary: "使用宿主生命周期编写插件，并核对守护服务、Docker 与反向代理配置。",
  summaryEn:
    "Build plugins around the host lifecycle and configure daemon services, Docker and reverse proxies.",
  contentZh: `
<h2 id="plugin-sdk-quickstart">开发入口</h2>
<p>运行 <code>pi-web-ui plugin create my-plugin</code>，在 manifest 声明入口和能力。服务端通过宿主激活，浏览器动作放在客户端处理。插件禁用或重载时，宿主执行登记的清理函数。监听器、连接和计时器都应释放，清理逻辑应支持重复调用。开发后验证启用与禁用流程。自建资源用 effect 登记清理：</p>
<pre><code>export default {
  activate(host) {
    const timer = setInterval(() =&gt; host.log("info", "tick"), 60000);
    host.effect("timer", () =&gt; clearInterval(timer));
  }
};</code></pre>
<h2 id="production-daemon">安装服务</h2>
<p>执行 <code>pi-web-ui server install</code>，用 <code>pi-web-ui server status</code> 查看状态。核对服务账户、目录、环境和日志，更新后重启验证。</p>
<h2 id="production-docker">容器部署</h2>
<p>源码根目录执行 <code>docker compose up -d --build</code>。数据卷挂到 <code>/app/.pi-web</code>；配置访问口令环境变量，另挂项目和凭据目录，备份数据卷。</p>
<h2 id="production-nginx">反向代理</h2>
<p>转发至<code>127.0.0.1:8787</code>，使用 HTTP/1.1，传递 Upgrade、Connection 头并延长超时。保留 <code>proxy_set_header Host $http_host;</code>，保留端口供来源校验。子路径参照 <code>deploy/nginx-subpath.conf</code>。</p>
<h2 id="security-best-practices">上线验证</h2>
<p>配置 HTTPS 和所需白名单，检查数据卷可写、重建后数据仍在、聊天及终端连接正常。记录备份恢复步骤后开放远程访问。</p>
`,
  contentEn: `
<h2 id="plugin-sdk-quickstart">Develop</h2>
<p>Run <code>pi-web-ui plugin create my-plugin</code>. Declare manifest entries and capabilities. Handle browser actions client-side. Effects release listeners, connections and timers on disable/reload; make cleanup repeatable and verify enable/disable:</p>
<pre><code>export default {
  activate(host) {
    const timer = setInterval(() =&gt; host.log("info", "tick"), 60000);
    host.effect("timer", () =&gt; clearInterval(timer));
  }
};</code></pre>
<h2 id="production-daemon">Install service</h2>
<p>Run <code>pi-web-ui server install</code>, then <code>pi-web-ui server status</code>. Check account, directory, environment and logs; verify updates.</p>
<h2 id="production-docker">Deploy containers</h2>
<p>Run <code>docker compose up -d --build</code> from the source root. Mount data at <code>/app/.pi-web</code>. Configure the access-token environment variable, separate project/credential mounts and volume backups.</p>
<h2 id="production-nginx">Proxy</h2>
<p>Proxy to local port 8787 using HTTP/1.1, Upgrade/Connection headers and longer timeouts. Preserve <code>proxy_set_header Host $http_host;</code> for origin checks including ports. Follow <code>deploy/nginx-subpath.conf</code> for subpaths.</p>
<h2 id="security-best-practices">Verify</h2>
<p>Set HTTPS and allowlists. Verify volume writes, persistence, chat and terminals; document restoration before remote access.</p>
`,
};
