const express = require("express");
const path=require('path');
const Port=process.env.PORT ||3000;


const app = express();
const static_path = path.join(__dirname,'../public');
console.log(static_path);
app.use(express.static(static_path));




app.get("",(req, res) =>{
    req.send("aaaaaaa");
})

app.listen(Port,()=>{
    console.log(`Running server on Port no ${Port}`)
})