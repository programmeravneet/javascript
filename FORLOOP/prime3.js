for(let ll=10; ll<=100;ll++){
    let count = 0;
    for(let div=2;div<ll-1;div++){
        if(ll%div==0){
            count=count+1
            break;
        }

    }
    if(count>0){
        console.log("not prime", ll);
    }else{
        console.log("prime", ll);
    }
}