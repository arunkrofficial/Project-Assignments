window.addEventListener("load" , ()=>{
	const check = function(word){
		if(word.length > 8){
			return `<span>${word}</span>` ;
		}
		else{
			return word ;
		}
	}

	const text = document.querySelector("#text") ;

	text.innerHTML = text.textContent  // text.innerText
		.trim()
		.split(' ') 
		.map(check)
		.join(' ') 
})