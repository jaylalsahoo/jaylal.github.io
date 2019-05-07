'use strict';

function MyArray() {
    this.array = [];
    for(var argu of arguments){
        this.array.push(argu);

    }
    
}

MyArray.prototype.print = function(){
    this.array.forEach(function(a){
        console.log(a);
    })
}

MyArray.prototype.search = function(searchElement){
    for(var i=0;i<this.array.length;i++){
        if(this.array[i] == searchElement){
            return i+1;
        }
        
    }
    return -1;  
}

MyArray.prototype.sort = function(){
    this.array.sort(function (a,b){
        return b-a;
    });
}

var arr = new MyArray(3,4,5,7,1);
console.log("Before Sorting");
arr.print();
console.log("the searched element position");
console.log(arr.search(5));
arr.sort();
console.log("After sorting");
arr.print();