    fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{
        let firstName = document.querySelector('input')
        firstName.innerHTML=res.results[0].name.first}
        
        )
   
     




let heading1 = document.createElement('h1')
document.querySelector('body').appendChild(heading1)
heading1.innerHTML=firstName

 // append child then add data in the input

 // inner.HTML main input banaker usme bhej denge out put ko