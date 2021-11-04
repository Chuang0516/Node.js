let foo = 'bar';

function add(x, y) {
  return x + y;
}

// 如果一个模块需要直接导出一个成员，而非挂载的方式
// 必须使用下面的方式：
module.exports = add;

// exports.add = add;

// exports 是一个对象

// exports.str = 'hello';
