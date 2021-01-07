import axios from "axios";
import store from "@/store";

const axiosInstance = axios.create({
    baseURL:'http://localhost:9999/cms/',
    timeout:10000
})
//请求拦截器配置
axiosInstance.interceptors.request.use(config=>{
    if (store.state.token){
        config.headers['token'] = store.state.token
    }
    return config;
},error => {
    return Promise.reject(error);
})


//响应拦截器配置
axiosInstance.interceptors.response.use(response=>{
    let token = response.headers['token']
    if(token){
        store.commit('setToken',token)
    }
    //获取后端返回的对象
    const res = response.data
    if (response.status == 200){
        //数据正常
        if(res.code == 0){
            return res;
        }else {
            return Promise.reject(res.msg)
        }
    }
},error => {
    return Promise.reject(error)
})




export default axiosInstance