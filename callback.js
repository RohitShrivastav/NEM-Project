function walk (callback1) {
    setTimeout(  () =>{
        console.log("This is setTimeout Function");
        callback1( () =>{
            console.log("going to callback hell step 1")
        },2000)

    },2000)    
}

function run (){
    console.log("running...");
}

function eating (){
    console.log("eating...");
}

function study (){
    console.log("studying");
}


