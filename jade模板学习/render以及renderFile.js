var http = require('http');
var jade = require('jade');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});//换成text/html 就可编译html格式代码
	//1.jade.compile
//		var fn = jade.compile('div #{couse}',{});
//		var html = fn({couse:'jade'});
	//2. jade.render
		//var html = jade.render('div #{couse}',{couse:'jade'});
	//3. jade.renderFile
		var html = jade.renderFile('index.jade',{couse:'jade renderFile',pretty:true});//pretty:格式化输出
	
	res.end(html);
}).listen(1337,'127.0.0.1');
console.log('1377');
