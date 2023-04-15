   
   
   // Starting Hero Section



const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


decrease.addEventListener("click", () => {
          result.innerHTML--;
          color();
})
reset.addEventListener("click", () => {
          result.innerHTML = 0;
          color();
})
increase.addEventListener("click", () => {
          result.innerHTML++;
          color();
})


// Creating Color Changing Effect

function color() {
          if (result.innerHTML < 0) {
                    result.style.color = "#00FFFF";
          }
          else if (result.innerHTML > 0) {
                    result.style.color = "#00FFFF";
          }
          else {
                    result.style.color = "#ffffff"
          }
}