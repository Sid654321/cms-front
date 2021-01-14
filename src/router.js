import Vue from 'vue'
import VueRouter from "vue-router";
import login from "@/views/admin/login";
import index from "@/views/admin/index";
import User from "@/views/admin/user/index";
import Tag from "./views/admin/tag/index";
import Channel from "./views/admin/channel/index";
import ChannelAdd from "./views/admin/channel/add";
import ChannelEdit from "./views/admin/channel/edit";
import FriendLink from "./views/admin/friendlink/index";
import FriendLinkAdd from "./views/admin/friendlink/add";
import FriendLinkEdit from "./views/admin/friendlink/edit";
import Article from "./views/admin/article/index";
import ArticleAdd from "./views/admin/article/add";
import ArticleEdit from "./views/admin/article/edit";
import Comment from "./views/admin/comment/index";
import UserInfo from "@/views/admin/user/info";

import FIndex from './views/front/Index'
import List from './views/front/List'
import Detail from './views/front/Detail'
import ChannelDetail from './views/front/ChannelDetail'
import TagList from './views/front/TagList'
import token from "@/token";

Vue.use(VueRouter)



const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'fIndex',
            component:FIndex,
            meta:{
                requireLogin:false
            }
        },
        {
            path:'/list/:id',
            name:'list',
            component:List,
            meta:{
                requireLogin:false
            }
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:Detail,
            meta:{
                requireLogin:false
            }
        }
        ,{
            path:'/channel_detail/:id',
            name:'channel_detail',
            component:ChannelDetail,
            meta:{
                requireLogin:false
            }
        },{
            path:'/tag_list/:id',
            name:'tag_list',
            component:TagList,
            meta:{
                requireLogin:false
            }
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/index',
            name:'index',
            component:index,
            children:[
                {
                    path:'/user',
                    name:'user',
                    component:User
                },
                {
                    path:'/tag',
                    name:'tag',
                    component:Tag
                },
                {
                    path:'/channel',
                    name:'channel',
                    component:Channel
                },
                {
                    path:'/channel_add',
                    name:'channel_add',
                    component:ChannelAdd
                },
                {
                    path:'/channel_edit',
                    name:'channel_edit',
                    component:ChannelEdit
                },
                {
                    path:'/friend',
                    name:'friend',
                    component:FriendLink
                },
                {
                    path:'/friend_add',
                    name:'friend_add',
                    component:FriendLinkAdd
                },
                {
                    path:'/friend_edit',
                    name:'friend_edit',
                    component:FriendLinkEdit
                },
                {
                    path:'/article',
                    name:'article',
                    component:Article
                },
                {
                    path:'/article_add',
                    name:'article_add',
                    component:ArticleAdd
                },
                {
                    path:'/article_edit',
                    name:'article_edit',
                    component:ArticleEdit
                },
                {
                    path:'/comment',
                    name:'comment',
                    component:Comment
                },
                {
                    path:'/info',
                    name:'info',
                    component:UserInfo
                }

            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(!to.matched.some(r=>r.meta.requireLogin)){
        next();
    }else{
        if(token.get()){
            next()
        }else{
            if(to.path === '/login'){
                next()
            }else{
                next('/login')
            }
        }
    }
})


export default router