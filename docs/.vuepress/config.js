import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    base: "/orange-docs/",
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/images/house.png',
        navbar: [
            {
                text: "面试",
                children: [
                    {text: "vue2", link: "/vue2/index"},
                    {text: "vue3", link: "/vue3/index"},
                    {text: "webpack", link: "/webpack/index"},
                    {text: "html", link: "/html/index"},
                    {text: '其他', link: "/common/index"}
                ]
            },
            {
                text: "个人简介",
                link: 'https://frp.aitlin.top'
            },
            {
                text: "自定义工具函数库",
                link: '/tools/index'
            },
            {
                text: "node指南",
                link: '/node/index'
            },
            {
                text: "小技巧",
                link: '/tips/index'
            },
            // {
            //     text: "旅游",
            //     link: 'https://www.aitlin.top/sanya'
            // }
        ],
        sidebar: {
            '/vue2/': [
                {
                    text: 'vue2',
                    // 相对路径会自动追加子路径前缀
                    children: [
                        {
                            text: "基础面试题一",
                            link: "index.md"
                        },
                    ],
                },
            ],
            '/vue3/': [
                {
                    text: 'vue3',
                    // 相对路径会自动追加子路径前缀
                    children: [
                        'index.md',
                    ],
                },
            ],
            '/tools/': [
                {
                    text: '打包自定义工具库',
                    // 相对路径会自动追加子路径前缀
                    children: [
                        {
                            text: "1、创建工具包项目",
                            link: "create.md"
                        },
                        {
                            text: "2、发布到npm中央仓库",
                            link: "publish.md"
                        },
                        {
                            text: "3.使用自定义工具包",
                            link: "use.md"
                        }
                    ],
                },
                {
                    text: '各种自定义',
                    children: [
                        {
                            text: "1、函数相关",
                            link: "customize/function.md"
                        },
                        {
                            text: "2、数组相关",
                            link: "customize/array.md"
                        },
                        {
                            text: "3、对象相关",
                            link: "customize/object.md"
                        }, {
                            text: "4、字符串相关",
                            link: "customize/string.md"
                        }, {
                            text: "5、手写DOM事件监听（带委托）",
                            link: "customize/handleDomEvent.md"
                        }, {
                            text: "6、手写ajax请求函数",
                            link: "customize/handleAjax.md"
                        }, {
                            text: "7、手写事件总线",
                            link: "customize/handleEventBus.md"
                        }, {
                            text: "8、手写消息订阅与发布",
                            link: "customize/handlePubSub.md"
                        }, {
                            text: "9、手写Promise",
                            link: "customize/handlePromise.md"
                        }
                    ],
                },
                {
                    text: "快速搭建在线文档网站",
                    children: [
                        {
                            text: "使用VuePress搭建在线文档网站",
                            link: "buildVuePress.md"
                        },
                    ]
                }
            ],
            '/html/': [
                {
                    text: '前端HTML面试题',
                    // 相对路径会自动追加子路径前缀
                    children: [
                        {
                            text: "一、HTML 的 src 和 href 属性有什么区别？",
                            link: "index.md"
                        },
                    ],
                },
            ],
            '/common/': [
                {
                    text: '前端面试题',
                    // 相对路径会自动追加子路径前缀
                    children: [
                        {
                            text: "同步异步有什么区别？",
                            link: "async.md"
                        }, {
                            text: "首屏加载速度慢怎么解决？",
                            link: "speed.md"
                        }, {
                            text: "前端鉴权的几种方式？",
                            link: "Authentication.md"
                        }, {
                            text: "说说qiankun是咋回事？",
                            link: "qiankun.md"
                        },
                    ],
                },
            ],
            '/node/': [
                {
                    text: 'NodeJS',
                    children: [
                        {
                            text: "使用 nvm 安装 Node.js",
                            link: "install.md"
                        },
                        {
                            text: "编辑器与创建Express项目",
                            link: "express.md"
                        }, {
                            text: "项目结构与代码解析",
                            link: "project.md"
                        }, {
                            text: "使用Docker运行MySQL",
                            link: "docker_mysql.md"
                        }, {
                            text: "创建数据库与数据表",
                            link: "createDateBase.md"
                        }, {
                            text: "常用SQL语句一",
                            link: ""
                        }, {
                            text: "常用SQL语句二",
                            link: ""
                        }, {
                            text: "Sequelize ORM",
                            link: ""
                        }, {
                            text: "迁移与种子",
                            link: ""
                        }, {
                            text: "接口1",
                            link: ""
                        }, {
                            text: "接口2",
                            link: ""
                        },
                    ],
                },
                // {
                //     text: "1",
                //     children: [
                //         {
                //             text: "1",
                //             link: "install.md"
                //         },
                //     ]
                // }
            ],
            '/tips/': [
                {
                    text: '小技巧',
                    link: "index.md"
                },
                // {
                //     text: "1",
                //     children: [
                //         {
                //             text: "1",
                //             link: "install.md"
                //         },
                //     ]
                // }
            ],
        },
    }),
    lang: "zh-CN",
    title: '你好，求职者',
    description: "你已经被录取了",
    // head: [['link', {rel: 'icon', href: '/images/house.png'}]],
})
