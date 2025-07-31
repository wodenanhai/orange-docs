<template><div><h1 id="_2、发布到npm中央仓库" tabindex="-1"><a class="header-anchor" href="#_2、发布到npm中央仓库"><span>2、发布到npm中央仓库</span></a></h1>
<h2 id="_2-1-完善-package-json" tabindex="-1"><a class="header-anchor" href="#_2-1-完善-package-json"><span>2.1.完善 package.json</span></a></h2>
<ul>
<li>注意：
<ul>
<li>name: 必须是唯一的名称(在npm在线中央仓库中没有同名的)</li>
<li>main: 必须指定为打包生成的js文件</li>
<li>keywords: 指定一些方便别的程序员搜索到当前库的关键字</li>
</ul>
</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"utils"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"zhangcheng"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"前端-自定义工具函数库"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"frond"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"utils"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"array"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"object"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"function"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"string"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"axios"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"event-bus"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"pub-sub"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"promise"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/common-utils.js"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"build:watch"</span><span class="token operator">:</span> <span class="token string">"webpack --watch"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"webpack"</span><span class="token operator">:</span> <span class="token string">"^5.10.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"webpack-cli"</span><span class="token operator">:</span> <span class="token string">"^4.2.0"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-npm配置" tabindex="-1"><a class="header-anchor" href="#_2-2-npm配置"><span>2.2.npm配置</span></a></h2>
<ul>
<li>npm配置的中央仓库不能是淘宝镜像</li>
<li>发布前必须执行: npm config set registry https://registry.npmjs.org/</li>
<li>不用发布时: npm config set registry http://registry.npm.taobao.org/</li>
<li>查看配置: npm config list</li>
</ul>
<h2 id="_2-3-注册npm中央仓库账号" tabindex="-1"><a class="header-anchor" href="#_2-3-注册npm中央仓库账号"><span>2.3.注册npm中央仓库账号</span></a></h2>
<ul>
<li>注册地址: https://www.npmjs.com/</li>
<li>关键信息: 用户名/密码/邮箱(需要验证)</li>
</ul>
<h2 id="_2-4-添加用户" tabindex="-1"><a class="header-anchor" href="#_2-4-添加用户"><span>2.4.添加用户</span></a></h2>
<ul>
<li>执行: npm addUser</li>
<li>登陆npm仓库</li>
<li>依次指定用户名/密码/邮箱</li>
</ul>
<h2 id="_2-5-发布仓库" tabindex="-1"><a class="header-anchor" href="#_2-5-发布仓库"><span>2.5.发布仓库</span></a></h2>
<ul>
<li>执行: npm publish</li>
<li>发布失败, 原因是库的名称重复了, 修改name为一个唯一值, 再发布</li>
</ul>
<h2 id="_2-6-更新代码后再发布" tabindex="-1"><a class="header-anchor" href="#_2-6-更新代码后再发布"><span>2.6.更新代码后再发布</span></a></h2>
<ul>
<li>修改项目库的版本号: package.json 中的version 从1.0.0 改为1.0.1, 注意一定要变大</li>
<li>修改代码后重新打包: npm run build</li>
<li>执行发布: npm publish</li>
</ul>
<h2 id="_2-7-强制删除已发布的库" tabindex="-1"><a class="header-anchor" href="#_2-7-强制删除已发布的库"><span>2.7.强制删除已发布的库</span></a></h2>
<ul>
<li>执行: npm unpublish --force</li>
<li>注意: 必须在72小时内, 否则不能再删除</li>
</ul>
</div></template>


