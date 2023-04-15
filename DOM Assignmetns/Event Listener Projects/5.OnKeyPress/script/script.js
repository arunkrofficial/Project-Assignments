
let input = document.getElementById('input') 
let display = document.getElementById('display')

input.addEventListener('keypress', function(e){
    display.innerText ="You have Pressed ➡ " + e.key
})