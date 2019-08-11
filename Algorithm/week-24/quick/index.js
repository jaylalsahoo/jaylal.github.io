function QuickSort(arr){
console.log(arr);
if(arr.length <=1){
    return arr;
}
let left=[],right=[],pivot=arr.shift(),center=[pivot];
while(arr.length){
    let currentElement=arr.shift();
    if(currentElement===pivot){
        center.push(currentElement)
    }
    else if(currentElement > pivot){
        right.push(currentElement);
    }
    else {
        left.push(currentElement);
    }
}
let sortedLeftArray= QuickSort(left);
let sortedRightArray = QuickSort(right);


return sortedLeftArray.concat(center,sortedRightArray); 
}

function main(){
    let arr =[2,1,3,9,5,3,2];
   console.log( QuickSort(arr));
}

main();