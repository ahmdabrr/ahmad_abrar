var fs = require('fs');

fs.rename('./penulis.txt', 'novel_kehidupan_laut.txt', function (err) {
    console.log('Renamed!')
});
