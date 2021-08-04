const express = require('express');

const app = express();

app.get('/ping', (req, res)=>{
    res.send("Pong 1 which is required for ping");
})

app.listen(3200, ()=>{
    console.log("app is running at port 3200");
});