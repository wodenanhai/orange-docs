<template><div><p>进入<a href="https://docker.com/get-started/" target="_blank" rel="noopener noreferrer">docker官网</a>下载
安装好之后，设置中Docker Engine配置中国镜像</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line"> "registry-mirrors": [</span>
<span class="line">    "https://docker.1ms.run"</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着进入项目根目录中，新建一个文件，叫做docker-compose.yml。千万要注意，一定要在项目根目录中，放在其他地方会找不到的。然后将下面的配置复制进去，这就是MySQL的一个简单配置了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">services:</span>
<span class="line">  mysql:</span>
<span class="line">    image: mysql:8.3.0</span>
<span class="line">    command:</span>
<span class="line">      --default-authentication-plugin=mysql_native_password</span>
<span class="line">      --character-set-server=utf8mb4</span>
<span class="line">      --collation-server=utf8mb4_general_ci</span>
<span class="line">    environment:</span>
<span class="line">      - MYSQL_ROOT_PASSWORD=clwy1234</span>
<span class="line">      - MYSQL_LOWER_CASE_TABLE_NAMES=0</span>
<span class="line">    ports:</span>
<span class="line">      - "3306:3306"</span>
<span class="line">    volumes:</span>
<span class="line">      - ./data/mysql:/var/lib/mysql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再运行下面命令，这样，MySQL就会自动下载好，并启动起来了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docker-compose up -d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


