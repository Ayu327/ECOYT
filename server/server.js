const express = require('express')

//rest object
const app = express()

//rest API
app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to Ecommerce App"
    });
});

//PORT
const PORT = 8080

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})