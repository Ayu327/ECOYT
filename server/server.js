import  express  from 'express';
import colors  from 'colors'
import morgan from 'morgan';
//npm i colors


import dotenv from 'dotenv'
import connectDb from './config/db.js';

//configure env
dotenv.config();


//database config
connectDb()

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//rest API
app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to Ecommerce App"
    });
});

//PORT
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})