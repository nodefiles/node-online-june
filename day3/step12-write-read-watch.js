let fs = require("node:fs");

fs.watchFile("data/temp.txt",{ interval : 500 },()=> console.log("file was updated"));
let count = 0;
let si = setInterval(()=>{
    fs.appendFile("data/temp.txt",Math.round(Math.random() * 10 )+"\n",(error) => {
        if(error){
            console.log("Error ", error)
        }
        else{
            console.log("file was updated");
            count++;
            if(count > 10){
                clearInterval(si);
            }
        }
    })
},1000);


