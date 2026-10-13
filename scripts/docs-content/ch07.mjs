/**
 * Chapter 07: Zero-Pollution Attachments, Office/PDF Preview & Vision Bridge (零污染附件引用、Office预览与视觉桥)
 */
export const ch07 = {
	id: "attachments-and-vision",
	group: "workspace",
	badge: "Chapter 07",
	icon: "📎",
	navTitle: "07. 附件预览与视觉桥",
	navTitleEn: "07. Attachments & Vision",
	title: "零污染附件引用、Office/PDF 在线预览编辑与视觉桥",
	titleEn: "Zero-Pollution Attachments, Document Previews & Vision Bridge",
	summary: "为什么上传大文件不撑爆模型上下文？路径引用与指定行号精准提问、.docx/.xlsx/.pptx/.pdf 在线原生预览编辑，以及为纯文本模型赋能的视觉桥。",
	summaryEn: "Reference files and exact line numbers without context bloat, preview Office/PDF documents in-browser, and empower text-only LLMs via Vision Bridge.",
	contentZh: `
<h2 id="zero-pollution-reference">1. 什么是“零污染附件引用”？</h2>
<p>在普通聊天工具中，当你把一份几百 KB 的配置文件或长代码拖进对话时，工具通常会将整篇文字一股脑硬塞进提示词中。这会导致两大严重弊端：</p>
<ul>
	<li><strong>破坏前缀缓存并白白浪费几万 Token</strong>，推理成本暴涨，响应变得极慢；</li>
	<li><strong>严重干扰模型注意力</strong>，导致模型产生幻觉或抓不住核心问题。</li>
</ul>

<div class="doc-callout doc-callout-tip">
	<strong>💡 pi-web-ui 的零污染路径引用体系</strong>
	<p>当你把文件拖入输入框或点击添加附件时，pi-web-ui 仅在输入框生成轻量级的 <strong>路径引用标签 (Reference Chip)</strong>。模型需要查阅文件时，会根据你的问题通过 <code>read</code> 工具精准按需提取相关段落，既保护了 Prompt Cache 前缀缓存，又将 Token 消耗降低了 80% 以上！</p>
</div>

<h2 id="line-range-quote">2. 精确行号引用：只问你想问的那几行</h2>
<p>在代码调试时，你往往只想让 AI 分析某一个函数的十来行代码。点击附件芯片旁的小齿轮或直接在文件名后标注行号范围（例如 <code>src/auth.ts:45-62</code>）：</p>
<pre><code class="language-bash"># 告诉 AI：请帮我检查 src/api.ts 的第 80 到 115 行是否存在并发死锁
src/api.ts:80-115</code></pre>
<p>系统会在注入时精确截取该行号区间并自动带上行号索引，AI 的分析针对性极高、答复干脆利落。</p>

<h2 id="office-pdf-preview">3. 强大的在线原生预览与轻量编辑</h2>
<p>不需要切出网页去打开本地的 Office 软件！在右侧文件树单击任意文档，内置的多媒体引擎即可原地渲染：</p>

<div class="doc-grid-2">
	<div class="doc-card">
		<h4>📊 Word / Excel / PPT 在线预览</h4>
		<p>原生支持 <code>.docx</code>、<code>.xlsx</code>、<code>.pptx</code> 文件的可视化渲染，表格数据、幻灯片排版与文字一览无余，查阅产品需求文档极度方便。</p>
	</div>
	<div class="doc-card">
		<h4>📄 PDF 与高清矢量图 (SVG)</h4>
		<p>内置完整的 PDF 阅读器，支持缩放、翻页与文本高亮选择；同时支持 SVG、PNG、JPEG、WebP 与动图实时查看。</p>
	</div>
	<div class="doc-card">
		<h4>🎵 音视频媒体流式播放</h4>
		<p>支持 <code>.mp4</code>、<code>.webm</code> 视频与 <code>.mp3</code>、<code>.wav</code> 音频的 HTML5 原生 Range 范围流式播放，开发多媒体应用随调随看。</p>
	</div>
	<div class="doc-card">
		<h4>✏️ 文本在线双击编辑</h4>
		<p>对于 <code>.env</code>、<code>.json</code>、<code>.md</code> 等日常配置文件，单击即可进入高亮编辑器直接手改并 <code>Ctrl+S</code> 原地保存。</p>
	</div>
</div>

<h2 id="vision-bridge">4. 视觉桥 (Vision Bridge)：纯文本模型也能看懂设计稿</h2>
<p>如果你当前配置的是没有图像视觉能力的大模型（例如经典的纯文本代码模型，或者成本超低的文本模型），当你拖入一张前端 UI 设计稿或报错弹窗截图时，系统会自动启动 <strong>Vision Bridge（视觉桥）</strong>：</p>

<div class="doc-step-box">
	<div class="doc-step-num">👁️</div>
	<div class="doc-step-content">
		<h4>智能转写与无感赋能</h4>
		<p>视觉桥会在后台自动调用具备多模态能力的辅助转写引擎，将用户上传的截图、设计稿布局、配色和文字要素转化为详尽的结构化特征描述，然后再传递给你的主力写代码模型。无需特地切换昂贵的多模态主力模型，也能让 AI 看着设计图完美还原网页！</p>
	</div>
</div>
`,
	contentEn: `
<h2 id="zero-pollution-reference">1. Zero-Pollution Attachments</h2>
<p>Instead of dumping entire megabytes of files into the prompt, pi-web-ui passes lightweight path references. The model reads exact offsets on demand, preserving prompt caches and saving up to 80% tokens.</p>

<h2 id="line-range-quote">2. Exact Line Range Quotes</h2>
<p>Reference lines like <code>src/app.ts:40-65</code> to focus the model exclusively on the function you want to review.</p>

<h2 id="office-pdf-preview">3. Office, PDF & Media Previews</h2>
<p>Click any <code>.docx</code>, <code>.xlsx</code>, <code>.pptx</code>, <code>.pdf</code>, image, audio, or video in the file tree to preview in-place without third-party software.</p>

<h2 id="vision-bridge">4. Vision Bridge</h2>
<p>When working with text-only coding models, Vision Bridge automatically converts UI screenshots into rich structural descriptions so the model can code matching interfaces accurately.</p>
`,
};
