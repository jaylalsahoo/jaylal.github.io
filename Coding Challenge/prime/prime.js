//Prime number
'use strict';
var isPrime = function(num){
  for(var i=2;i<=num-1;i++){
    if(num%i==0){
        return false;
    }
  }
  return true;
}


var generatePrime = function(n){
  var primeArray=[];
  var count =2;
  while(primeArray.length!=n){
    if(isPrime(count)){
      primeArray.push(count);
    }
    count =count +1;
  }
  return primeArray;
}

console.log(generatePrime(23));