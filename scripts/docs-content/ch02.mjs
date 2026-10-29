export const ch02 = {
  id: "installation",
  group: "getting-started",
  badge: "Chapter 02",
  icon: "📦",
  navTitle: "安装与配置",
  navTitleEn: "Installation",
  title: "安装与配置",
  titleEn: "Installation",
  summary:
    "完整安装指南：npm、桌面与便携版、平台依赖、源码、Docker，以及升级和卸载。",
  summaryEn:
    "Install with npm, desktop or portable packages, platform dependencies, source builds, or Docker; upgrade and uninstall while preserving data.",
  contentZh: `
<h2 id="installation-prerequisites">选择方式与前置条件</h2>
<p>浏览器版可通过 npm 全局安装、npx 临时运行或源码构建启动；桌面版提供 Electron 安装包，Windows 另有便携包；服务器可从源码用 Docker Compose 构建。npm、npx 和源码方式要求 Node.js ≥ 22.19.0 与 npm；源码和容器构建还需 Git。桌面应用自带 Electron 运行时，启动主程序无需另装 Node.js，但插件安装、外部命令等功能仍可能需要 Node/npm、Git 或其他工具。</p>
<pre><code class="language-bash">node --version
npm --version
git --version</code></pre>
<p>先按下文准备对应平台依赖，再安装。模型服务的账号、密钥或登录配置需另行准备；安装成功不代表模型已连接。命令中的项目目录要替换为自己的实际路径。</p>
<h2 id="desktop-releases-download">Electron 桌面版：Windows、macOS、Linux</h2>
<p>打开 <a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer">GitHub Releases</a>，按系统和发布资产标明的架构下载；不要把更新元数据（latest*.yml、.blockmap）当安装包，也不要假定每个版本都有所有架构。</p>
<ul>
<li><strong>Windows：</strong>下载 pi-web-ui-desktop-&lt;版本&gt;-setup.exe，运行安装向导，选择安装目录后从开始菜单启动。Git/Bash 的准备见下文。便携 zip 的使用方式见下一节。</li>
<li><strong>macOS：</strong>打开 .dmg，将 pi-web-ui-desktop.app 拖入 /Applications，再从应用程序启动；也可解压桌面 .zip 后将 .app 放入 /Applications。</li>
<li><strong>Linux：</strong>下载 .AppImage，在下载目录执行下列命令（文件名按实际资产替换）。需图形桌面；若缺少 FUSE，按发行版安装相应 FUSE 兼容库，或使用 AppImage 的解压运行方式。</li>
</ul>
<pre><code class="language-bash">chmod +x ./pi-web-ui-desktop-*.AppImage
./pi-web-ui-desktop-*.AppImage
# FUSE 不可用时，替代上一行：
./pi-web-ui-desktop-*.AppImage --appimage-extract-and-run</code></pre>
<p>上述通配符要求当前目录仅有一个目标 AppImage。验证方式：窗口显示聊天界面且本地服务启动成功。桌面端使用可用端口，不应固定以 8787 判断是否启动；实际工作目录默认是用户主目录，可在界面中选择项目。</p>
<span id="desktop-troubleshooting"></span>
<p>若 macOS 提示应用损坏或被隔离，先确认文件来自项目 Releases；对当前未公证产物，可仅移除该应用的隔离属性，再验证启动：</p>
<pre><code class="language-bash">xattr -dr com.apple.quarantine /Applications/pi-web-ui-desktop.app
open -a /Applications/pi-web-ui-desktop.app</code></pre>
<p>Windows 出现未知发布者提示时先核对下载来源。桌面启动失败应查看启动日志中的服务入口、数据目录和错误；不要通过全局 npm 重装来替换桌面包内服务。</p>
<h2 id="windows-portable-install">Windows 便携版：启动器与数据目录</h2>
<p>从 Releases 下载 pi-web-ui-desktop-&lt;版本&gt;-portable.zip，完整解压到可写目录，保留 PiWebUI-Portable 内的 app、runtime、data 和启动脚本结构。双击根目录的 <strong>启动Pi.bat</strong> 或 <strong>PiPortable.bat</strong>；也可在 PowerShell 进入解压后的根目录运行：</p>
<pre><code class="language-powershell">.\\PiPortable.bat</code></pre>
<p>启动器实际运行 app/pi-web-ui-desktop.exe，并设置便携数据路径。runtime/git/cmd/git.exe 存在时优先使用内置 Git；Bash 来自 runtime/git/bin/bash.exe 或 usr/bin/bash.exe。runtime/node/node.exe 存在时挂载内置 Node/npm，否则相关功能依赖系统环境。请检查具体下载产物，不要把“便携”理解为任何外部工具都已打包。</p>
<table><thead><tr><th>相对便携根目录的路径</th><th>用途</th></tr></thead><tbody>
<tr><td>data/agent</td><td>Agent 配置、模型凭据与会话记录（PI_CODING_AGENT_DIR）</td></tr>
<tr><td>data/web</td><td>Web UI 设置、插件、上传等（PI_WEB_DATA_DIR）</td></tr>
<tr><td>data/workspace</td><td>启动器默认工作区（PI_WEB_CWD）</td></tr>
<tr><td>data/electron</td><td>Electron 用户状态</td></tr>
<tr><td>data/git、data/home</td><td>Git 全局配置与重定向的用户目录</td></tr>
<tr><td>data/npm-global、data/npm-cache</td><td>便携 Node 启用时的 npm 全局安装与缓存</td></tr>
</tbody></table>
<p>验证时确认窗口正常打开，并在使用后检查 data 下对应目录有写入。搬迁前退出应用，再复制整个便携目录；另选的外部项目仍需单独携带和备份。启动器重定向了上述目录，不代表外部工具或操作系统不会留下其他记录。</p>
<h2 id="npm-install">npm 全局安装与 npx 临时运行</h2>
<p>先确认 Node.js 版本与平台依赖。在准备作为工作区的项目目录执行：</p>
<pre><code class="language-bash">npm install -g pi-web-ui@latest
pi-web-ui --version
pi-web-ui --help
pi-web-ui</code></pre>
<p>CLI 前台启动默认使用当前目录作为工作区；安装后台服务时，未指定工作区则使用 ~/pi-web-ui（显式参数或 PI_WEB_CWD 可覆盖）。工作区与数据目录是独立设置，服务未指定数据目录时仍由后端默认使用 ~/.pi-web。前台运行会自动打开浏览器；默认访问 <a href="http://localhost:8787">http://localhost:8787</a>，Ctrl+C 停止。没有自动打开时手动访问终端显示的地址。请确认界面中的项目路径正确。若命令找不到，重新打开终端并检查 npm 的全局可执行目录是否在 PATH 中。</p>
<p>不想全局安装时，在同样准备好依赖的项目目录执行下列命令；npx 首次可能询问是否下载。它仍会下载 npm 缓存、编译原生模块并写入应用数据，并非免依赖或无数据运行。</p>
<pre><code class="language-bash">npx pi-web-ui@latest --version
npx pi-web-ui@latest</code></pre>
<h2 id="npm-12-native-scripts">npm 依赖脚本与原生模块</h2>
<p>node-pty 为终端提供原生模块，安装脚本不能被全部禁用。npm 12 及以上若阻止依赖脚本，按以下方式放行相关依赖，再检查安装日志。源码安装使用仓库 allowScripts 配置；若当前 npm 策略仍阻止脚本，可显式传入同样的 --allow-scripts 选项。</p>
<pre><code class="language-bash">npm install -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest
# npm 12+ 的 npx 对应写法：
npx --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>
<p>较旧 npm 使用普通安装命令，不要盲目添加不支持的选项。遇到 node-gyp、Python 或 C++ 错误，先补齐下节工具链再重新安装；不要用 --ignore-scripts 跳过。安装后除检查版本，还应打开终端面板执行简单命令，确认 node-pty 可加载。</p>
<h2 id="platform-specifics">Windows Git Bash 与 Linux 原生构建依赖</h2>
<p><strong>Windows：</strong>安装 <a href="https://git-scm.com/downloads/win" target="_blank" rel="noreferrer">Git for Windows</a> 并保留 Git Bash，重新打开终端。下面 PowerShell 命令验证常见默认路径；若安装到其他目录，替换为实际 bash.exe 路径。</p>
<pre><code class="language-powershell">git --version
&amp; "C:\\Program Files\\Git\\bin\\bash.exe" --version
$env:PI_WEB_SHELL = "C:\\Program Files\\Git\\bin\\bash.exe"
pi-web-ui</code></pre>
<p>PI_WEB_SHELL 用于终端面板的 shell 选择，不能代替安装 Git/Bash。服务端虽有 Bash 探测与后备处理，完整 Git Bash 环境仍应事先准备。若原生模块没有匹配预编译包并回退 node-gyp，还需 Python 和 Visual Studio 的 C++ 桌面构建工具。</p>
<p><strong>Linux：</strong>node-pty 安装会用到原生编译工具链。先安装 Node.js ≥ 22.19.0，再按发行版执行一组命令；其他发行版安装等价的 Python 3、make、C++ 编译器和 Git。</p>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get update
sudo apt-get install -y python3 build-essential git

# Fedora / RHEL 系发行版（使用 dnf）
sudo dnf install -y python3 make gcc-c++ git</code></pre>
<p>随后运行 npm 安装或源码安装命令。用 python3 --version、make --version、g++ --version 检查工具可用；出现权限错误时检查 npm prefix 和目录所有者，避免混用不同用户的全局安装。</p>
<h2 id="termux-install">Android Termux 完整安装</h2>
<p>在仍受维护的 Termux 环境内执行，不使用 Android 普通终端或 Electron 包。先更新包并安装 Node、Python 与编译工具；确认 node --version 至少为 22.19.0。Android 原生模块能否编译需以实际安装日志和终端验证为准。</p>
<pre><code class="language-bash">pkg update
pkg upgrade -y
pkg install -y nodejs python make clang git
node --version
npm --version
npm install -g pi-web-ui@latest
mkdir -p ~/projects/pi-workspace
cd ~/projects/pi-workspace
pi-web-ui --version
pi-web-ui --no-browser</code></pre>
<p>npm 12+ 如需放行脚本，将上面的 npm install 换为本章依赖脚本一节的命令。在同一手机浏览器访问 http://127.0.0.1:8787，检查项目与终端面板。源码和 node_modules 放在 Termux 私有主目录；Android 共享存储的权限与文件系统行为不适合直接作为原生模块安装目录。</p>
<p>确需读取手机共享文件时可另执行 termux-setup-storage 并批准系统权限，再通过 ~/storage 访问。保持 Termux 进程运行；Android 后台限制可能终止服务。远程访问与后台部署另见<a href="#cli-and-env">启动与部署</a>。</p>
<h2 id="source-build-install">从源码构建与运行</h2>
<p>前置条件：Git、Node.js ≥ 22.19.0、npm，以及上文对应平台工具链。使用锁文件安装开发依赖，不要以 --omit=dev 安装后再构建。</p>
<pre><code class="language-bash">git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
npm ci
npm run build
npm start</code></pre>
<p>npm run build 依次执行 build:web、build:server、build:dsh-runtime、build:mermaid-vendor 和 build:runtrace-vendor；npm start 通过 SDK 解析钩子运行 dist/server/index.js，前端产物来自 web/dist。访问 http://localhost:8787 验证。要指定自己的项目，可在构建后用 CLI 入口启动：</p>
<pre><code class="language-bash">node bin/pi-web-ui.mjs --version
node bin/pi-web-ui.mjs --cwd /path/to/project</code></pre>
<p>开发联调运行 npm run dev，浏览器打开 Vite 地址（默认 http://localhost:5173，后端 8788）。桌面开发与打包使用以下 package scripts；打包依赖对应平台的 Electron 工具链与下载资源，推荐在目标系统构建。</p>
<pre><code class="language-bash"># 在已执行 npm ci 的源码根目录：
npm run build
npm run desktop:dev
# 退出开发应用后，按需要选择一个打包命令：
npm run desktop:dist
npm run desktop:portable
npm run desktop:portable:full</code></pre>
<p>desktop:dev 会执行 build:desktop 后启动 Electron；desktop:dist 会构建 Web、服务和桌面端，产物位于 release/。desktop:portable 组装基础便携目录；desktop:portable:full 额外自动下载 Git，<strong>不自动包含独立 Node</strong>。在 Windows 源码根目录生成包含 Git、Node 与 zip 的便携包，可执行：</p>
<pre><code class="language-bash">npm run build
npm run build:desktop
node scripts/make-portable.mjs --with-git --with-node --zip</code></pre>
<p>产物为 release/PiWebUI-Portable 和 release 下的 portable.zip；解压后按便携启动步骤验证。组装脚本会重新初始化目标目录的 data 子目录，只用于制作干净发行包；不要指向或复用存有个人数据的便携目录。源码启动 npm start 不会自动打开浏览器，以终端实际地址为准。</p>
<h2 id="docker-source-install">Docker：从源码用 Compose 构建</h2>
<p>前置条件：Git、运行中的 Docker Engine / Docker Desktop，以及 Docker Compose v2（docker compose version 可用）。下面从源码本地构建，不依赖预先发布的 registry 镜像。仓库 Compose 中的 pi-web-ui:latest 是本地构建标签。</p>
<pre><code class="language-bash">git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
docker version
docker compose version</code></pre>
<p>首次启动前编辑仓库 docker-compose.yml：将访问口令改为自己的值；如需操作宿主机项目，启用文件内的工作区绑定挂载示例，并将 PI_WEB_CWD 设为对应容器路径。需要已有 Agent 配置时使用文件内的独立配置挂载示例，并按实际读写需要设置权限。容器以 node 用户运行，挂载目录必须允许它进行所需操作。详细口令、监听与部署参数见<a href="#cli-and-env">第 03 章</a>。</p>
<pre><code class="language-bash">docker compose up -d --build
docker compose ps
docker compose logs --tail=100 pi-web-ui</code></pre>
<p>访问 http://localhost:8787 并按配置的访问口令进入，确认模型连接和项目路径。Dockerfile 采用 Node 22 多阶段构建，容器工作目录为 /app，入口为 dist/server/index.js（带 SDK 解析钩子）；数据目录为 <strong>/app/.pi-web</strong>，Compose 将 pi-web-data 命名卷挂载到这里。宿主机不需要为镜像编译另装 Node、Python 或 C++；Docker 构建阶段自行安装工具链。</p>
<p>后续在<strong>同一源码目录、同一 Compose 项目名</strong>执行即可复用容器配置与命名卷；不要仅为升级改目录名或随意切换 -p 项目名，否则可能创建新卷，看起来像数据丢失。默认镜像没有挂入你的宿主机项目，必须按需配置挂载。</p>
<h2 id="first-setup-wizard">首次启动与模型连接验证</h2>
<p>npm/npx、源码或 Docker 启动后，打开日志显示的地址；桌面与便携版直接使用应用窗口。按界面引导配置提供商、凭据或支持的登录方式。兼容接口需核对服务端点和模型名。这里不展开管理页面字段，详细服务与参数见<a href="#cli-and-env">启动与部署</a>。</p>
<figure class="doc-figure"><img src="./assets/settings.jpeg" alt="模型与提供商设置" /><figcaption>配置模型后仍需实际发送消息验证连接。</figcaption></figure>
<p>发送一条短消息并确认得到回复，再核对当前项目和终端面板。若连接失败，检查模型名称、端点、密钥权限及服务日志；保存设置成功本身不能证明连接可用。</p>
<h2 id="upgrade-uninstall">升级、卸载与数据保留</h2>
<p>升级前停止运行中的进程并备份实际数据目录。CLI 默认 Web 数据在 ~/.pi-web，Agent 凭据、配置与会话在 ~/.pi/agent；PI_WEB_DATA_DIR、PI_CODING_AGENT_DIR 或对应 CLI 参数可覆盖。普通桌面版 Web 数据默认在 Electron userData 下的 data，Agent 默认仍使用 ~/.pi/agent；便携版则使用前述 data 结构。请按实际环境确认路径，不要只备份程序安装目录。</p>
<p><strong>npm 全局版：</strong>前台运行用 Ctrl+C 停止；已安装后台服务时先停止服务。更新后重新启动；服务命令、权限及自定义实例名见第 03 章。npm 12+ 根据前文添加脚本放行参数。</p>
<pre><code class="language-bash"># 仅已安装后台服务的用户执行：
pi-web-ui server stop
# 更新全局包：
npm install -g pi-web-ui@latest
pi-web-ui --version
# 后台服务用户执行；前台用户运行 pi-web-ui：
pi-web-ui server start</code></pre>
<p>卸载全局版时，若安装过系统服务，先用仍可用的 CLI 移除服务和相关快捷方式，再卸载 npm 包：</p>
<pre><code class="language-bash"># 仅已安装后台服务的用户执行：
pi-web-ui server uninstall
npm uninstall -g pi-web-ui</code></pre>
<p>npm 卸载不会清除上述用户数据。npx 用户停止进程即可，后续仍用 npx pi-web-ui@latest；无需卸载全局包，npm 缓存与应用数据分别保留。</p>
<p><strong>桌面版：</strong>使用应用内更新入口（当前安装包支持时），或退出后下载安装同平台新版本；全局 npm 更新不会更新桌面包。Windows 从系统应用管理卸载，macOS 移除 /Applications 中的应用，Linux 删除下载的 AppImage。移除程序不等于清理所有用户数据，保留实际 userData 与 Agent 目录，尤其注意桌面和 CLI 可能共享 Agent 会话。</p>
<p><strong>便携版：</strong>退出后先备份整个旧目录，将新包解压到新目录，再将旧 data 完整复制过去；不要用组装脚本重建正在使用的目录。验证配置、会话和项目后再处理旧副本。删除便携目录会连同内部 data/workspace 中的项目与凭据一起删除；保留整个目录或至少 data 才能保留这些内容。</p>
<p><strong>源码版：</strong>停止旧进程后，在源码根目录更新；先保存本地修改，git pull --ff-only 失败时先解决分支状态，不要强制覆盖。</p>
<pre><code class="language-bash">git pull --ff-only
npm ci
npm run build
npm start</code></pre>
<p>删除源码副本即可移除该副本的程序；源码目录内自建的项目或自定义数据须另存，默认用户数据目录不会随源码删除。</p>
<p><strong>Docker Compose：</strong>在原源码目录保存 Compose 自定义配置后更新源码并重建。下列停止命令保留命名卷：</p>
<pre><code class="language-bash">git pull --ff-only
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 pi-web-ui
# 停止并移除容器、网络，保留命名数据卷：
docker compose down</code></pre>
<p>重建会保留 /app/.pi-web 的命名卷与宿主机绑定挂载，但容器可写层中的其他未挂载文件不会保留。docker compose down --volumes 会删除本项目命名卷，仅在确定需要清除其中全部数据时使用。宿主机绑定挂载的项目需自行管理；升级前也应备份卷内数据。</p>
<h2 id="install-faqs">安装后的检查与常见问题</h2>
<p>端口冲突时，CLI 可执行 pi-web-ui --port 9000，再访问 http://localhost:9000；桌面版会选择可用端口。先用 --version 和 --help 验证实际执行的 CLI，再用启动日志、界面项目路径、模型回复与终端命令分别验证服务、工作区、模型和原生依赖。</p>
<p>安装失败先保留 npm 编译输出，核对 Node 版本、脚本策略与工具链；启动失败检查端口、目录权限与日志。远程访问、后台服务、访问口令及完整参数统一参阅<a href="#cli-and-env">第 03 章：启动与部署</a>。</p>
`,
  contentEn: `
<h2 id="installation-prerequisites">Choose a method and prepare prerequisites</h2>
<p>The browser version runs through a global npm install, npx, or a source build. Electron packages provide desktop apps, with a separate Windows portable bundle. Servers can build from source with Docker Compose. npm, npx, and source installs require Node.js ≥ 22.19.0 and npm; source and container builds also require Git. Desktop apps include the Electron runtime, so starting the app needs no separate Node installation, but plugin installation and external commands may still require Node/npm, Git, or other tools.</p>
<pre><code class="language-bash">node --version
npm --version
git --version</code></pre>
<p>Prepare the platform dependencies below before installing. Model accounts, credentials, or login configuration are separate prerequisites: a successful installation does not verify a model connection. Replace example project paths with your own.</p>
<h2 id="desktop-releases-download">Electron desktop: Windows, macOS, Linux</h2>
<p>Open <a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer">GitHub Releases</a> and choose an asset for your OS and its listed architecture. Update metadata (latest*.yml and .blockmap) is not an installer. Do not assume every release provides every architecture.</p>
<ul>
<li><strong>Windows:</strong> download pi-web-ui-desktop-&lt;version&gt;-setup.exe, run the installation wizard, choose a directory, and launch from the Start menu. Prepare Git/Bash as described below. Portable zip instructions follow in the next section.</li>
<li><strong>macOS:</strong> open the .dmg, drag pi-web-ui-desktop.app into /Applications, and launch it there. Alternatively, extract the desktop .zip and move its .app into /Applications.</li>
<li><strong>Linux:</strong> download the .AppImage and run the commands below in its directory, using the actual asset name. A graphical desktop is required. If FUSE is missing, install your distribution's FUSE compatibility library or use AppImage's extract-and-run mode.</li>
</ul>
<pre><code class="language-bash">chmod +x ./pi-web-ui-desktop-*.AppImage
./pi-web-ui-desktop-*.AppImage
# If FUSE is unavailable, replace the previous line with:
./pi-web-ui-desktop-*.AppImage --appimage-extract-and-run</code></pre>
<p>The wildcard assumes only one matching AppImage in the current directory. Verify that the chat window opens and the local service starts. Desktop uses an available port; do not require port 8787 as a startup check. Its workspace defaults to your home directory; select your project in the UI.</p>
<span id="desktop-troubleshooting"></span>
<p>If macOS reports a damaged or quarantined app, first confirm it came from the project's Releases. For the current unnotarized artifacts, remove quarantine only from this app, then verify launch:</p>
<pre><code class="language-bash">xattr -dr com.apple.quarantine /Applications/pi-web-ui-desktop.app
open -a /Applications/pi-web-ui-desktop.app</code></pre>
<p>For a Windows unknown-publisher prompt, verify the download source first. If desktop startup fails, inspect the startup log's server entry, data directory, and error. A global npm reinstall does not replace the service bundled with the desktop app.</p>
<h2 id="windows-portable-install">Windows portable: launchers and data directories</h2>
<p>Download pi-web-ui-desktop-&lt;version&gt;-portable.zip from Releases and extract it completely into a writable directory. Preserve the app, runtime, data, and launcher structure inside PiWebUI-Portable. Double-click <strong>启动Pi.bat</strong> or <strong>PiPortable.bat</strong> in its root, or enter the extracted root in PowerShell and run:</p>
<pre><code class="language-powershell">.\\PiPortable.bat</code></pre>
<p>The launcher runs app/pi-web-ui-desktop.exe and sets portable data paths. It prefers bundled Git when runtime/git/cmd/git.exe exists, using Bash from runtime/git/bin/bash.exe or usr/bin/bash.exe. If runtime/node/node.exe exists, it adds bundled Node/npm; otherwise related features depend on system tools. Inspect the actual download rather than assuming every external tool is bundled.</p>
<table><thead><tr><th>Path relative to portable root</th><th>Purpose</th></tr></thead><tbody>
<tr><td>data/agent</td><td>Agent configuration, model credentials, and session records (PI_CODING_AGENT_DIR)</td></tr>
<tr><td>data/web</td><td>Web UI settings, plugins, uploads, etc. (PI_WEB_DATA_DIR)</td></tr>
<tr><td>data/workspace</td><td>Launcher's default workspace (PI_WEB_CWD)</td></tr>
<tr><td>data/electron</td><td>Electron user state</td></tr>
<tr><td>data/git, data/home</td><td>Global Git configuration and redirected home directory</td></tr>
<tr><td>data/npm-global, data/npm-cache</td><td>npm global installs and cache when portable Node is enabled</td></tr>
</tbody></table>
<p>Verify that the window opens and the appropriate data directories receive files after use. Exit before moving the bundle, then copy the entire portable directory. Projects selected outside it must be carried and backed up separately. These redirected paths do not guarantee that external tools or the OS leave no other records.</p>
<h2 id="npm-install">Global npm installation and temporary npx runs</h2>
<p>Check Node.js and prepare platform dependencies first. In the project directory you want to use as the workspace, run:</p>
<pre><code class="language-bash">npm install -g pi-web-ui@latest
pi-web-ui --version
pi-web-ui --help
pi-web-ui</code></pre>
<p>Foreground CLI startup defaults to the current directory as its workspace. Service installation defaults to ~/pi-web-ui unless an explicit option or PI_WEB_CWD overrides it. Workspace and data directory are separate settings: a service without a data-directory override still uses the backend default ~/.pi-web. Foreground startup opens a browser. The default URL is <a href="http://localhost:8787">http://localhost:8787</a>; stop with Ctrl+C. If no browser opens, visit the address printed in the terminal. Verify the project path in the UI. If the command is missing, reopen your terminal and check that npm's global executable directory is on PATH.</p>
<p>To run without a global installation, prepare the same dependencies and run the following in your project. npx may ask permission to download on first use. It still downloads an npm cache, builds native modules, and writes application data.</p>
<pre><code class="language-bash">npx pi-web-ui@latest --version
npx pi-web-ui@latest</code></pre>
<h2 id="npm-12-native-scripts">npm dependency scripts and native modules</h2>
<p>node-pty supplies the terminal's native module; do not disable all install scripts. If npm 12 or later blocks dependency scripts, allow the dependencies below and inspect the installation log. Source installs use the repository's allowScripts configuration; if your npm policy still blocks scripts, pass the same --allow-scripts option explicitly.</p>
<pre><code class="language-bash">npm install -g --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest
# Equivalent npx invocation for npm 12+:
npx --allow-scripts=node-pty,@google/genai,protobufjs pi-web-ui@latest</code></pre>
<p>Use ordinary install commands with older npm versions; do not add unsupported options. For node-gyp, Python, or C++ errors, install the toolchain below and retry rather than using --ignore-scripts. After installation, check the version and run a simple command in the terminal panel to verify node-pty loads.</p>
<h2 id="platform-specifics">Windows Git Bash and Linux native build dependencies</h2>
<p><strong>Windows:</strong> install <a href="https://git-scm.com/downloads/win" target="_blank" rel="noreferrer">Git for Windows</a> including Git Bash, then reopen your terminal. These PowerShell commands check the common default path; replace it with your actual bash.exe location if different.</p>
<pre><code class="language-powershell">git --version
&amp; "C:\\Program Files\\Git\\bin\\bash.exe" --version
$env:PI_WEB_SHELL = "C:\\Program Files\\Git\\bin\\bash.exe"
pi-web-ui</code></pre>
<p>PI_WEB_SHELL selects the terminal panel's shell; it does not install Git/Bash. Although the server probes for Bash and provides fallback handling, prepare a full Git Bash environment first. If no matching native prebuild exists and installation falls back to node-gyp, also install Python and Visual Studio C++ desktop build tools.</p>
<p><strong>Linux:</strong> installing node-pty needs a native compiler toolchain. Install Node.js ≥ 22.19.0, then run one group below for your distribution. On other distributions, install equivalent Python 3, make, C++ compiler, and Git packages.</p>
<pre><code class="language-bash"># Debian / Ubuntu
sudo apt-get update
sudo apt-get install -y python3 build-essential git

# Fedora / RHEL family using dnf
sudo dnf install -y python3 make gcc-c++ git</code></pre>
<p>Then run the npm or source installation commands. Check python3 --version, make --version, and g++ --version. For permission errors, inspect npm's prefix and directory ownership; avoid mixing global installs by different users.</p>
<h2 id="termux-install">Complete Android Termux installation</h2>
<p>Use a maintained Termux environment, not an ordinary Android terminal or an Electron package. Update packages and install Node, Python, and build tools. Confirm node --version is at least 22.19.0. Check actual installation logs and verify the terminal to establish whether native modules build successfully on your Android environment.</p>
<pre><code class="language-bash">pkg update
pkg upgrade -y
pkg install -y nodejs python make clang git
node --version
npm --version
npm install -g pi-web-ui@latest
mkdir -p ~/projects/pi-workspace
cd ~/projects/pi-workspace
pi-web-ui --version
pi-web-ui --no-browser</code></pre>
<p>For npm 12+ script restrictions, replace npm install with the command in the dependency scripts section. Open http://127.0.0.1:8787 in the same phone's browser and verify the project and terminal panel. Keep source and node_modules in Termux's private home directory: shared Android storage has permissions and filesystem behavior unsuitable for native module installation.</p>
<p>To access shared phone files, separately run termux-setup-storage and grant the OS permission, then use ~/storage. Keep Termux running; Android background restrictions may terminate the service. See <a href="#cli-and-env">Startup &amp; Deployment</a> for remote access and background deployment.</p>
<h2 id="source-build-install">Build and run from source</h2>
<p>Prerequisites: Git, Node.js ≥ 22.19.0, npm, and the platform toolchain above. Install development dependencies using the lockfile; do not use --omit=dev before building.</p>
<pre><code class="language-bash">git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
npm ci
npm run build
npm start</code></pre>
<p>npm run build runs build:web, build:server, build:dsh-runtime, build:mermaid-vendor, and build:runtrace-vendor in order. npm start runs dist/server/index.js with the SDK resolution hook, serving frontend output from web/dist. Verify at http://localhost:8787. To select your own project after building, use the CLI entry:</p>
<pre><code class="language-bash">node bin/pi-web-ui.mjs --version
node bin/pi-web-ui.mjs --cwd /path/to/project</code></pre>
<p>For development, run npm run dev and open the Vite address (default http://localhost:5173, backend 8788). Desktop development and packaging use the package scripts below. Packaging requires the platform's Electron tools and downloaded resources; build on the target OS where possible.</p>
<pre><code class="language-bash"># In the source root after npm ci:
npm run build
npm run desktop:dev
# Exit the development app, then choose a packaging command:
npm run desktop:dist
npm run desktop:portable
npm run desktop:portable:full</code></pre>
<p>desktop:dev runs build:desktop and starts Electron. desktop:dist builds the web, server, and desktop code, placing artifacts in release/. desktop:portable assembles a basic portable directory; desktop:portable:full additionally downloads Git, <strong>but does not automatically include standalone Node</strong>. To generate a Windows bundle with Git, Node, and a zip, run in the source root on Windows:</p>
<pre><code class="language-bash">npm run build
npm run build:desktop
node scripts/make-portable.mjs --with-git --with-node --zip</code></pre>
<p>Output is release/PiWebUI-Portable plus a portable.zip in release/. Extract and verify it using the portable launch instructions. The assembly script reinitializes the target data subdirectories and is for clean distribution bundles only; never reuse a portable directory holding personal data. Source npm start does not automatically open a browser; use the terminal's actual address.</p>
<h2 id="docker-source-install">Docker: build from source with Compose</h2>
<p>Prerequisites: Git, a running Docker Engine / Docker Desktop, and Docker Compose v2 (docker compose version must work). This method builds locally from source and requires no published registry image. The repository's pi-web-ui:latest image name is a local build tag.</p>
<pre><code class="language-bash">git clone https://github.com/xing-shuyin/pi-web-ui.git
cd pi-web-ui
docker version
docker compose version</code></pre>
<p>Before first launch, edit docker-compose.yml in the repository and replace the access passphrase with your own. To work on a host project, enable the file's workspace bind-mount example and set PI_WEB_CWD to the matching container path. To reuse Agent configuration, use its separate configuration mount example and choose permissions for the required reads and writes. The container runs as user node; mounted directories must permit the necessary operations. See <a href="#cli-and-env">Chapter 03</a> for authentication, listening, and deployment parameters.</p>
<pre><code class="language-bash">docker compose up -d --build
docker compose ps
docker compose logs --tail=100 pi-web-ui</code></pre>
<p>Open http://localhost:8787 using the configured access passphrase, then verify the model connection and project path. Dockerfile uses a Node 22 multi-stage build, working directory /app, and dist/server/index.js with the SDK resolution hook. Data lives at <strong>/app/.pi-web</strong>, mounted by Compose from the pi-web-data named volume. The host needs no Node, Python, or C++ installation for image compilation; Docker build stages install their toolchain.</p>
<p>Reuse the <strong>same source directory and Compose project name</strong> on subsequent runs to retain configuration and the named volume. Changing the directory name or -p project name can create another volume and make existing data appear missing. The default image does not mount your host project: configure that mount explicitly.</p>
<h2 id="first-setup-wizard">First launch and model connection verification</h2>
<p>For npm/npx, source, or Docker, visit the logged address; for desktop and portable, use the app window. Follow the UI to configure a provider, credentials, or a supported login method. For compatible APIs, verify the endpoint and model name. Management page fields are outside this chapter; see <a href="#cli-and-env">Startup &amp; Deployment</a> for services and parameters.</p>
<figure class="doc-figure"><img src="./assets/settings.jpeg" alt="Model and provider settings" /><figcaption>Send a real message after configuring a model to verify the connection.</figcaption></figure>
<p>Send a short message and confirm a reply, then check the project and terminal panel. For connection failures, inspect the model name, endpoint, key permissions, and server logs. Saving settings alone does not verify connectivity.</p>
<h2 id="upgrade-uninstall">Upgrade, uninstall, and preserve data</h2>
<p>Stop running processes and back up actual data directories before upgrading. CLI Web data defaults to ~/.pi-web; Agent credentials, configuration, and sessions live in ~/.pi/agent. PI_WEB_DATA_DIR, PI_CODING_AGENT_DIR, or corresponding CLI flags can override these paths. Ordinary desktop Web data defaults to data under Electron userData, while Agent data still defaults to ~/.pi/agent. Portable uses the data layout above. Confirm your actual paths rather than backing up only the program directory.</p>
<p><strong>Global npm:</strong> stop foreground runs with Ctrl+C; stop an installed background service first. Restart after upgrading. See Chapter 03 for service permissions and custom instance names. Add the script allowance options above when required by npm 12+.</p>
<pre><code class="language-bash"># Only if a background service is installed:
pi-web-ui server stop
# Upgrade the global package:
npm install -g pi-web-ui@latest
pi-web-ui --version
# Service users; foreground users run pi-web-ui instead:
pi-web-ui server start</code></pre>
<p>To uninstall a global install with a system service, remove the service and associated shortcuts using the CLI while it is still available, then remove the npm package:</p>
<pre><code class="language-bash"># Only if a background service is installed:
pi-web-ui server uninstall
npm uninstall -g pi-web-ui</code></pre>
<p>npm uninstall leaves the user data above in place. npx users can stop the process and use npx pi-web-ui@latest next time; no global uninstall is necessary. npm cache and application data remain separately.</p>
<p><strong>Desktop:</strong> use the in-app update entry when supported by your installed package, or exit and install a new package for the same platform. Global npm updates do not update the desktop bundle. Uninstall through Windows app management, remove the app from /Applications on macOS, or delete the downloaded AppImage on Linux. Program removal does not clear all user data. Preserve the actual userData and Agent directories; desktop and CLI may share Agent sessions.</p>
<p><strong>Portable:</strong> exit and back up the entire old directory, extract the new bundle into a new directory, then copy the complete old data directory into it. Do not rebuild an actively used directory with the assembly script. Verify settings, sessions, and projects before removing old copies. Deleting the portable directory also deletes credentials and projects inside data/workspace; preserve the whole directory, or at least data, to keep them.</p>
<p><strong>Source:</strong> stop the old process, save local changes, then update in the source root. If git pull --ff-only fails, resolve the branch state without forcibly overwriting changes.</p>
<pre><code class="language-bash">git pull --ff-only
npm ci
npm run build
npm start</code></pre>
<p>Delete the source checkout to remove that program copy. Save any projects or custom data inside it separately; default user data directories are not removed with the checkout.</p>
<p><strong>Docker Compose:</strong> preserve custom Compose settings, update source, and rebuild in the original source directory. The stop command below keeps named volumes:</p>
<pre><code class="language-bash">git pull --ff-only
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 pi-web-ui
# Remove containers and networks but keep named data volumes:
docker compose down</code></pre>
<p>Rebuilding retains the /app/.pi-web named volume and host bind mounts, but loses other unmounted files in the container's writable layer. docker compose down --volumes deletes this project's named volumes; use it only when you intend to erase all their data. Manage host-mounted projects separately, and back up volume data before upgrading.</p>
<h2 id="install-faqs">Post-install checks and common problems</h2>
<p>For a CLI port conflict, run pi-web-ui --port 9000 and visit http://localhost:9000; desktop selects an available port. Use --version and --help to identify the CLI actually invoked. Verify the service, workspace, model, and native dependencies through startup logs, the UI project path, a model reply, and a terminal command respectively.</p>
<p>For installation failures, retain npm compiler output and check Node version, script policy, and the toolchain. For startup failures, check ports, directory permissions, and logs. Remote access, background services, access passphrases, and full parameters are covered in <a href="#cli-and-env">Chapter 03: Startup &amp; Deployment</a>.</p>
`,
};
