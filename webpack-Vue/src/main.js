//如何在webpack构建的项目中使用Vue进行开发

//在webpack中尝试使用Vue
//注意在webpack中使用import Vue from 'vue'导入的Vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页那样的使用方式
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'
//回顾包的查找规则：
//1.找项目根目录中有没有node_modules的文件夹
//2.在node_modules中根据包名，找对应的vue文件夹
//3.在vue文件夹中，找一个叫做package.json的包配置文件
//4.在package.json文件中，查找一个main属性

// var login = {
//     template:'<h1>这是一个登录组件</h1>'
// }


//导入login组件
import login from './login.vue'
//默认webpack无法打包vue文件，需要安装相关loader
//npm install vue-loader vue-template-compiler -D
//在配置文件中，新增loader配置项 {test:/\.vue$/,use:'vue-loader'}

var vm=new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }

    // render:function(createElements){ //在webpack中如果想要通过vue把一个组件放到页面中去展示，vue实例中的render函数可以实现
    //     return createElements(login)
    // }

    render:c=> c(login)
})

import m1,{title as title123,content} from './test.js'
console.log(m1)
console.log(title123 + '----' +content)