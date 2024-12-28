const ButtonOn = document.querySelector(".on");
const Bulb = document.querySelector(".bulb")

let flag=1;
ButtonOn.addEventListener("click", () => {
if (flag==1){
    Bulb.style.backgroundColor = "Yellow";
    flag=0;
    ButtonOn.textContent ="switch"  
}
else{
    Bulb.style.backgroundColor = "Black";
    flag=1;
    }
});
    