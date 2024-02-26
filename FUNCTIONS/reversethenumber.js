// reverse
function reverse(num){
    //code
    while(num>0){
        let ld =num%10  // yaha maine last digit nikal li hai
        num=Math.floor(num/10)  // yaha mai arguments main se number ko chota kra hu
        console.log(ld);  // yaha main ld jo pehli ayi hai use print kra hu
    }
}
reverse(12345)      //doubt agar mujhe ld ko return kran ho to main kya krunga


let pop =786
// let lop = pop/100
let fd = Math.floor(pop/100)

console.log(fd);