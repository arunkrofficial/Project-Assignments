const text_1 = "The most affordable learning platform" ;
const text_2 = "PW Skills"
let textState ;

window.addEventListener("load" , ()=>{
	document.querySelector("#para").textContent = text_1 ;
	textState = "text_1" ;
})

document.querySelector("#btn-change-text").addEventListener("click" , ()=>{
	if(textState == "text_1"){
		document.querySelector("#para").textContent = text_2 ;
		textState = "text_2" ;
	}
	else{
		document.querySelector("#para").textContent = text_1 ;
		textState = "text_1" ;
	}
})