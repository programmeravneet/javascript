for(let row=1;row<=3;row++){
    for(let col=1;col<=11;col++){
        if(row==1){
            if(col>=2 && col<=4 || col>=8 && col<=10){
                process.stdout.write("* ")
            }
            else{
                process.stdout.write("  ")
            }
        }if(row==2){
            if(col==6){
                process.stdout.write("  ")
            }
            else{
                process.stdout.write("* ")
            }
        }if(row==3){
            process.stdout.write("* ")
        }
    }
    console.log();
}
        let nsp=1
        let nst=5

        for (let row = 1; row <= 5; row++) {
            for (let sp = 1; sp <= nsp; sp++) {
                process.stdout.write("  ")
            }
            for (let st = 1; st <= nst; st++) {
                process.stdout.write("* ")
            }
            for (let st = 2; st <= nst; st++) {
                process.stdout.write("* ")
            }
            console.log();
            nsp=nsp+1
            nst=nst-1
        }
