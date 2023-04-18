let frame = {} 
let state ;
let ammount = 0 ;
let count = 1 ;

// clicked on Deposite button
document.querySelector("#deposite").addEventListener("click" , ()=>{
	temp("Deposite", "flex", "none") ;
	state = "Deposite" ;

	if(frame.hasOwnProperty("Deposite")){
		frame.Deposite.style.display = "block" ;

	}
	else{
		frame.Deposite = document.createElement("div") ;
		frame.Deposite.id = "div-deposite" ;
		document.querySelector("#screen-2").appendChild(frame.Deposite) ;

		// label
		frame.Deposite.label = document.createElement("label") ;
		frame.Deposite.label.className = "money-label" ;
		frame.Deposite.label.setAttribute("for", "in-depo") ;
		frame.Deposite.label.textContent = "Enter Amount : " ;
		frame.Deposite.appendChild(frame.Deposite.label) ;

		// input
		frame.Deposite.input = document.createElement("input") ;
		frame.Deposite.input.className = "money-input" ;
		frame.Deposite.input.idName = "in-depo" ;
		frame.Deposite.input.setAttribute("type", "number") ;
		frame.Deposite.appendChild(frame.Deposite.input) ;

		// input event for this 
		frame.Deposite.input.addEventListener("input" , (e)=>{
			ammount = e.target.value ;
		})
	}

	document.querySelector("#btn-common").style.display = "block" ;

})

// clicked on Withdrawal button
document.querySelector("#withdrawal").addEventListener("click" , ()=>{
	temp("Withdrawal", "flex", "none") ;
	state = "Withdrawal" ;

	if(frame.hasOwnProperty("Withdrawal")){
		frame.Withdrawal.style.display = "block" ;

	}
	else{
		frame.Withdrawal = document.createElement("div") ;
		frame.Withdrawal.id = "div-withdrawal" ;
		document.querySelector("#screen-2").appendChild(frame.Withdrawal) ;

		// label
		frame.Withdrawal.label = document.createElement("label") ;
		frame.Withdrawal.label.className = "money-label" ;
		frame.Withdrawal.label.setAttribute("for", "in-with") ;
		frame.Withdrawal.label.textContent = "Enter Amount : " ;
		frame.Withdrawal.appendChild(frame.Withdrawal.label) ;

		// input
		frame.Withdrawal.input = document.createElement("input") ;
		frame.Withdrawal.input.className = "money-input" ;
		frame.Withdrawal.input.idName = "in-with" ;
		frame.Withdrawal.input.setAttribute("type", "number") ;
		frame.Withdrawal.appendChild(frame.Withdrawal.input) ;

		// input event for this 
		frame.Withdrawal.input.addEventListener("input" , (e)=>{
			ammount = e.target.value ;
		})
	}

	document.querySelector("#btn-common").style.display = "block" ;

})

// clicked on history button
document.querySelector("#history").addEventListener("click" , ()=>{
	temp("History", "flex", "none") ;
	state = "History" ;

	frame.History = document.createElement("div") ;
	frame.History.id = "div-history" ;
	document.querySelector("#screen-2").appendChild(frame.History) ;

	// header
	frame.History.header = document.createElement("header") ;
	frame.History.appendChild(frame.History.header) ;

	// inside header we need some h4
	frame.History.header.Hdate = document.createElement("h4") ;
	frame.History.header.Hdate.textContent = "Date" ;
	frame.History.header.appendChild(frame.History.header.Hdate) ;

	frame.History.header.Htype = document.createElement("h4") ;
	frame.History.header.Htype.textContent = "Type" ;
	frame.History.header.appendChild(frame.History.header.Htype) ;

	frame.History.header.Hammount = document.createElement("h4") ;
	frame.History.header.Hammount.textContent = "Ammount" ;
	frame.History.header.appendChild(frame.History.header.Hammount) ;

	frame.History.header.Htime = document.createElement("h4") ;
	frame.History.header.Htime.textContent = "Time" ;
	frame.History.header.appendChild(frame.History.header.Htime) ;

	// main
	frame.History.main = document.createElement("main") ;
	frame.History.appendChild(frame.History.main) ;

	// now generating each row data with loop and each data comes from info.customer_1.balanceHistory array
	for(let i=(info.customer_1.balanceHistory.length - 1); i>=0; i--){
		// create div for each row inside the main
		frame.History.main[`main_${i}`] = document.createElement("div") ;
		frame.History.main.appendChild(frame.History.main[`main_${i}`]) ;

		// inside this div we create 4 h4 for data entry
		frame.History.main[`main_${i}`].Edate = document.createElement("h4") ;
		frame.History.main[`main_${i}`].Edate.textContent = info.customer_1.balanceHistory[i].date ;
		frame.History.main[`main_${i}`].appendChild(frame.History.main[`main_${i}`].Edate) ;

		frame.History.main[`main_${i}`].Etype = document.createElement("h4") ;
		frame.History.main[`main_${i}`].Etype.textContent = info.customer_1.balanceHistory[i].type ;
		frame.History.main[`main_${i}`].appendChild(frame.History.main[`main_${i}`].Etype) ;

		frame.History.main[`main_${i}`].Eammount = document.createElement("h4") ;
		frame.History.main[`main_${i}`].Eammount.textContent = info.customer_1.balanceHistory[i].ammount ;
		frame.History.main[`main_${i}`].appendChild(frame.History.main[`main_${i}`].Eammount) ;

		frame.History.main[`main_${i}`].Etime = document.createElement("h4") ;
		frame.History.main[`main_${i}`].Etime.textContent = info.customer_1.balanceHistory[i].time ;
		frame.History.main[`main_${i}`].appendChild(frame.History.main[`main_${i}`].Etime) ;

		// creating horizontal line 
		frame.History.main[`hr_${i}`] = document.createElement("hr") ;
		frame.History.main.appendChild(frame.History.main[`hr_${i}`]) ;

	}

	// footer
	frame.History.footer = document.createElement("footer") ;
	frame.History.appendChild(frame.History.footer) ;

	frame.History.footer.Hbalance = document.createElement("h4") ;
	frame.History.footer.Hbalance.textContent = `Current Balance : ${info.customer_1.balanceAmmount}` ;	
	frame.History.footer.appendChild(frame.History.footer.Hbalance) ;

}) 

// clicked on balance button
document.querySelector("#balance").addEventListener("click" , ()=>{
	temp("Balance", "flex", "none") ;
	state = "Balance"

	frame.Balance = document.createElement("div") ;
	frame.Balance.id = "div-balance" ;
	document.querySelector("#screen-2").appendChild(frame.Balance) ;

	// paragraph tag for message
	frame.Balance.para = document.createElement("p") ;
	frame.Balance.para.innerHTML = `${info.customer_1.firstName} ${info.customer_1.lastName}, in your account remaining balance is <span>${info.customer_1.balanceAmmount}</span>` ;
	frame.Balance.appendChild(frame.Balance.para) ;

})

// clicked on back button
document.querySelector("#back").addEventListener("click" , ()=>{
	temp("Main", "none", "flex") ;

	// removing previous screen data
	frame[state].style.display = "none" ;

	// submit button removing
	if(state == "Deposite" || state == "Withdrawal"){
		frame[state].input.value = "" ;
		document.querySelector("#btn-common").style.display = "none" ;

		// hiding the previous screen data
		frame[state].style.display = "none" ;
	}
	else{
		frame[state].remove() ;
	}
	ammount = 0 ;
})

// Submit button for both deposite and withdrawal
document.querySelector("#btn-common").addEventListener("click" , ()=>{
	ammount = Number(ammount) ;
	if(ammount){
		if(state == "Deposite"){
			info.customer_1.balanceAmmount = info.customer_1.balanceAmmount + ammount ;
			const date = new Date() ;

			info.customer_1.balanceHistory[count] = {
				type : "Deposite" ,
				ammount : ammount ,
				date : date.toLocaleDateString() ,
				time : date.toLocaleTimeString()
			}	
			alert("Transaction Successfully ! ! \n Money Added") ;
		}
		else{
			if(ammount > info.customer_1.balanceAmmount){
				alert("Your ammount is greater than the current bank balance ! !") ;
				return undefined ;
			}

			info.customer_1.balanceAmmount = info.customer_1.balanceAmmount - ammount ;
			const date = new Date() ;
			
			info.customer_1.balanceHistory[count] = {
				type : "Withdrawal" ,
				ammount : ammount ,
				date : date.toLocaleDateString() ,
				time : date.toLocaleTimeString()
			}	
			alert("Transaction Successfully ! ! \n Money Deducted") ;
		}
		// empty the input box 
		frame[state].input.value = "" ;
		count++ ;
	}
	else{
		alert("Please enter ammount ! !") ;
		return undefined ;
	}
})

function temp(state, back, screen){
	// chnaging section text-content
	document.querySelector("#section").textContent = state ;
	
	// Enalbe back button view
	document.querySelector("#back").style.display = back ;
	
	// disable the view of fours button (deposite, withdrawal, history, balance)
	document.querySelector("#screen-1").style.display = screen ;
}




const info = {
	customer_1 : {
		firstName : "Arun" ,
		lastName : "Kumar" ,
		balanceAmmount : 5000 ,
		balanceHistory : [
			{
				type : "Deposite" ,
				ammount : 5000,
				date : "28/04/2023" ,
				time : "10:19:30 PM"
			}
		] 
	}
}