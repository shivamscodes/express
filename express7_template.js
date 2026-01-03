import express from 'express';

import route from './routes/index1.js';
import adminRoute from './routes/admin1.js'

const app = express();

// app.set("view engine","pug");
app.set("view engine","ejs");
app.set("views","./views");


app.use("/admin",adminRoute);
app.use("/",route);

app.use(express.static('./public'));


app.listen(3000);
console.log("port working");