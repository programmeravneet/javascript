fetch('https://randomuser.me/api/')
.then(raw=>raw.json())
.then(res=>console.log(res.results[0].name.first))