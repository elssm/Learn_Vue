//1.Promise是一个构造函数，既然是构造函数，我们可以new Promise()得到
//2.在Promise上，有两个函数，分别叫做resolve（成功之后的回调函数）和reject（失败之后的回调函数）
//3.在Promise构造函数的Prototype属性上，有一个.then()方法，也就是说，只要是Promise构造函数
//创建的实例，都可以访问.then()方法
//4.Promise表示一个异步操作，每当我们new一个Promise的实例，就表示一个具体的异步操作
//5.既然Promise创建的实例是一个异步操作，那么这个异步操作的结果，只能有两种状态：
//5.1 状态1:异步执行成功了，需要在内部调用成功的回调函数 resolve 
//5.2 状态2:异步执行失败了，需要在内部调用失败的回调函数 reject
//5.3 由于Promise的实例，是一个异步操作，所以，内部拿到操作的结果后，无法使用return把
//操作的结果返回给调用者，只能使用回调函数的形式，把成功或失败的结果，返回给调用者
//6.我们可以在new出来的Promise实例上，调用.then()方法，预先为这个Promise异步操作，指定成功（resolve）和失败（reject）回调函数


//注意：这里new出来的promise只是代表[形式上]的一个异步操作
// var promise = new Promise()

// var promise = new Promise(function(){
//     //这个function内部写的就是具体的异步操作

// })

const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

//每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
//也就是说，new的时候除了能够得到一个promise实例之外，还会立即调用我们为Promise构造函数
//传递的那个function，执行这个function中的异步操作代码
// var promise = new Promise(function(){
//     fs.readFile('2.txt','utf-8',(err,dataStr)=>{
//         if(err) throw err
//         console.log(dataStr)
//     })
// })


function getFileByPath(fpath){
 return promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if(err) return reject(err)
            resolve(dataStr)
        })
    })

}

getFileByPath('2.txt')
    .then(function(data){
        console.log(data+ '-----')
    },function(err){
        console.log(err.message)
    })