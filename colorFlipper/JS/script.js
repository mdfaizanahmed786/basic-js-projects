console.log("This tutorial changes body color");

// Adding env variables
const randomColor = document.querySelectorAll(".colorSelector")[0];
const flipBtn = document.getElementById("flip");
let i=0;
const colorArray = [ "green", "red", "violet", "blue", 'white'];

// Adding event listener to button

flipBtn.addEventListener("click", changeColor);
function changeColor(e) {
document.body.style.backgroundColor=colorArray[i]
randomColor.setAttribute('style', 'text-transform:capitalize;')
randomColor.textContent=`${colorArray[i]};` 
i++;
if(i>colorArray.length){
    console.log(i)
    i=0;
    document.body.style.backgroundColor=colorArray[i]
    randomColor.textContent=`${colorArray[i]};` 
    i++;
}
}
