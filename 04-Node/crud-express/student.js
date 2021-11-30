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

// 添加学生数据
exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    students.push(student);
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

// 更新学生数据
exports.update = function () {};

// 删除学生数据
exports.delete = function () {};
