var fs = require('fs')


//查询 b.txt
var p1 = new Promise(function(resolve,reject){
	fs.readFile('./a.txt', 'utf8', function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

var p2 = new Promise(function(resolve,reject){
	fs.readFile('./b.txt', 'utf8', function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

var p3 = new Promise(function(resolve,reject){
	fs.readFile('./c.txt', 'utf8', function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})



//异步调用 then 的链式编程

p1
	.then(function(data){
		console.log(data);
		//当前函数中 return 的结果，可以被后面的 then 中 function 中参数 data 接收到
		// return 123
		//当前函数中,return 什么，后面就接收什么；没有 return ，后面所接收到的就是 undefined
		// return 'hello'
		//但是，当此函数 return 的是一个 Promise 对象的时候，后面的 then 中 function 中的第一个参数 会接收到 p2 的 resolve
		return p2; 
	},function(err){
		console.log('读取文件失败了！',err)
	})
	.then(function(data){  //当 p2 执行错误后，后面的 return p3 将不会执行，即第三个 then 的 function 中输出 data为 undefined
		console.log(data);
		return p3;
	},function(err){
		console.log(err)
	})
	.then(function(data){
		console.log(data)
	})
