export const ch05 = {
  id: "remote-ssh-projects",
  group: "workspace",
  badge: "Chapter 05",
  icon: "🌐",
  navTitle: "SSH 远程项目",
  navTitleEn: "SSH Projects",
  title: "SSH 远程项目",
  titleEn: "SSH Projects",
  summary: "连接远程目录，了解能力依赖与凭据保存方式。",
  summaryEn:
    "Connect remote directories and understand dependencies and credential storage.",
  contentZh: `
<h2 id="why-remote-ssh">远程工作区</h2>
<p>通过 SSH 将文件树、AI 工具、终端和 Git 指向远程项目。远端无需安装 pi-web-ui 代理，但需 SSH/SFTP、shell 和目录权限；各功能另有命令依赖。</p>
<h2 id="connect-ssh-workspace">连接</h2>
<p>在项目入口添加主机、端口、用户、认证与目录，打开 ssh:// 形式的项目。私钥路径由服务端读取；连接后核对文件树和终端目录，确认用户与项目正确。</p>
<h2 id="remote-capabilities">操作</h2>
<p>命令在远端运行，文件通过 SFTP 传回服务端供界面和模型使用。Git、压缩和解压依赖远端相应工具；功能失败时检查日志、依赖与权限，大文件传输也会占用网络资源。</p>
<h2 id="security-encryption">凭据</h2>
<p>主机保存在数据目录 global-hosts.json。密码与私钥口令用 AES-256-GCM 加密，密钥为同目录 .remote-ssh.key；私钥保存路径。异机部署由异机服务端处理凭据，迁移时保护配置和密钥。重要远程目录先提交或备份，写入前再次确认目标，避免误改其他项目。</p>
`,
  contentEn: `
<h2 id="why-remote-ssh">Remote workspace</h2>
<p>SSH directs files, AI tools, terminals, and Git to a remote project. No pi-web-ui agent is needed; SSH/SFTP, shell, permissions, and tool dependencies are required.</p>
<h2 id="connect-ssh-workspace">Connect</h2>
<p>Add host, port, user, authentication, and directory. Open the ssh:// project and verify files and terminal location. Key paths are server-side.</p>
<h2 id="remote-capabilities">Operations</h2>
<p>Commands run remotely; SFTP transfers file content to the server. Check logs, permissions, and remote tools for Git or archives. Large transfers consume bandwidth.</p>
<h2 id="security-encryption">Credentials</h2>
<p>Hosts use global-hosts.json. Passwords and passphrases use AES-256-GCM with .remote-ssh.key alongside it; private keys use paths. Protect both configuration and keys during migration. Commit or back up important work and confirm targets before writing.</p>
`,
};
