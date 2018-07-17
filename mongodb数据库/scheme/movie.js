//Schema 模式 --定义字段
 	var mongoose = require('mongoose');
	var schemas = new mongoose.Schema({ //schemas ---数据库名
		user:String,
		pwd:Number,
		meta:{
		    createAt:{
		        type:Date,
		        default:Date.now()
		    },
		    updateAt:{
		        type:Date,
		        default:Date.now()
		    }
		}
	})
	//每次存数据的时候判断是否是新数据--赋值新增时间/更新时间
	schemas.pre('save',function(next){
		if(this.isNew){
		    this.meta.createAt = this.meta.updateAt = Date.now();
		}else{
		    this.meta.updateAt = Date.now()
		}
		
		next();//才会执行下去
	})
	schemas.statics = { //执行回调
		fetch:function(cb){
			return this
				.find({})
				.exec(cb)  //执行回调
		},
		findById:function(id,cb){
			return this
				.findOne({_id:id})
				.exec(cb)  //执行回调
		}
	}
	module.exports = schemas; //导出模式
