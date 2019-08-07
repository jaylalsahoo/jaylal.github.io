const fs=require('fs');

function readFile(fileName,callback) {
   console.log(fileName,callback);
   fs.readFile(fileName,"utf-8",callback);
}

function sortData(err,data){
    if(err){ return console.log("error")}
    let csv =data.trim().split('\n');
    for(let i=0;i<csv.length;i++){
        for(let j=0;j<csv.length-i;j++){
         let row1=csv[j].split(",");
         let percentage1 =parseFloat(row1[1]);
         let row2=csv[j+1]?csv[j+1].split(","):"";
         let percentage2 =parseFloat(row2[1]);
         if(percentage2>percentage1){
          [csv[j],csv[j+1]]=[csv[j+1],csv[j]];
         }
        }
    }
    print(csv);
}

function print(csv){
    console.log(csv);
}

function main(){
    readFile("data.csv",sortData);
}

main();