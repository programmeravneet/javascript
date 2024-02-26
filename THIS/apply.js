let obj={
    name:'avneet',
    age:24
}
function someFun(a,b){
    console.log(this);
    console.log(a,b);
}
someFun.apply(obj,[5,6])