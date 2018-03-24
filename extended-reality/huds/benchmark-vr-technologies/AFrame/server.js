const http = require('http')
// const path = require('path')
const fs = require('fs')

http.createServer(function (req, res) {
  fs.readFile('./index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(8080); //the server object listens on port 8080
