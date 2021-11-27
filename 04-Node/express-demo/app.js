var express = require('express');

// 1、创建 app
var app = express();

app.get('/', function (req, res) {
  //   res.write('hello ');
  //   res.write('world ');
  //   res.end();
  //   res.end('hello world');

  res.send('hello world');
});

app.listen(3000, function () {
  console.log('3000端口监听中...');
});
