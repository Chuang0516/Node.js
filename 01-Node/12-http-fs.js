// 1、结合 fs 发送文件中的数据
// 2、Content-Type
// tool.oschina.net/commons

let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', function (req, res) {
  // 当请求路径为 “/” 时，响应 index.html
  let url = req.url;
  if (url === '/') {
    fs.readFile('./resource/index.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('404 Not Found');
      } else {
        // data 是二进制数据，可以通过 .toString 转为可识别的字符串
        // res.end() 支持两种数据类型，二进制和字符串
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
      }
    });
  } else if (url === '/logo') {
    // url: 统一资源定位符
    // 一个 url 最终定位到对应的资源
    fs.readFile('./resource/logo.png', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('404 Not Found');
      } else {
        // data 是二进制数据，可以通过 .toString 转为可识别的字符串
        // res.end() 支持两种数据类型，二进制和字符串
        // 图片不需要指定编码格式，常说的编码指的是：字符编码
        res.setHeader('Content-Type', 'image/png');
        res.end(data);
      }
    });
  }
});

server.listen(3000, function () {
  console.log('服务器已经启动，3000端口监听中...');
});
