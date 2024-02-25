function fun(){
console.log("Hey i am Avneet");
}
fun()
// funtion statement


let abc = function fun2(){
    console.log("Hey i am New function");
}
abc()

// First class functions (Funtions are first class variables in javascript it means a function can be stored in a variable)

let tum = function(){
    console.log("It an anonymous function");

}
tum()

// It is an anonymous function (It means ise kis variable mein store krna hoga, kuki is function ka koi naam nhi hai)

function ready(){
    console.log("tu to gya");
    return "hello"
}
let rv= ready()
console.log(rv);

//Agar function ko return krna hai ho use kisi variable main store karna hi hoga , us function ko .



console.log("-----------------------------------------------------------------------------------------------------------------------");

// Ab dekhenge ES6 ke functions ko hum log-------------->

let yolo=()=>{
    console.log("Main ek fat arrow function");
}
yolo()

// Ye ek simple fat arrow function hai

let tuti =(name,age)=>{
console.log(`My name is ${name} and my age is ${age}`);
}
tuti("Avneet",24)

console.log("------------------------------------------------------------------------------------------------------------------");

function fn(){
    console.log("hello dice");
    return "JavaScript"
}
console.log("hey");
console.log("hello");
console.log("Bello");
fn();
rv =fn();
console.log(rv);
console.log("puneet");
console.log("sumit");
fn()
rv2 = fn()
console.log(rv2);


let x=()=>"avneet"
x()
let y = x()
console.log(y);

 

function abhay(lop){
console.log('hui');
return lop
}
console.log(abhay(98))



var a=20;
function foo(){
    console.log(a);
    a = 10
}
foo()
console.log(a);