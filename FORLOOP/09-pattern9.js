for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(row==5 ||col==1 )
    {
          process.stdout.write("* ")
    } else if (col==2 || col==3 || col==4){
        process.stdout.write("  ")
    } 
    }
console.log();
}