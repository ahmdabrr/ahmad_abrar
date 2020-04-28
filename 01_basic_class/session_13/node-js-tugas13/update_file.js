var fs = require('fs');

fs.appendFile('./penulis.txt', 'Memiliki keunikan yang sangat luar biasa.', function(err) {
    if(err) throw err;
    console.log('Uptodate!')
});
