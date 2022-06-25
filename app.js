const express=require("express");
var app=express();
const jwt=require("jsonwebtoken");

const mongoose=require("mongoose");
const Users=require("./model/model.js");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
  }));

mongoose.connect("mongodb+srv://brainhacker509:2jN84xM9hWRvGX@cluster0.n8gto.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }, () => {
    console.log("Connected to db!");
      app.listen(3080, () => console.log
      ("Server Up and running"));
      });
      app.set("view engine", "ejs");    
app.get("/signup",(req,res)=>{
    res.render("index.ejs");
   });


  app.post('/signup',async (req,res)=>{
    const users= new Users({
        email:req.body.email,
        contact:req.bofy.contact,
        password:req.body.passwrd
    });
    user
    console.log(req.body.email);
    try {
        await users.save();
        res.redirect("/signup");
       
        } catch (err) {
         
        res.redirect("/signup");
        }
  });

  //connection to db

