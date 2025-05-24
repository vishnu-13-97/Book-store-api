require('dotenv').config();
const express = require('express');
const app= express();
const db = require("./config/db");
const PORT =process.env.PORT
const authRouter = require('./routes/auth-routes');
const bookRouter = require('./routes/book-routes'); 



app.use(express.json());

app.use('/api',authRouter)
app.use('/api/books',bookRouter)
db();















app.listen(PORT ,()=>{
    console.log("SERVER Started at PORT",PORT);
    
})