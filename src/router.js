import Vue from 'vue'
import VueRouter from "vue-router";
import login from "@/views/admin/login";
import index from "@/views/admin/index";

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
            component:index
        }
    ]
})


export default router