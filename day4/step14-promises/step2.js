let firstPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve("The First Promise Is Resolved");
            }else{
                reject("The First Promise Is Rejected");
            }
        },3000)
    })
};
let secondPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(true){
                resolve("The Second Promise Is Resolved");
            }else{
                reject("The Second Promise Is Rejected");
            }
        },500)
    })
};
let thirdPromise = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(false){
                resolve("The Third Promise Is Resolved");
            }else{
                reject("The Third Promise Is Rejected");
            }
        },1000)
    })
};

/* 
all the promises must resolve : 3 responses
any the promises must resolve : 1 response
race for all the promises to resolve or reject : 1 response or 1 reject
all the promises to settle : result array with report object { status and value / reason }
*/

// all the promises must resolve 3 responses
/* 
Promise.all([firstPromise(),secondPromise(),thirdPromise()])
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("all promises are complete")
}) 
*/

// any the promises must resolve 1 response
/* 
Promise.any([firstPromise(),secondPromise(),thirdPromise()])
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("all promises are complete")
})  
*/

// any the promises must resolve or reject 1 response or 1 reject
/* 
Promise.race([firstPromise(),secondPromise(),thirdPromise()])
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("all promises are complete")
})  
*/
Promise.allSettled([firstPromise(),secondPromise(),thirdPromise()])
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("all promises are complete")
})  