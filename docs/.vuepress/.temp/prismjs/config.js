import "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
