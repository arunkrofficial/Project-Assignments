const itemsArray = [
	'HTML and Semantics',
	'Starting with CSS',
	'Working Template',
	'Mobile responsive webpages',
	'Grid and Flex-box in CSS',
	'Projects using HTML & CSS',
	'Version Control and Git',
	'Getting Started with JavaScript',
	'Advance JavaScript',
	'Working with DOM',
	'Making Projects using HTML, CSS and JavaScript',
	'Understanding Fundamental of Computer Science',
	'Getting Started with Database',
	'Understanding the Database',
	'Starting with NodeJS and Express',
	'Understanding React and its Fundamentals',
	'Understanding Hooks and Routers',
	'Starting and Completing Full Fledge Projects'
]

let count = 0 ;

document.querySelector("#btn-add-item").addEventListener("click" , ()=>{
	if(count == itemsArray.length){
		document.querySelector("#btn-message").style.display = "block" ;
		document.querySelector("#btn-add-item").style.display = "none" ;

		return undefined ;
	}
	else{
		let temp = document.createElement("li") ;
		temp.textContent = itemsArray[count] ;

		document.querySelector("#op-screen").appendChild(temp) ;
		count++ ;
	}
})