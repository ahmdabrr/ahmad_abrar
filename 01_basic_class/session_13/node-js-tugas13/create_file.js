var fs = require('fs');

fs.writeFile('penulis.txt', 'Kuda laut, hewan yang sangat eksotis.', function (err) {
    if (err) throw err;
    console.log('Created!');
  });