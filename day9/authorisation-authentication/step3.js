const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config.json");

let app = express();
//--------------------------------------
app.use(express.urlencoded({ extended : true }));
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
app.get("/", (req, res)=>{
    res.render("home.pug")
})
app.get("/login", (req, res)=>{
    res.render("login.pug")
})


app.post("/login", (req, res)=>{
    User.findOne({ email : req.body.email })
    .then(dbres => {
        if(req.body.password === dbres.password){
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
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    });
    user.save().then((dbres)=>{
        res.redirect("/profile");
        console.log("user registered")
    }).catch((error)=>{
        let clienterror = "";
        if(error.code == 11000){ clienterror = "email id already registered";}
        else{ clienterror = "something went wrong"; }
        res.render("register.pug", { clienterror })
    });
    
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