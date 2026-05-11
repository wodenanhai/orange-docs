export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/README.md"), meta: {"title":""} }],
  ["/common/Authentication.html", { loader: () => import(/* webpackChunkName: "common_Authentication.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/common/Authentication.md"), meta: {"title":""} }],
  ["/common/async.html", { loader: () => import(/* webpackChunkName: "common_async.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/common/async.md"), meta: {"title":""} }],
  ["/common/", { loader: () => import(/* webpackChunkName: "common_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/common/index.md"), meta: {"title":""} }],
  ["/common/qiankun.html", { loader: () => import(/* webpackChunkName: "common_qiankun.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/common/qiankun.md"), meta: {"title":""} }],
  ["/common/speed.html", { loader: () => import(/* webpackChunkName: "common_speed.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/common/speed.md"), meta: {"title":""} }],
  ["/html/", { loader: () => import(/* webpackChunkName: "html_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/html/index.md"), meta: {"title":"一、HTML 的 src 和 href 属性有什么区别？"} }],
  ["/tools/buildVuePress.html", { loader: () => import(/* webpackChunkName: "tools_buildVuePress.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/buildVuePress.md"), meta: {"title":"使用VuePress搭建在线文档网站"} }],
  ["/tools/create.html", { loader: () => import(/* webpackChunkName: "tools_create.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/create.md"), meta: {"title":"1、创建工具包项目"} }],
  ["/tools/", { loader: () => import(/* webpackChunkName: "tools_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/index.md"), meta: {"title":"安装插件"} }],
  ["/tools/publish.html", { loader: () => import(/* webpackChunkName: "tools_publish.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/publish.md"), meta: {"title":"2、发布到npm中央仓库"} }],
  ["/tools/use.html", { loader: () => import(/* webpackChunkName: "tools_use.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/use.md"), meta: {"title":"3.使用自定义工具包"} }],
  ["/node/api1.html", { loader: () => import(/* webpackChunkName: "node_api1.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/api1.md"), meta: {"title":""} }],
  ["/node/api2.html", { loader: () => import(/* webpackChunkName: "node_api2.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/api2.md"), meta: {"title":""} }],
  ["/node/api7.html", { loader: () => import(/* webpackChunkName: "node_api7.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/api7.md"), meta: {"title":""} }],
  ["/node/api8.html", { loader: () => import(/* webpackChunkName: "node_api8.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/api8.md"), meta: {"title":""} }],
  ["/node/api9.html", { loader: () => import(/* webpackChunkName: "node_api9.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/api9.md"), meta: {"title":""} }],
  ["/node/createDateBase.html", { loader: () => import(/* webpackChunkName: "node_createDateBase.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/createDateBase.md"), meta: {"title":""} }],
  ["/node/curd.html", { loader: () => import(/* webpackChunkName: "node_curd.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/curd.md"), meta: {"title":""} }],
  ["/node/curd2.html", { loader: () => import(/* webpackChunkName: "node_curd2.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/curd2.md"), meta: {"title":""} }],
  ["/node/database.html", { loader: () => import(/* webpackChunkName: "node_database.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/database.md"), meta: {"title":""} }],
  ["/node/docker_mysql.html", { loader: () => import(/* webpackChunkName: "node_docker_mysql.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/docker_mysql.md"), meta: {"title":""} }],
  ["/node/express.html", { loader: () => import(/* webpackChunkName: "node_express.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/express.md"), meta: {"title":""} }],
  ["/node/", { loader: () => import(/* webpackChunkName: "node_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/index.md"), meta: {"title":"NodeJS优势"} }],
  ["/node/install.html", { loader: () => import(/* webpackChunkName: "node_install.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/install.md"), meta: {"title":"安装（nvm）"} }],
  ["/node/model.html", { loader: () => import(/* webpackChunkName: "node_model.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/model.md"), meta: {"title":""} }],
  ["/node/prisma.html", { loader: () => import(/* webpackChunkName: "node_prisma.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/prisma.md"), meta: {"title":""} }],
  ["/node/project.html", { loader: () => import(/* webpackChunkName: "node_project.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/project.md"), meta: {"title":""} }],
  ["/node/sequelize.html", { loader: () => import(/* webpackChunkName: "node_sequelize.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/node/sequelize.md"), meta: {"title":""} }],
  ["/vue2/", { loader: () => import(/* webpackChunkName: "vue2_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/vue2/index.md"), meta: {"title":"基础面试题一"} }],
  ["/vue3/", { loader: () => import(/* webpackChunkName: "vue3_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/vue3/index.md"), meta: {"title":""} }],
  ["/webpack/", { loader: () => import(/* webpackChunkName: "webpack_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/webpack/index.md"), meta: {"title":""} }],
  ["/tips/", { loader: () => import(/* webpackChunkName: "tips_index.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tips/index.md"), meta: {"title":""} }],
  ["/tools/customize/array.html", { loader: () => import(/* webpackChunkName: "tools_customize_array.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/array.md"), meta: {"title":"2、数组相关"} }],
  ["/tools/customize/function.html", { loader: () => import(/* webpackChunkName: "tools_customize_function.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/function.md"), meta: {"title":"1、函数相关"} }],
  ["/tools/customize/handleAjax.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleAjax.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/handleAjax.md"), meta: {"title":"6.手写ajax请求函数"} }],
  ["/tools/customize/handleDomEvent.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleDomEvent.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/handleDomEvent.md"), meta: {"title":"5.手写DOM事件监听(带委托)"} }],
  ["/tools/customize/handleEventBus.html", { loader: () => import(/* webpackChunkName: "tools_customize_handleEventBus.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/handleEventBus.md"), meta: {"title":"7.手写事件总线"} }],
  ["/tools/customize/handlePromise.html", { loader: () => import(/* webpackChunkName: "tools_customize_handlePromise.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/handlePromise.md"), meta: {"title":"9.手写Promise"} }],
  ["/tools/customize/handlePubSub.html", { loader: () => import(/* webpackChunkName: "tools_customize_handlePubSub.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/handlePubSub.md"), meta: {"title":"8.手写消息订阅与发布"} }],
  ["/tools/customize/object.html", { loader: () => import(/* webpackChunkName: "tools_customize_object.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/object.md"), meta: {"title":"3.对象相关"} }],
  ["/tools/customize/string.html", { loader: () => import(/* webpackChunkName: "tools_customize_string.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/tools/customize/string.md"), meta: {"title":"4.字符串相关"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
