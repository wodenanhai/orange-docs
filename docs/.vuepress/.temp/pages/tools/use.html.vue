<template><div><h1 id="_3-使用自定义工具包" tabindex="-1"><a class="header-anchor" href="#_3-使用自定义工具包"><span>3.使用自定义工具包</span></a></h1>
<h2 id="_3-1-下载工具包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载工具包"><span>3.1.下载工具包</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 名称是你前面指定的库的名称</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> common-utils</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-网页中引入并使用" tabindex="-1"><a class="header-anchor" href="#_3-2-网页中引入并使用"><span>3.2.网页中引入并使用</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./node_modules/common-utils/dist/common-utils.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    CommonUtils<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-模块化引入并使用" tabindex="-1"><a class="header-anchor" href="#_3-3-模块化引入并使用"><span>3.3.模块化引入并使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用ESM引入</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>test<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'common-utils2'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用commonjs引入</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>test<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'common-utils2'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


