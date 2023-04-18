
let inLen = document.querySelector("#in-len") ;
let btnSubmitScreen_1 = document.querySelector("#btn-submit-screen-1")

let inLenValue ;
let inScreen_2Value = [] ;
let btnSubmitScreen_2 ;
let inScreen_2ValueArray = [] ;
let opScreenValue = [] ;
let tempCount = 0 ; // this variable for output screen
let preTempCount ; // this variable for removing previous output screen span tag 


// input event for inLen to update the lenght of array
inLen.addEventListener("input" , (e)=>{
	inLenValue = e.target.value ;

})

// creating input element inside the in-screen-2 based inLenValue to take some input value when clicked in btnSubmitScreen_1
btnSubmitScreen_1.addEventListener("click" , ()=>{

	// removing previous div tag and submit button from input-block-screen-2
	if(inScreen_2Value.length != 0){
		for(let i=(inScreen_2Value.length-1); i>=0; i--){
			inScreen_2Value[i][`divTag_${i}`].remove() ;
		}
		btnSubmitScreen_2.remove() ;
	}

	for(let i=0; i<inLenValue; i++){
		inScreen_2Value[i] = {} ;

		// div tag for every input and span tag, span tag we used for red star 
		inScreen_2Value[i][`divTag_${i}`] = document.createElement("div") ;
		inScreen_2Value[i][`divTag_${i}`].className = "div-input-screen-2";
		inScreen_2Value[i][`divTag_${i}`].idName = `div-input-screen-2-${i}`;

		document.querySelector("#input-block-in-screen-2").appendChild(inScreen_2Value[i][`divTag_${i}`])
		
		// input tag under the div tag
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`] = document.createElement("input") ;
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].className = "input-tag-screen-2" ;
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].idName = `input-screen-2-id-${(i+1)}` ;

		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].setAttribute("type", "number") ;
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].setAttribute("placeholder", "Enter number") ;
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].setAttribute("required", "true") ;

		inScreen_2Value[i][`divTag_${i}`].appendChild(inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`]) ;

		// span tag under the div tag for required star 
		inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`] = document.createElement("span") ;
		inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`].className = "required-star" ;
		inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`].textContent = "*" ;

		inScreen_2Value[i][`divTag_${i}`].appendChild(inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`]) ;

		// adding input event to the dynamically added input tag and removinf required star if any value entered in the input tag
		inScreen_2Value[i][`divTag_${i}`][`inTag_${i}`].addEventListener("input", (e)=>{
			inScreen_2ValueArray[i] = e.target.value ;
			// this is for red star 
			if(e.target.value != ""){
				inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`].style.display = "none" ;
			}
			else{
				inScreen_2Value[i][`divTag_${i}`][`spanTag_${i}`].style.display = "block" ;
			}
		})
	}
	
	// giving right position to last items of gird, each items of divTag
	if(inLenValue == 1){
		document.querySelector("#input-block-in-screen-2").style.gridTemplateColumns = "auto" ;
	}
	else if(inLenValue == 2){
		document.querySelector("#input-block-in-screen-2").style.gridTemplateColumns = "auto auto" ;
	}
	else if(inLenValue%3 == 1){
		document.querySelector("#input-block-in-screen-2").style.gridTemplateColumns = "auto auto auto" ;
		
		// first last
		inScreen_2Value[(inLenValue - 1)][`divTag_${(inLenValue - 1)}`].style.gridColumnStart = "2" ; 
		inScreen_2Value[(inLenValue - 1)][`divTag_${(inLenValue - 1)}`].style.gridColumnEnd = "3" ;
	}
	else if(inLenValue%3 == 2){
		document.querySelector("#input-block-in-screen-2").style.gridTemplateColumns = "auto auto auto" ;

		// first last
		inScreen_2Value[(inLenValue - 1)][`divTag_${(inLenValue - 1)}`].style.gridColumnStart = "3" ; 
		inScreen_2Value[(inLenValue - 1)][`divTag_${(inLenValue - 1)}`].style.gridColumnEnd = "4" ;

		// second last
		inScreen_2Value[(inLenValue - 2)][`divTag_${(inLenValue - 2)}`].style.gridColumnStart = "1" ; 
		inScreen_2Value[(inLenValue - 2)][`divTag_${(inLenValue - 2)}`].style.gridColumnEnd = "2" ;
	}
	else{
		document.querySelector("#input-block-in-screen-2").style.gridTemplateColumns = "auto auto auto" ;
	}

	// Submit button for screen-2-input
	btnSubmitScreen_2 = document.createElement("button") ;
	btnSubmitScreen_2.textContent = "submit" ;
	btnSubmitScreen_2.className = "btn-submit" ;
	btnSubmitScreen_2.idName = "btn-submit-screen-2" ;
	btnSubmitScreen_2.setAttribute("type", "button") ;

	document.querySelector("#submit-block-in-screen-2").appendChild(btnSubmitScreen_2) ;

	// storing previous tempCount value for use of removing the previous span tag
	preTempCount = tempCount ;
	if(preTempCount > 0){
		for(let i=0; i<preTempCount; i++){
			opScreenValue[i].remove() ;
		}
		tempCount = 0 ;
		// output screen heading none
		document.querySelector("#op-screen-heading").style.display = "none" ;
	}

	btnSubmitScreen_2.addEventListener("click" , ()=>{
		// checking all input field is filled or not
		for(let i=0; i<inLenValue; i++){
			if(inScreen_2ValueArray[i] == undefined){
				alert("Please filled all input box !")
				return undefined ;
			}

		}

		// output screen heading visible
		document.querySelector("#op-screen-heading").style.display = "block" ;

		// creating span tag inside the ouput screen
		for(let i of inScreen_2ValueArray){
			Number(i) ;
			if((i % 3 == 0) && (i % 2 != 0)){
				opScreenValue[tempCount] = document.createElement("span") ;
				opScreenValue[tempCount].className = "op-screen-value" ;
				opScreenValue[tempCount].innerHTML = i ;

				document.querySelector("#div-op-screen").appendChild(opScreenValue[tempCount]) ;
				tempCount++ ;
			}
		}

		// giving right position to last items of gird, each items of divTag in output screen
		if(tempCount == 1){
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto" ;
		}
		else if(tempCount == 2){
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto auto" ;
		}
		else if(tempCount == 0){
			opScreenValue[tempCount] = document.createElement("span") ;
			opScreenValue[tempCount].className = "op-screen-value" ;
			opScreenValue[tempCount].innerHTML = "None" ;

			document.querySelector("#div-op-screen").appendChild(opScreenValue[tempCount]) ;
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto" ;

			tempCount++ ;
		}
		else if(tempCount % 3 == 0){
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto auto auto" ;
		}
		else if(tempCount % 3 == 1){
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto auto auto" ;
			// first last item
			opScreenValue[(tempCount - 1)].style.gridColumnStart = "2" ;
			opScreenValue[(tempCount - 1)].style.gridColumnEnd = "3" ;
		}
		else if(tempCount % 3 == 2){
			document.querySelector("#div-op-screen").style.gridTemplateColumns = "auto auto auto" ;
			// first last item
			opScreenValue[(tempCount - 1)].style.gridColumnStart = "3" ;
			opScreenValue[(tempCount - 1)].style.gridColumnEnd = "4" ;

			// second last item
			opScreenValue[(tempCount - 2)].style.gridColumnStart = "1" ;
			opScreenValue[(tempCount - 2)].style.gridColumnEnd = "2" ;
		}
		inScreen_2ValueArray = [] ;
	})
})

