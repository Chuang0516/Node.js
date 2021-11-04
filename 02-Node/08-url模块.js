let url = require('url');

let obj = url.parse('http://127.0.0.1:3000/pinglun?name=ffsadfa&message=fadsfsdf', true);

console.log(obj);

console.log(obj.query);
