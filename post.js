const http = require('https');

const data = JSON.stringify({
    name: 'Rohit',
    post: 'full stack developer',
    age: 23,

})

const options = {
    hostname: 'reqres.in',
    path: '/api.users',
    method: 'POST',
    header: {
        'content/type': 'application/json'
    }
}

const req = http.request(options, (res) =>{
    let body = '';
    console.log('status code : ', res.statusCode)

    res.on('data', (chunk)=>{
        body +=chunk;
    })
    res.on('end', ()=>{
        console.log('body : ', JSON.parse(body))

    })
})

req.write(data)
req.end()