let firstPromise = async function(){
  /* setTimeout(function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(true){
                    resolve("The First Promise Is Resolved");
                }else{
                    reject("The First Promise Is Rejected");
                }
            },3000)
        })
    }, 2000) */
  return await new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (true) {
        resolve("The First Promise Is Resolved");
      } else {
        reject("The First Promise Is Rejected");
      }
    }, 3000);
  });
}


firstPromise()
.then(function(res){
    console.log("Response", res)
})
.catch(function(err){
    console.log("Error", err)
})
.finally(function(){
    console.log("Promise is now complete")
})
