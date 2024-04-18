export const list = [
    // {
    //     id:1,
    //     title:'基本信息',
    //     path:'/'
    // },
    {
        id:2,
        title:'首页',
        path:'/home'
    },
    {
        id:3,
        title:'常用工具',
        path:'/tools'
    },
    {
        id:4,
        title:'vue',
        children:[
            {
                id:41,
                title:'vue2',
                path:'/vue2'
            },
            {
                id:42,
                title:'vue3',
                path:'/vue3'
            }
        ]
    },
    {
        id:5,
        title:'react',
        path:'/react'
    },
    {
        id:6,
        title:'其它',
        // path:'/other',
        children:[
            {
                id:61,
                title:'3D',
                path:'/three'
            }
        ]
    }
]