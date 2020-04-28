var fs = require('fs');

fs.appendFile('./file1.txt', 'Nama saya Ahmad Abrar', function(err) {
    if(err) throw err;
    console.log('update')
});
