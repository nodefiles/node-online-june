let express = require("express");
let config = require("./config.json");

let app = express();
app.get("/", function(req, res){
    res.render("home.ejs",{ title : "Intellipaat", country : "Bharat" });
})
app.get("/about", function(req, res){
    res.render("about.ejs",{ title : "Intellipaat", country : "Bharat" });
})
app.get("/contact", function(req, res){
    res.render("contact.ejs",{ title : "Intellipaat", country : "Bharat" });
})
app.get("**", function(req, res){
    res.render("notfound.ejs",{ title : "Intellipaat", country : "Bharat" });
})
app.listen(config.port,config.host,function(error){
    error ? console.log("Error ", error) : console.log(`server is now live on ${config.host}:${config.port}`)
}) 