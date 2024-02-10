let nsp = 4
let nst = 1
for (let row = 1; row <= 5; row++) {
    //spaces
    for (let sp = 1; sp <= nsp; sp++) {
        process.stdout.write("  ")
    }
    //stars
    for (let st = 1; st <= nst; st++) {
        process.stdout.write("* ")
    }
    //next line
    console.log();
    nsp = nsp - 1
    nst = nst + 2

    if (row == 5) {
        nsp = 1
        nst = 7
        for (let row = 1; row <= 5; row++) {
            //stars
            for (let sp = 1; sp <= nsp; sp++) {
                process.stdout.write("  ")
            }
            for (let st = 1; st <= nst; st++) {
                process.stdout.write("* ")
            }

            //next line
            console.log();
            nsp = nsp+1
            nst = nst-2
        }
    }
}