const express = require('express');

const app = express();

let data = {
    id: 1,
    name: 'Rohit',
    designation: 'Backend developer Intern'
}

app.get('/', (req,res)=>{
    res.send("welocome to the home page of this website");
});

app.get('/about', (req,res)=>{
    res.send('Read here about us');
});

app.get('/help', (req,res)=>{
    res.send("Take the help from this section if you stuck at any point");
});

app.get('/info', (req,res)=> res.send(data));

app.listen(420, ()=> console.log("App is start running at 420 port"));