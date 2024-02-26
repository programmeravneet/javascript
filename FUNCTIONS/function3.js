function upper(){

    let nsp=2;
    let nst=1;
    for(let row=1;row<=3;row++){
        //space
        for(let sp=1;sp<=nsp;sp++){
            process.stdout.write("  ")
        }
        
        //stars
        for(let st=1;st<=nst;st++){
            process.stdout.write("* ")
        }
        
        //new
        console.log();
        nsp=nsp-1
        nst=nst+2
        
    }
} upper()

