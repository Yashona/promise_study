var fs = require('fs')

//创建一个Promise容器
//Promise 容器一旦创建就开始执行里面的代码
var p1 = new Promise(function(resolve,reject){
	//里面的的任务开始执行，即 Pending 执行 ，执行的结果只有两个 成功：resolved 失败：rejected
	fs.readFile('./a.txt', 'utf8', function(err,data){
		if(err){
			//失败调用 reject()
			reject(err)  //失败，即把容器的 Pending 状态变为 Rejected
		}else{
			//成功调用 resolve()
			resolve(data)  //成功，即把容器的 Pending 状态变为 Resolved
		}
	})
})

//p1就是容器
//容器 p1成功了 然后（then）做指定的操作
// then 方法中第一个 function 中的参数 data 对应的就是 p1 容器中的任务 成功 后 resolve 的函数
// then 方法中第二个 function 中的参数 err 对应的就是 p1 容器中的任务 失败 后 reject 的函数
p1
	.then(function(data){
		console.log(data); // 输出a.txt中的内容
	},function(err){
		console.log('读取文件失败了！',err) //失败后返回失败信息
	})



//查询 b.txt
var p2 = new Promise(function(resolve,reject){
	fs.readFile('./b.txt', 'utf8', function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

p2
	.then(function(data){
		console.log(data);
	},function(err){
		console.log('读取文件失败了！',err)
	})

//查询 c.txt
var p3 = new Promise(function(resolve,reject){
	fs.readFile('./c.txt', 'utf8', function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})

p3
	.then(function(data){
		console.log(data);
	},function(err){
		console.log('读取文件失败了！',err)
	})
