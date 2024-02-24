let n=7;
let fn=0;
let sn=1;

for(let i = 1;i<=n;i++){
    console.log(fn);
    let nn=fn+sn;
    fn=sn;
    sn=nn;
    
}

// 0 1    ------ > 1
// 