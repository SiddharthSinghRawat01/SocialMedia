const express = require("express");
const app = express();
const port = 3000;

// use express router
app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if(err){console.log(err)}
    console.log("server is listing at "+port+"")
})