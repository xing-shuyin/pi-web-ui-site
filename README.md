# 🌐 pi-web-ui Official Website & Documentation Portal (`pi-web-ui-site`)

本项目是 [pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) 的官网与使用文档。文档采用独立的三栏阅读界面，保留 20 篇双语指南，并按「开始使用、使用指南、进阶工作流、扩展与定制、参考」组织。支持 GitHub Pages 静态托管，无需运行服务端构建。

## ✨ 网站结构与功能亮点

| 页面 / 模块                    | 文件路径                                                  | 核心内容                                                                                                                                                                                                                                   |
| :----------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🏠 官方产品宣传主页**        | `index.html`                                              | Hero 交互式一行安装切换器、5 标签真实工作台交互预览（含高清放大灯箱）、6 大核心研发支柱、4 大智能体工程模式（标准 / 目标模式 2.0 / 计划模式 / 审查者模式）可视化推演、39 款插件市场实时筛选与一键复制安装命令、35 套内置主题实时演播室预览 |
| **📖 使用文档**                | `docs.html`                                               | 三栏阅读、首页入门路径、五组导航与 20 篇双语指南，覆盖安装与模型、会话、SSH、文件、终端、Git、任务模式、插件与部署。                                                                                                                       |
| **🔍 全局即时搜索 (`Ctrl+K`)** | 官网 `app.js`；文档 `docs.js`                             | 按 `Ctrl/Cmd + K` 搜索文档正文和共享参考表；文档支持方向键选择与 Enter 打开结果                                                                                                                                                            |
| **🖼️ 高清截图与灯箱放大**      | 官网 `styles.css` + `app.js`；文档 `docs.css` + `docs.js` | 嵌入全景工作台、模型设置向导、流式对话、内置终端、Git SCM、运行轨迹等真实工作台高清截图，支持点击即开灯箱（Lightbox）平滑缩放与 ESC 快速退出                                                                                               |
| **🎨 多主题 & 中英双语**       | `styles.css` + `app.js`                                   | 官网保留原有视觉主题；文档默认浅色，支持独立深色主题和简体中文 / English 切换                                                                                                                                                              |
| **🔄 主仓库数据自动同步**      | `scripts/sync-data.mjs`                                   | 一键从 `../pi-web-ui` 同步最新版本号、`plugins/catalog.json`（39 款插件）与 `themes/*.css`（35 套主题色板）                                                                                                                                |

## 文档架构与维护

- `docs.html`：语义化页面骨架、移动导航、搜索与图片预览弹窗。
- `docs.css`：文档独立样式，默认浅色，可切换深色；手机端使用折叠导航。
- `docs.js`：三栏导航、首页学习路径、全文搜索、正文目录、上下篇、命令复制与双语切换。
- `scripts/docs-content/ch01.mjs` 至 `ch20.mjs`：双语正文事实源。修改后运行 `npm run build:docs` 生成 `docs-data.js`，不要直接编辑生成文件。
- `scripts/build-docs-data.mjs`：五组导航的事实源。章节 ID 和正文标题 ID 保持稳定，兼容现有 `docs.html#章节` 与段落链接。
- `site-data.js`：CLI、快捷键、工具、插件与主题表的共享数据源，正文渲染时按需填充，搜索也覆盖这些表格。

文档首页提供安装、首个任务、结果检查的入门路径。每篇指南只渲染对应正文，保留浏览器前进后退及深链接。设计探索稿位于 `proposals/docs-redesign/`，不作为正式文档内容源。

内容核验依据、适用范围与自动检查说明见 [DOCS-REVIEW.md](./DOCS-REVIEW.md)。正文和参考数据的准确性以当前产品实现为准；结构检查不替代各平台和外部服务的实际验证。

## 🚀 本地预览与文档构建

```bash
# 1. 启动本地预览服务 (默认 http://127.0.0.1:4173)
npm run dev

# 2. 编译并生成 20 章文档数据
npm run build:docs

# 3. 当 ../pi-web-ui 更新了版本、插件或主题时，一键同步数据
npm run sync

# 4. 运行站点完整性、章节与依赖校验
npm run check
```

## 📦 使用 GitHub Pages 部署上线

本项目已配置好 `.nojekyll` 与 `.github/workflows/deploy-pages.yml`，支持以下任意一种 GitHub Pages 部署方式：

### 方式一：通过 GitHub Actions 自动部署（推荐）

1. 在 GitHub 上创建一个公开仓库（如 `pi-web-ui-site` 或直接在自定义仓库下）；
2. 将本目录推送至 GitHub：
   ```bash
   git init
   git add -A
   git commit -m "feat: initial pi-web-ui official website and documentation portal"
   git branch -M main
   git remote add origin git@github.com:<your-username>/pi-web-ui-site.git
   git push -u origin main
   ```
3. 打开 GitHub 仓库的 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**；
4. 每次推送到 `main` 分支，GitHub Actions 都会自动运行 `npm run check` 校验并发布到 `https://<your-username>.github.io/pi-web-ui-site/`！

### 方式二：Branch 直出模式（免 Actions）

由于本项目采用原生 ES Modules 构建，根目录直接包含 `index.html`、`docs.html` 与 `.nojekyll`，你也可以在 **Settings → Pages → Source** 中直接选择 **Deploy from a branch (`main` / `/(root)`)**，零等待即刻上线。
