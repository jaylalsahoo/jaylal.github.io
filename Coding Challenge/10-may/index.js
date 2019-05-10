let fs = require("fs");

class myFile {
   constructor(data){
      console.log(data);
      this.data= data;
   }

   get Data(){
       let sen= fs.readFileSync(this.data,"utf-8");
       return sen;
   }

   set Data(value){
          fs.writeFileSync(this.data,value,"utf-8");
   }
}


let fileName = "./fileName.txt";
let str = new myFile(fileName);
str.Data= "hello world";
console.log(str.Data);

