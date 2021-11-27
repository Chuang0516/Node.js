// 0、安装
// 1、引包
var express = require('express');

// 2、创建服务器应用程序
//    也就是原生的 http.createServer

var app = express();

// 公开指定目录
// 可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/', express.static('./public/'));
app.use('/static/', express.static('./static/'));

// 当服务器收到 get 请求 / 的时候，执行回调处理函数
app.get('/', function (req, res) {
  res.send('<h1>hello express</h1>');
});

app.get('/about', function (req, res) {
  res.send('你好');
});

// 相当于 server.listen
app.listen(3000, function () {
  console.log('app is running at port 3000');
});
