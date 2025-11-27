#### 一、开发 Node.js,哪个编辑器最好？

常见的有 [WebStorm](https://www.jetbrains.com/webstorm/download/) 和 [VS Code](https://code.visualstudio.com/)

#### 二、Node.js的框架哪个更好？

开发后段最流行的框架有Express和Koa

#### 三、创建 Express 项目以及输出 JSON

使用express-generator脚手架

``` javascript
npm i -g express-generator@4 //全局安装 
mkdir ~/Developer && cd ~/Developer //创建并进入目录
```

创建项目

```
express --no-view orange-api && cd orange-api
```

安装依赖，启动服务

```
npm i
npm start
```

#### 四、使用 nodemon 监听 Express 项目

