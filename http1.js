const http = require('http');

const hostname = '127.0.0.1';
const port = '200';

http.createServer( (req,res)=>{
    res.writeHead(200, {"content-type": "text/plain"});
    res.write("server start running")
    res.write("now it's running on it's peak pace");
    res.end()
} ).listen(port,hostname,()=>{
    console.log(`The server is running at http://${hostname}:${port}/`);
});