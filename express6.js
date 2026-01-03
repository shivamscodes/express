import express from 'express';

import route from './routes/index.js';
import adminRoute from './routes/admin.js'

const app = express();

app.use("/",route);
app.use("/admin",adminRoute);



app.listen(3000);
console.log("port working");