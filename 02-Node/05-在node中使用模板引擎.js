// art-template 不仅可以在浏览器中使用，也可以在node中使用

// 安装： npm install art-template

// 在 Node 中使用 art-template 模板引擎
// 模板引擎最终诞生于服务器领域，后来才发展到了前端

// 1、安装 npm install art-template
// 2、在需要使用的文件模块中，加载 art-template
//    只需要使用 require 方法加载：require('art-template')
//    参数中的 art-template 就是下载的报的名字
// 3、查文档，使用模板引擎的 API

let http = require('http');
let template = require('art-template');
let fs = require('fs');

http
  .createServer()
  .on('request', function (req, res) {
    fs.readFile('./tpl.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found');
      }

      let ret = template.render(data.toString(), {
        name: 'WeCreate',
        age: 22,
        ability: ['Node', 'Vue', 'React'],
        title: '个人信息',
      });

      res.end(ret);
    });
  })
  .listen(3000, function () {
    console.log('服务已启动，3000端口监听中...');
  });
