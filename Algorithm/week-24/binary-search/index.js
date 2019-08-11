function binarySearch(arr,search){
 let start=0, end=arr.length-1;
 while(start <= end){
     let mid=Math.floor((start+end)/2);
     if(arr[mid]===search){
         return mid;
     }
     else if(search > arr[mid]){
         start= mid+1;
     }
     else {
         end=mid-1;
     }

 }
  return -1;
}
function main(){
    let arr =[2,9,5,4,11,8];
    let x=arr.sort((a,b) => a-b);
    console.log(binarySearch(x,5));
}
main();