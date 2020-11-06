//这个main.js是我们项目的JS入口文件

//1.导入Jquery
//import *** from ***是ES6中导入模块的方式
//由于ES6的代码太高级，浏览器解析不了，所以这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')

import './css/index.css'
import './css/index.less'
import './css/index.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
//注意：webpack默认只能打包处理JS类型的文件，无法处理其他的非JS类型文件
//如果要处理非JS类型的文件，需要手动安装一些合适的第三方loader加载器
//1.如果想要打包处理css文件，需要安装style-loader css-loader -D
//2.打开webpack.config.js这个配置文件，新增一个配置节点，叫做module,
//在这个module对象身上，有一个rules属性，这个rules属性是一个数组
//这个数组中存放了所有第三方文件的匹配和处理规则

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

//1.webpack能够处理JS文件的互相依赖关系
//2.webpack能够处理JS的兼容问题，把高级的，浏览器不识别的语法，转为低级的，浏览器能够识别的语法
//3.webpack-dev-server帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上，而是直接托管到了
//电脑的内存中，所以我们在项目根目录中，根本找不到这个打包好的bundle.js
//4.我们可以认为webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到了咱们的项目的根目录中，虽然我们
//看不到它，但是可以认为和dist src node_modules平级，有一个看不见的文件叫做bundle.js

class Person{
    static info = {name:"zs",age:20}
}
console.log(Person.info)
//在webpack中默认只能处理一部分ES6的新语法，一些更高级的语法webpack处理不了
//这时候需要借助第三方的loader，来帮助webpack处理这些高级的语法，当第三方loader
//把高级语法转为低级语法之后，会把结果交给webpack去打包到bundle.js

//通过Babel，可以帮我们把高级的语法转为低级的语法
//1.1 npm install babel-core babel-loader babel-plugin-transform-runtime -D
//1.2 npm install babel-preset-env babel-preset-stage-0 -D
//2 打开webpack配置文件，在module节点下的rules数组中，添加一个新的匹配规则
//{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//3.在项目的根目录中新建一个叫做.babelrc的Babel配置文件，这个配置文件属于JSON格式。
//所以在写.babelrc配置的时候，必须符合JSON语法规范（不能写注释，字符串必须双引号）
//3.1 在.babelrc中写如下的配置
        // {
        //     "presets":["env","stage-0"],
        //     "plugins":["transform-runtime"],
        // }