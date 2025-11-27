<template><div><h1 id="安装-nvm" tabindex="-1"><a class="header-anchor" href="#安装-nvm"><span>安装（nvm）</span></a></h1>
<h4 id="查看node-js-lts版本-即长期支持版本" tabindex="-1"><a class="header-anchor" href="#查看node-js-lts版本-即长期支持版本"><span>查看node.js LTS版本，即长期支持版本</span></a></h4>
<ul>
<li>Windows 运行 :nvm list available</li>
<li>macOS 运行 :nvm ls-remote</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">nvm install <span class="token number">20.12</span><span class="token number">.2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="查看安装过的版本" tabindex="-1"><a class="header-anchor" href="#查看安装过的版本"><span>查看安装过的版本</span></a></h4>
<ul>
<li>Windows</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">nvm list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>macOS</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">nvm ls</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="切换版本" tabindex="-1"><a class="header-anchor" href="#切换版本"><span>切换版本</span></a></h4>
<ul>
<li>Windows</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">nvm use 20.12.2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>macOS</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">nvm alias default 20.12.2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="配置npm中国镜像" tabindex="-1"><a class="header-anchor" href="#配置npm中国镜像"><span>配置npm中国镜像</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">npm config set registry https://registry.npmmirror.com/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


