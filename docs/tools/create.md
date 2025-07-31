# 1、创建工具包项目

## 1.1.安装Node

- 检查是否已经安装node（node中自带npm）

```bash
node -v
npm -v
```

- 如果node与npm命令不识别，说明你还没有安装node

## 1.2.创建项目

```bash
# 创建一个空的项目文件夹: common-utils
# 在文件夹下执行命令
npm init -y
```

## 1.3.下载依赖包

```bash
npm i webpack webpack-cli
```

## 1.4.配置webpack

- webpack.config.js

```js
const path = require('path')
module.exports = {
// 模式
    mode: 'development', // 也可以使用 production
// 入口
    entry: './src/index.js',
// 出口
    output: {
// 打包文件夹
        path: path.resolve(__dirname, 'dist'),
// 打包文件
        filename: 'common-utils.js',
// 向外暴露的对象的名称
        library: 'CommonUtils',
// 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
    },
}
```

## 1.5.在入口JS中暴露功能

- src/index.js

```js
export function test() {
    document.write('测试自定义包')
    console.log('test()')
}
```

## 1.6.配置打包命令

- package.json

```json
{
  "scripts": {
    "build:watch": "webpack --watch"
  }
}
```

## 1.7.对项目进行打包

```bash
npm run build:watch
```

## 1.8.测试使用自定义包

- test/first.html

```html

<body>
<script src="../dist/common-utils.js"></script>
<script>
    CommonUtils.test()
</script>
</body>
```
