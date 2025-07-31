import comp from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/webpack/index.html.vue"
const data = JSON.parse("{\"path\":\"/webpack/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1753945934000,\"contributors\":[{\"name\":\"zhangcheng\",\"email\":\"2778162192@qq.com\",\"commits\":1}]},\"filePathRelative\":\"webpack/index.md\"}")
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
