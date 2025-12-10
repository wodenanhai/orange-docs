<template><div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>content</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//而不是直接接收全部的req.body值</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">例子</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">req.params</td>
<td style="text-align:left">获取路由的参数</td>
<td style="text-align:left">/admin/articles/:id</td>
</tr>
<tr>
<td style="text-align:left">req.query</td>
<td style="text-align:left">获取URL地址里的查询参数</td>
<td style="text-align:left">/admin/articles?title=hello&amp;currentPage=2&amp;pageSize=20</td>
</tr>
<tr>
<td style="text-align:left">req.body</td>
<td style="text-align:left">获取通过POST、PUT发送的数据</td>
<td style="text-align:left">常见的表单里的数据</td>
</tr>
</tbody>
</table>
</div></template>


