import{_ as s,c as n,b as a,o as l}from"./app-Banx9xF-.js";const i={};function r(t,e){return l(),n("div",null,e[0]||(e[0]=[a(`<p>进入<a href="https://docker.com/get-started/" target="_blank" rel="noopener noreferrer">docker官网</a>下载 安装好之后，设置中Docker Engine配置中国镜像</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"> &quot;registry-mirrors&quot;: [</span>
<span class="line">    &quot;https://docker.1ms.run&quot;</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着进入项目根目录中，新建一个文件，叫做docker-compose.yml。千万要注意，一定要在项目根目录中，放在其他地方会找不到的。然后将下面的配置复制进去，这就是MySQL的一个简单配置了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">services:</span>
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
<span class="line">      - &quot;3306:3306&quot;</span>
<span class="line">    volumes:</span>
<span class="line">      - ./data/mysql:/var/lib/mysql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再运行下面命令，这样，MySQL就会自动下载好，并启动起来了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">docker-compose up -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,6)]))}const d=s(i,[["render",r]]),m=JSON.parse('{"path":"/node/docker_mysql.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1765444767000,"contributors":[{"name":"zhangcheng","username":"zhangcheng","email":"2778162192@qq.com","commits":1,"url":"https://github.com/zhangcheng"}],"changelog":[{"hash":"604b82f1dea66569d927453456903a7754a78fc6","time":1765444767000,"email":"2778162192@qq.com","author":"zhangcheng","message":"commit"}]},"filePathRelative":"node/docker_mysql.md"}');export{d as comp,m as data};
