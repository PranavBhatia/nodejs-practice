const http = require('http');

// function requestListner(req, res) {}
// http.createServer(requestListner);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(3000);