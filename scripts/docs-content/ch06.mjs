export const ch06 = {
  id: "file-tree-and-transfer",
  group: "workspace",
  badge: "Chapter 06",
  icon: "📁",
  navTitle: "文件与传输",
  navTitleEn: "Files & Transfer",
  title: "文件与传输",
  titleEn: "Files & Transfer",
  summary: "浏览文件、上传目录、打包下载与解压归档。",
  summaryEn:
    "Browse files, upload directories, download bundles, and extract archives.",
  contentZh: `
<h2 id="file-tree-overview">浏览</h2>
<p>展开右侧文件树，打开文件或使用菜单上传、下载与归档。切换项目后先确认根目录和选中项；能否编辑取决于文件类型与大小，文档预览见下一章。</p>
<h2 id="drag-drop-upload">上传</h2>
<p>拖入文件或文件夹，确认目标。目录按相对路径逐项上传，保留层级；最多二万条目、单文件三十二 MiB。失败可能留下部分结果，重试前检查已完成项与同名文件。</p>
<h2 id="archive-and-unarchive">归档</h2>
<p>打包输出 tar.gz，先生成归档再下载，临时下载限二百 MiB。较大目录可先原地压缩。本地支持 ZIP、TAR、TGZ 和 GZ 解压，有冲突、大小与符号链接检查。</p>
<h2 id="root-and-multiroot">根目录</h2>
<p>远端 ZIP 使用 unzip -o，会覆盖同名文件；其他归档用 tar -xf，支持情况看远端工具。@root 与多根入口可浏览其他目录，仍受权限约束；交给 AI 时写清完整路径。解压失败也可能留下部分内容，操作完成后应检查目标目录。</p>
`,
  contentEn: `
<h2 id="file-tree-overview">Browse</h2>
<p>Browse files and use menu actions to transfer or archive them. Confirm the root after switching projects; editing depends on type and size.</p>
<h2 id="drag-drop-upload">Upload</h2>
<p>Drop files or folders and confirm the destination. Sequential uploads preserve paths, with 20,000 entries and 32 MiB per file. Check partial results before retrying.</p>
<h2 id="archive-and-unarchive">Archives</h2>
<p>Bundles are tar.gz, generated before download, with a 200 MiB temporary-download limit. Compress larger folders in place. Local ZIP, TAR, TGZ, and GZ extraction has conflict, size, and symlink checks.</p>
<h2 id="root-and-multiroot">Roots</h2>
<p>Remote ZIP uses unzip -o and overwrites matches; other archives use tar -xf. @root and added roots retain access limits. Give AI full paths. Extraction failures may also leave partial results; inspect the destination.</p>
`,
};
