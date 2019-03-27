'use strict';

var express = require("express");

var calculator = express();

var addnum = function(request,response) {
    var num1 =parseInt(request.params.number1);
    var num2 =parseInt(request.params.number2);
    var result = num1 + num2 ;

    response.send("the sum is "+ " "+ result)
};

var subnum =function(request,response) {
    var num1 =parseInt(request.params.number1);
    var num2 =parseInt(request.params.number2);
    var result = num1 - num2 ;

    response.send("the difference is "+ " "+ result)
};

var multiplynum =function(request,response) {
    var num1 =parseInt(request.params.number1);
    var num2 =parseInt(request.params.number2);
    var result = num1 * num2 ;

    response.send("the Multiplication is "+ " "+ result)
};
var divinum =function(request,response) {
    var num1 =parseInt(request.params.number1);
    var num2 =parseInt(request.params.number2);
    var result = num1 / num2 ;

    response.send("the Division is "+ " "+ result)
};
calculator.get("/add/:number1/:number2",addnum);
calculator.get("/substract/:number1/:number2",subnum);
calculator.get("/multiply/:number1/:number2",multiplynum);
calculator.get("/division/:number1/:number2",divinum);

calculator.listen(3000);