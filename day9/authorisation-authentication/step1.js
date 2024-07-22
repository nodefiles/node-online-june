const express = require("express");
let app = express();

// routes for app
app.get("/", (req, res)=>{
    res.render("home.pug")
})
app.get("/login", (req, res)=>{
    res.render("login.pug")
})
app.get("/register", (req, res)=>{
    res.render("register.pug")
})
app.post("/register", (req, res)=>{
    // res.render("register.pug")
})
app.get("/profile", (req, res)=>{
    res.render("profile.pug")
})
app.get("/logout", (req, res)=>{
    res.redirect("/")
})

app.listen(2525,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("Server is now live on localhost:2525")
    };
})  