// function prime(ll,ul){
// }
// prime(10,20)
for(let num=1;num<=20;num++){
    let count = 0;
    for(let div=1;div<=num;div++){
        if(num%div==0){
            count =count + 1;
        }
    }
    if(count>2){
        process.stdout.write("Prime", num);   
    }else{
        process.stdout.write("Not prime",num);
    }
    console.log("lop");
}