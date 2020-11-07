//这是node中向外暴露成员的形式：
// module.exports = {

// }

//在ES6中，也通过规范的形式，规定了ES6中如何导入和导出模块
//ES6中导入模块，使用 import 模块名称 from '模块标识符'  import '表示路径' 
//在ES6中使用export default和export向外暴露成员


//在node中使用var 名称 = require('模块标识符')
//module.exports和exports来暴露成员
var info ={
    name:'zs',
    age:20
}

export default info

// export default{
//     address:'北京'
// }


//注意：export default向外暴露的成员，可以使用任意的变量来接收
//注意：在一个模块中，export default只允许向外暴露一次
//在一个模块中，可以同时使用export default和export向外暴露成员


export var title = '小星星'
export var content = '哈哈哈'
//注意：使用export向外暴露的成员只能使用{}的形式来接收，这种形式叫做按需导出
//注意：export可以向外暴露多个成员，同时，如果某些成员，我们在import的时候不需要，可以不在{}中定义
//注意：使用export导出的成员，必须严格按照导出时候的名称，来使用{}按需导出
//注意：使用export导出的成员，如果就想换个名称来接收，可以使用as来起别名