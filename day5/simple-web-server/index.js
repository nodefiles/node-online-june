let fs = require("node:fs");
let http = require("node:http");

let server = http.createServer(function(req, res){
    // res.write("hello from http module");
    /* 
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Welcome to your life</h1>
        </body>
        </html>
        `); 
      */
    /* fs.readFile("index.html","utf-8",function(error, data){
        if(error){
            console.log("Error ", error)
        }else{
            res.write(data)
            res.end();
        }
    }) */

    /*   
    res.write("so you want "+req.url+" page");
    res.end(); 
    */
    let filepath = req.url;
    /* Default Route */
    if(filepath === "/"){
        fs.readFile("index.html","utf-8",function(error, data){
            if(error){
                console.log("Error ", error)
            }else{
                res.write(data)
                res.end();
            }
        })
    }else if(filepath.slice(1,req.url.length) === "favicon.ico"){
        res.end();
    }else{
        let tempurl = filepath.slice(1,req.url.length);
        fs.readFile(tempurl,"utf-8",function(error, data){
            if(error){
                // assignment
                // if you are not able to find the requested file then show notfound.html
                console.log("Error ", error)
            }else{
                res.write(data)
                res.end();
            }
        })
    }

    
})

server.listen(5050,"localhost", function(error){
    if(error){
        console.log("Error", error)
    }else{
        console.log("Server is now live on localhost:5050");
    }
})

/* 
vijay.shivu@gmail.com
*/