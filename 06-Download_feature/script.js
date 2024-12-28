var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var growth = document.querySelector('#growth')
var h2 = document.querySelector('h2')
var grow = 0

var num = Math.floor(Math.random()*100)

btn.addEventListener('click', function () {

    var growInterval = setInterval(function () {
        grow++
        h1.innerHTML = grow + '%'
        growth.style.width = grow + '%'

    }, num)

    setTimeout(function () {
        clearInterval(growInterval)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.7
        btn.style.pointerEvents = 'none'
        h2.innerHTML = `Your file is downloaded in ${num/10} seconds `


    }, num*100)

})