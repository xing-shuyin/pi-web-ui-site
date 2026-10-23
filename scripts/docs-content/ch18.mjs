/**
 * Chapter 18: UI Customization, Wallpapers, Long Image Export & I18n (界面定制与长图导出)
 */
export const ch18 = {
	id: "ui-customization-and-export",
	group: "extensibility",
	badge: "Chapter 18",
	icon: "🎨",
	navTitle: "18. 界面定制与长图导出",
	navTitleEn: "18. UI Customization",
	title: "界面深度定制：33 插槽布局、个性壁纸、长图导出与声音",
	titleEn: "UI Customization: 33-Slot Layout, Wallpapers, Image Export & I18n",
	summary: "打造属于你的专属极客工作台：33 个 UI 扩展插槽自由拖拽、自定义毛玻璃壁纸、对话一键生成高清长图卡片、中英双语核心 + 12 个语言包与任务完成声音提示。",
	summaryEn: "Customize your cockpit: drag-and-drop 33 UI slots, frosted glass wallpapers, high-res chat poster export, 10 languages, and completion chime sounds.",
	contentZh: `
<h2 id="ui-slots-layout">1. 33 个 UI 插槽：按你的习惯重新编排界面</h2>
<p>每个开发者的操作习惯都不一样：有人喜欢顶栏干干净净，有人喜欢把终端和 Git 按钮放在最显眼的位置。pi-web-ui 将整个界面的各个交互区域抽象为 <strong>33 个原子级 UI 插槽</strong>：</p>

<div class="doc-step-box">
	<div class="doc-step-num">🧩</div>
	<div class="doc-step-content">
		<h4>可视化拖拽与显隐开关</h4>
		<p>进入「设置 → 界面排布」面板，你可以像搭积木一样自由拖拽调整顶栏图标、底栏芯片与侧边按钮的相对顺序；暂时用不到的模块点击眼睛图标即可一键隐藏，享受极致纯粹的沉浸编码体验。</p>
	</div>
</div>

<h2 id="custom-wallpapers">2. 自定义个性壁纸与毛玻璃磨砂效果</h2>
<p>告别千篇一律的单调黑白配色！工作台支持强大的视觉自定义系统：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>🖼️ 上传你最爱的专属壁纸</h4>
		<p>支持将任何本地图片或网络图片 URL 设为背景壁纸（支持二次元插画、极简自然风光或科幻宇宙）。</p>
	</div>
	<div class="doc-card">
		<h4>✨ 半透明毛玻璃与磨砂度微调</h4>
		<p>精准调节窗口面板的透明度（Opacity）与背景模糊度（Backdrop Blur），让代码高亮和文字优雅漂浮在壁纸之上，赏心悦目。</p>
	</div>
</div>

<h2 id="long-image-export">3. 一键生成高清长图卡片 (Share Poster)</h2>
<p>当你和 AI 共同攻克了一道架构难题、或者推导出了一段优美的核心算法，想要分享给同事或发到社交平台时：</p>

<div class="doc-callout doc-callout-tip">
	<strong>💡 告别多段拼图！一键渲染高清美化长图</strong>
	<p>点击消息操作栏的「导出长图」按钮，或直接在输入框键入 <code>/export</code>：系统会自动抓取所选轮次的对话内容与代码高亮，生成一张带有<strong>精致圆角、渐变阴影与元数据徽章的高清长图海报</strong>，支持一键复制到剪贴板或下载 PNG 格式图片！</p>
</div>

<h2 id="i18n-and-sound-synth">4. 中英双语核心 + 12 个语言包与环境音效提醒</h2>

<div class="doc-step-box">
	<div class="doc-step-num">🌐</div>
	<div class="doc-step-content">
		<h4>全界面中英双语核心 + 12 个语言包无缝切换</h4>
		<p>系统内置完整的国际化翻译词典，中英双语核心开箱即用，另有日本語、한국어、Deutsch、Français、Español 等 12 个语言包（locales/*.json，缺 key 回落英文），点击顶栏地球图标瞬间切换，无任何刷新卡顿。</p>
	</div>
</div>

<div class="doc-step-box">
	<div class="doc-step-num">🔔</div>
	<div class="doc-step-content">
		<h4>Web Audio 智能声效提醒</h4>
		<p>当子代理完成复杂的大型重构任务、或自动化测试全部跑通时，内置的 Web Audio 声音合成器会自动播放清脆悦耳的提示音，让你在后台挂机干别的事时也能第一时间知晓结果！</p>
	</div>
</div>
`,
	contentEn: `
<h2 id="ui-slots-layout">1. 33-Slot Layout Customization</h2>
<p>Reorder top bar icons, bottom metrics, and dock buttons with visual drag-and-drop. Hide unused buttons for a distraction-free experience.</p>

<h2 id="custom-wallpapers">2. Custom Wallpapers & Frosted Glass</h2>
<p>Upload your favorite wallpaper and dial in blur/opacity controls so code flows gracefully over customized backgrounds.</p>

<h2 id="long-image-export">3. One-Click High-Res Long Image Export</h2>
<p>Type <code>/export</code> to capture your conversation into a beautiful long poster with syntax highlighting and drop shadows.</p>

<h2 id="i18n-and-sound-synth">4. 10 Locales & Sound Notifications</h2>
<p>Switch between 10 languages seamlessly. Web Audio chimes notify you when long tasks finish in background tabs.</p>
`,
};
