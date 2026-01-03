import express from 'express';

const route = express.Router();

route.get("/",(req,res)=>{
    res.render("demo1");
})

route.get("/home",(req,res)=>{
        res.render("home");
})

route.get("/about",(req,res)=>{
        res.render("about");
})

route.get("/contact",(req,res)=>{
        res.render("contact");
})

route.get("/service",(req,res)=>{
        res.render("service");
})

route.get("/register",(req,res)=>{
        res.render("register");
})

route.get("/login",(req,res)=>{
        res.render("login");
})



export default route; 
