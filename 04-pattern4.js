let nsp = 4
let nst = 1
for (row = 1; row <= 5; row++) {
    // space print
    for (let sp = 1; sp <= nsp; sp++) {
        process.stdout.write("  ")
    }
    // stars print
    for (let st = 1; st <= nst; st++) {
        process.stdout.write("* ")
    }
    // new line start
    console.log();

    nst = nst + 1
    nsp = nsp - 1


}