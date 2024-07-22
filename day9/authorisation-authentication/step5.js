const express = require("express");
const mongoose = require("mongoose");
const session = require("client-sessions");
const bcrypt = require("bcrypt");
const config = require("./config/config.json");

let app = express();
//--------------------------------------
app.use(express.urlencoded({ extended : true }));
app.use( session({
    cookieName : "intellipaat",
    secret : "asdfasdfasdfasdfasdf2323423425sfasfw54234ww4324ew",
    duration : 30 * 60 * 1000,
    activeDuration : 10 * 60 * 1000,
    cookie : {
        ephemeral : true
    }
}) )
//--------------------------------------
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : { type : String, unique : true },
    password : String
}));
let dburl = `mongodb+srv://${config.user}:${config.pass}@cluster0.${config.dbsecret}.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dburl)
.then(res => console.log("DB Connected"))
.catch( error => console.log("Error ", error) );

//--------------------------------------
// console.log(bcrypt.hashSync("vijay", bcrypt.genSaltSync(10)));

app.get("/", (req, res)=>{
    res.render("home.pug")
})
app.get("/login", (req, res)=>{
    res.render("login.pug")
})

app.post("/login", (req, res)=>{
    User.findOne({ email : req.body.email })
    .then(dbres => {
        if(bcrypt.compareSync(req.body.password, dbres.password)){
            req.intellipaat.user = dbres;
            res.redirect("/profile");
        }else{
            res.render("login.pug",{
                error : "invalid email or password"
            })
        }
    }).catch(error => {
        res.render("login.pug",{
            error : "no users by that credentials"
        })
    })
})

app.get("/register", (req, res)=>{
    res.render("register.pug")
})
app.post("/register", (req, res)=>{
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : hash
    });
    user.save().then((dbres)=>{
        res.render("profile.pug", {userinfo : dbres})
        console.log("user registered")
    }).catch((error)=>{
        let clienterror = "";
        if(error.code == 11000){ clienterror = "email id already registered";}
        else{ clienterror = "something went wrong"; }
        res.render("register.pug", { clienterror })
    });
})
app.get("/profile", (req, res)=>{
    if(req.intellipaat && req.intellipaat.user){
        User.findOne({ email : req.intellipaat.user.email })
        .then(dbres => {
            res.render("profile.pug", {userinfo : dbres})
        })
        .catch(err => {
            req.intellipaat.reset();
            res.redirect("/login");
        })
    }else{
        res.redirect("/login");
    }
})
app.get("/logout", (req, res)=>{
    req.intellipaat.reset();
    res.redirect("/");
})

app.listen(2525,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("Server is now live on localhost:2525")
    };
})  