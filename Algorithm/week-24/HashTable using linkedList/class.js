const LinkedList =require('./list');
const fs=require("fs");

class HashTable{
    constructor(size=40){
        this.size=size;
         this.array=[];
         for(let i=0;i<this.size;i++){
             this.array.push(new LinkedList());
         }
    }

    hash(key){
        let hashId=0;
       Array.from(key).forEach(a => hashId +=a.charCodeAt(0));
        return hashId % this.size;
    }

    set(key,value){
        let hashId= this.hash(key);
        let list=this.array[hashId];
        let node =list.search(key);
       if(node){
           node.data =value;
       }else {
           list.append(key ,value);
       }
        
    }

    get(key){
        let hashId= this.hash(key);
        let list=this.array[hashId];
        let node =list.search(key);
        if(node){
            node.data;
        }else {
            return null;
        }
    }

    delete(key){
        let hashId= this.hash(key);
        let list=this.array[hashId];
        list.delete(key);
    }

    print(){
        this.array.forEach(a =>a.print())
    }
}


let h= new HashTable();
fs.readFile("states.csv",'utf-8',function(err,data){
    if(err){ return err};
    let row=data.trim().split('\n');
    for(let i=0;i<row.length;i++){
        let row1 = row[i].split(",");
        let key = row1[0];
        let percentage=row1[1];
        h.set(key,percentage);
    }
    h.print();
})

