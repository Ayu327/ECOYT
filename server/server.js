import  express  from 'express';
import colors  from 'colors'
//npm i colors


import dotenv from 'dotenv'

//configure env
dotenv.config();
//rest object
const app = express()

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