import Vue from 'vue'
import VueRouter from "vue-router";
import login from "@/views/admin/login";
import index from "@/views/admin/index";
import User from "@/views/admin/user/index";
import Tag from "./views/admin/tag/index";
import Channel from "./views/admin/channel/index";
import FriendLink from "./views/admin/friendlink/index";
import Article from "./views/admin/article/index";
import Comment from "./views/admin/comment/index";

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
                    path:'/user',
                    name:'user',
                    component:User
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
                    path:'/comment',
                    name:'comment',
                    component:Comment
                }
            ]
        }
    ]
})


export default router