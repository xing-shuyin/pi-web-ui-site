/**
 * Chapter 06: File Tree, Upload, Archive & Multi-Roots (右栏文件树、拖拽上传与压缩解压)
 */
export const ch06 = {
	id: "file-tree-and-transfer",
	group: "workspace",
	badge: "Chapter 06 · 核心亮点",
	icon: "📁",
	navTitle: "06. 文件树与传输解压",
	navTitleEn: "06. File Tree & Transfer",
	title: "右栏文件列表全攻略：拖拽上传、打包下载与压缩解压",
	titleEn: "File Tree Mastery: Drag-Drop Upload, Zip & Multi-Roots",
	summary: "类 VSCode 极致流畅的文件操作体验：桌面拖拽上传文件与整个文件夹、在线打包 ZIP 下载、右键一键在线解压、跨盘符 @root 浏览与多根工作区。",
	summaryEn: "VSCode-like file tree: drag & drop files and entire folders, streaming TAR uploads, zip export, in-place uncompress, @root navigation, and multi-root workspaces.",
	contentZh: `
<h2 id="file-tree-overview">1. 右栏文件树基础操作</h2>
<p>在 pi-web-ui 界面右侧常驻全功能文件工作台，点击顶部图标随时展开/收起：</p>

<div class="doc-step-box">
	<div class="doc-step-num">🔍</div>
	<div class="doc-step-content">
		<h4>即时模糊检索</h4>
		<p>文件树顶部提供实时过滤输入框，只需敲入几个字母（如 <code>app</code> 或 <code>.env</code>），整个目录树立即瞬间收窄至匹配条目，找文件极其迅捷。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🖱️</div>
	<div class="doc-step-content">
		<h4>丰富的鼠标右键快捷菜单</h4>
		<p>右键单击任何文件或文件夹，即可唤出完整操作菜单：<strong>新建文件、新建文件夹、重命名、复制相对路径、删除、打包下载 ZIP、在线解压</strong>等。</p>
	</div>
</div>

<h2 id="drag-drop-upload">2. 杀手级体验：拖拽上传文件与整个文件夹</h2>
<p>传统 Web 工具传整个脚手架目录时要一层层手动建目录，在这里：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 就像在本地 VSCode 一样随意拖拽！</strong>
	<p>直接从你的电脑桌面、文件资源管理器（Finder / Explorer）选中一个或多个文件，<strong>甚至是包含了成百上千个文件的完整大文件夹</strong>，直接拖动并松手释放在右侧文件树的目标目录中！</p>
</div>

<ul>
	<li><strong>单文件 / 多文件秒级传输</strong>：直接拖拽即可写入对应目录；</li>
	<li><strong>整个文件夹流式打包上传</strong>：底层采用高性能流式 TAR 协议打包并解包，保持完整的子目录层级结构，上传速度快且零丢包；无论本地还是 SSH 远程项目均完美支持。</li>
</ul>

<h2 id="archive-and-unarchive">3. 在线打包 ZIP 下载与一键在线解压</h2>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📦 打包下载整个目录</h4>
		<p>想把某个构建产物文件夹（如 <code>dist/</code> 或 <code>build/</code>）备份到本地电脑？右键点击该目录，选择 <strong>「打包为 ZIP 并下载」</strong>，服务端自动实时流式压缩为单个 zip 文件推送到浏览器下载，省时省力。</p>
	</div>
	<div class="doc-card">
		<h4>🗜️ 在线一键解压缩</h4>
		<p>上传了一个外部组件包 <code>assets.zip</code> 或服务器归档 <code>bundle.tar.gz</code>？右键点击该压缩文件，选择 <strong>「在此解压」</strong>，系统瞬间在原地解压开来，无需切到终端敲解压命令。</p>
	</div>
</div>

<h2 id="root-and-multiroot">4. 跨盘符 <code>@root</code> 浏览与多根工作区 (Multi-root)</h2>

<div class="doc-step-box">
	<div class="doc-step-num">🌐</div>
	<div class="doc-step-content">
		<h4>跨盘符 <code>@root</code> 快速穿梭</h4>
		<p>当你想引用项目目录之外的文件（例如公共的 <code>~/.npmrc</code>、另一个盘符中的数据集 <code>D:/datasets/</code> 或 Linux 下的 <code>/etc/hosts</code>）时，可以在路径输入框使用 <code>@root</code> 前缀跨盘符浏览，无需重新启动工作台。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🌿</div>
	<div class="doc-step-content">
		<h4>多根工作区协同 (Multi-root Workspaces)</h4>
		<p>全栈项目通常由前端子仓库（如 <code>client/</code>）和后端子仓库（如 <code>server/</code>）构成。点击工作区菜单的「添加额外工作区根目录」，即可将多个独立的项目文件夹同时挂载在右侧文件树中，AI 能够跨仓库理解代码逻辑与数据模型。</p>
	</div>
</div>
`,
	contentEn: `
<h2 id="file-tree-overview">1. File Tree Basics</h2>
<p>The right sidebar contains a fully-featured file tree with instant fuzzy filtering, new file/folder creation, rename, and context menus.</p>

<h2 id="drag-drop-upload">2. Drag & Drop File and Folder Upload</h2>
<p>Drag any file or entire directory from your desktop directly into the file tree. Streaming TAR protocol transfers deep folder hierarchies reliably on both local and SSH remote projects.</p>

<h2 id="archive-and-unarchive">3. Zip Download & In-Place Uncompress</h2>
<p>Right-click any folder to download it as a ZIP archive. Right-click any <code>.zip</code> or <code>.tar.gz</code> archive to uncompress it directly into the current directory.</p>

<h2 id="root-and-multiroot">4. @root Navigation & Multi-Root Workspaces</h2>
<p>Use <code>@root</code> to inspect paths outside the active repository. Mount multiple project roots simultaneously for full-stack monorepos.</p>
`,
};
