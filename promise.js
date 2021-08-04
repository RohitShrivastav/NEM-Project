const promise1 = new Promise( (resolve,reject) => {
    reject("Hey the problem is resolved")
} )

promise1.then( (solve) =>{
    console.log(solve);
} ).then(  (solve) =>{
    console.log(solve)
    console.log("now searching for the new problem to be resolved")
})


.catch( (error) => {
    console.log("This is the error: ", error)
} )

