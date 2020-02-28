//Core Modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const server = http.createServer((req, res) =>{
  // res.writeHead(200, {'content-Type' : 'text/plain'})
  // res.write('Hey lady');
  // res.end();
  console.log(`${req.method} request for ${req.url}`);

  if(req.method === 'GET'){
    if (req.url === '/'){
      fs.readFile('./public/index.html','UTF-8',(err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/index.html') {
      fs.readFile('./public/index.html','UTF-8', (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/about.html') {
      fs.readFile('./public/about.html','UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url === '/contact.html') {
      fs.readFile('./public/contact.html','UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end(data);
      })
    } else if (req.url.match('/node_modules/'))  {
      const nodePath = path.join(__dirname, req.url);
      fs.readFile(nodePath,'UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/css'});
        res.end(data);
      })
    } else if (req.url.match('/css/'))  {
      const cssPath = path.join(__dirname, 'public', req.url);
      fs.readFile(cssPath, 'UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/css'});
        res.end(data);
      })
    } else if (req.url.match('/js/'))  {
      const jsPath = path.join(__dirname, 'public', req.url);
      fs.readFile(jsPath,'UTF-8', (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'text/js'});
        res.end(data);
      })
    } else if (req.url.match(/.jpeg/))  {
      const imagePath = path.join(__dirname, 'public', req.url);
      fs.readFile(imagePath, (err,data)=>{
        if(err) throw err;
        res.writeHead(200, {'content-Type' : 'image/jpeg'});
        res.end(data);
      })
    } else {
      res.writeHead(200, {'content-Type' : 'plain/text'});
      res.end('404 error - File not found');
    }
  }
  else if (req.method === 'POST') {
    if (req.url === '/sendForm') {
      //console.log('form submitted');
      let body = '';

      req.on('data', function(data){
        body += data;
        //body = body + data
      })

      req.on('end', function(){
        console.log('form data ends');
        console.log(body.toString());
        const formData = qs.parse(body.toString());
        console.log(formData);

      })
    }
  }
}); //server structure finishes here

server.listen(3000);
console.log('Hey congrats! Your server is running');
