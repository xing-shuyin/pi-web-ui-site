import { DOCS_CHAPTERS, DOCS_GROUPS } from "./docs-data.js";
import { SITE_DATA } from "./site-data.js";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escape = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const readPreference = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const savePreference = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Browsing remains available without storage. */
  }
};
let lang = readPreference("pi-site-lang") === "en" ? "en" : "zh";
let theme = readPreference("pi-docs-theme") || "light";
let current = null;
let observer;
let searchIndex;
let toastTimer;
const t = (zh, en) => (lang === "en" ? en : zh);
const text = (obj, key) =>
  key === "content"
    ? obj[lang === "en" ? "contentEn" : "contentZh"]
    : lang === "en"
      ? obj[key + "En"] || obj[key]
      : obj[key];
const labels = {
  docs: ["使用文档", "Documentation"],
  workflows: ["工作流", "Workflows"],
  reference: ["参考", "Reference"],
  search: ["搜索文档", "Search docs"],
  searchHint: [
    "搜索全部文档、配置参数和工具",
    "Search guides, configuration and tools",
  ],
};
const titles = {
  overview: ["快速开始", "Quick start"],
  installation: ["安装与模型配置", "Installation & models"],
  "cli-and-env": ["CLI 与环境变量", "CLI & environment"],
  "chat-and-sessions": ["对话与会话", "Chat & sessions"],
  "remote-ssh-projects": ["SSH 远程项目", "Remote SSH projects"],
  "file-tree-and-transfer": ["文件管理与传输", "Files & transfers"],
  "attachments-and-vision": ["附件与视觉", "Attachments & vision"],
  "terminal-and-bash": ["终端与命令", "Terminal & commands"],
  "git-scm-and-ai-commit": ["Git 与提交", "Git & commits"],
  "commands-and-shortcuts": ["命令与快捷键", "Commands & shortcuts"],
  "subagents-and-delegation": ["子代理与委派", "Subagents & delegation"],
  "modes-guide": ["计划、目标与审查", "Plan, goals & review"],
  "tools-and-markers": ["工具与内联标记", "Tools & inline markers"],
  "mcp-and-browser": ["MCP 与浏览器", "MCP & browser"],
  "bg-tasks-and-scheduler": ["后台任务与调度", "Background tasks"],
  "approval-and-security": ["审批与安全", "Approval & security"],
  "dual-engines-and-presets": ["引擎与预设", "Engines & presets"],
  "ui-customization-and-export": ["界面与导出", "Interface & export"],
  "plugins-marketplace": ["插件市场", "Plugin marketplace"],
  "plugin-sdk-and-deployment": ["插件开发与部署", "Plugin SDK & deployment"],
};
const title = (id) => (titles[id] ? t(...titles[id]) : id);
const ordered = () =>
  DOCS_GROUPS.flatMap((g) => g.items).map((id) =>
    DOCS_CHAPTERS.find((c) => c.id === id),
  );
const link = (id, label) =>
  `<a href="#${escape(id)}">${label || escape(title(id))}</a>`;

function applyPreferences() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.theme = theme;
  $$("[data-label]").forEach((el) => {
    el.textContent = t(...labels[el.dataset.label]);
  });
  $("#language-toggle").textContent = lang === "zh" ? "EN" : "中文";
  $("#theme-toggle").setAttribute(
    "aria-label",
    t(
      "切换为" + (theme === "dark" ? "浅色" : "深色") + "主题",
      "Switch to " + (theme === "dark" ? "light" : "dark") + " theme",
    ),
  );
  $("#search-input").placeholder = t(
    "搜索文档、命令、配置…",
    "Search docs, commands, configuration…",
  );
  $(".search-trigger kbd").textContent = /Mac|iPhone|iPad/.test(
    navigator.platform,
  )
    ? "⌘ K"
    : "Ctrl K";
}
function sidebar() {
  $("#sidebar").innerHTML =
    `<div class="sidebar-top"><a href="./docs.html" ${!current ? 'aria-current="page"' : ""}>${t("文档首页", "Documentation home")}</a><span>${t("指南", "GUIDES")}</span></div>${DOCS_GROUPS.map((g) => `<section><h2>${escape(text(g, "title"))}</h2>${g.items.map((id) => `<a href="#${id}" ${current?.id === id ? 'aria-current="page"' : ""}><span class="nav-dot" aria-hidden="true"></span><span>${escape(title(id))}</span>${id === "overview" ? `<small>${t("入门", "START")}</small>` : ""}</a>`).join("")}</section>`).join("")}<div class="sidebar-foot"><a href="./index.html">← ${t("返回官网", "Back to website")}</a><a href="https://github.com/xing-shuyin/pi-web-ui/issues" target="_blank" rel="noreferrer">${t("社区与帮助", "Community & help")} ↗</a></div>`;
}
function home() {
  const cards = [
    [
      "chat-and-sessions",
      "▤",
      t(
        "组织会话、引用上下文，持续迭代任务。",
        "Organize sessions, share context and iterate.",
      ),
    ],
    [
      "terminal-and-bash",
      "⌘",
      t(
        "在工作台运行命令，检查执行结果。",
        "Run commands and inspect their results.",
      ),
    ],
    [
      "git-scm-and-ai-commit",
      "⑂",
      t(
        "查看代码差异，管理暂存与提交。",
        "Review diffs, stage changes and commit.",
      ),
    ],
    [
      "modes-guide",
      "⤴",
      t(
        "为复杂任务选择计划、执行和审查方式。",
        "Choose how to plan, execute and review work.",
      ),
    ],
    [
      "plugins-marketplace",
      "⊞",
      t(
        "发现插件，按需扩展你的工作台。",
        "Discover plugins to extend your workspace.",
      ),
    ],
    [
      "remote-ssh-projects",
      "◎",
      t(
        "连接远程主机，在项目现场开展工作。",
        "Connect to a host and work on remote projects.",
      ),
    ],
  ];
  return `<div class="home-eyebrow">DOCUMENTATION <span>/ pi-web-ui</span></div><section class="home-hero"><h1>${t("从第一步，到每一步。", "From your first step, onward.")}</h1><p>${t("安装、连接模型、开始构建。找到当前需要的答案，按自己的节奏深入。", "Install, connect a model and start building. Find the answer you need, and explore at your own pace.")}</p><div class="hero-actions"><a class="primary" href="#overview">${t("快速开始", "Quick start")} <span>→</span></a><a href="#cli-and-env">${t("查阅配置参考", "Configuration reference")} ↗</a></div></section><section class="learning-path"><div class="path-heading"><div><span class="eyebrow">YOUR FIRST PROJECT</span><h2>${t("完成你的第一个 AI 编程任务", "Complete your first AI coding task")}</h2></div><span class="path-caption">${t("从这里开始", "START HERE")}</span></div><div class="path-steps">${[
    [
      "installation",
      "01",
      t("安装并连接模型", "Install & connect a model"),
      t("准备好你的工作台", "Set up your workspace"),
    ],
    [
      "chat-and-sessions",
      "02",
      t("发起第一个任务", "Start your first task"),
      t("描述目标，提供上下文", "Describe the goal and context"),
    ],
    [
      "git-scm-and-ai-commit",
      "03",
      t("检查并迭代结果", "Review & iterate"),
      t("查看变更，验证效果", "Inspect changes and verify"),
    ],
  ]
    .map(
      ([id, n, name, desc]) =>
        `<a href="#${id}"><span class="step-number">${n}</span><div><b>${name} <span>→</span></b><p>${desc}</p></div></a>`,
    )
    .join(
      "",
    )}</div></section><div class="section-heading"><div><span class="eyebrow">EXPLORE THE DOCS</span><h2>${t("按任务查找指南", "Find a guide for your task")}</h2></div><span>${t("从日常使用到进阶工作流", "Everyday use to advanced workflows")}</span></div><div class="topic-grid">${cards.map(([id, icon, desc]) => `<a class="topic-card" href="#${id}"><span class="card-icon" aria-hidden="true">${icon}</span><h3>${title(id)}</h3><p>${desc}</p><span class="card-bottom">${t("阅读指南", "Read guide")} <b>→</b></span></a>`).join("")}</div><section class="route-grid"><div><span class="eyebrow">MAKE IT YOURS</span><h2>${t("让工作台适合你", "Make the workspace yours")}</h2><p>${t("调整界面，连接工具，保存可复用的配置。", "Customize the interface, connect tools and reuse your setup.")}</p>${link("ui-customization-and-export")}${link("mcp-and-browser")}${link("dual-engines-and-presets")}</div><div><span class="eyebrow">REFERENCE</span><h2>${t("需要一个准确的参数？", "Need an exact parameter?")}</h2><p>${t("直接查阅命令、工具和生产部署说明。", "Look up commands, tools and production deployment.")}</p>${link("cli-and-env")}${link("tools-and-markers")}${link("plugin-sdk-and-deployment")}</div></section><footer><span>pi-web-ui ${t("文档", "documentation")}</span><span>${t("开源 · 本地优先 · 为构建而生", "Open source · Local first · Built for building")}</span></footer>`;
}

// Dynamic catalogs use the same generated source as the product website.
function dynamicTable(type) {
  let headers, rows;
  switch (type) {
    case "cli-flags":
      headers = [
        t("CLI 参数", "CLI flag"),
        t("环境变量", "Environment"),
        t("默认值", "Default"),
        t("说明", "Description"),
      ];
      rows = SITE_DATA.cliFlags.map((r) => [
        r.flag,
        r.env,
        r.def,
        text(r, "desc"),
      ]);
      break;
    case "slash-commands":
      headers = [t("命令", "Command"), t("说明", "Description")];
      rows = SITE_DATA.slashCommands.map((r) => [r.cmd, text(r, "desc")]);
      break;
    case "shortcuts":
      headers = [t("快捷键", "Shortcut"), t("操作", "Action")];
      rows = SITE_DATA.shortcuts.map((r) => [r.key, text(r, "action")]);
      break;
    case "tools-catalog":
      headers = [
        t("工具", "Tool"),
        t("分组", "Group"),
        t("默认", "Default"),
        t("引擎", "Engines"),
        t("说明", "Description"),
      ];
      rows = SITE_DATA.toolsCatalog.map((r) => [
        r.name,
        r.group,
        r.defaultOn ? "ON" : "Opt-in",
        r.engines.join(" / "),
        text(r, "desc"),
      ]);
      break;
    case "plugins-catalog":
      headers = [
        t("插件", "Plugin"),
        "ID",
        t("说明", "Description"),
        t("安装命令", "Install command"),
      ];
      rows = SITE_DATA.plugins.map((r) => [
        text(r, "name"),
        r.id,
        text(r, "description"),
        r.installCmd,
      ]);
      break;
    case "themes-catalog":
      headers = [
        t("主题", "Theme"),
        "ID",
        t("明暗", "Scheme"),
        t("强调色", "Accent"),
      ];
      rows = SITE_DATA.themes.map((r) => [
        text(r, "name"),
        r.id,
        r.scheme,
        r.accent,
      ]);
      break;
    default:
      return "";
  }
  return `<div class="doc-table-wrap" tabindex="0" role="region" aria-label="${escape(headers[0])}"><table><thead><tr>${headers.map((h) => `<th scope="col">${escape(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td>${i === 0 ? `<code>${escape(cell)}</code>` : escape(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function article(ch) {
  const group = DOCS_GROUPS.find((g) => g.items.includes(ch.id));
  const list = ordered();
  const i = list.findIndex((c) => c.id === ch.id);
  return `<div class="breadcrumb"><a href="./docs.html">${t("文档", "Docs")}</a><span>/</span><span>${escape(text(group, "title"))}</span></div><div class="article-eyebrow">${escape(text(group, "title"))}</div><h1>${escape(title(ch.id))}</h1><p class="lead">${escape(text(ch, "summary"))}</p><div class="article-meta"><span>${t("使用指南", "Product guide")}</span><a href="https://github.com/xing-shuyin/pi-web-ui-site/blob/main/scripts/docs-content/ch${String(DOCS_CHAPTERS.indexOf(ch) + 1).padStart(2, "0")}.mjs" target="_blank" rel="noreferrer">${t("编辑此页", "Edit this page")} ↗</a></div><div class="doc-body">${text(ch, "content")}</div><div class="article-end"><span>${t("文档有遗漏或问题？", "Found something missing?")}</span><a href="https://github.com/xing-shuyin/pi-web-ui-site/issues" target="_blank" rel="noreferrer">${t("反馈文档问题", "Report a docs issue")} ↗</a></div><nav class="page-nav" aria-label="${t("上下篇", "Previous and next")}">${i > 0 ? `<a href="#${list[i - 1].id}"><small>← ${t("上一篇", "Previous")}</small><b>${escape(title(list[i - 1].id))}</b></a>` : `<a href="./docs.html"><small>← ${t("返回", "Back")}</small><b>${t("文档首页", "Documentation home")}</b></a>`}${i < list.length - 1 ? `<a href="#${list[i + 1].id}"><small>${t("下一篇", "Next")} →</small><b>${escape(title(list[i + 1].id))}</b></a>` : ""}</nav>`;
}
function renderToc() {
  observer?.disconnect();
  const headings = $$(".doc-body h2[id]");
  $(".toc").innerHTML = current
    ? `<b class="toc-label">${t("本页内容", "On this page")}</b><nav>${headings.map((h) => `<a href="#${encodeURIComponent(h.id)}" data-heading="${escape(h.id)}">${escape(h.textContent.replace(/^\d+[.、]\s*/, ""))}</a>`).join("")}</nav><div class="toc-help"><b>${t("需要帮助？", "Need help?")}</b><p>${t("向社区反馈问题或建议。", "Share questions and feedback with the community.")}</p><a href="https://github.com/xing-shuyin/pi-web-ui/issues" target="_blank" rel="noreferrer">GitHub Issues ↗</a></div>`
    : `<b class="toc-label">${t("选择你的起点", "Choose your starting point")}</b><nav>${link("overview", t("我是第一次使用", "I am getting started"))}${link("modes-guide", t("我想优化工作流", "I want better workflows"))}${link("cli-and-env", t("我要查配置参数", "I need configuration"))}</nav><div class="toc-help"><b>${t("完整文档", "Complete documentation")}</b><p>${t("20 篇指南，涵盖日常操作、工具扩展和部署。", "20 guides covering everyday work, extensions and deployment.")}</p></div>`;
  if (headings.length) {
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0])
          $$("[data-heading]").forEach((a) =>
            a.classList.toggle(
              "selected",
              a.dataset.heading === visible[0].target.id,
            ),
          );
      },
      { rootMargin: "-85px 0px -65% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
  }
}
function closeMenu() {
  $("#sidebar").classList.remove("open");
  $("#menu-toggle").setAttribute("aria-expanded", "false");
  $(".nav-backdrop").hidden = true;
  document.body.classList.remove("menu-open");
}
function route({ preserveScroll = false } = {}) {
  let hash;
  try {
    hash = decodeURIComponent(location.hash.slice(1));
  } catch {
    hash = "";
  }
  const chapter =
    DOCS_CHAPTERS.find((c) => c.id === hash) ||
    DOCS_CHAPTERS.find(
      (c) =>
        c.contentZh.includes(`id="${hash}"`) ||
        c.contentEn.includes(`id="${hash}"`),
    );
  const heading = chapter && hash !== chapter.id ? hash : null;
  const chapterChanged = current?.id !== chapter?.id;
  if (!current || chapterChanged || !preserveScroll) {
    current = chapter || null;
    $("#main").className = current ? "article" : "home";
    $("#main").innerHTML = current ? article(current) : home();
    $$("[data-dynamic-table]", $("#main")).forEach((el) => {
      el.innerHTML = dynamicTable(el.dataset.dynamicTable);
    });
    $$(".doc-body pre").forEach((pre) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = t("复制", "Copy");
      pre.append(button);
    });
    $$(".doc-body img").forEach((img) => {
      img.loading = "lazy";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "image-zoom";
      button.setAttribute(
        "aria-label",
        t("放大图片：", "Enlarge image: ") + img.alt,
      );
      img.replaceWith(button);
      button.append(img);
    });
    // Old table wrappers also need keyboard scrolling.
    $$(".doc-table-wrap").forEach((el) => {
      el.tabIndex = 0;
      el.setAttribute("role", "region");
      if (!el.hasAttribute("aria-label"))
        el.setAttribute(
          "aria-label",
          t("参考表格，可横向滚动", "Reference table, scroll horizontally"),
        );
    });
    sidebar();
    renderToc();
  }
  document.title = current
    ? `${title(current.id)} · pi-web-ui ${t("文档", "Docs")}`
    : t("使用文档 · pi-web-ui", "Documentation · pi-web-ui");
  closeMenu();
  if (heading) {
    requestAnimationFrame(() => {
      // A few older media anchors differ between languages. Find the matching
      // shared section rather than leaving a cross-language deep link at the top.
      let target = document.getElementById(heading);
      if (!target) {
        const source = new DOMParser().parseFromString(
          lang === "en" ? chapter.contentZh : chapter.contentEn,
          "text/html",
        );
        const original = source.getElementById(heading);
        const section = original?.closest("section")?.querySelector("h2[id]");
        target = section ? document.getElementById(section.id) : null;
      }
      target?.scrollIntoView();
    });
  } else if (!preserveScroll || chapterChanged) {
    window.scrollTo(0, 0);
  }
}
function plain(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent.replace(/\s+/g, " ").trim();
}
function getSearchIndex() {
  if (!searchIndex) {
    searchIndex = DOCS_CHAPTERS.map((ch) => {
      const doc = new DOMParser().parseFromString(
        text(ch, "content"),
        "text/html",
      );
      const sections = [...doc.querySelectorAll("h2[id]")].map((h) => ({
        id: h.id,
        title: h.textContent,
      }));
      const catalogs = [...doc.querySelectorAll("[data-dynamic-table]")]
        .map((el) => plain(dynamicTable(el.dataset.dynamicTable)))
        .join(" ");
      return {
        id: ch.id,
        title: title(ch.id),
        summary: text(ch, "summary"),
        body: doc.body.textContent.replace(/\s+/g, " ") + " " + catalogs,
        sections,
      };
    });
  }
  return searchIndex;
}
function search() {
  const query = $("#search-input").value.trim().toLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const results = getSearchIndex()
    .map((ch) => ({
      ...ch,
      score: terms.reduce(
        (n, q) =>
          n +
          (ch.title.toLowerCase().includes(q)
            ? 10
            : ch.summary.toLowerCase().includes(q)
              ? 4
              : ch.body.toLowerCase().includes(q)
                ? 1
                : 0),
        0,
      ),
    }))
    .filter(
      (ch) =>
        !terms.length ||
        terms.every((q) =>
          (ch.title + " " + ch.summary + " " + ch.body)
            .toLowerCase()
            .includes(q),
        ),
    )
    .sort((a, b) => b.score - a.score);
  $("#search-results").innerHTML = results.length
    ? `<div class="search-count">${t("找到", "Found")} ${results.length} ${t("篇文档", "documents")}</div>${results
        .map((ch, i) => {
          const section = terms.length
            ? ch.sections.find((s) =>
                terms.some((q) => s.title.toLowerCase().includes(q)),
              )
            : null;
          const pos = terms.length
            ? ch.body.toLowerCase().indexOf(terms[0])
            : -1;
          const excerpt =
            pos >= 0
              ? ch.body.slice(Math.max(0, pos - 35), pos + 110)
              : ch.summary;
          return `<a class="search-result ${i === 0 ? "selected" : ""}" href="#${escape(section?.id || ch.id)}"><b>${escape(ch.title)}<span>↵</span></b>${section ? `<small>${escape(section.title)}</small>` : ""}<p>${escape(excerpt)}</p></a>`;
        })
        .join("")}`
    : `<div class="empty">${t("没有找到相关文档。试试「模型」「部署」或「终端」。", "No results. Try “model”, “deploy” or “terminal”.")}</div>`;
}
function openSearch() {
  $("#search-input").value = "";
  search();
  $("#search-dialog").showModal();
  $("#search-input").focus();
}
function toast(message) {
  clearTimeout(toastTimer);
  $(".toast").textContent = message;
  $(".toast").classList.add("visible");
  toastTimer = setTimeout(() => $(".toast").classList.remove("visible"), 2400);
}
async function copy(button) {
  const pre = button.closest("pre");
  const clone = pre.cloneNode(true);
  clone.querySelector(".code-copy")?.remove();
  const value = pre.querySelector("code")?.textContent || clone.textContent;
  try {
    await navigator.clipboard.writeText(value);
    button.textContent = t("已复制", "Copied");
    setTimeout(() => {
      button.textContent = t("复制", "Copy");
    }, 1500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(pre.querySelector("code") || pre);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    toast(
      t(
        "命令已选中，请按 Ctrl / ⌘ C 复制",
        "Text selected. Press Ctrl / ⌘ C to copy.",
      ),
    );
  }
}
document.addEventListener("click", (e) => {
  const close = e.target.closest("[data-close]");
  if (close) document.getElementById(close.dataset.close).close();
  if (e.target === $("#search-dialog") || e.target === $("#image-dialog"))
    e.target.close();
  if (e.target.closest(".search-trigger")) openSearch();
  if (e.target.closest(".search-result")) {
    $("#search-dialog").close();
    if (e.target.closest("a").hash === location.hash) route();
  }
  const copyButton = e.target.closest(".code-copy");
  if (copyButton) void copy(copyButton);
  const image = e.target.closest(".image-zoom");
  if (image) {
    const source = $("img", image);
    $("#image-dialog img").src = source.src;
    $("#image-dialog img").alt = source.alt;
    $("#image-dialog p").textContent =
      image.closest("figure")?.querySelector("figcaption")?.textContent ||
      source.alt;
    $("#image-dialog").showModal();
  }
  if (e.target.closest("#language-toggle")) {
    lang = lang === "zh" ? "en" : "zh";
    savePreference("pi-site-lang", lang);
    searchIndex = null;
    applyPreferences();
    route();
  }
  if (e.target.closest("#theme-toggle")) {
    theme = theme === "dark" ? "light" : "dark";
    savePreference("pi-docs-theme", theme);
    applyPreferences();
  }
  if (e.target.closest("#menu-toggle")) {
    const open = !$("#sidebar").classList.contains("open");
    $("#sidebar").classList.toggle("open", open);
    $("#menu-toggle").setAttribute("aria-expanded", String(open));
    $(".nav-backdrop").hidden = !open;
    document.body.classList.toggle("menu-open", open);
  }
  if (e.target.closest(".nav-backdrop")) closeMenu();
  // Let a repeated chapter link return to its beginning as well.
  const same = e.target.closest('a[href^="#"]');
  if (same && same.hash === location.hash) {
    closeMenu();
    if (DOCS_CHAPTERS.some((c) => "#" + c.id === same.hash))
      window.scrollTo({ top: 0, behavior: "smooth" });
    else
      document
        .getElementById(decodeURIComponent(same.hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth" });
  }
});
$("#search-input").addEventListener("input", search);
$("#search-dialog").addEventListener("keydown", (e) => {
  const items = $$(".search-result");
  let i = items.findIndex((a) => a.classList.contains("selected"));
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    i = (i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items.forEach((a, j) => a.classList.toggle("selected", j === i));
    items[i]?.scrollIntoView({ block: "nearest" });
  }
  if (e.key === "Enter" && e.target === $("#search-input")) {
    e.preventDefault();
    items[i < 0 ? 0 : i]?.click();
  }
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (!$("#search-dialog").open) openSearch();
  }
  if (e.key === "Escape") closeMenu();
});
window.addEventListener("hashchange", () => route({ preserveScroll: true }));
window.addEventListener("popstate", () => {
  if (!location.hash) route();
});
applyPreferences();
route();
