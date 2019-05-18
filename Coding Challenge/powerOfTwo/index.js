 function powerOfTwo(num){
 while(num%2 == 0){
     num= num/2;
     if(num == 1){
         return true;
     }
 }
 return false;
    }



console.log(powerOfTwo(1028));