let select ;
let days ;
const rentalCosts = {
	economy : 4000,
	midsize : 10000,
	luxury : 20000
}

// input event for select drop down list
document.querySelector("#car-type").addEventListener("input" , (e)=>{
	select = e.target.value ;
})

// input event for days
document.querySelector("#days").addEventListener("input" , (e)=>{
	days = e.target.value ;
})

// click event for submit button
document.querySelector("#btn-submit").addEventListener("click" , ()=>{
	document.querySelector("#op-screen").textContent = (rentalCosts[select] * Number(days)) + " ₹" ;
})

// click event for reset button
document.querySelector("#btn-reset").addEventListener("click" , ()=>{
	document.querySelector("#op-screen").textContent = "" ;
})