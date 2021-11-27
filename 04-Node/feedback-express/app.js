var express = require('express');

var app = express();

app.use('/public/', express.static('./public'));

// 配置使用 art-template 模板引擎
// 第一个参数：当渲染以 .art 结尾的文件时，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
app.engine('html', require('express-art-template'));

// Express 为 Response 响应对象提供了一个方法：render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录中查找该模板文件
// 开发人员应该把所有的视图文件都放在 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render 函数的默认路径)

app.get('/', function (req, res) {
  res.render('404.html');
});

app.get('/admin', function (req, res) {
  res.render('admin/index.html', {
    title: '管理系统',
  });
});

app.get('/post', function (req, res) {
  res.send('post page');
});

app.listen(3000, function () {
  console.log('running...');
});
