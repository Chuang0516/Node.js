const http = require('http');
const fs = require('fs');

// 1、创建 Server
let server = http.createServer();

// 2、监听 Server 的 request 请求事件，设置请求处理函数
// 一个请求对应一个响应，如果在一个请求过程中，已经结束响应了，则不能重复发送响应
// 没有请求就没有响应

let wwwDir = 'C:/Users/26331/Desktop/STUDY/www';

server.on('request', function (req, res) {
  let url = req.url;

  let filePath = '/index.html';

  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(wwwDir + filePath, function (err, data) {
    err ? res.end('404 Not Found') : res.end(data);
  });
});

// 3、监听端口号，启动服务
server.listen(3000, function () {
  console.log('服务已经启动，3000端口监听中...');
});
