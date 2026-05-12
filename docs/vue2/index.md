# 基础面试题一

## 为什么不建议在Vue中同时使用v-if和v-for？

- 优先级问题导致的行为差异
    - 在 Vue 2 中，当 v-if 和 v-for 同时用在一个元素上时，v-for 的优先级更高。这意味着 v-if 会在循环内部的每次迭代中都被执行，可能导致性能问题。
    - 在 Vue 3 中，优先级关系发生了变化，v-if 的优先级高于 v-for。这会导致 v-if 无法访问 v-for 作用域内定义的变量，从而引发错误。
    - 这种优先级的不一致性使得代码在不同版本间的行为差异较大，容易引起混淆。
- 性能问题
    - 当使用 v-for 和 v-if 的组合来过滤列表时（如 `v-for="user in users" v-if="user.isActive"`），即使某些项不会被渲染，Vue
      也必须遍历整个列表并为每一项执行条件判断。这种方式效率低下，尤其是在大型列表中。
- 代码可读性和维护性
    - 同时使用这两个指令会使模板逻辑变得复杂且难以理解，特别是对于团队协作和后期维护来说，这种写法容易引起误解。

## 为什么Vue中的data属性是一个函数而不是一个对象？

::: tip 重点
Vue中的 data 属性之所以是一个函数而不是一个对象，主要是为了解决组件复用时的数据共享问题。
:::

- 避免组件实例之间共享数据
    - 当我们定义一个 Vue 组件时，这个组件可能会被多次复用。如果 data 是一个对象，那么所有的组件实例将共享同一个数据对象，导致一个组件中的数据变更会影响到其他组件实例。
    - 通过将 data 定义为返回新对象的函数，每个组件实例都能维护一份独立的数据副本。当创建新的组件实例时，Vue
      会调用这个函数，并将返回的对象用作该实例的数据源，确保数据的独立性。
- 保持组件的独立性和可复用性
    - 组件的核心思想是可复用性。将 data 设计为函数返回形式，使得每个组件实例都有自己独立的状态，这是实现组件真正可复用的基础。
- 符合单向数据流的设计理念
    - 这种设计也符合 Vue 的单向数据流理念，确保数据变化是可预测的，便于调试和维护。

## Vue2 的响应式原理是什么？有什么局限？

::: tip 面试回答思路
先说“基于 [`Object.defineProperty()`](orange-docs/docs/vue2/index.md:32) 劫持”，再说“依赖收集与派发更新”，最后补充“数组与对象新增属性的局限”。
:::

- 核心实现
  - Vue2 会在初始化时递归遍历 [`data`](orange-docs/docs/vue2/index.md:15)，通过 [`Object.defineProperty()`](orange-docs/docs/vue2/index.md:32) 为每个属性定义 [`getter`](orange-docs/docs/vue2/index.md:32) / [`setter`](orange-docs/docs/vue2/index.md:32)。
  - 读取属性时触发依赖收集（将当前 [`watcher`](orange-docs/docs/vue2/index.md:32) 收集到依赖中）；修改属性时触发派发更新（通知订阅者重新渲染）。
- 局限点
  - 无法监听对象属性的“新增/删除”，需要使用 [`Vue.set()`](orange-docs/docs/vue2/index.md:32) / [`this.$set()`](orange-docs/docs/vue2/index.md:32)。
  - 无法直接监听数组通过索引赋值和修改 [`length`](orange-docs/docs/vue2/index.md:32) 的变化，需要使用变异方法（如 [`push`](orange-docs/docs/vue2/index.md:32)、[`splice`](orange-docs/docs/vue2/index.md:32)）。

## computed 和 watch 有什么区别？

- [`computed`](orange-docs/docs/vue2/index.md:45)
  - 适合“基于现有状态推导新状态”。
  - 有缓存：依赖不变时不会重复计算。
  - 应尽量保持纯函数，不做副作用。
- [`watch`](orange-docs/docs/vue2/index.md:49)
  - 适合“监听变化后执行副作用”，比如请求接口、本地持久化、路由跳转等。
  - 支持深度监听与立即执行（[`deep`](orange-docs/docs/vue2/index.md:49)、[`immediate`](orange-docs/docs/vue2/index.md:49)）。

## v-model 在 Vue2 中做了什么？

- 本质是语法糖：
  - 表单元素：绑定 [`value`](orange-docs/docs/vue2/index.md:58) + 监听 [`input`](orange-docs/docs/vue2/index.md:58)。
  - 组件上：默认对应 [`value`](orange-docs/docs/vue2/index.md:58) 属性和 [`input`](orange-docs/docs/vue2/index.md:58) 事件。
- 自定义组件可通过 [`model`](orange-docs/docs/vue2/index.md:60) 选项改默认字段名与事件名。

## Vue2 生命周期中，created 和 mounted 的区别？

- [`created`](orange-docs/docs/vue2/index.md:64)
  - 实例已创建，响应式数据可用。
  - 还没有真实 DOM，不能操作 `$el`。
- [`mounted`](orange-docs/docs/vue2/index.md:67)
  - 组件已挂载到页面，真实 DOM 可用。
  - 适合执行依赖 DOM 的逻辑（图表初始化、元素尺寸计算等）。

## keep-alive 的作用与常见配合钩子？

- 作用
  - 缓存动态组件实例，避免重复销毁与创建，提升切换性能。
- 配合钩子
  - 进入缓存组件时触发 [`activated`](orange-docs/docs/vue2/index.md:77)。
  - 离开但未销毁时触发 [`deactivated`](orange-docs/docs/vue2/index.md:78)。
  - 适合在这两个钩子里做定时器管理、数据刷新控制。
