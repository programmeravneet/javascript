let obj = {
    // toString(){
    //     return 'chacha'
    // },
    // valueOf(){
    //     return 100
    // }
}
console.log(obj.toString());
console.log(obj.valueOf());

console.log(10-obj);



let obj2 = {
    toString(){
        return 10
    }
}
let obj3 = {
    valueOf(){
        return '90'
    }
}
console.log(obj2-obj3);