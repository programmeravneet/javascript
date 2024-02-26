let obj={
    name:'avneet',
    age:24
}
function someFun(a,b){
    console.log(this);
    console.log(a,b);
}
newFun=someFun.bind(obj,[5,6])
newFun()