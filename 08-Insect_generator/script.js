let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click",()=>{

    let img = document.createElement("img");
    img.setAttribute("src","https://png.pngtree.com/png-clipart/20231008/original/pngtree-cute-striped-black-cat-who-is-confused-png-image_13291044.png");
    body.appendChild(img);
    img.style.height = "90px";
    img.style.position = "absolute";
    img.style.top = Math.floor(Math.random()*100) + "%";
    img.style.left = Math.floor(Math.random()*100) + "%";
})