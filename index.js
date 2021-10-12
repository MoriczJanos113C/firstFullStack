const http = require('http');
const fs = require('fs');
const port = 4444;

const server = http.createServer((req, res) => {
    //router
    /*
    HTML file = urlap, megjelenes
    JSON = html szinek 
    CSS = elég a bootrstrap
    kliens js = viselkedés meghatározása
    favicon
    */
console.log(req.url);
console.log(req.method);
console.log('<<<<');
    switch(true) {
        
        case req.url === "/" && req.method === "GET":
            fs.readFile('./views/index.html', (err, data) => {
                res.setHeader('Content-Type', 'text/html; Charset=UTF-8');
                res.writeHead(200);
                res.end(data);
            });
            break;

        case req.url === "/favicon.ico" && req.method === "GET":
            fs.readFile('./views/favicon.ico', (err, data) => {
                res.setHeader('Content-Type', 'image/ico');
                res.writeHead(200);
                res.end(data);
            });
            break;

        case req.url === "/scripts.js" && req.method === "GET":
            fs.readFile('./public/scripts.js', (err, data) => {
                res.setHeader('Content-Type', 'application/javascript');
                res.writeHead(200);
                res.end(data);
            });
            break;

        case req.url === "/colors.json" && req.method === "GET":
            fs.readFile('./colors.json', (err, data) => {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(data);
            });
            break;
        

            default:
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404);
                res.end('404-es hiba, oldal nem található');
    }
});

server.listen(port);