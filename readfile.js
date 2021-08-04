// const fs = require('fs');

// fs.readFile('test.txt', 'utf-8', (err,data)=>{
//     if(err) throw err
//     console.log(data);
// })

// const data1 = fs.readFileSync('test.txt',{encoding:'utf8',flag: 'r'});

// console.log(data1);

// fs.stat('test.txt', (err,stats)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.size);
// })


// const fs = require('fs');

// fs.writeFileSync('test1.txt', 'Rohit is great', err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("done successfully");
// })




// const fs = require('fs');

// fs.writeFile('test.txt', 'Never wait for tomorrow', err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("succesfully Done");
// })


const fs = require('fs');

fs.unlink('test1.txt', err=>{
    if(err){
        console.log(err)
    }
    console.log("done dona done");
})