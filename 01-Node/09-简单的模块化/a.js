// require 是一个方法
// 它的作用就是用来加载模块的
// 在 Node 中，模块有三种
// 1、具名的核心模块：例如 fs、http
// 2、用户自己编写的文件模块
// 可以省略用户名，./不能省略
// 在 Node 中，没有全局作用域，只有模块作用域

let foo = 'aaa';

console.log('a start');

function add(x, y) {
  return x + y;
}

// require('./b.js');

// 推荐：省略后缀名
require('./b');

console.log('a end');

console.log('foo 的值是 ' + foo);
