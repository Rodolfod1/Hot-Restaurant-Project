// Dependencies
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

// set up the Express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables Data
var tables = [
    {
        costumerName: "rodo",
        phoneNumber: "455546",
        customerEmail: "rod@diaz",
        customerID: "55656"
    },
    {
        customerName: "Ryan Stout",
        phoneNumber: "5868542383",
        customerEmail: "rstout039@gmail.com",
        customerID: "43462frhg66"
    }
]

// ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//app.get("/api/tables", function(){
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables/:table", function (req, res) {
    var choice = req.params.table;

    for (var i = 0; i < tables.length; i++) {
            if (choice === tables[i].customerName) {
                return res.json(tables[i]);  
        }
        return res.json(false);
    }
});

app.get("/api/reserve/:reserve", function (req, res) {
    var choice = req.params.table;
    for (var i = 5; i < tables.length; i++) {
        if (choice === tables[i].customerName) {
            return res.json(tables[i]);
        }
        return res.json(false);
    }
});

// create POST
app.post("/api/tables", function (req, res) {
    var newReservation = req.body;
    newReservation.customerName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
    tables.push(newReservation);
    res.json(true);
});

// start the server

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})