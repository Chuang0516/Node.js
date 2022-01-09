const mongoose = require('mongoose');

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost/test');

// 创建一个模型
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个 Cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存 kitty 实例
kitty.save().then(() => console.log('meow'));
