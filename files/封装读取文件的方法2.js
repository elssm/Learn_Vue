
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath,succCb,errCb){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return errCb(err)
        succCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname,'1.txt'),function(data){
//     console.log(data + '--- 成功了！')
// },function(err){
//     console.log('失败的结果' + err.message)
// })


//需求：先读取文件1，再读取文件2，再读取文件3
//使用ES6中的Promise来解决回调地狱的问题： 
getFileByPath(path.join(__dirname,'1.txt'),function(data){
    console.log(data)

    getFileByPath(path.join(__dirname,'2.txt'),function(data){
        console.log(data)

        getFileByPath(path.join(__dirname,'3.txt'),function(data){
            console.log(data)
        })
    })
})