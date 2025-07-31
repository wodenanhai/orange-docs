import { CodeTabs } from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
