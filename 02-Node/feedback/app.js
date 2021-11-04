const http = require('http');
const fs = require('fs');
const template = require('art-template');
const url = require('url');

let comments = [];

// 对于表单提交的请求路径，其中具有用户动态填写的内容

function CurentTime() {
  let now = new Date();
  let year = now.getFullYear(); //年
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日
  let hh = now.getHours(); //时
  let mm = now.getMinutes(); //分
  let clock = year + '-';
  if (month < 10) clock += '0';
  clock += month + '-';
  if (day < 10) clock += '0';
  clock += day + ' ';
  if (hh < 10) clock += '0';
  clock += hh + ':';
  if (mm < 10) clock += '0';
  clock += mm;
  return clock;
}

http
  .createServer(function (req, res) {
    // 使用 url.parse 方法，将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象
    let parseObj = url.parse(req.url, true);

    // 单独获取不包含查询字符串的路径部分
    let pathname = parseObj.pathname;

    if (pathname === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        let htmlStr = template.render(data.toString(), {
          comments: comments,
        });
        res.end(htmlStr);
      });
    } else if (pathname.indexOf('/public/') === 0) {
      // /public/css/main.css
      // /public/js/main.js
      // /public/lib/jQuery.js
      // 统一处理：请求路径是以 /public/ 开头的
      fs.readFile('.' + pathname, function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        res.end(data);
      });
    } else if (pathname === '/post') {
      fs.readFile('./views/post.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        res.end(data);
      });
    } else if (pathname === '/release') {
      // 无论 /pinglun?xxxx 之后是什么请求数据
      // res.end(JSON.stringify(parseObj.query));
      // 1、获取表单提交的数据
      // 2、生成日期到数据对象中，然后存储到数组中
      // 3、让用户重定向跳转到首页 /
      //    当用户重新请求 / 时，数组中的数据已经发生变化
      let message = parseObj.query;
      message.dateTime = CurentTime();
      comments.push(message);

      // 如何通过服务器，让客户端重定向？
      // 1、状态码设置为 302 临时重定向 statusCode
      // 2、在响应头中，通过 Location 告诉客户端往哪儿重定向  setHeader
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    } else {
      fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }
        res.end(data);
      });
    }
  })
  .listen(3000, function () {
    console.log('runing...');
  });

// 1、 / index.html
// 2、开放 public 目录中的静态资源
//    当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
// 3、 /post post.html
// 4、 /pinglun
//     4.1 接收表单提交数据
//     4.2 存储表单提交数据
//     4.3 让表单重定向到 /
//         statusCode = 302
//         setHeader
