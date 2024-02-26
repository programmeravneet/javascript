// let obj = {
//     name:"Avneet",
//     age:25,
//     fnc : function(){
//         console.log(this);
//     }
    
// }

console.log(this);

function abcd(){
    console.log(this);
}
abcd()

let obj1 = {
    name : 'avneet',
    somfun : function(){
        console.log(this);
        let abc=()=>{
            console.log(this);
        }
        abc()
    }
}
obj1.somfun()
