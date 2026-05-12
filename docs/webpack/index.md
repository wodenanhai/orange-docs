# 工程化（Webpack）面试题

## 目录

- [Webpack 的核心能力是什么？](#webpack-的核心能力是什么)
- [loader 和 plugin 的区别？](#loader-和-plugin-的区别)
- [常见 loader 链路顺序是怎样的？](#常见-loader-链路顺序是怎样的)
- [开发环境和生产环境配置如何拆分？](#开发环境和生产环境配置如何拆分)
- [HMR（热更新）为什么快？](#hmr热更新为什么快)
- [如何做代码分割（Code Splitting）？](#如何做代码分割code-splitting)
- [Tree Shaking 生效条件有哪些？](#tree-shaking-生效条件有哪些)
- [source map 在不同环境怎么选？](#source-map-在不同环境怎么选)
- [如何优化构建速度？](#如何优化构建速度)
- [如何优化产物体积？](#如何优化产物体积)
- [说说你排查包体积问题的流程](#说说你排查包体积问题的流程)
- [常见追问：为什么有时 splitChunks 后反而变慢？](#常见追问为什么有时-splitchunks-后反而变慢)

## Webpack 的核心能力是什么？

- 模块打包：把多种资源（JS/CSS/图片等）当作模块处理。
- 依赖图构建：从入口出发递归分析依赖，生成 chunk。
- 代码转换：通过 loader 把非 JS 资源或高版本语法转成可执行代码。
- 产物优化：通过 plugin 在构建生命周期做压缩、分包、注入、分析等。

## loader 和 plugin 的区别？

| 维度 | loader | plugin |
| --- | --- | --- |
| 作用对象 | 单个模块资源 | 整个构建流程 |
| 执行时机 | 模块加载/转换阶段 | 基于生命周期钩子 |
| 常见用途 | TS/SCSS/Babel 转换 | 压缩、提取 CSS、注入 HTML、分析包体积 |

## 常见 loader 链路顺序是怎样的？

- 执行顺序：从右到左（或从下到上）。
- 示例：`style-loader` ← `css-loader` ← `postcss-loader` ← `sass-loader`
  - `sass-loader`：Sass -> CSS
  - `postcss-loader`：自动前缀等处理
  - `css-loader`：解析 `@import` / `url()`
  - `style-loader`：把样式注入页面

## 开发环境和生产环境配置如何拆分？

- 基础共用：[`webpack.common.js`](orange-docs/docs/webpack/index.md)
- 开发专用：[`webpack.dev.js`](orange-docs/docs/webpack/index.md)
- 生产专用：[`webpack.prod.js`](orange-docs/docs/webpack/index.md)
- 通过 [`webpack-merge`](orange-docs/docs/webpack/index.md) 合并，避免重复配置。

## HMR（热更新）为什么快？

- 只替换变更模块，不整页刷新。
- 保留应用运行时状态（多数场景）。
- 更新链路短：dev-server + websocket 通知 + 模块替换。

## 如何做代码分割（Code Splitting）？

- 入口拆分：多入口配置。
- 动态导入：`import()` 触发按需加载。
- 公共依赖提取：[`splitChunks`](orange-docs/docs/webpack/index.md) 分离公共包。

## Tree Shaking 生效条件有哪些？

- 使用 ESM（`import/export`）。
- 生产模式（`mode: 'production'`）。
- 避免副作用干扰，或在 [`package.json`](orange-docs/package.json) 声明 `sideEffects`。

## source map 在不同环境怎么选？

- 开发：`eval-cheap-module-source-map`（构建快，调试体验好）。
- 生产：`source-map`（定位准确，按需上传错误平台）。
- 若关注源码泄露可用：`hidden-source-map`。

## 如何优化构建速度？

- 缓存：Babel/TS 缓存、持久化缓存。
- 多进程：线程 loader（谨慎评估收益）。
- 缩小范围：`include/exclude` 精确匹配。
- 合理拆包：减少单次编译工作量。

## 如何优化产物体积？

- 开启压缩（JS/CSS/图片）。
- 利用 [`splitChunks`](orange-docs/docs/webpack/index.md) 去重公共依赖。
- 按需引入（UI 组件、工具库）。
- 资源走 CDN + 长缓存（hash 文件名）。

## 说说你排查包体积问题的流程

1. 用体积分析插件定位大模块。
2. 判断是重复依赖、整包引入还是无效 polyfill。
3. 针对性处理：别名瘦身、按需加载、替换重型库。
4. 回归验证：对比构建时间、首屏资源和缓存命中率。

## 常见追问：为什么有时 splitChunks 后反而变慢？

- chunk 切得太碎，请求数增加，HTTP 开销变大。
- 缓存策略不合理导致重复下载。
- 首屏依赖被拆散，关键路径拉长。

::: tip 面试一句话总结
工程化优化要平衡“构建速度、包体积、运行性能、缓存命中”，不是单点极限优化。
:::
