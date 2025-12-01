import comp from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/docs/.vuepress/.temp/pages/common/qiankun.html.vue"
const data = JSON.parse("{\"path\":\"/common/qiankun.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764566525000,\"contributors\":[{\"name\":\"zhangcheng\",\"username\":\"zhangcheng\",\"email\":\"2778162192@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhangcheng\"}],\"changelog\":[{\"hash\":\"f21c7cfde87fd7cb460c29c874ea575471faca54\",\"time\":1764566525000,\"email\":\"2778162192@qq.com\",\"author\":\"zhangcheng\",\"message\":\"commit\"}]},\"filePathRelative\":\"common/qiankun.md\"}")
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
