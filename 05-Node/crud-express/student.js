const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wecreate');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  age: {
    type: Number,
    required: true,
  },
  hobbies: {
    type: String,
  },
});

// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema);
