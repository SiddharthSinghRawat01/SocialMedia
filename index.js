const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and script from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(port,(err)=>{
    if(err){console.log(err)}
    console.log("server is listing at "+port+"")
})