let fs = require("node:fs");
let fetch = require("fetch");

fetch.fetchUrl("https://intellipaat.com/",function(error,meta,data){
    // console.log(data.toString());
    fs.writeFile("temp.html",data,"utf-8", function(error){
        if(error){
            console.log("Error", error)
        }else{
            console.log("writing to temp.html")
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