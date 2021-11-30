var fs = require('fs');
var Student = require('./student.js');

// Express 提供了一种更好的方式

var express = require('express');

// 1、创建一个路由容器
var router = express.Router();

// 2、把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
  // readFile 的第二个参数是可选的，传入 utf8 就是把读取到的文件按照 utf8 编码转成可认识的字符

  Student.find(function (err, students) {
    res.render('index.html', {
      fruit: ['苹果', '香蕉', '橘子'],
      students: students,
    });
  });
});

router.get('/students/new', function (req, res) {
  res.render('new.html');
});

router.post('/students/new', function (req, res) {
  // 1、获取表单数据
  // 2、处理
  // 将数据保存到 db.json 文件中，用以持久化存储
  // 3、发送响应
});

router.get('/students/edit', function (req, res) {});

router.post('/students/edit', function (req, res) {});

router.get('/students/delete', function (req, res) {});

// 3、把 router 导出
module.exports = router;
