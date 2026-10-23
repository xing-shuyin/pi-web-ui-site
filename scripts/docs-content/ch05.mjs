/**
 * Chapter 05: Remote SSH Projects (打开 SSH 远程项目与全栈远程工作区)
 */
export const ch05 = {
	id: "remote-ssh-projects",
	group: "workspace",
	badge: "Chapter 05 · 核心亮点",
	icon: "🌐",
	navTitle: "05. SSH 远程项目直连",
	navTitleEn: "05. Remote SSH Projects",
	title: "打开 SSH 远程项目与全栈远程工作区完全指南",
	titleEn: "Opening Remote SSH Projects & Cloud Development",
	summary: "告别在远程服务器部署繁琐服务的痛苦！通过 ssh:// 协议直连远端主机，远程文件树、AI 读写、内置终端与 Git 全部原生透明下沉。",
	summaryEn: "Zero remote setup! Connect directly via ssh:// protocol with full remote file trees, AI read/write tools, PTY terminal, and Git SCM.",
	contentZh: `
<h2 id="why-remote-ssh">1. 为什么你需要 SSH 远程项目？</h2>
<p>日常开发中，模型训练、繁重编译或微服务集群都在云端高性能服务器上。传统方案要在远端装 VSCode Server（耗内存、网络波动易掉线），或用 <code>scp</code> 来回倒腾文件。</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 pi-web-ui 的破局设计：服务端零安装！</strong>
	<p><strong>你不需要在远程 Linux 服务器上安装任何 pi-web-ui 服务或特殊代理！</strong> 只要远程服务器开启了标配的 SSH 服务（哪怕是一台干净的纯 Alpine / Ubuntu / CentOS 主机），pi-web-ui 即可通过标准 SSH 协议直连并下沉所有能力。</p>
</div>

<h2 id="connect-ssh-workspace">2. 新手连接实操：一键开启远程开发</h2>

<div class="doc-step-box">
	<div class="doc-step-num">1</div>
	<div class="doc-step-content">
		<h4>点击顶栏工作区切换器</h4>
		<p>在 pi-web-ui 界面顶栏中间点击当前路径按钮，弹出「打开项目」窗口，切换至 <strong>「SSH 远程项目」</strong> 标签页。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">2</div>
	<div class="doc-step-content">
		<h4>填入 SSH 连接 URI</h4>
		<p>URI 格式非常直观，支持自定义端口与目标目录：</p>
		<pre><code class="language-bash"># 标准格式：
ssh://用户名@远程服务器IP:端口号/服务器目标路径

# 真实示例 1：连接 Ubuntu 服务器的某个 Web 项目
ssh://root@192.168.1.100:22/var/www/my-website

# 真实示例 2：连接云服务器开发目录
ssh://ubuntu@cloud.example.com/home/ubuntu/api-backend</code></pre>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">3</div>
	<div class="doc-step-content">
		<h4>选择认证凭据（三选一）</h4>
		<ul>
			<li><strong>密码认证</strong>：直接输入服务器登录密码；</li>
			<li><strong>SSH 私钥认证</strong>：选择或粘贴本地私钥（例如 <code>~/.ssh/id_rsa</code> 或 <code>id_ed25519</code>）；</li>
			<li><strong>SSH Agent 代理</strong>：免输入密码，复用本地系统中已运行的 SSH 密钥代理。</li>
		</ul>
	</div>
</div>

<h2 id="remote-capabilities">3. 远端能力一览（详见专章）</h2>
<p>连接成功后整个工作台切换到远端上下文：右侧文件树展示远端真实目录（见第 06 章），内置终端直连远端 shell（见第 08 章），Git 面板读取远端仓库状态（见第 09 章）。AI 的 <code>read</code>、<code>write</code>、<code>edit</code> 等工具由服务端进程内在远端直接执行，绝不下载大文件到本地。</p>

<h2 id="security-encryption">4. 安全性保障：AES-256-GCM 本地加密</h2>
<p>为了保障新手开发者的服务器安全：</p>
<ul>
	<li>你所输入的 SSH 密码或密钥在保存时，均使用强加密算法 <strong>AES-256-GCM</strong> 保存在你本地电脑的 <code>~/.pi-web/</code> 数据目录中；</li>
	<li>敏感凭据绝不离开你的本地设备，更不会上传至任何第三方云端。</li>
</ul>
`,
	contentEn: `
<h2 id="why-remote-ssh">1. Why Remote SSH?</h2>
<p>Directly code on powerful remote cloud instances or GPU clusters without installing any client/server agents on the remote host!</p>

<h2 id="connect-ssh-workspace">2. Connecting to Remote Host</h2>
<p>Click the workspace title at the top and select Remote SSH:</p>
<pre><code class="language-bash">ssh://username@hostname:22/path/to/project</code></pre>
<p>Supports password, private key (<code>~/.ssh/id_rsa</code>), and SSH Agent authentication.</p>

<h2 id="remote-capabilities">3. Full Remote Immersion</h2>
<p>The right file tree, terminal shell, Git panel, and AI read/write tools all execute directly on the remote server seamlessly.</p>
`,
};
