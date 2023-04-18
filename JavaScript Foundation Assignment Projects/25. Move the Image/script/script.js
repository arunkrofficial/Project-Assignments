let image = document.querySelector("#image")

let centerTop = 35; // negative -> top  ,  positive -> bottom
let centerLeft =  44.5; // positive -> left  ,  negative -> right

window.addEventListener("keydown" , (value)=>{
	if(value.key == "ArrowUp"){
		centerTop = centerTop - 1 ;
		if(centerTop <= (0)){
			centerTop = (0) ;
		}
		image.style.top =  centerTop + "vh";
	}
	else if(value.key == "ArrowRight"){
		centerLeft = centerLeft + 1 ;
		if(centerLeft >= 89){
			centerLeft = 89;
		}
		image.style.left =  (centerLeft)+"vw";
	}
	else if(value.key == "ArrowDown"){
		centerTop = centerTop + 1 ;
		
		if(centerTop >= (70)){
			centerTop = (70);
		}
		image.style.top =  centerTop + "vh" ;
	}
	else if(value.key == "ArrowLeft"){
		centerLeft = centerLeft - 1 ;
		if(centerLeft <= 0){
			centerLeft = 0 ;
		}
		image.style.left =  (centerLeft)+"vw";
	}
})
