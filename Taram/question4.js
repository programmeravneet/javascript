fetch('https://randomuser.me/api/')
.then(raw=>raw.json())
.then(abc=(res)=>(res.results[0].name.first)
)
let fname = document.querySelector('#fname')

