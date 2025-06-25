require('dotenv').config();
const express = require('express');
const db = require("./config/db");
const PORT =process.env.PORT
const authRouter = require('./routes/auth-routes');
const bookRouter = require('./routes/book-routes'); 
const helmet = require('helmet');
const app= express();


app.use(helmet())
app.use(express.json());

app.use('/api',authRouter)
app.use('/api/books',bookRouter)


const startServer=async()=>{
    try {
        await db();
 app.listen(PORT, () => {
      console.log(`SERVER Started at PORT ${PORT}`);
    })
    } catch (error) {
          console.error("DB connection failed", error);
    process.exit(1);
        
    }
}
startServer()

