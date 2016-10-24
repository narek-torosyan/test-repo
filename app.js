var fs = require('fs')
fs.readFile(__filename, {encoding:"utf-8"}, function(err, data){
    console.log(data);
})
