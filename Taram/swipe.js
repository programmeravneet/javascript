let btn = document.querySelector('button')
btn.addEventListener('click',function(){ 
   
       let img1 = document.querySelector('#img1')
      img1.src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      
            let img2 = document.querySelector('#img2')
            img2.src="https://images.unsplash.com/photo-1709037805384-035dc3989923?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        })
        btn.addEventListener('dblclick',function(){
      
            img1.src="https://images.unsplash.com/photo-1709037805384-035dc3989923?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           
            img2.src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }    
)