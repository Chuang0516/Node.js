var express = require('express');

// 1、创建 app
var app = express();

// 当以 /public/ 开头时，就去 ./public/ 目录中查找对应的资源
// app.use('/public/', express.static('./public/'));

// 当省略第一个参数时，则可以通过省略 /public 的方式访问
app.use(express.static('./public/'));

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('3000端口监听中...');
});
