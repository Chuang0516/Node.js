const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1、连接数据库
// 指定连接的数据库不一定存在
mongoose.connect('mongodb://localhost/wecreate');

// 2、设计文档结构
// 字段名称就是表结构中的名称
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  emile: {
    type: String,
  },
});

// 3、将文档架构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 Model
//    第一个参数：传入一个大写名词单数字符串，用来表示数据库名称
//               mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称，例如 User 最终会变成 users 集合名称
//    第二个参数：架构 Schema

//    返回值：模型构造函数
const User = mongoose.model('User', userSchema);

// 新增数据;
// const admin = new User({
//   username: '李四',
//   password: '1234567',
//   emile: '123@qq.com',
// });

// admin.save().then(ret => {
//   ret ? console.log('存储成功' + '\n' + ret) : console.log('存储失败');
// });

// 查询数据
User.find().then(ret => {
  ret ? console.log(ret) : console.log('查询失败');
});

// 删除数据
// User.remove({
//   username: '李四',
// }).then(ret => {
//   ret ? console.log('删除成功') : console.log('删除失败');
// });

// 更新数据
// User.findByIdAndUpdate('61d819a6139ccecbcce4c8f8', {
//   password: '123',
// }).then(ret => {
//   ret ? console.log('更新成功') : console.log('更新失败');
// });
