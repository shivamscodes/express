import express from 'express';

const app = express();

const urlRoute = "<h1>click here to redirect</h1> <a href='/'>home</a></br></br> <a href='/about'>about</a></br></br> <a href='/service'>service</a></br></br> <a href='/contact'>contact</a></br></br> <a href='/register'>register</a></br></br> <a href='/login'>login</a></br></br>"

app.get("/",(req,res)=>{
    res.send("<h1>this is / or /home url</h1>"+urlRoute);
})

app.get("/home",(req,res)=>{
        res.send("<h1>this is / or /home url</h1>"+urlRoute);
})

app.get("/about",(req,res)=>{
    res.send("<h1>this is /about url</h1>"+urlRoute);
})

app.get("/contact",(req,res)=>{
        res.send("<h1>this is /contact url</h1>"+urlRoute);
})


app.get("/service",(req,res)=>{
        res.send("<h1>this is /service url</h1>"+urlRoute);
})


app.get("/login",(req,res)=>{
 res.send("this is /login url"+urlRoute);
})

app.get("/register",(req,res)=>{
 res.send("this is /register url"+urlRoute);
})


app.listen(3000);
console.log("port working");