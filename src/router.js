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
import Article from "./views/admin/article/index";
import ArticleAdd from "./views/admin/article/add";
import ArticleEdit from "./views/admin/article/edit";
import Comment from "./views/admin/comment/index";
import UserInfo from "@/views/admin/user/info";

Vue.use(VueRouter)



const router = new VueRouter({
    routes:[
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


export default router