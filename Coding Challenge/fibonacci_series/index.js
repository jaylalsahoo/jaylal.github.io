'use strict';
var fibo=[0,1];
var sum;
var firstno=0;
var secondno=1;

 var myfunction = function(num){
   for(var i=0;i<num;i++){
       sum= firstno + secondno;
       fibo.push(sum);
       firstno=secondno;
       secondno=sum;
       
   }
   console.log(fibo);
 }


var number=10;
myfunction(number);