var mongoose = require('mongoose');
var schemas = require('./../scheme/movie.js');
var Movie = mongoose.model('schema',schemas);
	

module.exports = Movie;//导出模型