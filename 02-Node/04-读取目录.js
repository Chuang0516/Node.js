let fs = require('fs');

fs.readdir('C:/Users/26331/Desktop/STUDY/www', function (err, files) {
  if (err) {
    return console.log('目录不存在');
  } else {
    console.log(files);
  }
});
