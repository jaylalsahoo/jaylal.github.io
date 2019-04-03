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
var PLAYER = [];
var COUNTRY=[];
var COUNT=[];
var countnum=1;


app.get("/players", function(request, response){
    var data = {
        players : PLAYER,
        country : COUNTRY,
        count:COUNT
    };
    response.render("players.hbs", data);

});


app.post("/players", function(request, response) {
    var playername = request.body.playername;
    var countryname = request.body.countryname;
    PLAYER.push(playername);
    COUNTRY.push(countryname);
    COUNT.push(countnum);
    countnum= countnum + 1;

    // Once data is added, redirect to the GET page.
    response.redirect("/players");
});


app.listen(3000);
