# 🌐 pi-web-ui Official Website & Documentation Portal (`pi-web-ui-site`)

本项目是 [pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) 的官方产品宣传主页与 **20 章全景保姆级新手与进阶使用文档中心**，专为 **GitHub Pages** 托管设计（零构建步骤即可直接由 GitHub Pages 托管，同时内置 GitHub Actions 自动校验与部署流水线）。

## ✨ 网站结构与功能亮点

| 页面 / 模块 | 文件路径 | 核心内容 |
| :--- | :--- | :--- |
| **🏠 官方产品宣传主页** | `index.html` | Hero 交互式一行安装切换器、5 标签真实工作台交互预览（含高清放大灯箱）、6 大核心研发支柱、4 大智能体工程模式（标准 / 目标模式 2.0 / 计划模式 / 审查者模式）可视化推演、39 款插件市场实时筛选与一键复制安装命令、35 套内置主题实时演播室预览 |
| **📖 20 章全景新手文档中心** | `docs.html` | **以新手用户视角全面重构**的三栏式现代化文档中心：涵盖全景工作台导览、首次配置向导（DeepSeek/Claude/Ollama 模型接入）、CLI 与环境变量速查、流式对话与代码快照秒级回滚、SSH 远程主机免安装直连、拖拽上传文件与文件夹、在线 Office/PDF 预览与视觉桥、真 PTY 终端 AI 接管、Git 可视化 SCM 与一键 AI 提交说明、子代理并发与六段式任务书、目标模式 2.0 证据链审查、30+ 工具延迟加载与内联标记、MCP 市场与浏览器控制、后台长任务与调度器、三级审批与六大安全边界、双引擎与社区预设、33 插槽定制与长图海报导出、39 款插件盘点以及 Plugin SDK v2 生产部署。 |
| **🔍 全局即时搜索 (`Ctrl+K`)** | `app.js` | 在任意页面按下 `Ctrl/Cmd + K` 即可跨 20 章文档、39 款插件、30 个工具、CLI 参数与环境变量进行毫秒级全文检索 |
| **🖼️ 高清截图与灯箱放大** | `styles.css` + `app.js` | 嵌入全景工作台、模型设置向导、流式对话、内置终端、Git SCM、运行轨迹等真实工作台高清截图，支持点击即开灯箱（Lightbox）平滑缩放与 ESC 快速退出 |
| **🎨 多主题 & 中英双语** | `styles.css` + `app.js` | 网站自身支持 **暗夜深邃 / 纯净浅色 / 赛博霓虹 / 朱批御览** 四套视觉风格，并支持 **简体中文 / English** 一键切换（超 5.2 万字中文 + 2 万字英文双语详实内容） |
| **🔄 主仓库数据自动同步** | `scripts/sync-data.mjs` | 一键从 `../pi-web-ui` 同步最新版本号、`plugins/catalog.json`（39 款插件）与 `themes/*.css`（35 套主题色板） |

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
4. 每次推送到 `main` 分支，GitHub Actions 都会自动运行 `node scripts/verify-site.mjs` 校验并发布到 `https://<your-username>.github.io/pi-web-ui-site/`！

### 方式二：Branch 直出模式（免 Actions）
由于本项目采用原生 ES Modules 构建，根目录直接包含 `index.html`、`docs.html` 与 `.nojekyll`，你也可以在 **Settings → Pages → Source** 中直接选择 **Deploy from a branch (`main` / `/(root)`)**，零等待即刻上线。
