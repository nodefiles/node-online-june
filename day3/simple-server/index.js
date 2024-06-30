let http = require("node:http");
let fs = require("node:fs");

let config = require("./config.json");

let server = http.createServer((req, res) => {
    fs.readFile("index.html","utf-8",function(error, data){
        if(error) console.log("Error ", error)
        else{
            res.write(data);
        }
        res.end();
    })
});

server.listen(config.port,config.host, function(error){
    if(error) console.log("Error ", error)
    else console.log("Server is now live on "+config.host+":"+config.port)
})