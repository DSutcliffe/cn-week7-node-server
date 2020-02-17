// EG.1 Write and overwrite
// const fs = require('fs');
// fs.writeFileSync('turing.txt', 'heaben with a b');

// EG. 2 Create a server
const http = require('http');

const server = http.createServer((req, res) => {
    // no req's required...

    // the response goes here
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Web Server</title></head>')
    res.write('<body><h1>Hello, Danneh.</h1></body>')
    res.write('</html>')
    res.end();
})

// set port you wish to listen to!
server.listen(3000);