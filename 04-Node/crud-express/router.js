var fs = require('fs');
var Student = require('./student.js');

Student.updateById(
  {
    id: 1,
    name: '李四',
    age: 19,
  },
  function (err) {
    if (err) {
      return console.log('修改失败');
    }
    console.log('修改成功');
  }
);
// Express 提供了一种更好的方式

var express = require('express');

// 1、创建一个路由容器
var router = express.Router();

// 2、把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
  // readFile 的第二个参数是可选的，传入 utf8 就是把读取到的文件按照 utf8 编码转成可认识的字符

  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('Server error');
    }
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
  var student = req.body;
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.redirect('/students');
  });
});

// 渲染编辑学生页面
router.get('/students/edit', function (req, res) {
  // 1、在客户端的列表页中处理链接问题
  // 2、获取要编辑的学生 id
  // 3、渲染编辑页面
  //    根据 id 查询学生信息
  //    使用模板引擎渲染页面

  Student.findById(parseInt(req.query.id), function (err, student) {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.render('edit.html', {
      student: student,
    });
  });
});

// 处理编辑学生页面
router.post('/students/edit', function (req, res) {});

router.get('/students/delete', function (req, res) {});

// 3、把 router 导出
module.exports = router;
