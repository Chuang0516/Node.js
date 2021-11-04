// ES6 直接导入
let http = require('http');

// 1、创建 server 实例
let server = http.createServer();

// 2、监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
  // console.log('请求路径：' + req.url);
  console.log('请求客户端的IP地址是：' + req.socket.remoteAddress + ':' + req.socket.remotePort);

  // 根据不同的请求路径发送不同的响应结果
  // 1、获取请求路径：req.url 获取到的是端口号之后的路径
  // 2、判断路径处理响应
  let url = req.url;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (url === '/') {
    res.end(
      '<h1>局域网可访问该页面 | 文创编程</h1>' +
        '</br>' +
        '检测到你的 IP 地址为: ' +
        req.socket.remoteAddress.slice(7) +
        ':' +
        req.socket.remotePort
    );
  } else if (url === '/login') {
    res.end('login page');
  } else if (url === '/products') {
    let products = [
      {
        name: '苹果',
        price: 5,
      },
      {
        name: '香蕉',
        price: 3,
      },
      {
        name: '菠萝',
        price: 8,
      },
    ];
    res.end(JSON.stringify(products));
  } else {
    res.end('404 Not Found');
  }
});

// 3、绑定端口号，启动服务
server.listen(8000, function () {
  console.log('服务器启动成功');
});
