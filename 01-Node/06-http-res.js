var http = require('http');

var server = http.createServer();

// request 请求事件处理函数，需要接收两个参数
// Request 请求对象
//   请求对象可以获取客户端的一些请求信息
// Response 响应对象
//   响应对象可以用来给客户端发送响应消息

server
  .on('request', function (request, response) {
    console.log('收到客户端请求，请求路径是：' + request.url);

    // response 对象，有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是一定要使用 end 结束响应，否则客户端会一直等待

    // 告诉客户端结束响应

    // 当请求不同路径时，响应不同结果
    //  / index
    //  /login 登录
    //  /register 注册
    if (request.url == '/') {
      response.write('hello');
      response.write(' node.js');
    } else if (request.url == '/login') {
      response.write('登录');
    } else if (request.url == '/register') {
      response.write('注册');
    }
    response.end();
  })
  .listen(3000, function () {
    console.log('服务器启动成功');
  });
