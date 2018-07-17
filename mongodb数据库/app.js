var http = require("http");
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var Movie = require('./model/movie.js');//引入模型
mongoose.connect('mongodb://localhost/test');
//初始化
var app = express();

//设置我的静态资源存放的位置(它会自动寻找index文件)
app.use(express.static(__dirname + "/public"));
//设置网页的icon图标
app.use(express.favicon());
//设置控制台的输出记录
app.use(express.logger("dev"));
//设置开发者环境
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, "/public")));

if ('development' == app.get("env")) {
	app.use(express.errorHandler());
}
//创建服务器
http.createServer(app).listen(8001, function() {
	console.log("当前您设置的端口号为" + 8001);
});
app.post('/index',function(req,res){
	var id = 1;
	Movie.fetch(function(err,data){
		if(err){
			console.log(err);
		}
		console.log('data'+data);
		res.send(data);
	})
	
//	var movie = new Movie({
//		user:'张三',
//		pwd:123
//	});
//	console.log(movie);
//	movie.save(function(err,data){
//		if(err){
//			console.log(err);
//		} 
//		res.send(data);
//	})
	
});
