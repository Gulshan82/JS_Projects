const btn = document.querySelector("button");
const stat = document.querySelector("h4");
const border = document.querySelector("img");
let flag = 0;
btn.addEventListener("click", () => {
    if (flag === 0) {
        stat.style.color = "green";
        btn.innerHTML = "Request Sent";
        stat.innerHTML = "Requested";
    }
    else{
        stat.style.color = "red";
        border.style.borderColor = "red";
    }
    setTimeout(() => {
        if (flag === 0){
            btn.innerHTML = "Remove Friend";
            stat.innerHTML = "Friends";
            border.style.borderColor = "";

            flag = 1;
        }
        else{
            btn.innerHTML = "Add Friend";
            stat.innerHTML = "Stranger";
            flag = 0;
        }

    }, 1000);
})