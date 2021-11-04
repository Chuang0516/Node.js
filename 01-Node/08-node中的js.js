// 用来获取机器信息
let os = require('os');

// 用来操作路径
var path = require('path');

// 获取当前机器 CPU 信息
console.log(os.cpus());

// 获取一个路径的扩展名
console.log(path.extname('c:/a/b/c/d/hello.txt'));
