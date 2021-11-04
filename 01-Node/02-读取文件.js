// 浏览器中的js没有文件操作能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中，如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了了所有的文件操作相关的 api
// 例如：fs.readFile 就是读取文件的

// 1、使用 require 方法，加载 fs 核心模块
var fs = require('fs');

// 2、读取文件
// 第一个参数是要读取的文件路径、
// 第二个参数是一个回调函数

// 成功 data: 数据   error: null
// 失败 data: undefined  error: 错误对象

fs.readFile('./File/01.txt', 'utf8', function (error, data) {
  //   console.log(data);
  //   console.log(error);
  //   console.log(data);

  //  通过判断 error 来确认文件是否读取成功
  if (error) {
    console.log('读取文件失败');
  } else {
    console.log(data.toString());
  }
});

// <Buffer 31 31 31>
// 文件中存储的都是二进制数据
