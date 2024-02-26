var btns = document.querySelectorAll('button')
for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        if(btns[i]==btns[0]){
            btns[i].style.backgroundColor='red'
            btns[i].style.color='white'
            
        }
        else if(btns[i]==btns[1]){
            btns[i].style.backgroundColor='green'
            btns[i].style.color='white'
            
        }
        else if(btns[i]==btns[2]){
            btns[i].style.backgroundColor='yellow'
            
        }
        else if(btns[i]==btns[3]){
            btns[i].style.backgroundColor='pink'
            
        }
        else if(btns[i]==btns[4]){
            btns[i].style.backgroundColor='blue'
            btns[i].style.color='white'
            
        }
    })
   
}
