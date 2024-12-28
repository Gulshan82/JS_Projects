const box = document.querySelector('.box');
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    var a1 = Math.floor(Math.random()*255)  
    var a2 = Math.floor(Math.random()*255)  
    var a3 = Math.floor(Math.random()*255)  

    box.style.backgroundColor = `rgb(${a1},${a2},${a3})`  
})