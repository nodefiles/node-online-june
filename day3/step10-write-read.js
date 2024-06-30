let fs = require("node:fs");

/* 
function writeInfo(){
    fs.writeFileSync("data/temp.txt","welcome to your life");
    console.log("file is ready");
};

fs.access("data",function(error){
    if(error){
        console.log("Error", error);
        fs.mkdirSync("data");
        writeInfo();
    }   
    else {
        console.log("folder by name data exists");
        writeInfo();
    }
}) 
*/
// create a file 
// fs.writeFileSync("data/temp.txt","welcome to your life");
// console.log("file is ready");
var si = null; 
var count = 0;
function writeInfo(){
    fs.writeFile("data/temp.txt","welcome to your life \n",{ flag : "a" },function(error){
        if(error){console.log("Error ", error)}
        else{ console.log("file is ready"); }
    });
    count++
};

fs.access("data",function(error){
    if(error){
        console.log("Error", error);
        fs.mkdir("data",function(){
            si = setInterval(writeInfo,1000);
            if(count > 10){
                clearInterval(si);
            }
        });
    }   
    else {
        console.log("folder by name data exists");
        si = setInterval(writeInfo,1000);
        if(count > 10){
            clearInterval(si);
        }
    }
});


