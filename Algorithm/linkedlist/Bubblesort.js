function bubbleSort(arr){
    let step=0;
    console.log("before sorting",arr);
 for(let i=0;i<arr.length;i++){
     let flag =false;
     for(let j=0;j<arr.length - i;j++){
         step +=1;
        if(arr[j] > arr[j+1]){
            [arr[j] ,arr[j+1]] =[arr[j+1],arr[j]];
           flag =true;
        }
     }
    if(!flag){
         break;
     }
 }
 console.log("after sorting" ,arr);
 console.log("steps",step)
}

let arr = [1,7,11];
bubbleSort(arr);