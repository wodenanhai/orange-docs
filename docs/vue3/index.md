# Vue3 面试题

## Vue3 为什么要用 Proxy 替代 Object.defineProperty？

- 监听能力更完整
  - `Proxy` 可以拦截对象的更多操作（如新增属性、删除属性、`in`、`ownKeys`），而不仅是 `get/set`。
- 对数组支持更自然
  - 不需要像 Vue2 那样对数组方法做大量兼容处理，索引与长度变化都可被拦截。
- 性能与可维护性更好
  - Vue3 响应式系统粒度更清晰，配合 `track/trigger` 依赖追踪机制，更易优化。

## ref 和 reactive 的区别？

- `ref`
  - 适合基本类型，也可包装对象。
  - 通过 `.value` 访问（模板中会自动解包）。
- `reactive`
  - 适合对象/数组。
  - 返回对象的代理，不需要 `.value`。

::: tip 实战建议
复杂对象用 `reactive`，独立标量状态（如 loading、count）用 `ref`。
:::

## computed 和 watch / watchEffect 的使用场景？

- `computed`：纯派生值，依赖变更才重算，有缓存。
- `watch`：精确监听指定数据源，适合副作用（请求、存储、路由联动）。
- `watchEffect`：自动收集依赖，立即执行，适合快速建立响应式副作用。

## setup 做了什么？

- `setup` 是 Composition API 入口：
  - 初始化响应式状态。
  - 声明方法与计算属性。
  - 注册生命周期（如 `onMounted`）。
- 不能直接访问 `this`，因为实例此时尚未完成创建。

## Vue3 生命周期与 Vue2 对比

| Vue2 | Vue3 |
| --- | --- |
| beforeCreate / created | setup |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| updated | onUpdated |
| beforeDestroy | onBeforeUnmount |
| destroyed | onUnmounted |

## script setup 有什么优势？

- 语法更简洁：少模板样板代码。
- 编译期优化更多：更少运行时开销。
- 组合式逻辑更自然：变量与方法直接暴露给模板。

## 组件通信在 Vue3 中有哪些方式？

- 父传子：`props`
- 子传父：`emit`
- 跨层传递：`provide/inject`
- 全局共享：`pinia`（推荐）

## 如何理解 Vue3 的性能优化点？

- 编译优化：静态提升、Patch Flag、Block Tree。
- 运行时优化：更高效的 diff 与更新路径。
- 响应式优化：Proxy + 按需依赖收集减少不必要更新。

## 常见追问：为什么不建议滥用 watch？

- `watch` 更偏“副作用工具”，过量使用会让状态流转变得分散。
- 能用 `computed` 推导的，不要放到 `watch` 里手动同步，避免维护成本上升。
