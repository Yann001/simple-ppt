require('./connect');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// 定义模式loginSchema
const loginSchema = new Schema({
	account : String,
  password : String
}, {
  versionKey: false
});

// 定义模式registrySchema
const registrySchema = new Schema({
	account : String,
  password : String,
  sex : Boolean,
  birthday : Date,
  tel : String,
  email : String
}, {
  versionKey: false
});

// 定义模式pptSchema
const pptSchema = new Schema({
  ppt_uid:String,
  ppt_page: Number,
  ppt_title: String,
  ppt_content: String
}, {
  versionKey: false
});

const Models = {
	// 定义模型loginModel，数据库存的是logins
	loginModel : mongoose.model("login", loginSchema),
	// 定义模型registryModel，数据库存的是registrys
	registryModel : mongoose.model("registry", registrySchema),
  // 定义模型pptModel，数据库存的是registrys
  pptModel : mongoose.model("ppt", pptSchema)
}

module.exports = Models;

/*mongoose.Schema({
  username: {// 真实姓名
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  }
});*/

