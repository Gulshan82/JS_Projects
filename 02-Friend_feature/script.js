const btn = document.querySelector("button");
const stat = document.querySelector("h4");
const border = document.querySelector("img");

let flag = 0;
btn.addEventListener("click", ()=>{
    if (flag === 0) {   
        stat.innerHTML = "Friends";
        stat.style.color = "green";
        btn.innerHTML = "Friends";
        border.style.borderColor = "green"
        stat.style.transition = "all 0.9s linear";
        flag= 1;
    }
    else{
        stat.innerHTML = "Stranger";
        stat.style.color = "red";
        btn.innerHTML = "Add Friend";
        border.style.borderColor = "red";
        flag= 0;
    }
    
})