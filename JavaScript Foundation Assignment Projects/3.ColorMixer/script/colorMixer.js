let color1 = document.getElementById("color-1") ;
let color2 = document.getElementById("color-2") ;
let output = document.getElementById("output") ;
let btnCheck = document.getElementById("btnCheck") ;

let color1Value ;
let color2Value ;

color1.addEventListener("input" , (e)=>{
	color1Value = e.target.value ;
}) ;
color2.addEventListener("input" , (e)=>{
	color2Value = e.target.value ;
}) ;


btnCheck.addEventListener("click" , ()=>{
	console.log("check button clicked")
	console.log(color1Value)
	console.log(color2Value)
	color1Value = color1Value.toLowerCase()
	color2Value = color2Value.toLowerCase()

	if((color1Value == "red" && color2Value == "blue") ||
	   (color1Value == "blue" && color2Value == "red")){
		console.log("Purple")
		output.textContent = "Purple" ;
	}
	else if((color1Value == "red" && color2Value == "yellow") ||
	(color1Value == "yellow" && color2Value == "red")){
		console.log("Orange")
		output.textContent = "Orange" ;
 	}
	else if((color1Value == "blue" && color2Value == "yellow") ||
	(color1Value == "yellow" && color2Value == "blue")){
		console.log("Green")
	 	output.textContent = "Green" ;
 	}
	else{
		console.log("Invalid color combination")
		output.textContent = "Invalid color combination" ;

	}
	
}) ;