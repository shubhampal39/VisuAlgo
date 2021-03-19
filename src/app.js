const express = require("express");
const path=require('path');
const hbs=require('hbs')
const Port=process.env.PORT ||3000;

const app = express();
const static_path = path.join(__dirname,'../public');
const templates_path=(path.join(__dirname,'../template/views'));
const partials_path=(path.join(__dirname,'../template/partials'));

app.set("view engine","hbs");
app.set('views',templates_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);


app.get("",(req,res) => {
    res.render('index')
})


app.listen(Port,()=>{
    console.log(`Running server on Port no ${Port}`)
})