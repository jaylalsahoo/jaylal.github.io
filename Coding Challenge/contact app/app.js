'use strict';

// Include express in our application
var express = require("express");

// Include body-parser in our application
var bodyParser = require("body-parser");

// Create the express "app"
var app = express();

// Tell ExpressJS that we are using Handlebars for the project
app.set("view engine", "hbs");

// Tell ExpressJS to use body-parser to receive form data.
app.use(bodyParser.urlencoded({ extended: false  }));

// Global  variable to hold data
var CONTACTS = [];
var NUMBERS=[];
var COUNT=[];
var countnum=1;


app.get("/contacts", function(request, response){
    var data = {
        contacts: CONTACTS,
        userName: "jAYLAL",
        numbers:NUMBERS,
        count:COUNT
    };
    response.render("contacts.hbs", data);

});


app.post("/contacts", function(request, response) {
    var contactName = request.body.contactName;
    var contactNo =request.body.contactNo;
    CONTACTS.push(contactName);
    NUMBERS.push(contactNo);
    COUNT.push(countnum);
    countnum= countnum + 1;

    // Once data is added, redirect to the GET page.
    response.redirect("/contacts");
});


app.listen(3000);
