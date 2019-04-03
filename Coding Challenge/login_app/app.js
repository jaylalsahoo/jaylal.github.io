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
var userDB = [
    {name: "ansal", password: "ansal123"},
    {name: "vaibhav", password: "vaibhav123"},
    {name: "divyam", password: "divyam123"}
  ];


app.get("/", function(request, response){
    
    response.render("index.hbs");

});

app.get("/dashboard", function(request, response){
    
    response.render("login.hbs");

});



app.post("/login", function(request, response) {
    var username =request.body.username;
    var pass =request.body.pass;

    for(var i=0;i<userDB.length;i++){
        if(userDB[i].name == username && userDB[i].password==pass){
         return response.redirect("/dashboard");
        }
    }
     response.send("invaild username and password");
    
});


app.listen(3000);
