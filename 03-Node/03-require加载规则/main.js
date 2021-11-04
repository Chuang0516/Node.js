require('./a');

// 优先从缓存中加载
// 由于a中已经加载过b了
// 所以这里不会重复加载
// 可以拿到其中的接口对象
// 目的是为了避免重复加载
let fn = require('./b');

console.log(fn);
