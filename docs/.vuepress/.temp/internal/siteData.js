export const siteData = JSON.parse("{\"base\":\"/orange-docs/\",\"lang\":\"zh-CN\",\"title\":\"你好，求职者\",\"description\":\"你已经被录取了\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"你好，求职者\",\"description\":\"你已经被录取了\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
