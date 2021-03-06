/* 
student.js
数据操作文件模块
主要操作文件中的数据，只处理数据，不关心业务
*/

var fs = require('fs');

var dbPath = './db.json';

// 获取所有学生数据
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};

// 根据 id 获取学生信息对象
exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var ret = students.find(function (item) {
      return item.id === id;
    });
    callback(null, ret);
  });
};

// 添加学生数据
exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    // 处理 id 唯一的，不重复
    student.id = students[students.length - 1].id + 1;

    // 把用户传递的对象保存到数组中
    students.push(student);

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students,
    });

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

// 更新学生数据
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    student.id = parseInt(student.id);

    // ES6中的数组方法
    var stu = students.find(function (item) {
      return item.id === student.id;
    });

    for (var key in student) {
      stu[key] = student[key];
    }

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students,
    });

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

// 删除学生数据
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id);
    });

    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1);

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students,
    });

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
