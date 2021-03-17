const express = require('express');
const hbs=require('hbs');
const path = require('path');

const Port=4500;

const app = express();
const static_path = path.join(__dirname, '../public');
const templates =(path.join(__dirname,'../templates/views'));
const partials = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views',templates);
app.use(express.static(static_path));
hbs.registerPartials(partials);



app.get('/',(req, res) =>{
    res.send("send me");
})

app.listen(Port,()=>{
    console.log(`Running server on Port no ${Port}`)
})