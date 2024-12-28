const users = [
    {
        dp: "https://images.unsplash.com/photo-1734423741838-4a061fd9f603?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Dheeraj",
        status: "https://images.unsplash.com/photo-1733858864100-138aaea0917b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Bimlesh",
        status: "https://images.unsplash.com/photo-1734386011664-a17cc4ef6755?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1669475616380-ecb159b790d4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Dhurv Tiwari",
        status: "https://images.unsplash.com/photo-1734298497319-bd264ccf0c22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1673448391254-095fc8adf39a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Deepak",
        status: "https://images.unsplash.com/photo-1577121443425-97e029fccc2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "ishita",
        status: "https://images.unsplash.com/photo-1577121443425-97e029fccc2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1674389991666-fd854603c302?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Basudev",
        status: "https://images.unsplash.com/photo-1734555772459-dbed9a9f1dbf?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Harsh",
        status: "https://images.unsplash.com/photo-1733075925133-0ce2d4d4ecb7?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1733860474140-1734a8361e82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Ayush",
        status: "https://images.unsplash.com/photo-1577121443425-97e029fccc2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
var clutter = ''

users.forEach(function(elem,idx){
    clutter += `<div class="story">
                    <img id=${idx} src="${elem.dp}" alt="">
                </div>`
    
})

var storiyan = document.querySelector('#storiyan')

storiyan.innerHTML = clutter

var full = document.querySelector('.full')
var growth = document.querySelector('#growth')
var fullname = document.querySelector('.full h2')

 var grow = 0
storiyan.addEventListener('click',function(dets){
   
    var value = users[dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${value.status})`

    var int = setInterval(function(){
        grow++
        growth.style.width = grow + '%'
        fullname.innerHTML = value.username
    },30)

    setTimeout(function(){
        clearInterval(int)
        full.style.display = 'none'
        grow = 0

    },3000)
    
})