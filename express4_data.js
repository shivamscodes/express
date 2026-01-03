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
        res.send("<h1>this is /service url $ GET Method</h1>"+urlRoute);
})

app.post("/service",(req,res)=>{
        res.send("<h1>this is /service url $ Post method</h1>"+urlRoute);
})

app.patch("/service",(req,res)=>{
        res.send("<h1>this is /service url $ Patch method</h1>"+urlRoute);
})

app.put("/service",(req,res)=>{
        res.send("<h1>this is /service url $ Put method</h1>"+urlRoute);
})


app.delete("/service",(req,res)=>{
        res.send("<h1>this is /service url $ detele method</h1>"+urlRoute);
})



// app.get("/login",(req,res)=>{
//     // let userobj = url.parse(req.url);
//     let users = req.query;
//     console.log(users);
//  res.send("this is /login url"+urlRoute);
// })



app.get("/login/:name/:email/:password",(req,res)=>{
    let users = req.params;
    console.log(users);
 res.send("this is /login url"+urlRoute);
})


app.get("/register",(req,res)=>{
 res.send("this is /register url"+urlRoute);
})


app.listen(3000);
console.log("port working");    