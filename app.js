var fs = require('fs')
var http = require("http")


fs.stat(__filename, function (err, stat) {
    var x = stat.isFile();
    console.log(stat);
}
);
fs.readFile(__filename, { encoding: "utf-8" }, function (err, data) {
    console.log()
    console.log(__filename)
    if (err) {
        console.log(err);
    }
    
    else {
        console.log(data);
        }
})
