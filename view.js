const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req,res)=>{
    res.render('index')
})  

app.post('/form-submit', (req,res)=>{
    let userName = req.body.username
    let email = req.body.email
    res.send(`successfully submitted!! your username is ${userName} and email is ${email}`)
})

app.listen(2399,()=>{
    console.log("Application is running at 2399 port");
});