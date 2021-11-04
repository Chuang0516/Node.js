const http = require('http');
const fs = require('fs');
let template = require('art-template');

let server = http.createServer();

let wwwDir = 'C:/Users/26331/Desktop/STUDY/www';

server.on('request', function (req, res) {
  let url = req.url;
  fs.readFile('./template-apache.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found');
    }

    // 1、如何得到 wwwDir 目录列表中的文件名和目录名
    // fs.readdir
    // 2、如何将得到的文件名和目录名替换到 template.html 中
    //    2.1、在 template.html 中需要替换的位置预留一个特殊的标记
    //    2.2、根据 files 生成需要的 html
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end('Can not find www dir');
      }

      // 这里只需要使用模板引擎替换 data 中的模板字符串
      // 数据就是 files

      let htmlStr = template.render(data.toString(), {
        title: '哈哈',
        files: files,
      });

      // 3、发送响应
      res.end(htmlStr);
    });
  });
});

server.listen(3000, function () {
  console.log('服务已经启动，3000端口监听中...');
});
