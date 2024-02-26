// //code to print the numbers from begining to end
// function front(num){
// while(num>0){
//     rm = num%100
//     num= rm
//     console.log(rm);
// }

// }
// front(786)

function printDigitsSeparately(num) {
    // Convert the number to a string
    let numStr = num.toString();

    // Iterate over each character (digit) in the string
    for (let i = 0; i < numStr.length; i++) {
        // Print each digit
        console.log(numStr[i]);
    }
}

printDigitsSeparately(786);

//// sir help plzzzz