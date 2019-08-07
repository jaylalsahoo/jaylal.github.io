function largest(large){
    let largest=0;
    for(let i=0;i<large.length-1;i++){
        if(large[i]>large[i+1]){
          largest=large[i];
        }else {
            largest=large[i+1]
        }
    }
    console.log("largest",largest);
}

function smallest(small){
    let smallest=0;
    for(let i=0;i<small.length-1;i++){
        if(small[i]>small[i+1]){
          smallest=small[i+1];
        }else {
            smallest=small[i]
        }
    }
    console.log("smallest",smallest);
}

function main(){
    let large=[2,6,3,8,9];
    let small=[1,3,5,2,1];
    largest(large);
    smallest(small);
}

main();