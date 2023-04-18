let originalPrice ;
let discountedPrice ;

// input event for original price
document.querySelector("#original-price").addEventListener("input" , (e)=>{
	originalPrice = e.target.value ;
})

// input event for discounted price
document.querySelector("#discounted-price").addEventListener("input" , (e)=>{
	discountedPrice = e.target.value ;
})

// click event on submit button
document.querySelector("#btn-submit").addEventListener("click" , ()=>{
	if(originalPrice == undefined || discountedPrice == undefined){
		alert("please filled input box") ;
		return undefined ;
	}
	document.querySelector("#op-screen").style.display = "flex" ;

	let temp = 100 * ( Number(originalPrice) - Number(discountedPrice) ) / Number(originalPrice)
	document.querySelector("#percent").innerHTML = `${temp.toFixed(2)}%` ;
})

// click event on reset button
document.querySelector("#btn-reset").addEventListener("click" , ()=>{
	document.querySelector("#original-price").value = ""
	document.querySelector("#discounted-price").value = "" ;

	document.querySelector("#op-screen").style.display = "none" ;
})
