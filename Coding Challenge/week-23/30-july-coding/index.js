// //Using the  2 for loop 
// function frequency(arr){
//     let frequent={};
// for(let i=0;i<arr.length;i++){
//     frequent[arr[i]]=0;
// }
// for(let i=0;i<arr.length;i++){
//     frequent[arr[i]] +=1;
// }
//      return frequent;
// }

// function main(){
//     let arr=["2","3","2","5","3"];
//     let names=["Ansal","Ansal","Vaibhav","Divyam","Vaibhav"];
//   console.log(  frequency(arr));
//  console.log(frequency(names));
// }
// main();

//Using single for loop

// function frequency(arr){
//     let frequent={};
// for(let i=0;i<arr.length;i++){
// let element=arr[i];

//     if(!frequent[element]){
//        frequent[element]=0;
//     }

//     frequent[element] +=1;
// }
//      return frequent;
// }

// function main(){
//     let arr=["2","3","2","5","3"];
//     let names=["Ansal","Ansal","Vaibhav","Divyam","Vaibhav"];
//     console.log(  frequency(arr));
//     console.log(frequency(names));
// }
// main();

//using Ternirary operator
function frequency(arr){
    let frequent={};
for(let i=0;i<arr.length;i++){
let element=arr[i];
    frequent[element]=frequent[element] ? frequent[element]+1 :1;
    console.log(frequent[element]);
}
     return frequent;
}

function main(){
    let arr=["2","3","2","5","3"];
    let names=["Ansal","Ansal","Vaibhav","Divyam","Vaibhav"];
    console.log(  frequency(arr));
    console.log(frequency(names));
}
main();

//using functional programming method

// function frequency(arr){
//     let frequent={};
//   arr.forEach(a =>frequent[a]=frequent[a]?frequent[a]+1:1)
//      return frequent;
// }

// function main(){
//     let arr=["2","3","2","5","3"];
//     let names=["Ansal","Ansal","Vaibhav","Divyam","Vaibhav"];
//     console.log(  frequency(arr));
//     console.log(frequency(names));
// }
// main();


