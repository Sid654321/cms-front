import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "@/store";
import './assets/css/admin.css'
import utils from '@/utils'
//tree
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

//markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
VMdPreview.use(githubTheme)
Vue.use(VMdPreview);

import 'swiper/swiper-bundle.css'
Vue.use(Treeselect)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.utils = utils

Vue.directive('title',{
  update(dom){
    document.title = dom.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
