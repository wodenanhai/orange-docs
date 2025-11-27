<template><div><h3 id="端口号被占用" tabindex="-1"><a class="header-anchor" href="#端口号被占用"><span>端口号被占用</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">lsof -i :8080  # 列出占用 8080 端口的进程</span>
<span class="line">kill -9 1234  # -9 表示强制终止，避免进程残留</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


