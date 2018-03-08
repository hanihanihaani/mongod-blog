const mongoose = require("mongoose");

const ArticalSchema = mongoose.Schema({
	//可以使用USer的ObjectId，也可以使用USer的username
	// author:{
	// 	type:mongoose.Schema.Types.ObjectId,
	// 	ref:"user",
	// },
	author: {
		type:String,
	},
	title:String,
	content:String,
	createAt:{
		type:Date,
		default:Date.now,
	},
})

const ArticalModel = mongoose.model("artical",ArticalSchema,"artical");

module.exports = ArticalModel;