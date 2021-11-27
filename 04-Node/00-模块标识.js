var fs = require('fs');

// 所有的文件操作 API 都是异步的
// 文件操作中的路径可以省略 ./
// fs.readFile('data/a.txt', function (err, data) {
//   if (err) {
//     return console.log('读取失败');
//   }
//   console.log(data.toString());
// });

// 在模块加载中，相对路径中的 ./ 不能省略
// require('./data/foo.js')('hello');

fs.readFile('/data/a.txt', function (err, data) {
  if (err) {
    console.log(err);
    return console.log('读取失败');
  }
  console.log(data.toString());
});
