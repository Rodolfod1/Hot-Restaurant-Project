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
    res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/api/tables", function(){
    res.sendFile(path.join(__dirname, ".html"));
});

app.get("/api/tables/:table", function(req, res){
    var choice = req.params.table;

    for(var i = 0; i < 5; i++){
        if(choice === tables[i].routeName){
            return res.json(tables[i]);
        }
        return res.json(false);
    }
});

// create POST
app.post("/api/tables", function(req, res)) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.costumerName.replace(/\s+/g, "").toLowerCase();
    tables.push(newReservation);
    res.json(newReservation);
}

// start the server

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})