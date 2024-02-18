for (let row = 1; row <= 5; row++) {
    for (let st = 1; st <= row; st++) {
        process.stdout.write("* ")
    }
    
    console.log();
    if(row==5){
        for (let row = 1; row<=5; row++){
            
            for(let st =1;st<=5-row;st++){
                process.stdout.write("* ")
            }
            console.log();
        }
    
    }
}
