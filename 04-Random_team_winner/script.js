var teams = ["CSK","MI","RCB","LSG","GT","KXIP","SRH","DC","KKR","RR"]

var btn = document.querySelector('button')
var h2 = document.querySelector('h2')



btn.addEventListener('click',function(){

    var num = Math.floor(Math.random() * teams.length)
    h2.innerHTML = teams[num]
    h2.style.color = 'blue'

})