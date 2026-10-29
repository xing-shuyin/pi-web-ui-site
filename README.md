# pi-web-ui 官网与文档

[在线官网](https://xing-shuyin.github.io/pi-web-ui-site/) · [使用文档](https://xing-shuyin.github.io/pi-web-ui-site/docs.html) · [主项目](https://github.com/xing-shuyin/pi-web-ui)

本仓库维护 pi-web-ui 的产品网站和使用文档，采用原生 HTML、CSS 与 JavaScript，可直接部署到 GitHub Pages。**要安装和运行 pi-web-ui，请阅读[安装指南](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#installation)，而不是运行本仓库的预览脚本。**

## 浏览文档

- [安装方式](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#installation)：npm/npx、桌面、便携、Termux、源码与 Docker。
- [安装并启动后台服务](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#service-install-start)：平台差异、状态验证和日常启停。
- [常用启动参数](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#cli-options)：项目、端口、数据目录、引擎与环境变量。
- [本机 /setup](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#setup-page)：访问口令、监听地址、白名单、保存和重启。
- [工作流](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#modes-guide)、[插件](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#plugins-marketplace)与[部署](https://xing-shuyin.github.io/pi-web-ui-site/docs.html#plugin-sdk-and-deployment)。

文档包含 20 篇中英文指南，按「开始使用、使用指南、进阶工作流、扩展与定制、参考」组织。三栏阅读界面支持手机导航、全文搜索、正文目录、命令复制、截图放大及独立深浅主题。

## 本地开发

需要可运行项目脚本的 Node.js 环境。本静态站不依赖前端框架，也不需要打包后才能部署。

```bash
git clone https://github.com/xing-shuyin/pi-web-ui-site.git
cd pi-web-ui-site
npm run dev
```

浏览 `http://127.0.0.1:4173`；文档入口为 `/docs.html`。预览服务仅监听本机。

| 命令                 | 作用                                             |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | 启动本地静态预览                                 |
| `npm run build:docs` | 从章节源文件生成 `docs-data.js`                  |
| `npm run sync`       | 从同级 `../pi-web-ui` 同步产品元数据、目录与截图 |
| `npm run check`      | 检查脚本语法、资源、导航、双语锚点和内部链接     |

## 文件与事实源

| 文件                                       | 维护职责                       |
| ------------------------------------------ | ------------------------------ |
| `index.html`、`app.js`、`styles.css`       | 产品官网首页与交互             |
| `docs.html`、`docs.js`、`docs.css`         | 文档页面骨架、路由、搜索和样式 |
| `scripts/docs-content/ch01.mjs`—`ch20.mjs` | 中英文正文，修改内容时编辑这里 |
| `scripts/build-docs-data.mjs`              | 五组导航与文档数据生成器       |
| `scripts/sync-data.mjs`                    | 共享产品数据的生成与映射逻辑   |
| `docs-data.js`、`site-data.js`             | 已提交的生成结果，不直接修改   |
| `assets/`                                  | 截图、图标和演示视频           |
| `proposals/docs-redesign/`                 | 设计探索与预览，不是正文事实源 |

正文中的 CLI、工具与快捷键表使用共享数据渲染。修改正文后运行 `npm run build:docs`；修改目录数据后运行 `npm run sync`。生成结果也要提交，托管平台不会代替你生成。

## 内容修改与验证

1. 对照主项目当前代码核实命令、默认路径、权限和能力，不能仅按功能名推测。
2. 同步修改中文与英文，保留章节 ID 和已有段落锚点；需要篇幅的安装说明应完整给出前置条件、命令和验证步骤。
3. 生成相关数据，用 Prettier 格式化修改文件，再运行 `npm run check`。
4. 预览涉及的页面，检查手机布局、内部链接和可复制命令。

检查脚本以当前 Git HEAD 为兼容性基线，验证旧章节和锚点未丢失。它不能自动判断产品行为是否正确；核验依据与边界见 [DOCS-REVIEW.md](./DOCS-REVIEW.md)。

可选浏览器回归：本地预览设为 4198 端口，启动带 CDP 9333 端口的 Chrome，并安装 Python `websocket-client` 后执行：

```bash
python scripts/check-docs-browser.py
```

脚本使用自己的临时标签页，检查双语阅读、搜索、目录、主题、图片预览及桌面/手机布局。它依赖本机工具，不是部署前必需的运行时组件。

## 部署到 GitHub Pages

仓库的 [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml) 在推送到 `main` 时运行 `npm run check` 并部署静态文件。仓库 **Settings → Pages → Source** 应选择 **GitHub Actions**。

也可以选择分支根目录直接托管，但该方式不会自动执行上述校验。`.nojekyll` 用于关闭 Jekyll 处理。页面资源采用相对路径，文档章节使用 `docs.html#章节或段落ID` 深链接。

## 相关项目

- [pi-web-ui](https://github.com/xing-shuyin/pi-web-ui)：产品源码与问题反馈。
- [插件社区目录](https://github.com/xing-shuyin/pi-web-ui-plugins)。
- [设置预设社区](https://github.com/xing-shuyin/pi-web-ui-presets)。

站点包声明为 MIT；产品许可证见[主项目 LICENSE](https://github.com/xing-shuyin/pi-web-ui/blob/main/LICENSE)。
