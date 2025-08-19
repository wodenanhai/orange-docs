export const themeData = JSON.parse("{\"logo\":\"/images/house.png\",\"navbar\":[{\"text\":\"面试\",\"children\":[{\"text\":\"vue2\",\"link\":\"/vue2/index\"},{\"text\":\"vue3\",\"link\":\"/vue3/index\"},{\"text\":\"webpack\",\"link\":\"/webpack/index\"},{\"text\":\"html\",\"link\":\"/html/index\"},{\"text\":\"express\",\"link\":\"/express/index\"}]},{\"text\":\"个人简介\",\"link\":\"https://frp.aitlin.top\"},{\"text\":\"自定义工具函数库\",\"link\":\"/tools/index\"}],\"sidebar\":{\"/vue2/\":[{\"text\":\"vue2\",\"children\":[{\"text\":\"基础面试题一\",\"link\":\"index.md\"}]}],\"/vue3/\":[{\"text\":\"vue3\",\"children\":[\"index.md\"]}],\"/tools/\":[{\"text\":\"打包自定义工具库\",\"children\":[{\"text\":\"1、创建工具包项目\",\"link\":\"create.md\"},{\"text\":\"2、发布到npm中央仓库\",\"link\":\"publish.md\"},{\"text\":\"3.使用自定义工具包\",\"link\":\"use.md\"}]},{\"text\":\"各种自定义\",\"children\":[{\"text\":\"1、函数相关\",\"link\":\"customize/function.md\"},{\"text\":\"2、数组相关\",\"link\":\"customize/array.md\"},{\"text\":\"3、对象相关\",\"link\":\"customize/object.md\"},{\"text\":\"4、字符串相关\",\"link\":\"customize/string.md\"},{\"text\":\"5、手写DOM事件监听（带委托）\",\"link\":\"customize/handleDomEvent.md\"},{\"text\":\"6、手写ajax请求函数\",\"link\":\"customize/handleAjax.md\"},{\"text\":\"7、手写事件总线\",\"link\":\"customize/handleEventBus.md\"},{\"text\":\"8、手写消息订阅与发布\",\"link\":\"customize/handlePubSub.md\"},{\"text\":\"9、手写Promise\",\"link\":\"customize/handlePromise.md\"}]},{\"text\":\"快速搭建在线文档网站\",\"children\":[{\"text\":\"使用VuePress搭建在线文档网站\",\"link\":\"buildVuePress.md\"}]}],\"/html/\":[{\"text\":\"前端HTML面试题\",\"children\":[{\"text\":\"一、HTML 的 src 和 href 属性有什么区别？\",\"link\":\"index.md\"}]}],\"/express/\":[{\"text\":\"Express学习\",\"children\":[{\"text\":\"一、HTML 的 src 和 href 属性有什么区别？\",\"link\":\"index.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
