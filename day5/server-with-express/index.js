let express = require("express");
let app = express();
let config = require("./config.json");
// routes 
let firstfun = function(req, res, next){
    console.log("fun was called");
    next()
};
let secondfun = function(req, res, next){
    console.log("next fun was called");
    next()
};

// global middleware
app.use(firstfun, secondfun);

// inline middleware
app.get("/",function(req, res, next){
    console.log("inline middleware for / home route was called");
    next()
}, function(req, res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/about",function(req, res){
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact",function(req, res){
    res.sendFile(__dirname+"/contact.html");
})
app.get("**",function(req, res){
    res.sendFile(__dirname+"/notfound.html");
})
/* 
app.listen(5050,"localhost",function(error){
    error ? console.log("Error ", error) : console.log("server is now live on localhost:5050")
}) 
*/
/* 
let listen = app.listen();
console.log("server is now live on god knows where",listen.address().port ); 
*/
app.listen(config.port,config.host,function(error){
    error ? console.log("Error ", error) : console.log(`server is now live on ${config.host}:${config.port}`)
}) 
/* 
npm init -y
npm i express
*/