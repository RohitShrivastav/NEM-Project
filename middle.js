const express = require('express');

const app = express();

const mylogger = function(req,res,next){
    console.log("Logged In");
}

const reqTime = function(req,res,next){
    req.reqTime = Date.now()
}

app.use(mylogger)
app.use(reqTime)

app.get('/',(req,res)=>{
    res.send(`Current Time as required ${req.reqTime}`)
}).listen(4000,()=>{
    console.log("app is running at port 4000");
});