const fs = require('fs')

function getFileByPath(fpath){
    return promise = new Promise(function(resolve,reject){
           fs.readFile(fpath,'utf-8',(err,dataStr)=>{
               if(err) return reject(err)
               resolve(dataStr)
           })
       })
   
   }

//先读取文件1，再读取文件2，最后读取3
//注意：通过.then指定回调函数的时候，成功的回调函数必须传，但是失败的回调，可以不传

//读取文件1
//在上一个.then中，返回一个新的promise实例，可以继续用在下一个.then来处理

//如果前面的Promise执行失败，我们不想让后续的Promise操作被终止，可以为每个promise指定失败的回调
// getFileByPath('11.txt')
// .then(function(data){
//     console.log(data)

//     //读取文件2
//     return getFileByPath('2.txt')
// },function(err){
//     console.log('这是失败的结果' + err.message)
//     return getFileByPath('2.txt')
// })
// .then(function(data){
//     console.log(data)

//     return getFileByPath('3.txt')
// })
// .then(function(data){
//     console.log(data)
// })

// console.log('OKOKOK')





//如果后续的Promise执行依赖于前面Promise执行的结果，如果前面的失败了，则后面的就没有继续
//执行下去的意义了，此时我们想要实现，一旦有报错，则立即终止所有Promise的执行
getFileByPath('1.txt')
.then(function(data){
    console.log(data)

    //读取文件2
    return getFileByPath('22.txt')
})
.then(function(data){
    console.log(data)

    return getFileByPath('3.txt')
})
.then(function(data){
    console.log(data)
})

.catch(function(err){   //catch的作用：如果前面有任何的Promise执行失败，则立即终止
    //所有promise的执行，并马上进入catch处理Promise中抛出的异常。
    console.log('这是自己的处理方式' + err.message) 
})

 