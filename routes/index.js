import express from 'express';

const route = express.Router();

route.get("/",(req,res)=>{
    res.send("/ or /home url invoked, visitor panel");
})

route.get("/home",(req,res)=>{
        res.send("/ or /home url invoked, visitor panel");
})

route.get("/about",(req,res)=>{
        res.send("/about url invoked, visitor panel");
})

route.get("/contact",(req,res)=>{
        res.send("/contact url invoked, visitor panel");
})

route.get("/service",(req,res)=>{
        res.send("/service url invoked, visitor panel");
})


export default route; 
