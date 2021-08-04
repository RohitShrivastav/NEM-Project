const http = require('http');

const fs = require('fs');

const server = http.createServer( (req, res) =>{
    // fs.readFile('test.txt', (err, data) => {
    //     res.end(data);
    // });

    const stream = fs.createReadStream('test.txt');

    stream.pipe(res);



});

server.listen(1100, ()=>{
    console.log("Application starts at port 1100");
});