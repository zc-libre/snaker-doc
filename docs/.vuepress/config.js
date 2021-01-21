module.exports = {
    // 插件
    plugins: {
        "@vuepress/medium-zoom": true,
        "@vuepress/nprogress": true, //网页加载进度条
        "@vuepress/plugin-back-to-top": true, //返回页面顶部按钮
    },
    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: 'small.png' }]
    ],
    // 网站标题及描述
    theme: 'reco',
    title: 'snakerflow',
    description: '简单、轻巧、灵活的工作流引擎',
    base: '/snaker-doc/',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 3,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        subSidebar: 'auto',
        logo: 'snaker.png',
        author: 'zhao.cheng',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        // 项目开始时间，只填写年份
        startYear: '2021',
        nav: [
            { text: '项目指南', link: '/guide/', icon: 'reco-document'},
            // 下拉列表
            {
                text: 'Github',
                items: [
                    {
                        text: '原项目源码',
                        link: 'https://github.com/snakerflow/snakerflow'
                    },
                    {
                        text: 'springboot源码',
                        link: 'https://github.com/zc-libre/snakerflow-spring-boot-stater'
                    },
                ],
                icon: 'reco-github'
            },
            {
                text: 'Gitee',
                items: [
                    {
                        text: '原项目源码',
                        link: 'https://github.com/snakerflow/snakerflow'
                    },
                    {
                        text: 'springboot源码',
                        link: 'https://github.com/zc-libre/snakerflow-spring-boot-stater'
                    },
                ],
                icon: 'reco-mayun'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '快速入门',
                    collapsable: false,
                    children: [
                        '/guide/quick-start',
                        '/guide/flow-design',
                        '/guide/flow-deploy',
                        '/guide/flow-start',
                        '/guide/task-execute'
                    ]
                },
                {
                    title: '应用整合',
                    collapsable: false,
                    children: [
                        '/guide/app',
                        '/guide/API',
                        '/guide/Spring',
                        '/guide/Jfinal',
                        '/guide/Nutz'
                    ]
                },
                {
                    title: '详细说明',
                    collapsable: false,
                    children: [
                        '/guide/table',
                        '/guide/database',
                        '/guide/snaker-engine',
                        '/guide/process',
                        '/guide/model',
                        '/guide/instance',
                        '/guide/active-task',
                        '/guide/varible',
                        '/guide/task-actor',
                        '/guide/interceptor',
                        '/guide/surrogate',
                        '/guide/decision',
                        '/guide/chirdren',
                        '/guide/timer',
                        '/guide/cc-order',
                        '/guide/performType',
                        '/guide/custom',
                        '/guide/remove',
                        '/guide/query'
                    ]
                },
            ]
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'zc-libre/snaker-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',

        docsBranch: "main",
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    }
}
