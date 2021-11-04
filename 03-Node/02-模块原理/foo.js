// 在 node 中，每个模块内部都有一个 module 对象
// 该 module 对象中有一个成员 : exports，也是一个对象
// 如果需要对外导出成员，只需要把导出的成员挂载到 module.exports 中

// 每次导出接口成员的时候都通过 module.exports.xxx = xxx，很麻烦
// 所以 Node 为了简化操作，专门提供了一个变量：
// exports 等于 module.exports

// let module = {
//   exports: {
//     foo: 'bar',
//   },
// };

// 也就是说在模块中还有这杨一句代码
// let exports = module.exports;

// module.exports.foo = 'bar';
// module.exports.add = function (x, y) {
//   return x + y;
// };

// 两者一致，我们可以使用任意一方
// console.log(exports === module.exports);

// exports.foo = 'bar';
// exports.add = function (x, y) {
//   return x + y;
// };

// 当一个模块需要导出单个成员
// 直接给 exports 赋值是不行的
// exports = 'hello';

// exports.a = 123;

// exports = {};

// exports.foo = 'bar';

// module.exports.b = 456;

module.exports = 'hello';
exports.foo = 'world';

// 默认在代码的最后有一句：
// return module.exports
