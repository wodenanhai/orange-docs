import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    base: "/orange-docs/",
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/images/house.png',
        editLink: false,
        lastUpdated: true,
        contributors: false,
        colorModeSwitch: true,
        colorMode: 'auto',
        navbar: [
            {
                text: "面试题",
                children: [
                    {text: "Vue2", link: "/vue2/index"},
                    {text: "Vue3", link: "/vue3/index"},
                    {text: "Webpack", link: "/webpack/index"},
                    {text: "HTML 基础", link: "/html/index"},
                    {text: '综合专题', link: "/common/index"}
                ]
            },
            {
                text: "工具库",
                link: '/tools/index'
            },
            {
                text: "Node",
                link: '/node/index'
            },
            {
                text: "技巧",
                link: '/tips/index'
            }
        ],
        sidebar: {
            '/vue2/': [
                {
                    text: 'Vue2 面试专题',
                    children: [
                        {
                            text: "面试题",
                            link: "index.md"
                        },
                    ],
                },
            ],
            '/vue3/': [
                {
                    text: 'Vue3 面试专题',
                    children: [
                        'index.md',
                    ],
                },
            ],
            '/webpack/': [
                {
                    text: 'Webpack 工程化',
                    children: [
                        {
                            text: '面试题',
                            link: 'index.md'
                        }
                    ]
                }
            ],
            '/tools/': [
                {
                    text: '工具库发布',
                    children: [
                        {
                            text: "创建项目",
                            link: "create.md"
                        },
                        {
                            text: "发布到 npm",
                            link: "publish.md"
                        },
                        {
                            text: "项目使用",
                            link: "use.md"
                        }
                    ],
                },
                {
                    text: '高频手写实现',
                    children: [
                        {
                            text: "函数",
                            link: "customize/function.md"
                        },
                        {
                            text: "数组",
                            link: "customize/array.md"
                        },
                        {
                            text: "对象",
                            link: "customize/object.md"
                        }, {
                            text: "字符串",
                            link: "customize/string.md"
                        }, {
                            text: "DOM 事件监听",
                            link: "customize/handleDomEvent.md"
                        }, {
                            text: "Ajax 请求",
                            link: "customize/handleAjax.md"
                        }, {
                            text: "事件总线",
                            link: "customize/handleEventBus.md"
                        }, {
                            text: "发布订阅",
                            link: "customize/handlePubSub.md"
                        }, {
                            text: "Promise",
                            link: "customize/handlePromise.md"
                        }
                    ],
                },
                {
                    text: "文档搭建",
                    children: [
                        {
                            text: "VuePress 入门",
                            link: "buildVuePress.md"
                        },
                    ]
                }
            ],
            '/html/': [
                {
                    text: 'HTML 面试专题',
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
                    text: '前端综合专题',
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
                    text: '基础与项目',
                    children: [
                        {
                            text: "安装 Node.js",
                            link: "install.md"
                        },
                        {
                            text: "创建 Express 项目",
                            link: "express.md"
                        }, {
                            text: "项目结构",
                            link: "project.md"
                        }
                    ],
                },
                {
                    text: '数据库与 ORM',
                    children: [
                        {
                            text: "Docker + MySQL",
                            link: "docker_mysql.md"
                        }, {
                            text: "数据库与数据表",
                            link: "createDateBase.md"
                        }, {
                            text: "SQL 基础一",
                            link: "curd.md"
                        }, {
                            text: "SQL 基础二",
                            link: "curd2.md"
                        }, {
                            text: "Sequelize",
                            link: "sequelize.md"
                        }, {
                            text: "模型/迁移/种子",
                            link: "model"
                        }, {
                            text: "Prisma",
                            link: "prisma"
                        }
                    ],
                },
                {
                    text: '接口实战',
                    children: [
                        { text: "接口 1", link: "api1.md" },
                        { text: "接口 2", link: "api2" },
                        { text: "数据分页", link: "api7" },
                        { text: "白名单过滤", link: "api8" },
                        { text: "增删改查优化", link: "api9" },
                        { text: "数据库设计", link: "database" }
                    ]
                }
            ],
            '/tips/': [
                {
                    text: '效率技巧',
                    link: "index.md"
                }
            ],
        },
    }),
    lang: "zh-CN",
    title: 'Orange Docs',
    description: "面向前端成长的面试知识库、工具沉淀与 Node 实战指南",
    head: [['link', {rel: 'icon', href: '/orange-docs/images/house.png'}]],
})
