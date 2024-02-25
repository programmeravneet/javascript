function fibo(num){
    let fn =0;
    let sn =1;
    for(let i = 1;i<=num;i++){
        let nn;
        console.log(fn); //---2
        nn=fn+sn        //---2
        fn=sn           //---fn=1
        sn=nn           //---sn=2
    }
}
fibo(5)
