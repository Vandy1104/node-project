const http = require('http'); //provides server

const server = http.createServer((req, res)=> {
  res.write("Hello");
  res.end();
});

server.listen(3000);
console.log('Running node server at port 3000');
