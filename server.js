var http = require("http");
//var fs = require("fs");


function show(res) {
    var html = '<html><head><title>Todo List</title></head><body>'
        + '<h1>Todo List</h1>'
        // + '<ul>'
        // + items.map(function (item) {
        //     return '<li>' + item + '</li>'
        // }).join('')
        // + '</ul>'
        + '<form method="post" action="/">'
        + '<p><input type="text" name="item" /></p>'
        + '<p><input type="submit" value="Add Item" /></p>'
        + '</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

module.exports = function startServer() {
    var server = http.createServer(
    ).listen(3000);
    server.on('request', function (req, res) {
        show(res);
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        // res.end('Hello');

    });
    console.log('Server running');

}
