import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "@/store";
import './assets/css/admin.css'
import utils from '@/utils'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.utils = utils
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
