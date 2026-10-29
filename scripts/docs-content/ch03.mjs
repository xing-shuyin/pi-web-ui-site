export const ch03 = {
  id: "cli-and-env",
  group: "reference",
  badge: "Guide",
  icon: "⚙️",
  navTitle: "启动参数与 /setup",
  navTitleEn: "Startup flags & /setup",
  title: "启动参数、后台服务与 /setup",
  titleEn: "Startup flags, services & /setup",
  summary:
    "用示例选择常用启动参数，区分工作区与数据目录，并通过本机 /setup 管理访问口令和网络配置。",
  summaryEn:
    "Choose startup flags, separate workspace and data directories, and manage access and networking through local /setup.",
  contentZh: `
<h2 id="cli-options">前台启动与常用参数</h2>
<p>完成<a href="#installation">安装</a>后，在实际项目目录执行 <code>pi-web-ui</code>，默认打开浏览器并监听 <code>http://127.0.0.1:8787</code>。前台进程用 Ctrl+C 停止；无图形界面的服务器加 <code>--no-browser</code>，再通过适当的网络入口访问。完整安装版本参数以 <code>pi-web-ui --help</code> 为准。</p>
<pre><code>pi-web-ui
pi-web-ui --cwd "/path/to/project" --port 9000 --no-browser
pi-web-ui --host 0.0.0.0 --port 9000 --cwd "/path/to/project"
pi-web-ui --engine dsh --cwd "/path/to/project"
pi-web-ui --help
pi-web-ui --version</code></pre>
<p>Windows 路径也要加引号，例如 <code>--cwd "D:\\Projects\\my app"</code>。<code>--host 0.0.0.0</code> 表示监听所有 IPv4 网卡，浏览器应访问服务器实际 IP 或域名；跨设备访问前配置口令、防火墙和需要的 HTTPS。</p>
<div class="doc-table-wrap"><table><thead><tr><th>参数</th><th>用途与默认行为</th><th>示例</th></tr></thead><tbody>
<tr><td><code>--cwd &lt;dir&gt;</code></td><td>项目工作区。前台默认当前目录；服务安装默认值不同，建议显式指定。</td><td><code>--cwd "/srv/project"</code></td></tr>
<tr><td><code>--port &lt;n&gt;</code></td><td>HTTP/WS 端口，通常为 8787。</td><td><code>--port 9000</code></td></tr>
<tr><td><code>--host &lt;addr&gt;</code></td><td>监听地址，默认 127.0.0.1，仅本机。</td><td><code>--host 0.0.0.0</code></td></tr>
<tr><td><code>--data-dir &lt;dir&gt;</code></td><td>服务数据目录，保存会话、插件与服务配置，区别于项目代码。</td><td><code>--data-dir "/srv/pi-data"</code></td></tr>
<tr><td><code>--agent-dir &lt;dir&gt;</code></td><td>pi 智能体配置目录，默认 ~/.pi/agent；不是项目目录。</td><td><code>--agent-dir "/srv/pi-agent"</code></td></tr>
<tr><td><code>--engine &lt;pi|dsh&gt;</code></td><td>选择执行引擎，默认 pi。DSH 还需满足其运行与模型配置要求。</td><td><code>--engine pi</code></td></tr>
<tr><td><code>--no-browser</code></td><td>前台启动时不自动打开浏览器。</td><td><code>pi-web-ui --no-browser</code></td></tr>
</tbody></table></div>
<h2 id="env-vars">环境变量、目录与配置优先级</h2>
<p>支持映射的配置按<strong>命令行参数 → 环境变量 → server-config.json → 默认值</strong>读取。仅 /setup 支持的网络配置会写入该 JSON；工作区、引擎等仍由启动参数或环境决定。CLI 不自动读取任意 <code>.env</code> 文件。服务数据默认 <code>~/.pi-web</code>（所属运行账户的家目录）；服务安装默认工作区是 <code>~/pi-web-ui</code>，前台默认当前目录。工作区与数据目录不是同一概念，建议显式固定，避免换账户或数据目录后看起来像“历史丢失”。</p>
<pre><code># macOS / Linux shell
PI_WEB_PORT=9000 PI_WEB_CWD=/srv/project PI_WEB_DATA_DIR=/srv/pi-data pi-web-ui --no-browser

# Windows PowerShell
$env:PI_WEB_PORT = "9000"
$env:PI_WEB_CWD = "D:\\Projects\\app"
$env:PI_WEB_DATA_DIR = "D:\\pi-data"
pi-web-ui --no-browser</code></pre>
<p>常用映射包括 <code>PI_WEB_HOST</code>、<code>PI_WEB_PORT</code>、<code>PI_WEB_CWD</code>、<code>PI_WEB_DATA_DIR</code>、<code>PI_WEB_ENGINE</code>、<code>PI_CODING_AGENT_DIR</code>。<code>PI_WEB_SDK=bundled</code> 固定使用随包 SDK，不存在 <code>--sdk</code> 参数。下表补充部署变量；它是常用参考，不代表所有参数都能作为 CLI 标志使用。</p>
<div data-dynamic-table="cli-flags"></div>
<h2 id="setup-page">打开 /setup：本机服务配置</h2>
<p>先启动服务，在<strong>运行该服务的机器上</strong>直接打开 <code>http://127.0.0.1:8787/setup</code>；若使用 9000 端口，将地址中的端口相应改为 9000。它是浏览器地址路径，不是聊天中的斜杠命令，也不是模型接入向导。API Key、模型选择和提供商认证在工作台设置中完成。</p>
<p>/setup 只允许回环连接与本机 Host；局域网 IP、公开域名或携带代理转发头的请求会被拒绝。远程服务器可使用 SSH 本地转发，让浏览器通过本机入口访问服务的回环端口：</p>
<pre><code>ssh -N -L 18787:127.0.0.1:8787 user@your-server
# 保持 SSH 连接，在本机浏览器打开：
# http://127.0.0.1:18787/setup</code></pre>
<p>该页面位于口令认证前，忘记口令时仍可从本机重设；具备服务器本机访问权限的人也能管理这里的配置。</p>
<h2 id="setup-fields">/setup 字段与保存步骤</h2>
<div class="doc-table-wrap"><table><thead><tr><th>字段或操作</th><th>如何使用</th><th>生效时间</th></tr></thead><tbody>
<tr><td>访问密钥（Token）</td><td>可手动输入或点击“随机生成”；眼睛按钮显示/隐藏，复制按钮生成带口令的入口链接。留空并保存表示关闭口令。</td><td>保存成功后立即生效。</td></tr>
<tr><td>监听地址（Host）</td><td>127.0.0.1 仅本机；0.0.0.0 可接收其他网卡连接，是否可访问仍取决于防火墙与网络。</td><td>保存后重启。</td></tr>
<tr><td>端口（Port）</td><td>填写 1–65535 的整数；改端口后按新地址访问，避免与现有进程冲突。</td><td>保存后重启。</td></tr>
<tr><td>Host 白名单</td><td>填写请求主机名，逗号分隔，如 pi.internal,myserver.local。它检查 Host，不是客户端 IP 白名单；当前普通 HTTP 准入在未设访问口令时才应用此名单，已设口令时不能把它当额外访问隔离。</td><td>保存后重启。</td></tr>
<tr><td>额外 Origin 白名单</td><td>按需填写完整来源，如 https://chat.example.com:8443，逗号分隔；协议和非默认端口都属于来源。</td><td>保存后重启。</td></tr>
</tbody></table></div>
<ol><li>先检查页面底部实际配置文件路径，确认正在配置正确实例。</li><li>填写访问密钥与网络配置；“随机生成”或复制链接本身不会保存。</li><li>点击<strong>保存配置</strong>，确认成功提示。文件写入失败时应先解决目录权限等错误。</li><li>仅口令变化不需重启；网络设置变化后重启对应进程或服务，再用新地址验证聊天与连接。</li></ol>
<p>持久化文件为 <code>&lt;dataDir&gt;/server-config.json</code>。启动参数和环境变量会在下次启动时覆盖文件设置：例如仍带 <code>--port 9000</code> 启动，/setup 保存的另一个端口不会成为实际端口。修改口令后当前运行实例会热更新，但重启时也应检查环境变量是否覆盖了保存值。入口链接含访问口令，按凭据保管。</p>
<h2 id="daemon-service">安装与管理后台服务</h2>
<p>macOS 使用用户 launchd；Linux 使用 systemd；Windows 使用当前用户登录自启 Run 键。Linux 的安装权限与系统配置有关，Windows 不等同于系统级 Windows Service。先前台确认模型和项目可用，再安装服务，并显式固定工作区与数据目录。</p>
<pre><code>pi-web-ui server install --cwd "/path/to/project" --data-dir "/path/to/pi-data" --port 8787
pi-web-ui server status
pi-web-ui server stop
pi-web-ui server start
pi-web-ui server restart
pi-web-ui server shortcut
pi-web-ui server uninstall</code></pre>
<p><code>server install --print</code> 只预览生成配置；<code>--name my-pi</code> 可区分服务实例，后续管理命令使用相同服务名。<code>server quiesce</code> 暂停接收新工作、让已有运行收尾，<code>server unquiesce</code> 恢复接收。修改配置后用对应服务的 restart；前台运行则 Ctrl+C 后以原参数重启。服务环境未必继承交互终端里的凭据与变量，需核对生成配置和日志。</p>
<h2 id="docker-compose">容器与排错入口</h2>
<p>完整构建、挂载和更新步骤见<a href="#installation">安装指南的 Docker 部分</a>。容器内的项目路径、数据路径和宿主机路径不同，服务数据卷对应 <code>/app/.pi-web</code>。/setup 仍执行回环访问检查，不能假设宿主机映射端口等同于容器内回环连接；容器通常通过 Compose 环境配置网络与认证。</p>
<p>无法访问时依次确认进程和日志、实际端口、监听地址、访问口令、Host/Origin 与防火墙。出现“配置已保存但未生效”先检查重启和高优先级覆盖；“模型不可用”则回工作台检查提供商凭据，而不是调整 /setup。</p>
`,
  contentEn: `
<h2 id="cli-options">Foreground startup and common flags</h2>
<p>After <a href="#installation">installation</a>, run <code>pi-web-ui</code> in the project directory. It normally opens a browser at <code>http://127.0.0.1:8787</code>. Stop the foreground process with Ctrl+C. Use <code>--no-browser</code> on headless systems. Check the installed version with <code>pi-web-ui --help</code>.</p>
<pre><code>pi-web-ui
pi-web-ui --cwd "/path/to/project" --port 9000 --no-browser
pi-web-ui --host 0.0.0.0 --port 9000 --cwd "/path/to/project"
pi-web-ui --engine dsh --cwd "/path/to/project"
pi-web-ui --help
pi-web-ui --version</code></pre>
<p>Quote paths containing spaces, including Windows paths such as <code>--cwd "D:\\Projects\\my app"</code>. Listening on 0.0.0.0 accepts connections on all IPv4 interfaces; browse to the server's actual IP or domain. Configure authentication, firewall rules and HTTPS as needed before sharing access.</p>
<div class="doc-table-wrap"><table><thead><tr><th>Flag</th><th>Purpose and default</th><th>Example</th></tr></thead><tbody>
<tr><td><code>--cwd &lt;dir&gt;</code></td><td>Project workspace; foreground defaults to the current directory. Specify explicitly for services.</td><td><code>--cwd "/srv/project"</code></td></tr>
<tr><td><code>--port &lt;n&gt;</code></td><td>HTTP/WS port, normally 8787.</td><td><code>--port 9000</code></td></tr>
<tr><td><code>--host &lt;addr&gt;</code></td><td>Listen address; default 127.0.0.1 is local-only.</td><td><code>--host 0.0.0.0</code></td></tr>
<tr><td><code>--data-dir &lt;dir&gt;</code></td><td>Service data: conversations, plugins and server configuration, separate from project code.</td><td><code>--data-dir "/srv/pi-data"</code></td></tr>
<tr><td><code>--agent-dir &lt;dir&gt;</code></td><td>pi agent configuration, default ~/.pi/agent.</td><td><code>--agent-dir "/srv/pi-agent"</code></td></tr>
<tr><td><code>--engine &lt;pi|dsh&gt;</code></td><td>Execution engine, default pi. DSH has separate runtime and model requirements.</td><td><code>--engine pi</code></td></tr>
<tr><td><code>--no-browser</code></td><td>Do not open a browser during foreground startup.</td><td><code>pi-web-ui --no-browser</code></td></tr>
</tbody></table></div>
<h2 id="env-vars">Environment, directories and precedence</h2>
<p>For supported settings: <strong>CLI flags → environment → server-config.json → defaults</strong>. Only the networking settings supported by /setup are persisted there; workspace and engine remain startup settings. Arbitrary .env files are not loaded automatically. Service data defaults to <code>~/.pi-web</code> under the running account. Service installation defaults its workspace to <code>~/pi-web-ui</code>; foreground startup defaults to the current directory. These are separate locations. Pin them to avoid accidentally opening an empty instance after changing account or data paths.</p>
<pre><code># macOS / Linux shell
PI_WEB_PORT=9000 PI_WEB_CWD=/srv/project PI_WEB_DATA_DIR=/srv/pi-data pi-web-ui --no-browser

# Windows PowerShell
$env:PI_WEB_PORT = "9000"
$env:PI_WEB_CWD = "D:\\Projects\\app"
$env:PI_WEB_DATA_DIR = "D:\\pi-data"
pi-web-ui --no-browser</code></pre>
<p>Common mappings: <code>PI_WEB_HOST</code>, <code>PI_WEB_PORT</code>, <code>PI_WEB_CWD</code>, <code>PI_WEB_DATA_DIR</code>, <code>PI_WEB_ENGINE</code> and <code>PI_CODING_AGENT_DIR</code>. Set <code>PI_WEB_SDK=bundled</code> to pin the bundled SDK; there is no --sdk flag. The following is a common deployment reference, not a claim that every setting has a CLI flag.</p>
<div data-dynamic-table="cli-flags"></div>
<h2 id="setup-page">Open /setup: local server configuration</h2>
<p>Start the service, then open <code>http://127.0.0.1:8787/setup</code> directly on its machine. Substitute the actual port if different. This is a browser path, not a chat slash command or model onboarding wizard. Configure API keys, models and provider login in workspace settings.</p>
<p>/setup requires a loopback connection and local Host; LAN addresses, public domains and requests carrying proxy forwarding headers are rejected. For a remote server, forward its loopback port over SSH:</p>
<pre><code>ssh -N -L 18787:127.0.0.1:8787 user@your-server
# Keep SSH running, then browse locally to:
# http://127.0.0.1:18787/setup</code></pre>
<p>The page precedes token authentication so local users can reset a forgotten token. Local access to the server therefore grants access to these controls.</p>
<h2 id="setup-fields">Fields and saving</h2>
<div class="doc-table-wrap"><table><thead><tr><th>Field or action</th><th>Usage</th><th>Activation</th></tr></thead><tbody>
<tr><td>Access token</td><td>Enter a token or generate one. The eye toggles visibility; copy creates an entry URL containing it. Saving an empty value disables token authentication.</td><td>Immediately after successful save.</td></tr>
<tr><td>Host</td><td>127.0.0.1 is local-only; 0.0.0.0 accepts other interfaces, subject to firewall and routing.</td><td>Restart required.</td></tr>
<tr><td>Port</td><td>Integer 1–65535. Use the new address after restarting; avoid occupied ports.</td><td>Restart required.</td></tr>
<tr><td>Host allowlist</td><td>Comma-separated request hostnames, such as pi.internal,myserver.local. This is not a client IP allowlist. Ordinary HTTP admission applies it when no access token is configured; do not treat it as extra isolation once token authentication is enabled.</td><td>Restart required.</td></tr>
<tr><td>Extra Origin allowlist</td><td>Full origins such as https://chat.example.com:8443, comma-separated, including scheme and non-default ports.</td><td>Restart required.</td></tr>
</tbody></table></div>
<ol><li>Check the displayed configuration path to identify the correct instance.</li><li>Edit the token and network settings. Generating a token or copying a link does not save it.</li><li>Click Save configuration and confirm success; resolve file permission errors before proceeding.</li><li>Token-only changes need no restart. Restart the corresponding instance for network changes, then verify connections at the new address.</li></ol>
<p>Settings persist to <code>&lt;dataDir&gt;/server-config.json</code>. Startup flags and environment override this file after restart. For example, --port 9000 still overrides a different saved port. Tokens rotate immediately in the running instance, but an environment override may restore another value after restart. Treat token-bearing URLs as credentials.</p>
<h2 id="daemon-service">Background service management</h2>
<p>macOS uses user launchd, Linux systemd, and Windows the current user's login Run key. Linux installation permissions depend on system configuration; the Windows mechanism is not a system-level Windows Service. Verify foreground operation first, then pin workspace and data paths:</p>
<pre><code>pi-web-ui server install --cwd "/path/to/project" --data-dir "/path/to/pi-data" --port 8787
pi-web-ui server status
pi-web-ui server stop
pi-web-ui server start
pi-web-ui server restart
pi-web-ui server shortcut
pi-web-ui server uninstall</code></pre>
<p>Use <code>server install --print</code> to preview generated configuration. Set <code>--name my-pi</code> for separate instances and use the same name in management commands. <code>server quiesce</code> pauses new work while existing runs finish; <code>server unquiesce</code> resumes admission. Restart the matching service after configuration changes; restart foreground processes with their original flags. Services may not inherit interactive-shell credentials or environment: inspect their configuration and logs.</p>
<h2 id="docker-compose">Containers and troubleshooting</h2>
<p>See the <a href="#installation">installation guide's Docker section</a> for build, mounts and updates. Container paths differ from host paths; service data is mounted at <code>/app/.pi-web</code>. /setup still requires loopback access: a published container port is not necessarily a container-local loopback connection. Configure container networking and authentication through Compose as appropriate.</p>
<p>For connection failures, check the process and logs, actual port, listen address, token, Host/Origin and firewall. If saved settings do not apply, check restart requirements and higher-priority overrides. Model failures belong in provider settings rather than /setup.</p>
`,
};
