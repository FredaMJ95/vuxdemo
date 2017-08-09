import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import axios from 'axios'
import Scroller from 'vue-scroller'

// 引入vuerouter
Vue.use(VueRouter)

// 引入下拉刷新插件
Vue.use(Scroller)

// 引入axios进行ajax调用

// 引入公用的组件，防止页面多次引入相同组件的时候造成运行内存过大
import { AlertPlugin, Cell, Group, Flexbox, FlexboxItem, Tabbar, TabbarItem, XInput, XButton } from 'vux'
Vue.use(AlertPlugin)
Vue.component("Cell", Cell);
Vue.component("Group", Group);
Vue.component("Flexbox", Flexbox);
Vue.component("FlexboxItem", FlexboxItem);
Vue.component("Tabbar", Tabbar);
Vue.component("TabbarItem", TabbarItem);
Vue.component("XInput", XInput);
Vue.component("XButton", XButton);

FastClick.attach(document.body);

Vue.config.productionTip = false

// 引入全局的rem
import './common/rem.js';
// 引入全局css
import './common/public.css';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')