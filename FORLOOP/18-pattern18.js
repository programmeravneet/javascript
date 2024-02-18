let n = 5
let first = 0;
let second = 1
let next;


for (let row = 0; row <= n; row++) {
    console.log(first);
    next = first + second
    first = second
    second = next
}

// need to understand
