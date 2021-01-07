const data = [
    {
        name:"功能菜单",
        icon:'el-icon-s-home',
        children:[
            {
                name:'用户管理',
                icon: 'el-icon-caret-right',
                route:'/user'
            },
            {
                name:'栏目管理',
                icon: 'el-icon-caret-right',
                route:'/channel'
            },
            {
                name:'标签管理',
                icon: 'el-icon-caret-right',
                route:'/tag'
            },
            {
                name:'文章管理',
                icon: 'el-icon-caret-right',
                route:'/article'
            },
            {
                name:'评论管理',
                icon: 'el-icon-caret-right',
                route:'/comment'
            },
            {
                name:'友情链接',
                icon: 'el-icon-caret-right',
                route:'/friend'
            }
        ]
    }
]

export default data