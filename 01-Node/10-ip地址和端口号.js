// ip 地址是用来定位计算机的
// 端口号 是用来定位具体的应用程序
// 所有需要联网的应用程序都会占用一个端口号

let http = require('http');

let server = http.createServer();

server.on('request', function (req, res) {
  console.log('请求客户端的地址是：' + req.socket.remoteAddress.slice(7) + ' : ' + req.socket.remotePort);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<div style="font-size: 180px;">hello node.js</div>');
});

server.listen(3000, () => {
  console.log('服务器已经启动，3000端口监听中...');
});
