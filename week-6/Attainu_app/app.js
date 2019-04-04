'use strict';
// All the require modules has added
var express = require("express");
var mongo =require("mongodb");
var bodyparser = require("body-parser");

// app has stared 
var app = express();

//app configuration and setting
app.set("view engine","hbs");
app.use(bodyparser.urlencoded({extended:false}));

//Take a global variable
var DB;

//create a mongoclient
var mongoclient = new mongo.MongoClient("mongodb://localhost:27017/attainu",{useNewUrlParser: true});
//connection test
mongoclient.connect(function(error){
    if(error){
        console.log("error found");
    }
    else {
        console.log("connect to database");
        DB =mongoclient.db("attainu");
    }
})

app.get("/", function(request,response){
    response.render("index.hbs");
})

app.get("/instructors", function(request, response) {
    DB.collection("instructors").find({}).toArray(function(error, instructors){
        if(error) {
            console.log("error");
        }
        else {
            var data = {
                instructors :instructors
            }
            console.log("data fetched");
            response.render("instructors.hbs",data);
        }
        
    });
});

app.get("/instructors/add",function(request,response){
    response.render("instructor-add.hbs");
});

app.post("/instructors/add",function(request,response){
    var name= request.body.name;
    var phone = request.body.phone;
    var data ={
        name : name,
        phone:phone
    }
    DB.collection("instructors").insertOne(data ,function(error,result){
        if(error){
            console.log("error occured in add instructor page");
        }
        else {
            console.log("running successfully in add instructor page");


        }
        response.redirect("/instructors");
    })
})

app.get("/students",function(request,response){
    DB.collection("students").find({}).toArray(function(error,students){
        if(error){
            console.log("error has occured in view student page");
        }
        else {
            var data ={
                students:students
            }
            console.log("running fine in view students page");
        }
        response.render("students.hbs",data);
    })
})

app.get("/students/add" , function(request,response){
   response.render("students-add.hbs");
})

app.post("/students/add",function(request,response){
    var name= request.body.name;
    var phone =request.body.phone;
    var state = request.body.state;
    var data = {
        name :name,
        phone :phone,
        state :state
    }

    DB.collection("students").insertOne(data ,function(error,result){
        if(error){
            console.log("error has occured in students add page");
        }
        else {
            console.log("successfully running in student add page");
        }
        response.redirect("/students");
    })
})






app.listen(3000);