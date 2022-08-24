import Vue from 'vue';

// import vueCompositionApi from '@vue/composition-api';
// Vue.use(vueCompositionApi)

// 全局完整引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import App from './App.vue'

new Vue({
    render: function (h) { return h(App) },
}).$mount('#app')