export const ch07 = {
  id: "attachments-and-vision",
  group: "workspace",
  badge: "Chapter 07",
  icon: "📎",
  navTitle: "附件与预览",
  navTitleEn: "Attachments & Previews",
  title: "附件与预览",
  titleEn: "Attachments & Previews",
  summary: "引用文件与行号，了解文档预览和视觉桥边界。",
  summaryEn:
    "Reference files and line ranges, with document preview and vision bridge limits.",
  contentZh: `
<h2 id="zero-pollution-reference">附件</h2>
<p>普通附件保存到服务端，消息提供路径，模型再按需读取。发送前说明希望查找、比较或总结什么；后续读取仍消耗上下文，不保证固定比例的费用节省。查看工具记录可确认实际读取范围。</p>
<h2 id="line-range-quote">行号引用</h2>
<p>使用引用入口附上文件和行号，发送的是路径与范围，正文需模型另行读取。自由文本中的路径加行号不保证解析为结构化附件；同时给出函数名可防止行号偏移造成歧义。</p>
<h2 id="office-pdf-preview">预览</h2>
<p>点击文件查看支持的文本、Office、PDF 或媒体。Office 转为 Markdown，不保证原版式；编辑入口只对符合条件的文本开放。修改复杂文档后，用对应办公软件核对内容与布局。</p>
<h2 id="vision-bridge">视觉桥</h2>
<p>主模型不支持图片时，启用视觉桥并配置可用视觉模型与认证，可将图片转为描述。它针对图片输入，会增加模型处理且可能遗漏细节；涉及图中文字、布局或数值时核对原图。</p>
`,
  contentEn: `
<h2 id="zero-pollution-reference">Attachments</h2>
<p>Ordinary attachments are saved server-side and referenced by path. State what to find, compare, or summarize. Later reads still cost context; inspect tool records to check coverage.</p>
<h2 id="line-range-quote">Line ranges</h2>
<p>Use quoting controls for file ranges. Metadata is sent; the model must read the text. Typed path-and-line references may remain plain text. Include function names when lines shift.</p>
<h2 id="office-pdf-preview">Previews</h2>
<p>Open supported text, Office, PDF, or media files. Office becomes Markdown; original layout is not guaranteed. Only eligible text is editable. Check changed documents in office software.</p>
<h2 id="vision-bridge">Vision bridge</h2>
<p>For image inputs, enable the bridge and configure an authenticated vision model when the main model lacks vision. Transcription adds processing and may miss details; check the source.</p>
`,
};
