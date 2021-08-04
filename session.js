const express = require('express');

const app = express();

const session = require('express-session');

app.use(session({
    secret: 'my private key',
    resave: true,
    saveUninitialized: true
}))

app.get('/',(req,res)=>{
    req.session.name = 'John'
    return res.send('session')
});

app.get('/session', (req,res)=>{
    res.send(req.session.name);
});

app.listen(2500,()=>{
    console.log("listening to the port 2500");
});