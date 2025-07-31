export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/html/", { loader: () => import(/* webpackChunkName: "html_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/html/index.html.js"), meta: {"title":"一、HTML 的 src 和 href 属性有什么区别？"} }],
  ["/webpack/", { loader: () => import(/* webpackChunkName: "webpack_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/webpack/index.html.js"), meta: {"title":""} }],
  ["/vue3/", { loader: () => import(/* webpackChunkName: "vue3_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/vue3/index.html.js"), meta: {"title":""} }],
  ["/vue2/", { loader: () => import(/* webpackChunkName: "vue2_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/vue2/index.html.js"), meta: {"title":""} }],
  ["/tools/buildVuePress.html", { loader: () => import(/* webpackChunkName: "tools_buildVuePress.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/buildVuePress.html.js"), meta: {"title":"使用VuePress搭建在线文档网站"} }],
  ["/tools/create.html", { loader: () => import(/* webpackChunkName: "tools_create.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/create.html.js"), meta: {"title":"1、创建工具包项目"} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/index.html.js"), meta: {"title":"安装插件"} }],
  ["/tools/publish.html", { loader: () => import(/* webpackChunkName: "tools_publish.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/publish.html.js"), meta: {"title":"2、发布到npm中央仓库"} }],
  ["/tools/use.html", { loader: () => import(/* webpackChunkName: "tools_use.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/use.html.js"), meta: {"title":"3.使用自定义工具包"} }],
  ["/tools/customize/array.html", { loader: () => import(/* webpackChunkName: "tools_customize_array.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/array.html.js"), meta: {"title":"2、数组相关"} }],
  ["/tools/customize/function.html", { loader: () => import(/* webpackChunkName: "tools_customize_function.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/function.html.js"), meta: {"title":"1、函数相关"} }],
  ["/tools/customize/handleAjax.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleAjax.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/handleAjax.html.js"), meta: {"title":"6.手写ajax请求函数"} }],
  ["/tools/customize/handleDomEvent.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleDomEvent.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/handleDomEvent.html.js"), meta: {"title":"5.手写DOM事件监听(带委托)"} }],
  ["/tools/customize/handleEventBus.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleEventBus.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/handleEventBus.html.js"), meta: {"title":"7.手写事件总线"} }],
  ["/tools/customize/handlePromise.html", { loader: () => import(/* webpackChunkName: "tools_customize_handlePromise.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/handlePromise.html.js"), meta: {"title":"9.手写Promise"} }],
  ["/tools/customize/handlePubSub.html", { loader: () => import(/* webpackChunkName: "tools_customize_handlePubSub.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/handlePubSub.html.js"), meta: {"title":"8.手写消息订阅与发布"} }],
  ["/tools/customize/object.html", { loader: () => import(/* webpackChunkName: "tools_customize_object.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/object.html.js"), meta: {"title":"3.对象相关"} }],
  ["/tools/customize/string.html", { loader: () => import(/* webpackChunkName: "tools_customize_string.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/tools/customize/string.html.js"), meta: {"title":"4.字符串相关"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
