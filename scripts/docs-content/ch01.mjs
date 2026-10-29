export const ch01 = {
  id: "overview",
  group: "getting-started",
  badge: "Chapter 01",
  icon: "🚀",
  navTitle: "工作台入门",
  navTitleEn: "Getting Started",
  title: "工作台入门",
  titleEn: "Getting Started",
  summary: "了解工作台、启动方式与首个任务。",
  summaryEn: "Explore the workspace, launch it, and start a task.",
  contentZh: `
<h2 id="what-is-pi-web-ui">工作台</h2>
<p>在同一界面使用 AI 对话、文件树、终端与 Git。浏览器版和桌面版均可操作项目；先选择正确目录，再让模型读写文件或执行命令。</p>
<h2 id="workspace-layout">界面</h2>
<p>顶栏切换项目与会话，中间查看消息和工具结果，右侧浏览文件，下方检查终端与变更。演示展示常用操作，可对照自己的界面练习。</p>
<figure class="doc-figure"><img src="./assets/site-home-preview.png" alt="工作台中的对话、文件树与终端" /><figcaption>工作台布局</figcaption></figure>
<h3 id="demo-video">演示</h3><span id="demo-video-en"></span>
<div class="doc-video-card"><video controls preload="metadata" poster="./assets/demo-video-poster.png" playsinline style="width:100%"><source src="./assets/demo-video.mp4" type="video/mp4" /><source src="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4" type="video/mp4" /><a href="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4">下载演示</a></video></div>
<h2 id="thirty-second-quickstart">启动</h2>
<p>桌面包从 GitHub Releases 下载。命令行需 Node.js ≥ 22.19.0，在项目目录安装启动，再访问默认地址 localhost:8787 并配置模型。</p>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
<h2 id="first-ai-task">首个任务</h2>
<p>发送“创建带深色模式和重置按钮的秒表网页，并说明预览方法”。查看新增文件，运行预览，再提出具体修改要求。</p>
<h2 id="chapter-01-faq">权限</h2>
<p>模型使用你配置的凭据或本地端点。检查审批设置与文件差异；是否询问取决于规则，文件恢复也需满足下一章所述前提。</p>
`,
  contentEn: `
<h2 id="what-is-pi-web-ui">Workspace</h2>
<p>Use chat, files, terminals, and Git together. Select the project directory before asking AI to read, edit, or run commands.</p>
<h2 id="workspace-layout">Layout</h2>
<p>Switch projects and sessions above; review messages centrally, files on the right, and commands below. Use the demo for practice.</p>
<figure class="doc-figure"><img src="./assets/site-home-preview.png" alt="Chat, file tree, and terminal in the workspace" /><figcaption>Workspace layout</figcaption></figure>
<h3 id="demo-video">Demo</h3><span id="demo-video-en"></span>
<div class="doc-video-card"><video controls preload="metadata" poster="./assets/demo-video-poster.png" playsinline style="width:100%"><source src="./assets/demo-video.mp4" type="video/mp4" /><source src="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4" type="video/mp4" /><a href="https://raw.githubusercontent.com/xing-shuyin/pi-web-ui/main/assets/demo-video.mp4">Download demo</a></video></div>
<h2 id="thirty-second-quickstart">Launch</h2>
<p>Download desktop from GitHub Releases. CLI needs Node.js ≥ 22.19.0; launch in your project, open localhost:8787, and configure a model.</p>
<pre><code class="language-bash">npm i -g pi-web-ui@latest
pi-web-ui</code></pre>
<h2 id="first-ai-task">First task</h2>
<p>Ask for a stopwatch page with dark mode, reset, and preview instructions. Inspect files, preview, then request changes.</p>
<h2 id="chapter-01-faq">Permissions</h2>
<p>Use configured credentials or a local endpoint. Check approval settings and diffs; confirmation follows rules, and file recovery has prerequisites.</p>
`,
};
