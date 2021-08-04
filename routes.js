const http = require('http');

const routes = {
    '/': function home(request,response){
        response.writeHead(200)
        response.end("Node Routing")
    },
    '/about': function about(request,response){
        response.end("This is my website homepage")
    }
}

http.createServer( (req,res)=>{
    if(req.url in routes){
        return[req.url](req,res)
    }
}).listen(8000);