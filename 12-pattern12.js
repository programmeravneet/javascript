let nst =1
let nsp =5

for(let row=1;row<=5;row++){
    //  space 
    for(let sp=1;sp<=nsp-1;sp++){
    process.stdout.write("  ")
    }
    // stars 
    for(let st=1;st<=nst;st++){
        process.stdout.write("* ")
    }
    console.log();
    nst=nst+1
    nsp=nsp-1

    if(row==5){
        nsp=1
        nst=5
        for(let row=1;row<5;row++){
            for(let sp=1;sp<=nsp;sp++){
            process.stdout.write("  ")
            }
            for(let st=1;st<=nst-1;st++){
                process.stdout.write("* ")
            }
            console.log();
            nsp=nsp+1
            nst=nst-1
        }  
        
    }
}
