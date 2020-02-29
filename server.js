var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];
let waitList = [];




function reservation() {
    let newReservation = {
        name: "",
        phone: "",
        email: "",
        id: ""
    }
    if(tables.length < 5){
        tables.push(newReservation);
    }
    else{
        waitList.push(newReservation);
    }

    $.post("/api/tables")
}



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });