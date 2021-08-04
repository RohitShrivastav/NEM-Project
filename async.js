function clone (){

    return new Promise( (resolve) =>{
        setTimeout ( () =>{
            resolve("problem resolved")
        },2000)
    } )
}

async function getData (callback){
    const clone1 = await clone()
    console.log("msg:", clone1)
    callback()
}
getData(getNames)

function getNames (){
    console.log("Hey here you will find all the names who are working in this institutiton ")
}

