//需求：封装一个方法，给你一个要读取文件的路径，这个方法能帮我读取文件，并把内容返回

const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname,'1.txt'),'utf-8',(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr)
// })


//给定文件路径，返回读取到的内容
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return callback(err)
        // console.log(dataStr)
        callback(null,dataStr)
    })
}

// var result = getFileByPath(path.join(__dirname,'1.txt'))
// console.log(result)

var result = getFileByPath(path.join(__dirname,'1.txt'),(err,dataStr)=>{
    // console.log(dataStr)
    if(err) return console.log(err.message)
    console.log(dataStr)
})