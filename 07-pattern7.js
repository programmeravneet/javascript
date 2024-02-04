// let nsp = 4;
// for(let row=1;row<=5;row++){
//     //space dalo
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }


//     //star daalo
//     process.stdout.write("* ")

//     // new line
//     console.log();

//     nsp=nsp-1

// }

for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(row+col==6){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log();
}

