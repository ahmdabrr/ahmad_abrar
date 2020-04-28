var fs = require('fs');

fs.rename('./file1.txt', 'abfile.txt', function (err) {
    console.log('Renamed!')
});
