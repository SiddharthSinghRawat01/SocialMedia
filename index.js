const express = require("express");
const app = express();
const port = 3000;

// use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(port,(err)=>{
    if(err){console.log(err)}
    console.log("server is listing at "+port+"")
})