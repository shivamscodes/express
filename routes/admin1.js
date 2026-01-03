import express from 'express';


const adminRoute = express.Router();


adminRoute.get("/",(req,res)=>{
    res.render("demo");
})


adminRoute.get("/cpadmin",(req,res)=>{
    res.send("/cpadmin url invoked, admin panel");
})

adminRoute.get("/epadmin",(req,res)=>{
    res.send("/epadmin url invoked, admin panel");
})

adminRoute.get("/manageruser",(req,res)=>{
    res.send("mangeruser url invoked , admin panel");
})


export default adminRoute;