
let dishes ;
let dishesArray = [] ;
let dishPriceArray = [] ;
let prevDishes ;
let peoples ;

// input event for input-screen-1
document.querySelector("#dishes").addEventListener("input" , (e)=>{
	dishes = e.target.value ;
})

// click event for submit button of screen-1
document.querySelector("#btn-dishes").addEventListener("click" , ()=>{
	// removing innerHTML of total-bill and each-person-bill from output screen
	document.querySelector("#total-bill").innerHTML = "" ;
	document.querySelector("#each-person-bill").innerHTML = "" ;

	// display none to the input screen 3 if it is display flex
	document.querySelector("#in-3").style.display = "none" ;

	// dishPriceArray storing empty array because it is not taking any previous value
	dishPriceArray = [] ;
	// peoples also empty
	document.querySelector("#peoples").value = null ;
	peoples = null ;

	// checking input field of dishes are filled ot not
	if(dishes == undefined){
		alert('Please fill the input box of "How many dishes are serevd"') ;
		return undefined ;
	}

	// removing previous div tag if present
	if(prevDishes){
		for(let i=0; i<prevDishes; i++){
			dishesArray[i].remove() ;
		}
	}

	// enable to view to input-2, before it is display : none 
	document.querySelector("#in-2").style.display = "flex" ;
	for(let i=0; i<dishes; i++){
		// creating div tag for each dish price & in that div tag we have label and input tag
		dishesArray[i] = document.createElement("div") ;
		dishesArray[i].idName = `dish-${i}` ;
		dishesArray[i].classList.add("dish") ;

		document.querySelector("#in-2-main").appendChild(dishesArray[i]) ;

		// creating label
		dishesArray[i].label = document.createElement("label") ;
		dishesArray[i].label.setAttribute("for", `price-dish-${i+1}`) ;
		dishesArray[i].label.textContent = `Dish-${i+1} : ` ;

		dishesArray[i].appendChild(dishesArray[i].label) ;

		// creating input
		dishesArray[i].input = document.createElement("input") ;
		dishesArray[i].input.setAttribute("type", "number") ;
		dishesArray[i].input.idName = `price-dish-${i+1}` ;

		dishesArray[i].appendChild(dishesArray[i].input) ;

		// adding input event on each input tag that dynamically added as above code
		dishesArray[i].input.addEventListener("input" , (e)=>{
			dishPriceArray[i] = e.target.value ;
		})
	}

	// aligning last remaining div for better view
	if(dishes == 1){
		document.querySelector("#in-2-main").style.gridTemplateColumns = "auto" ;
	}
	else if(dishes == 2){
		document.querySelector("#in-2-main").style.gridTemplateColumns = "auto auto" ;
	}
	else if(dishes % 3 == 0){
		document.querySelector("#in-2-main").style.gridTemplateColumns = "auto auto auto" ;
	}
	else if(dishes % 3 == 1){
		document.querySelector("#in-2-main").style.gridTemplateColumns = "auto auto auto" ;
		// first last 
		dishesArray[(dishes-1)].style.gridColumnStart = "2" ;
		dishesArray[(dishes-1)].style.gridColumnEnd = "3" ;
	}
	else if(dishes % 3 == 2){
		document.querySelector("#in-2-main").style.gridTemplateColumns = "auto auto auto" ;
		// first last 
		dishesArray[(dishes-1)].style.gridColumnStart = "3" ;
		dishesArray[(dishes-1)].style.gridColumnEnd = "4" ;
		// second last 
		dishesArray[(dishes-2)].style.gridColumnStart = "1" ;
		dishesArray[(dishes-2)].style.gridColumnEnd = "2" ;
	}

	// previous dishes copied in another variable for future use of removing the div tag
	prevDishes = dishes ;
})

// click event for submit button of screen-2
document.querySelector("#btn-dish-price").addEventListener("click" , ()=>{
	// checking all input field of input screen 2 for each dish price are filled or not
	for(let i=0; i<dishes; i++){
		if((dishPriceArray[i] == undefined) || (dishPriceArray[i] == "")){
			alert(`Please fill the all input box of "Give price of each dish"`) ;
			return undefined ;
		}
	}

	// enable to view to input-3 , before it is display : none 
	document.querySelector("#in-3").style.display = "flex" ; 
})

// input event for peoples in input-screen-3
document.querySelector("#peoples").addEventListener("input" , (e)=>{
	peoples = e.target.value ;
})

// click event on peoples button in input-screen-3
document.querySelector("#btn-peoples").addEventListener("click" , ()=>{
	if(peoples == undefined){
		alert(`Please fill the all input box of "How many peoples are sharing :"`) ;
		return undefined ;
	}
	// calculate total price of dishes form dishPrive Array
	let totalBill = dishPriceArray.reduce((ac, nextEle)=>{
		return (Number(ac) + Number(nextEle)) ;
	})
	// adding innerHTML to total bill
	document.querySelector("#total-bill").innerHTML = `Total bill : <span>${totalBill}₹</span>` ;
	document.querySelector("#each-person-bill").innerHTML = `Bill to be paid by each person in group : <span>${(totalBill / Number(peoples)).toFixed(2)}₹</span>` ;
})



