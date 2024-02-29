    let f = null
    fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{f=(res.results[0].name.first)
        console.log(f);
        let fname = document.querySelector('#fname')
        fname.value=f
    
    }
    )
 // append child then add data in the input

 // inner.HTML main input banaker usme bhej denge out put ko