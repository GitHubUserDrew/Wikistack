var express = require('express');
const path = require('path');
var app = express();

var morgan = require('morgan');

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req,res) => { 
    res.send("Hello World");
});


const PORT = 3000;

app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


