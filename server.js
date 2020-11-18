// Dependencies
const e = require("express");
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

// set up the Express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "table.html"));
});

// start the server

app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
})