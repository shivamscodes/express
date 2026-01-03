import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>this is / or /home url</h1>");
})

app.get("/home",(req,res)=>{
        res.send("<h1>this is / or /home url</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>this is /about url</h1>");
})

app.get("/contact",(req,res)=>{
        res.send("<h1>this is /contact url</h1>");
})

app.get("/login",(req,res)=>{
 res.send("this is /login url");
})

app.get("/register",(req,res)=>{
 res.send("this is /register url");
})


app.listen(3000);
console.log("port working")