export const ch18 = {
  id: "ui-customization-and-export",
  group: "extensibility",
  badge: "Guide",
  icon: "🎨",
  navTitle: "界面与图片复制",
  navTitleEn: "Interface & Image Copying",
  title: "界面与图片复制",
  titleEn: "Interface & Image Copying",
  summary: "调整布局、壁纸、语言和声音，将对话渲染为可复制的图片。",
  summaryEn:
    "Adjust layout, wallpaper, language and sounds, and render conversations as images to copy.",
  contentZh: `
<h2 id="ui-slots-layout">整理布局</h2>
<p>进入布局编辑，调整支持的按钮、面板和插件入口的位置或显隐。可用项目取决于界面和已启用插件。整理后检查窄窗口下的操作；查找缺失入口时，同时核对布局与插件状态。</p>
<h2 id="custom-wallpapers">设置壁纸</h2>
<p>填写可访问的图片地址，配合压暗与模糊保持正文和代码清晰。用户图片优先于主题背景。设置保存在当前浏览器，换设备或清理数据后需重新配置。</p>
<h2 id="long-image-export">复制图片</h2>
<p>打开对话图片预览，选择范围和样式，点击复制图片，再粘贴到目标应用。复制需要浏览器剪贴板权限和安全上下文。发送前检查内容完整性与敏感信息；长对话渲染可能较慢。</p>
<h2 id="i18n-and-sound-synth">语言与提示音</h2>
<p>在设置中选择语言并按需开启提示音。翻译覆盖取决于语言包及插件，已有对话保留原文。调整后实际试听，确认系统音量与浏览器播放权限；浏览器自动播放策略也会影响声音通知。</p>
`,
  contentEn: `
<h2 id="ui-slots-layout">Arrange the layout</h2>
<p>Use layout editing to move or hide supported buttons, panels and plugin entries. Availability depends on the interface and enabled plugins. Check narrow-window usability and plugin status when entries are missing.</p>
<h2 id="custom-wallpapers">Set wallpaper</h2>
<p>Provide a reachable image URL and adjust dimming and blur. User images override theme backgrounds. Settings stay in this browser; configure them again after clearing data or changing devices.</p>
<h2 id="long-image-export">Copy images</h2>
<p>Open conversation image preview, choose range and style, then copy and paste into another application. Clipboard permission and a secure context are required. Check completeness and sensitive information; long conversations take longer.</p>
<h2 id="i18n-and-sound-synth">Language and sound</h2>
<p>Select language and notification sounds in settings. Coverage depends on language packs and plugins; existing messages retain their language. Test volume and browser playback permissions, including autoplay restrictions.</p>
`,
};
