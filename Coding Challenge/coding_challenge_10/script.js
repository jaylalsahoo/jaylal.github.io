'use strict';

var factorial = function(fnum) {
      for(var i=fnum-1;i>=1;i--){
        var fnum = fnum * i;
        
      }
      return fnum;
}

var factnum = 5;
var Resfact=factorial(factnum);
console.log(Resfact);