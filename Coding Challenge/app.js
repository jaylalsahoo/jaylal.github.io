class Myset {
     constructor(...array){
          this.array = array;
     }

     print(){
          this.array.forEach(function(data){
              console.log(data);
          })     
     }

     search(num){
        for(let i=0;i<this.array.length;i++) {
            if(this.array[i] == num){
                return i+1;
                     }
            }
                return -1;
       }
     
    SortArr(){
         this.array.sort(function(a,b){
              return b-a;
         });
    }
      
}

let arr = new Myset(3,4,5,7,1);
arr.print();
console.log("search element position" +" " +arr.search(5));
console.log("After sorting"+" " + arr.SortArr());





