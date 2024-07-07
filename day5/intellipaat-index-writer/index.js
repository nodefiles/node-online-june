let fs = require("node:fs");
let fetch = require("fetch");
let url = process.argv[2] || "arcstellar";
let ext = process.argv[3] || "com";

// fetch.fetchUrl("https://"+url+"."+ext+"/",function(error,meta,data){
fetch.fetchUrl(`https://${url}.${ext}`,function(error,meta,data){
    fs.writeFile(url+".html",data,"utf-8", function(error){
        if(error){
            console.log("Error", error)
        }else{
            console.log(`writing ${url}.${ext} to ${url}.html`)
        }
    })
}); 

/* 
create a custom module that takes parameters 
to read the index.html file from websites 
and store it on to the server
*/
/* 
vijay.shivu@gmail.com
*/