# 🌐 pi-web-ui Official Website & Documentation Portal (`pi-web-ui-site`)

本项目是 [pi-web-ui](https://github.com/xing-shuyin/pi-web-ui) 的官方产品宣传主页与 16 章完整使用文档中心，专为 **GitHub Pages** 托管设计（零构建步骤即可直接由 GitHub Pages 托管，同时内置 GitHub Actions 自动校验与部署流水线）。

## ✨ 网站结构与功能亮点

| 页面 / 模块 | 文件路径 | 核心内容 |
| :--- | :--- | :--- |
| **🏠 官方产品宣传主页** | `index.html` | Hero 交互式一行安装切换器、5 标签真实工作台交互预览（含高清放大灯箱）、6 大核心研发支柱、4 大智能体工程模式（标准 / 目标模式 2.0 / 计划模式 / 审查者模式）可视化推演、21 款插件市场实时筛选与一键复制安装命令、29 套内置主题实时演播室预览 |
| **📖 详细使用文档中心** | `docs.html` | 三栏式现代化文档中心（左栏 5 大分组 16 章节导航 + 支持「单章阅读 / 16 章全展开连续阅读」切换、中栏排版与动态速查表、右栏 `On This Page` 目录），涵盖安装（Windows/macOS/Linux/Android Termux/Electron）、CLI 与环境变量全表、流式对话与过户、多根文件树与视觉桥、PTY 终端与 Git、目标模式 2.0、31 项工具与内联标记、三级审批门禁、pi/DSH 双引擎、插件 SDK v2 与 Nginx 反代 |
| **🔍 全局即时搜索 (`Ctrl+K`)** | `app.js` | 在任意页面按下 `Ctrl/Cmd + K` 即可跨 16 章文档、21 款插件、26+ 工具、CLI 参数与环境变量进行毫秒级全文检索 |
| **🎨 多主题 & 中英双语** | `styles.css` + `app.js` | 网站自身支持 **暗夜深邃 / 纯净浅色 / 赛博霓虹 / 朱批御览** 四套视觉风格，并支持 **简体中文 / English** 一键切换 |
| **🔄 主仓库数据自动同步** | `scripts/sync-data.mjs` | 一键从 `../pi-web-ui` 同步最新版本号、`plugins/catalog.json`（21 款插件）与 `themes/*.css`（29 套主题色板） |

## 🚀 本地预览与数据同步

```bash
# 1. 启动本地预览服务 (默认 http://127.0.0.1:4173)
npm run dev

# 2. 当 ../pi-web-ui 更新了版本、插件或主题时，一键同步数据
npm run sync

# 3. 运行站点完整性与链接校验
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
