let http = require('http');

let server = http.createServer();

server.on('request', function (req, res) {
  //   res.setHeader('Content-Type', 'text/html; charset=utf-8');
  //   res.end('hello world');

  let url = req.url;
  if (url === '/plain') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('hello world 你好 世界');
  } else if (url === '/html') {
    // 如果发送请求的是 Html 格式的字符串
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<div style="font-size: 120px;">hello node.js<a href="">点击</a></div>');
  }
});

server.listen(8000, function () {
  console.log('服务器已经启动，8000端口监听中...');
});
