function prime(ll,ul){
    for(let num=ll; num<=ul;num++){
        let count = 0;
        for(let div=2;div<num-1;div++){
            if(num%div==0){
                count=count+1
                break;
            }   
        }
        if(count>0){
            console.log("not prime", num);
        }else{
            console.log("prime", num);
        }
}
}
prime(1,10)