import { GitContributors } from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/zhangcheng/Desktop/All_In_One/orange-docs/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
