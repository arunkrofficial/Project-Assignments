let cel ;
let fah
document.querySelector("#in-cel").addEventListener("input" , (e)=>{
	cel = e.target.value ;
	Number(cel)
})

document.querySelector("#btn-submit").addEventListener("click" , ()=>{
	fah = (cel * 9/5) + 32 ;
	document.querySelector("#op-screen").textContent = fah + "-f" ;
})

document.querySelector("#btn-reset").addEventListener("click" , ()=>{
	document.querySelector("#op-screen").textContent = "" ;

})