import express from 'express';

const app = express();


//applicataion level middleware for specific routs
app.use("/about",(req,res,next)=>{
     console.log("applicataion level middleware active");
    next();
});



//applicataion level middleware for all routs
// app.use((req,res,next)=>{
//      console.log("applicataion level middleware active");
//     next();
// });



//applicataion level middleware
/*app.use("/",(req,res,next)=>{
     console.log("applicataion level middleware active");
    next();
});
*/

app.get("/",(req,res)=>{
    res.send("<h1>this is / or /home url</h1>");
})

app.get("/home",(req,res)=>{
        res.send("<h1>this is /home url</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>this is /about url</h1>");
})

app.listen(3000);
console.log("port working");    