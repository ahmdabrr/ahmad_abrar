var fs = require('fs');

fs.writeFile('file1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });