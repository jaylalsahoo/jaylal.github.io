'use strict';

var convert = function(num){
   var arr=["zero","one","two","three","four","five","six","seven","eight","nine"];
   var result="";
   while(num > 0){
       var digit = num %10;
       result= arr[digit]+ " "+ result;
       num =Math.floor(num/10);

   }
   console.log(result);
}

convert(123);