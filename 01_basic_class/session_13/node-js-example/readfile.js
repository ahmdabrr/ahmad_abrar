var fs =require('fs');

fs.readFile('./file1.txt', function(err, data) {
    if (err) throw err;
    console.log('Read data from file : ' + data);
  })
