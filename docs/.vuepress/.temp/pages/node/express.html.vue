<template><div><h4 id="一、开发-node-js-哪个编辑器最好" tabindex="-1"><a class="header-anchor" href="#一、开发-node-js-哪个编辑器最好"><span>一、开发 Node.js,哪个编辑器最好？</span></a></h4>
<p>常见的有 <a href="https://www.jetbrains.com/webstorm/download/" target="_blank" rel="noopener noreferrer">WebStorm</a> 和 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a></p>
<h4 id="二、node-js的框架哪个更好" tabindex="-1"><a class="header-anchor" href="#二、node-js的框架哪个更好"><span>二、Node.js的框架哪个更好？</span></a></h4>
<p>开发后段最流行的框架有Express和Koa</p>
<h4 id="三、创建-express-项目以及输出-json" tabindex="-1"><a class="header-anchor" href="#三、创建-express-项目以及输出-json"><span>三、创建 Express 项目以及输出 JSON</span></a></h4>
<p>使用express-generator脚手架</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">npm i <span class="token operator">-</span>g express<span class="token operator">-</span>generator@<span class="token number">4</span> <span class="token comment">//全局安装 </span></span>
<span class="line">mkdir <span class="token operator">~</span><span class="token operator">/</span>Developer <span class="token operator">&amp;&amp;</span> cd <span class="token operator">~</span><span class="token operator">/</span>Developer <span class="token comment">//创建并进入目录</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建项目</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">express --no-view orange-api &amp;&amp; cd orange-api</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装依赖，启动服务</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">npm i</span>
<span class="line">npm start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四、使用-nodemon-监听-express-项目" tabindex="-1"><a class="header-anchor" href="#四、使用-nodemon-监听-express-项目"><span>四、使用 nodemon 监听 Express 项目</span></a></h4>
</div></template>


