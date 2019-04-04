'use strict';

var fs = require("fs");
var mongo = require("mongodb");
var DB;

// Create a Mongo client
var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error) {
    if(error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        DB = mongoClient.db("library");
        fs.readFile("books.json","utf-8",function(err,data){
            if(err){
                console.log("error occured");
            }
            else {
                data= JSON.parse(data);
                DB.collection("books").insertMany(data,function(err,success){
                      if(err){
                          console.log("error");
                      }
                      else {
                          console.log("data inserted");
                      }
                });
            }
        
        })
    }
    })
