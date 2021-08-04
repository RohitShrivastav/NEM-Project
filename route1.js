const http =  require('http');

function home(reques, response){
    response.end(" you are welcome to the home page of this website")
}

function about(request, response) {
    response.end("This is about section for this website from which you can gather information regarding us")
}

http.createServer( (req,res) =>{
    if (req.url == '/'){
        return home(req,res)
    }
    if (req.url == '/about'){
        return about(req,res)
    }


} ).listen(2100, ()=>{
    console.log("Server is successfully running at 2100 port");
});