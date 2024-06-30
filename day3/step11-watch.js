let fs = require("node:fs");

fs.watchFile("data/temp.txt",{interval : 500},function(newval, oldval){
   /*  
   console.log("Old Value", oldval)
    console.log("New Value", newval) 
    */
   console.log("File was updated");
})
console.log("Watching the file temp.txt");