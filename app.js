const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');


// app.get("/",(req,res)=>{
//     res.send("Hi");

// });


app.use(parser.urlencoded({extended: false}));
app.use('/static',express.static(path.join(__dirname, 'static')));



app.get("/employee/create",(req,res)=>{
    var loc = path.join(__dirname,'views','index.html');
    res.sendFile(loc);
});

app.post("/employee/create", (req,res)=>{
    console.log(req.body.name,req.body.location);
    res.json(req.body);
});



app.listen(100);