var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];
let waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "list.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
    let newReservation = req.body;
    if(tables.length < 5) {
        tables.push(newReservation);
        res.json(newReservation);
    }
});

app.post("/api/waitList", function(req, res) {
    let newReservation = req.body;
    if(tables.length === 5) {
        waitList.push(newReservation);
        res.json(newReservation);
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });