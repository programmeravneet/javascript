
// count the numbers ------?


function countDigit(num) {
    // code
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10)
        console.log(num);
        count=count+1
    }
return count
}
console.log(countDigit(123456789))



// let value = 23;
// let ld = value%10
// console.log(ld);



// first number ka modulo krna hoga -----> is wo remainder deta jayega
// number ko chota krna hoga -----> is se wo chota hojata jayega