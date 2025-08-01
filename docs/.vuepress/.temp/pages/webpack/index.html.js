import comp from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/webpack/index.html.vue"
const data = JSON.parse("{\"path\":\"/webpack/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1753956235000,\"contributors\":[{\"name\":\"zhangcheng\",\"username\":\"zhangcheng\",\"email\":\"2778162192@qq.com\",\"commits\":3,\"url\":\"https://github.com/zhangcheng\"}],\"changelog\":[{\"hash\":\"c137704769dbc645c66e81b69597cb2c82b901c6\",\"time\":1753956235000,\"email\":\"2778162192@qq.com\",\"author\":\"zhangcheng\",\"message\":\"commit\"},{\"hash\":\"8d7eaced583f96a07d61b0adc21a409cd5c5ad52\",\"time\":1753956231000,\"email\":\"2778162192@qq.com\",\"author\":\"zhangcheng\",\"message\":\"commit\"},{\"hash\":\"37d0a3d3e8d6242091d3a06fc98a2a11418c72e8\",\"time\":1753945934000,\"email\":\"2778162192@qq.com\",\"author\":\"zhangcheng\",\"message\":\"commit\"}]},\"filePathRelative\":\"webpack/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
