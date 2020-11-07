import Vue from 'vue'

//导入vue-router包
import VueRouter from 'vue-router'

import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import './lib/mui/css/mui.css'

//导入所有的MintUI组件
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)


//按需导入我们的Mint-UI组件
import { Button } from 'mint-ui'
//使用Vue.component注册按钮组件
Vue.component('mybtn',Button)


//手动安装VueRouter
Vue.use(VueRouter)

import app from './App.vue'


import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),//render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-view和router-link直接写到el控制的元素中

    router  //将路由对象挂载到vm上

})