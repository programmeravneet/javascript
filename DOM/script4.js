let heading1 = document.querySelector('h1')
heading1.addEventListener('mouseover',function(){
    heading1.style.color="red"
})
heading1.addEventListener('mouseleave',function(){
    heading1.style.color='black'
})
heading1.addEventListener('dblclick',function(){
    heading1.textContent='i am not heading'
})
heading1.addEventListener('click',function(){
    heading1.textContent='i am back to heading'
})
heading1.classList.add='h1'
heading1.classList.remove='h1'

let heading2 = document.createElement('h1')
document.querySelector('body').appendChild(heading2)
heading2.innerHTML='I am second heanding'


