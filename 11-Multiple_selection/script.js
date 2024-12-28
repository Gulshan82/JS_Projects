let btns = document.querySelectorAll('button');
let body = document.querySelector('body')

btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        body.style.backgroundColor = e.innerHTML;
        body.style.transition = 'background-color 0.5s ease';
    })
})