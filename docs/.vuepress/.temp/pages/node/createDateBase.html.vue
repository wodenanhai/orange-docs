<template><div><h4 id="如何创建数据库与数据表" tabindex="-1"><a class="header-anchor" href="#如何创建数据库与数据表"><span>如何创建数据库与数据表？</span></a></h4>
<p>操作数据库：增删改查（Create、Delete、Update、Read），CURD
数据库编码选择 utf8mb4，是一种能非常好的支持世界各国语言的编码。后面的mb4可以让数据库正确的存储emoji表情符号
排序规则的选择 utf8mb4_general_ci，区分大小写，不区分重音符号。
创建表：</p>
<ul>
<li>首字母大写：这里的首字母需要大写，如果你命名成小写了，将来部署到Linux服务器会报错的。</li>
<li>复数形式：最后的s，这个复数形式，也是必须的。如果你的命名掉了s，在后面我们使用Node.js查询数据的时候，它也会无法找到这张表的。</li>
</ul>
<h4 id="mysql-中常见的数据类型" tabindex="-1"><a class="header-anchor" href="#mysql-中常见的数据类型"><span>MySQL 中常见的数据类型</span></a></h4>
<h4 id="主键是什么" tabindex="-1"><a class="header-anchor" href="#主键是什么"><span>主键是什么？</span></a></h4>
<h4 id="给数据表-增加标题和内容" tabindex="-1"><a class="header-anchor" href="#给数据表-增加标题和内容"><span>给数据表，增加标题和内容</span></a></h4>
</div></template>


