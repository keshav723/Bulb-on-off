const button = document.querySelector("#toggleBtn");
const image = document.querySelector("img");
console.log(button.textContent);

button.addEventListener("click", toggleBlub)

function toggleBlub(e){

    if(button.textContent.includes('off')){
        image.src = "bulb-on.png";
        button.textContent ="on";
        
       }
       else{
        image.src = "bulb-off.png";
        button.textContent ="off";
       }
        
}
