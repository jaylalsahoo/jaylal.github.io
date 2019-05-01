'use strict';
var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];
var squares=[];

//Imperative way
for (var i=0;i<numbers.length;i++){
  if(numbers[i]%2==0){
    squares.push(numbers[i]*numbers[i]);
  }
}
console.log(squares);

//functional Way
squares=numbers.filter(function(element){
  return element%2==0;
}).map(function(num){
  return num*num;
});

console.log(squares);
