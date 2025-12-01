<template><div><h4 id="在编程中-同步-synchronous-和-异步-asynchronous-是处理任务执行顺序的两种核心模式。" tabindex="-1"><a class="header-anchor" href="#在编程中-同步-synchronous-和-异步-asynchronous-是处理任务执行顺序的两种核心模式。"><span>在编程中，同步（Synchronous） 和 异步（Asynchronous） 是处理任务执行顺序的两种核心模式。</span></a></h4>
<h4 id="核心区别在于「是否等待前一个任务完成再执行下一个」-以及「任务执行时是否阻塞主线程」。" tabindex="-1"><a class="header-anchor" href="#核心区别在于「是否等待前一个任务完成再执行下一个」-以及「任务执行时是否阻塞主线程」。"><span>核心区别在于「是否等待前一个任务完成再执行下一个」，以及「任务执行时是否阻塞主线程」。</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:center">特性</th>
<th style="text-align:center">同步(Synchronous)</th>
<th style="text-align:center">异步(Asynchronous)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">执行顺序</td>
<td style="text-align:center">串行执行：必须等前一个任务完成，才开始下一个</td>
<td style="text-align:center">并行 / 并发执行：无需等待前一个任务完成，可同时执行多个任务</td>
</tr>
<tr>
<td style="text-align:center">主线程状态</td>
<td style="text-align:center">阻塞：任务执行时，主线程无法做其他事</td>
<td style="text-align:center">非阻塞：任务执行时，主线程可继续处理其他操作</td>
</tr>
<tr>
<td style="text-align:center">适用场景</td>
<td style="text-align:center">简单、快速完成的任务（如数据计算、本地缓存读取）</td>
<td style="text-align:center">耗时任务（如网络请求、文件上传、图片识别）</td>
</tr>
<tr>
<td style="text-align:center">代码写法</td>
<td style="text-align:center">直接顺序编写，无回调 / 异步关键字</td>
<td style="text-align:center">需用回调函数、Promise、async/await 处理结果</td>
</tr>
<tr>
<td style="text-align:center">常见案例</td>
<td style="text-align:center">读取本地存储 uni.getStorageSync()、简单数据处理</td>
<td style="text-align:center">图片上传 uni.uploadFile()、接口请求 uni.request()、微信支付</td>
</tr>
</tbody>
</table>
<p>1、同步：排队买奶茶（串行、阻塞）</p>
<ul>
<li>场景：你去奶茶店买奶茶，必须等店员做好你的奶茶（前一个任务完成），才能拿到奶茶离开，期间你不能做其他事（比如不能同时去买咖啡）。</li>
<li>对应编程：执行 let a = 1 + 2; console.log(a); 时，必须先计算 1+2（任务 1），再打印结果（任务 2），顺序固定，主线程被占用直到任务完成。</li>
</ul>
<p>2、异步：点外卖（并行、非阻塞）</p>
<ul>
<li></li>
</ul>
<p>场景：你在手机上点外卖（发起异步任务），不需要盯着商家做饭，期间可以去看书、做家务（主线程处理其他事）；等外卖送到（异步任务完成），外卖员会打电话通知你（回调 /
通知结果）。</p>
<ul>
<li>对应编程：调用 uni.uploadFile() 上传图片时，小程序不会等待上传完成再执行后续代码，而是继续渲染页面、处理用户点击（主线程自由）；等上传成功后，通过
success 回调函数接收上传结果。</li>
</ul>
<p>总结：
1、同步适合快速、本地任务：比如数据计算、本地存储读写，不会阻塞页面（因为执行时间极短）。
2、异步适合耗时、网络 / IO 任务：比如图片上传、接口请求、文件下载，避免页面卡住（如果用同步会导致页面无法点击、渲染）。</p>
</div></template>


