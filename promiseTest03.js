var fs = require('fs')

/*
var p1 = new Promise(function(resolve,reject){
	fs.readFile('./a.txt','utf8',function(err,data){
		if(err){
			reject(err)
		}else{
			resolve(data)
		}
	})
})
*/


//封装 promise 读取文件内容

function pReadFile(filePath){
	return new Promise(function(resolve,reject){
		fs.readFile(filePath,'utf8',function(err,data){
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

pReadFile('./a.txt')
	.then(function(data){
		console.log(data)
		return pReadFile('./b.txt');
	})
	.then(function(data){
		console.log(data)
		return pReadFile('./c.txt')
	})
	.then(function(data){
		console.log(data)
	})
