function commonarray(a,b){
    let arr=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
              arr.push(a[i]);
            }
        }
    }

    console.log(arr);
}
function main(){
    let a =[5,2,8,9,4]; 
    let b = [3,2,9,5];
    commonarray(a,b);
}

main();