let textArea = document.querySelector('textarea')
let count = textArea.value
let c = 0
for(i=0;i<count.length;i++){
    console.log(count[i]);
    c=c+1
}
console.log(c);
