let nst = 5
let nsp = 1

for (let row = 1; row <= 5; row++) {

    //space
    for (let sp = 1; sp <nsp; sp++) {
        process.stdout.write("  ")
     }
    
    //stars
    
    
    for (let st = 1; st <= nst; st++) {
        process.stdout.write("* ")
    }

    // new line
    console.log();

    nst = nst - 1
    nsp = nsp + 1


}