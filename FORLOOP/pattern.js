// let nst =5
// for(let row=1;row<=5;row++){
//     for(let col=1;col<=nst;col++){
//        process.stdout.write("*  ")
//     }
//     console.log();
//     nst=nst-1
// }

// stars

// let nst=5
// let nsp=0
// for(let row=1;row<=5;row++)
// {
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("* ")
//     }
//     console.log();

//     nst=nst-1
//     nsp=nsp+1
// }
// bcoz code run from left to right iske liye ple space pehle print karana hoga

// new line
// let obj={
//     name:"avneet",
//     age:24,
//     city:"delhi"
// }

// for(var key in obj){
//     console.log(key,obj[key]);
// }

let obj = {
    name: "salman",
    toString(){
    return "tu to gya"
    },
    valueOf(){
        return 77
    }

}
console.log(obj.toString());
console.log(obj.valueOf());
console.log(obj.name);

