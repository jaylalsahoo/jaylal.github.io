"use strict";

var Current_Color = "green";
var Timer ;
var Duration=5000;

var colorChange = function(){
    var body =document.getElementById("color");
    body.style.backgroundColor=Current_Color;

    if(Current_Color == "green"){
        Current_Color= "red";
    }
    else {
        Current_Color="green";
    }

}

Timer=setInterval(colorChange,Duration);

var slowButton = document.getElementById("slow");
slowButton.addEventListener("click",function(){
    clearInterval(Timer);
    Duration = Duration*2;
    setInterval(colorChange,Duration);
});


var fastButton = document.getElementById("fast");
fastButton.addEventListener("click",function(){
    clearInterval(Timer);
    Duration=Duration/2;
    setInterval(colorChange,Duration);
});