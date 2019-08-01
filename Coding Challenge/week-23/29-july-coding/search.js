const fs=require("fs");
function search(fileName,searchWord){
    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err){
            return console.log("failed to read",fileName);
        }
         data = data.split("\n");
         data.forEach((d ,i) => {
         if(d.includes(searchWord)){
             console.log("Line =>",i,d);
         }
        })
    })
console.log(fileName,searchWord);
}

function main(){
    console.log(process.argv.length[3]);
    if(process.argv.length !==4){
        console.log("errror");
        return
    }
    let fileName=process.argv[2];
    let searchWord=process.argv[3];
    console.log(fileName,searchWord);

    search(fileName,searchWord);
}
main();
