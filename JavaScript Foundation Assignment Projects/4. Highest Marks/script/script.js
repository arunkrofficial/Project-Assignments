// required variable
let std1 = document.querySelector("#Std-1") ;
let std2 = document.querySelector("#Std-2") ;
let std3 = document.querySelector("#Std-3") ; 
let std4 = document.querySelector("#Std-4") ;
let std5 = document.querySelector("#Std-5") ;
let highMark = document.querySelector("#highest-mark")
let btnSubmit = document.querySelector("#submit")
let btnReset = document.querySelector("#reset")
let stdMarks = [] ;

// input event to get latest 
std1.addEventListener("input" , (e)=>{
	stdMarks[0] = Number(e.target.value)
}) ;
std2.addEventListener("input" , (e)=>{
	stdMarks[1] = Number(e.target.value)
}) ;
std3.addEventListener("input" , (e)=>{
	stdMarks[2] = Number(e.target.value)
}) ;
std4.addEventListener("input" , (e)=>{
	stdMarks[3] = Number(e.target.value)
}) ;
std5.addEventListener("input" , (e)=>{
	stdMarks[4] = Number(e.target.value)
}) ;

// submit btn action
btnSubmit.addEventListener("click" , ()=>{
	if(stdMarks[0] != undefined &&
	   stdMarks[1] != undefined &&
	   stdMarks[2] != undefined &&
	   stdMarks[3] != undefined &&
	   stdMarks[4] != undefined ){

		let temp ;
		for(let i=0; i<(stdMarks.length-1); i++){
			stdMarks[i] > stdMarks[(i+1)] ? stdMarks[(i+1)] = stdMarks[i] : null ;
		}

		console.log(`Highest mark is ${stdMarks[4]}`) ;
		highMark.textContent = highMark.textContent + stdMarks[4] ;
	}
	else{
		console.log("Enter all students number ! !") ;
		alert("Enter all students number ! !") ;
	}
})

//reset btn worked as by default