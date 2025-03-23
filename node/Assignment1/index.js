const http = require('node:http'); // this gives you access to the built-in http module so you can create a web server.
const fs = require('fs');

// Create a local server to receive data from
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.url === '/index') {
        fs.readFile('index.html',(err, data) => {
            if(err) {
                res.writeHead(500);
                res.end('Server error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    } else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if(err) {
                res.writeHead(500);
                res.end('Server error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    } else if (req.url === '/contact-me.html') {
        fs.readFile('contact-me.html', (err, data) => {
            if(err) {
                res.writeHead(500);
                res.end('Server error');
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(data);
            }
        }) 
    } else if(req.url === '/404') {
        fs.readFile('404.html', (err, data) => {
            if(err){
                res.writeHead(500);
                res.end('Server error');
            } else {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(data);
            }
        })
    }
});

server.listen(8000);