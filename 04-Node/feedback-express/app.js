var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use('/public/', express.static('./public'));

// 配置使用 art-template 模板引擎
// 第一个参数：当渲染以 .art 结尾的文件时，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
app.engine('html', require('express-art-template'));

// 配置 body-parser 中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Express 为 Response 响应对象提供了一个方法：render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录中查找该模板文件
// 开发人员应该把所有的视图文件都放在 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render 函数的默认路径)

var comments = [];

app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments,
  });
});

app.get('/admin', function (req, res) {
  res.render('admin/index.html', {
    title: '管理系统',
  });
});

app.get('/post', function (req, res) {
  res.render('post.html');
});

// 当以 post 请求 /post 路径的时候执行指定的处理函数
app.post('/post', function (req, res) {
  // 1、获取表单 POST 请求体数据
  // 2、处理
  // 3、发送响应
  // req.query 只能拿到 GET 请求参数
  var comment = req.body;
  comment.dateTime = currentTime();
  comments.unshift(comment);
  res.redirect('/');
});

// app.get('/pinglun', function (req, res) {
//   var comment = req.query;
//   comment.dateTime = currentTime();
//   comments.unshift(comment);
//   res.redirect('/');
//   // res.statusCode = 302;
//   // res.setHeader('Location', '/');
// });

app.listen(3000, function () {
  console.log('running...');
});

function currentTime() {
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
