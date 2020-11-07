//这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象

const path = require('path');
const webpack = require('webpack');
//导入在内存中生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',//入口，表示要使用webpack打包哪个文件
    mode: "development",
    devServer: {
    contentBase: './src',
    hot:true,
    open:true,
    // open:true,
    port:3000
  },
    output:{
        path:path.resolve(__dirname,'dist'),     //指定，打包好的文件，输出到哪个目录中去
        filename:'bundle.js'    //这是指定输出的文件的名称
    },
    plugins:[ //配置插件的节点
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象
        new htmlWebpackPlugin({     //创建一个在内存中生成HTML页面的插件
            template:path.join(__dirname,'./src/index.html'),   //指定模版页面，将来会根据指定的页面路径，生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称

        })
    ],
    module:{    //这个节点用于配置所有第三方模块加载器
        rules:[ //所有第三方模块的匹配规则
            { test: /\.css$/,use:['style-loader','css-loader'] }, //配置处理.css文件的第三方loader规则
            { test: /\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader规则
            { test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.scss文件的第三方loader规则
            { test: /\.(jpg|png|jpeg|gif|bmp)$/,use:'url-loader?limit=42760&name=[hash:8]-[name].[ext]'},//配置处理图片路径的loader规则
            //limit值大于图片大小会进行base64编码，单位是byte

            { test: /\.(ttf|eot|svg|woff|woff2)/,use:'url-loader'}, //处理字体文件的loader配置项
            { test: /\.js$/,use:'babel-loader',exclude:/node_modules/}, //配置babel来转换高级的ES语法
            {test:/\.vue$/,use:'vue-loader'} //处理.vue文件的loader
        ]

    },
    resolve:{
        alias:{ //设置vue被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}