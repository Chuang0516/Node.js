// require 方法有两个作用
// 1、加载文件模块，并执行里面的代码
// 2、拿到被加载文件模块导出的接口对象
// 在每个文件模块中都提供了一个对象，exports
// exports 默认是一个空对象

let ret = require('./b');

console.log(ret.test);

console.log(ret.add(10, 30));
