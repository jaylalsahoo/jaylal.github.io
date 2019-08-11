function mergeArrays(left,right){
    console.log("mergeArrays",left,right);
    let merged=[];
    while(left.length && right.length){
      let smallest ;
      if(left[0]<right[0]){
          smallest=left.shift();
      } else {
          smallest=right.shift();
      }
      merged.push(smallest);
    }
    if(left.length){
        merged= merged.concat(left);
    }
    if(right.length){
        merged=merged.concat(right);
    }
  console.log("actual",merged)
    return merged;

}

function mergeSort(arr){
if(arr.length ===1){
    return arr;
}
let mid =(arr.length/2);
let left=arr.slice(0,mid);
let right =arr.slice(mid,arr.length);
console.log("before sorting",left,right)
let leftSortedArray =mergeSort(left);
let rightSortedArray =mergeSort(right);


return mergeArrays(leftSortedArray,rightSortedArray);
}

function main(){
    let arr=[2,9,4,11,7,3,2,1];
    mergeSort(arr)
}
main();