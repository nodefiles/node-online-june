// console.log(Promise);// Higher Order Function

// a promise that resolves
// console.log(Promise.resolve("the promise is resolved"));

// a promise that rejected
// console.log(Promise.reject("the promise is rejected"));

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(true){
            resolve("The Promise Is Resolved");
        }else{
            reject("The Promise Is Rejected");
        }
    },2000)
});

/* 
promise
.then(function(data){
    console.log("Resolved Message : ", data );
})
.catch(function(error){
    console.log("Error Message : ", error );
})
.finally(function(){
    console.log("The promise is complete");
});
*/
/* 
promise
.then(
    function(data){
        console.log("Resolved Message : ", data );
    }, 
    function(error){
        console.log("Error Message : ", error );
}) 
*/

promise
.then(function(data){
    console.log("First Resolved Message : ", data );
    return data.toUpperCase();
})
.then(function(data){
    console.log("Second Resolved Message : ", data );
    return data.length;
})
.then(function(data){
    console.log("Third Resolved Message : ", data );
})
.catch(function(error){
    console.log("Error Message : ", error );
})
.finally(function(){
    console.log("The promise is complete");
});