const variant = document.body.dataset.variant || "a";
const variants = {
  a: {
    name: "清晰手册",
    tag: "DOCUMENTATION",
    title: "从第一步，到每一步。",
    intro: "安装、连接模型、开始构建。找到当前需要的答案，按自己的节奏深入。",
    accent: "标准三栏 · 专注阅读",
    label: "文档",
  },
  b: {
    name: "学习中心",
    tag: "LEARN & BUILD",
    title: "今天，你想完成什么？",
    intro:
      "从一个具体任务开始。跟随简短指南，把 AI 编程工作台用进你的日常工作。",
    accent: "任务导航 · 渐进学习",
    label: "学习中心",
  },
  c: {
    name: "开发者工作台",
    tag: "DEVELOPER DOCUMENTATION",
    title: "你的工作台，完整掌控。",
    intro: "从本地启动到服务部署，从日常对话到工具扩展。指南与参考，触手可及。",
    accent: "深色界面 · 快速查阅",
    label: "开发者文档",
  },
};
const config = variants[variant];
const topics = [
  {
    id: "quickstart",
    group: "开始使用",
    title: "快速开始",
    desc: "安装并启动你的第一个工作台",
    time: "5 分钟",
    icon: "↗",
  },
  {
    id: "models",
    group: "开始使用",
    title: "连接模型",
    desc: "配置 API Key 或接入本地模型",
    time: "4 分钟",
    icon: "◇",
  },
  {
    id: "chat",
    group: "使用指南",
    title: "对话与会话",
    desc: "组织项目上下文，持续迭代任务",
    time: "6 分钟",
    icon: "▤",
  },
  {
    id: "terminal",
    group: "使用指南",
    title: "终端与 Git",
    desc: "运行命令，查看和管理代码变更",
    time: "7 分钟",
    icon: "⌘",
  },
  {
    id: "modes",
    group: "进阶工作流",
    title: "选择工作模式",
    desc: "理解计划、目标与审查者模式",
    time: "8 分钟",
    icon: "⤴",
  },
  {
    id: "plugins",
    group: "扩展与定制",
    title: "插件与 MCP",
    desc: "连接工具，扩展工作台能力",
    time: "6 分钟",
    icon: "⊞",
  },
  {
    id: "reference",
    group: "参考",
    title: "CLI 与环境变量",
    desc: "查找启动参数与部署配置",
    time: "速查",
    icon: ">_",
  },
  {
    id: "deploy",
    group: "参考",
    title: "部署与访问",
    desc: "配置常驻服务与远程访问",
    time: "8 分钟",
    icon: "◎",
  },
];
const groups = [...new Set(topics.map((t) => t.group))];
let current = "";
let platform = "npm";
const command = () =>
  platform === "npm"
    ? "npm install -g pi-web-ui@latest\npi-web-ui"
    : "npx pi-web-ui@latest";
const code = (text, label = "终端") =>
  `<div class="code"><div class="code-head"><span>${label}</span><button class="copy" type="button">复制</button></div><pre><code>${text}</code></pre></div>`;
const note = (title, text) =>
  `<aside class="note"><b>ⓘ ${title}</b><p>${text}</p></aside>`;
const contents = {
  quickstart: () =>
    `<p class="lead">在你的项目目录启动 pi-web-ui，连接一个模型，然后发起第一个编程任务。</p><div class="facts"><span>预计 5 分钟</span><span>适用：Web / 桌面端</span></div>${note("开始前", "命令行方式需要 Node.js 22.19.0 或更新版本，以及可用的模型服务凭据。也可以直接下载桌面客户端。")}<h2 id="install">1. 安装并启动</h2><p>打开终端，选择适合你的启动方式。全局安装适合长期使用，npx 适合首次体验。</p><div class="tabs" aria-label="安装方式"><button data-platform="npm" class="${platform === "npm" ? "selected" : ""}">npm 全局安装</button><button data-platform="npx" class="${platform === "npx" ? "selected" : ""}">npx 体验</button><a href="https://github.com/xing-shuyin/pi-web-ui/releases/latest" target="_blank" rel="noreferrer">桌面客户端下载 ↗</a></div>${code(command())}<p>在实际项目目录中运行 <code>pi-web-ui</code>，浏览器打开 <code>http://localhost:8787</code>。</p><h2 id="connect">2. 连接一个模型</h2><p>首次启动后，在设置中配置模型提供商、API Key 和模型。使用兼容接口时，按提供商说明填写 Base URL。</p><a class="inline-link" href="#models">查看模型接入指南 →</a><h2 id="task">3. 完成第一个任务</h2><p>从一个范围明确的任务开始，写清目标和预期结果：</p><blockquote>在当前目录创建一个秒表网页，支持开始、暂停和重置，并告诉我如何预览。</blockquote><p>在对话中查看工具执行结果，通过文件树检查生成文件，再继续提出修改要求。</p><div class="success">✓ 完成后，你将拥有一个可继续迭代的项目会话。</div><h2 id="next">接下来</h2><div class="related"><a href="#chat"><b>对话与会话 →</b><span>理解上下文与多会话工作</span></a><a href="#modes"><b>选择工作模式 →</b><span>为复杂任务安排执行方式</span></a></div>`,
  models: () =>
    `<p class="lead">pi-web-ui 连接你选择的模型服务。先准备服务凭据，再在工作台中配置。</p>${note("准备材料", "模型提供商、API Key，以及兼容服务需要的 Base URL。请勿将密钥写入公开仓库。")}<h2 id="provider">1. 选择提供商</h2><p>打开工作台设置中的模型配置，选择已有提供商，或按服务商文档添加兼容接口。</p><h2 id="credentials">2. 填写连接信息</h2><table><thead><tr><th>字段</th><th>填写内容</th></tr></thead><tbody><tr><td>API Key</td><td>模型平台生成的访问密钥</td></tr><tr><td>Base URL</td><td>提供商给出的兼容 API 地址</td></tr><tr><td>模型</td><td>当前账号有权限使用的模型 ID</td></tr></tbody></table><h2 id="verify">3. 验证连接</h2><p>保存后选择模型，发送一条简短消息。遇到认证错误，先检查密钥与地址；遇到模型不存在，核对模型 ID 和账号权限。</p><a class="inline-link" href="#quickstart">返回快速开始 →</a>`,
  chat: () =>
    `<p class="lead">一个会话围绕一个目标展开。通过明确任务、检查结果和持续反馈，让模型逐步完成工作。</p><h2 id="context">提供项目上下文</h2><p>在具体项目目录中启动工作台。使用文件引用指出需要阅读的代码，同时说明预期行为和限制条件。</p><blockquote>阅读项目的登录逻辑，定位刷新页面后登录状态丢失的原因，修复后说明验证方式。</blockquote><h2 id="iterate">检查与迭代</h2><p>检查工具输出、文件变更和实际运行效果，再提供下一步反馈。复杂任务可以先使用计划模式讨论实施步骤。</p><h2 id="sessions">组织多个会话</h2><p>按目标拆分会话，使用清晰名称。避免在多个执行会话中同时修改同一文件。</p><a class="inline-link" href="#modes">了解工作模式 →</a>`,
  terminal: () =>
    `<p class="lead">内置终端用于运行项目命令，Git 面板用于查看与管理工作区变更。</p><h2 id="run">运行项目</h2><p>在终端确认当前目录后，运行项目提供的安装、开发和测试命令。</p>${code("npm install\nnpm run dev")}<h2 id="review">检查代码变更</h2><p>在 Git 面板查看差异，确认修改与当前任务一致，再选择需要暂存的文件。</p><h2 id="commit">提交前验证</h2><p>按项目文档执行类型检查、格式检查与相关测试。检查提交说明能否准确描述行为变化。</p>`,
  modes: () =>
    `<p class="lead">根据任务是否明确，以及是否需要持续审查，选择合适的工作模式。</p><h2 id="compare">模式对照</h2><table><thead><tr><th>模式</th><th>适用场景</th></tr></thead><tbody><tr><td>标准对话</td><td>明确的小型任务、问答和快速迭代</td></tr><tr><td>计划模式</td><td>先梳理方案，再开始实施</td></tr><tr><td>目标模式</td><td>执行与证据审查配合的持续任务</td></tr><tr><td>审查者模式</td><td>主会话负责审查，由执行会话实施</td></tr></tbody></table><h2 id="choose">如何选择</h2><p>需求还不明确时，先制定计划。需要持续检查执行结果时，再考虑带审查流程的模式。</p>${note("明确验收标准", "无论采用哪种模式，都应说明预期结果、约束条件和验证方式。")}`,
  plugins: () =>
    `<p class="lead">通过插件扩展界面与工作流，通过 MCP 连接外部工具。</p><h2 id="market">浏览插件</h2><p>在插件市场查看插件用途、配置要求和可用能力，安装后按照说明完成设置。</p><h2 id="mcp">连接 MCP 服务</h2><p>准备服务启动命令或连接地址，在工作台的 MCP 配置中添加服务，并检查可用工具列表。</p><h2 id="permissions">检查权限</h2><p>根据任务需要启用工具，确认工具访问的数据和执行范围。故障排查时，优先检查连接状态和服务日志。</p>`,
  reference: () =>
    `<p class="lead">常用启动命令与部署环境变量速查。</p><h2 id="cli">启动命令</h2>${code("pi-web-ui --port 9000 --cwd /path/to/project")}<h2 id="env">环境变量</h2><table><thead><tr><th>变量</th><th>默认值</th><th>用途</th></tr></thead><tbody><tr><td><code>PI_WEB_PORT</code></td><td>8787</td><td>HTTP 端口</td></tr><tr><td><code>PI_WEB_HOST</code></td><td>127.0.0.1</td><td>监听地址</td></tr><tr><td><code>PI_WEB_CWD</code></td><td>当前目录</td><td>主工作区</td></tr><tr><td><code>PI_WEB_DATA_DIR</code></td><td>~/.pi-web</td><td>数据目录</td></tr><tr><td><code>PI_WEB_TOKEN</code></td><td>空</td><td>访问鉴权口令</td></tr></tbody></table><h2 id="service">常驻服务</h2>${code("pi-web-ui server install\npi-web-ui server restart")}`,
  deploy: () =>
    `<p class="lead">从本地使用开始，根据需要配置常驻服务和远程访问。</p><h2 id="local">本地启动</h2>${code("pi-web-ui --port 9000 --cwd /path/to/project")}<h2 id="daemon">安装常驻服务</h2><p>通过内置服务命令设置系统自启动。各平台采用对应的服务管理方式。</p>${code("pi-web-ui server install")}<h2 id="remote">配置远程访问</h2><p>默认监听本机地址。对外提供访问时，应配置鉴权、HTTPS 和反向代理，并检查监听地址与防火墙规则。</p><a class="inline-link" href="#reference">查看相关环境变量 →</a>`,
};
document.body.innerHTML = `<div class="proposal-bar"><a href="./index.html">← 方案对比</a><span>方案 ${variant.toUpperCase()} / ${config.name}</span><span>${config.accent}</span></div><header><a class="brand" href="#home"><span class="logo">π</span>pi-web-ui <span class="brand-docs">${config.label}</span></a><nav class="top-nav"><a href="#home" class="active">文档</a><a href="#modes">工作流</a><a href="#reference">参考</a></nav><div class="header-tools"><button class="search-trigger">⌕ <span>搜索文档</span><kbd>Ctrl K</kbd></button><a class="github" href="https://github.com/xing-shuyin/pi-web-ui">GitHub ↗</a><button class="menu-toggle" aria-label="展开导航" aria-expanded="false">☰</button></div></header><div class="layout"><aside class="sidebar"><div class="sidebar-top"><a href="#home">文档首页</a><span>稳定版</span></div>${groups
  .map(
    (g) =>
      `<section><h3>${g}</h3>${topics
        .filter((t) => t.group === g)
        .map(
          (t) =>
            `<a href="#${t.id}" data-doc="${t.id}"><span class="nav-icon">${t.icon}</span>${t.title}${t.id === "quickstart" ? '<span class="tiny">入门</span>' : ""}</a>`,
        )
        .join("")}</section>`,
  )
  .join(
    "",
  )}<a class="sidebar-foot" href="../../docs.html">查看现有完整文档 ↗</a></aside><main id="main"></main><aside class="toc"></aside></div><dialog class="search-dialog"><div class="search-input-wrap"><span>⌕</span><input id="search-input" type="search" placeholder="搜索指南、工作流、配置…" aria-label="搜索文档"/><button class="close-search" aria-label="关闭搜索">Esc</button></div><div class="search-results"></div><div class="search-footer">搜索范围：此原型的 8 篇示例文档 <span>Enter 打开 · Esc 关闭</span></div></dialog><div class="toast" role="status"></div>`;
function home() {
  const cards = topics
    .slice(0, 6)
    .map(
      (t, i) =>
        `<a class="topic-card" href="#${t.id}"><span class="card-icon">${t.icon}</span><span class="card-index">0${i + 1}</span><h3>${t.title}</h3><p>${t.desc}</p><span class="card-bottom">${t.time}<b>→</b></span></a>`,
    )
    .join("");
  return `<div class="home-eyebrow">${config.tag}<span> / pi-web-ui</span></div><div class="home-hero"><h1>${config.title}</h1><p>${config.intro}</p><div class="hero-actions"><a class="primary" href="#quickstart">快速开始 <span>→</span></a><a href="#reference">查阅配置参考 ↗</a></div></div>${variant === "b" ? `<a class="learning-path" href="#quickstart"><span class="path-label">你的第一条学习路径</span><h2>从零完成第一个 AI 编程任务</h2><div class="path-steps"><span>01 安装工作台</span><i>→</i><span>02 连接模型</span><i>→</i><span>03 创建项目</span></div><b>开始学习 ↗</b></a>` : variant === "c" ? `<div class="quick-terminal"><div><span class="status-dot"></span> QUICK START <a href="#quickstart">完整安装指南 ↗</a></div>${code("npx pi-web-ui@latest", "shell")}<p>Node.js ≥ 22.19.0 <span>·</span> 本地运行 <span>·</span> 自选模型</p></div>` : `<div class="start-strip"><span class="strip-icon">↗</span><div><b>第一次使用 pi-web-ui？</b><p>从安装到发起第一个任务，跟着指南完成。</p></div><a href="#quickstart">开始使用 →</a></div>`}<div class="section-heading"><div><span class="eyebrow">EXPLORE THE DOCS</span><h2>${variant === "b" ? "按任务查找指南" : "探索文档"}</h2></div><span>从基础到进阶</span></div><div class="topic-grid">${cards}</div><div class="reference-row"><div><span class="eyebrow">REFERENCE</span><h3>需要一个准确的参数？</h3><p>直接查阅命令、环境变量与部署说明。</p></div><a href="#reference">CLI 与环境变量 ↗</a><a href="#deploy">部署与访问 ↗</a></div><footer><span>pi-web-ui 文档</span><span>开源 · 本地优先 · 为构建而生</span></footer>`;
}
function render() {
  current = location.hash.slice(1) || "home";
  const t = topics.find((t) => t.id === current);
  document
    .querySelectorAll("[data-doc]")
    .forEach((a) => a.classList.toggle("selected", a.dataset.doc === current));
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  const main = document.querySelector("main");
  main.className = t ? "article" : "home";
  main.innerHTML = t
    ? `<div class="breadcrumb"><a href="#home">文档</a><span>/</span>${t.group}</div><div class="article-eyebrow">${t.group}</div><h1>${t.title}</h1>${contents[t.id]()}<div class="article-end"><span>发现文档问题？</span><a href="https://github.com/xing-shuyin/pi-web-ui-site/issues">提交反馈 ↗</a></div><div class="page-nav">${topics.indexOf(t) > 0 ? `<a href="#${topics[topics.indexOf(t) - 1].id}"><small>上一篇</small>← ${topics[topics.indexOf(t) - 1].title}</a>` : '<a href="#home"><small>返回</small>← 文档首页</a>'}${topics.indexOf(t) < topics.length - 1 ? `<a href="#${topics[topics.indexOf(t) + 1].id}"><small>下一篇</small>${topics[topics.indexOf(t) + 1].title} →</a>` : ""}</div>`
    : home();
  document.querySelector(".toc").innerHTML = t
    ? `<span class="toc-label">本页内容</span>${[...main.querySelectorAll("h2[id]")].map((h) => `<a href="#${h.id}" data-anchor="${h.id}">${h.textContent.replace(/^\d\. /, "")}</a>`).join("")}<div class="toc-help"><b>需要帮助？</b><p>在社区反馈你的问题。</p><a href="https://github.com/xing-shuyin/pi-web-ui/issues">GitHub Issues ↗</a></div>`
    : `<span class="toc-label">选择你的起点</span><a href="#quickstart">我是第一次使用</a><a href="#modes">我想优化工作流</a><a href="#reference">我要查配置参数</a><div class="toc-help"><b>原型预览</b><p>展示信息架构与阅读交互，包含 8 篇示例内容。</p></div>`;
  document.title = `${t ? t.title : config.name} · pi-web-ui 文档方案 ${variant.toUpperCase()}`;
}
window.addEventListener("hashchange", () => {
  if (document.getElementById(location.hash.slice(1))) {
    return;
  }
  render();
  window.scrollTo(0, 0);
});
function results(q = "") {
  const found = topics.filter((t) =>
    (t.title + t.desc + t.group + contents[t.id]().replace(/<[^>]*>/g, ""))
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  document.querySelector(".search-results").innerHTML = found.length
    ? found
        .map(
          (t) =>
            `<a href="#${t.id}" class="search-result"><span>${t.group}</span><b>${t.title} <i>↵</i></b><p>${t.desc}</p></a>`,
        )
        .join("")
    : '<div class="empty">没有找到相关文档。试试「模型」「部署」或「终端」。</div>';
}
function openSearch() {
  results();
  document.querySelector("dialog").showModal();
  document.querySelector("#search-input").value = "";
  document.querySelector("#search-input").focus();
}
document.addEventListener("click", async (e) => {
  if (e.target.closest(".search-trigger")) openSearch();
  if (
    e.target.closest(".close-search") ||
    e.target === document.querySelector("dialog")
  )
    document.querySelector("dialog").close();
  if (e.target.closest(".search-result"))
    document.querySelector("dialog").close();
  const tab = e.target.closest("[data-platform]");
  if (tab) {
    platform = tab.dataset.platform;
    render();
  }
  const anchor = e.target.closest("[data-anchor]");
  if (anchor) {
    e.preventDefault();
    document
      .getElementById(anchor.dataset.anchor)
      .scrollIntoView({ behavior: "smooth" });
  }
  const copy = e.target.closest(".copy");
  if (copy) {
    const text = copy.closest(".code").querySelector("code").textContent;
    try {
      await navigator.clipboard.writeText(text);
      copy.textContent = "已复制";
      setTimeout(() => {
        copy.textContent = "复制";
      }, 1500);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(copy.closest(".code").querySelector("code"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      const toast = document.querySelector(".toast");
      toast.textContent = "命令已选中，请按 Ctrl/Cmd+C 复制";
      toast.classList.add("visible");
      setTimeout(() => toast.classList.remove("visible"), 2500);
    }
  }
  if (e.target.closest(".menu-toggle")) {
    const open = document.querySelector(".sidebar").classList.toggle("open");
    document
      .querySelector(".menu-toggle")
      .setAttribute("aria-expanded", String(open));
  }
});
document
  .querySelector("#search-input")
  .addEventListener("input", (e) => results(e.target.value));
document.querySelector("#search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const a = document.querySelector(".search-result");
    if (a) a.click();
  }
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (!document.querySelector("dialog").open) openSearch();
  }
});
render();
