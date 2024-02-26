let obj = {
    name:'aAvneet',
    age: 25
}
function abc(){
    console.log(this);
}
abc.call(obj)