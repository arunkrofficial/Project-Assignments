let leftRow = [] ;
let rightRow = [] ;
let leftCount = 0 ;
let rightCount = 0 ;
let leftTotalQuantity = 0 ;
let leftTotalAmmount = 0 ;
let tqText = "Total Quantity : " ;
let taText = "Total Ammount : " ;

let leftRowPriceArray = [] ;

function addItem(id){
	// if there is present a row for particular item then we have to just update the quantity and price & change the value of total quantity and total price
	if(leftRow[id] != undefined){
		leftRow[id].quantity.textContent = Number(leftRow[id].quantity.textContent) + 0.5 ;
		leftRow[id].price.textContent = `${itemsInfo[id].itemPrice} * ${leftRow[id].quantity.textContent} = ${Number(itemsInfo[id].itemPrice) * Number(leftRow[id].quantity.textContent)}` ;

		leftTotalQuantity = leftTotalQuantity + 0.5 ;
		leftTotalAmmount = leftTotalAmmount + Number(itemsInfo[id].itemPrice) ;
		document.querySelector("#tq-left").textContent =tqText + leftTotalQuantity ;
		document.querySelector("#ta-left").textContent = taText + (leftTotalAmmount * 0.5) ;

		return undefined ;
	}

	// div adding for each row 
	leftRow[id] = document.createElement("div") ;
	leftRow[id].classList.add("main-left-row", "main-row") ;
	leftRow[id].idName = `main-left-row-${leftCount+1}` ;

	document.querySelector("#main-left").appendChild(leftRow[id])

	// now we add 4 h4 in this div for each row
	// 1 -> SrNo
	leftRow[id].srNo = document.createElement("h4") ;
	leftRow[id].srNo.textContent = (leftCount+1) ;
	leftRow[id].appendChild(leftRow[id].srNo) ;

	// 2 -> item name
	leftRow[id].itemName = document.createElement("h4") ;
	leftRow[id].itemName.textContent = itemsInfo[id].itemName ;
	leftRow[id].appendChild(leftRow[id].itemName) ;

	// 3 -> Quantity
	leftRow[id].quantity = document.createElement("h4") ;
	leftRow[id].quantity.textContent = 0.5 ;
	leftRow[id].appendChild(leftRow[id].quantity) ;

	// 4 -> price
	leftRow[id].price = document.createElement("h4") ;
	leftRow[id].price.textContent = `${itemsInfo[id].itemPrice} * ${leftRow[id].quantity.textContent} = ${Number(itemsInfo[id].itemPrice) * Number(leftRow[id].quantity.textContent)}` ;
	leftRow[id].appendChild(leftRow[id].price) ;
	leftRowPriceArray[id] = itemsInfo[id].itemPrice ;

	// horizontal line
	leftRow[id].hr = document.createElement("hr") ;
	document.querySelector("#main-left").appendChild(leftRow[id].hr) ;

	// updating the total quantity and total price
	leftTotalQuantity = leftTotalQuantity + 0.5 ;
	leftTotalAmmount = leftTotalAmmount + Number(itemsInfo[id].itemPrice) ;
	document.querySelector("#tq-left").textContent =tqText + leftTotalQuantity ;
	document.querySelector("#ta-left").textContent = taText + (leftTotalAmmount * 0.5) ;

	leftCount++ ;
}

// after click on correct a bug button
document.querySelector("#btn-correct-bug").addEventListener("click" , ()=>{
	if(leftCount <= rightCount){
		return undefined ;
	}
	for(let i=0; i<8; i++){
		if(leftRow[i] != undefined){
			// div adding for each row 
			rightRow[i] = document.createElement("div") ;
			rightRow[i].classList.add("main-right-row", "main-row") ;
			rightRow[i].idName = `main-right-row-${rightCount+1}` ;
			document.querySelector("#main-right").appendChild(rightRow[i])

			// now we add 4 h4 in this div for each row
			// 1 -> SrNo
			rightRow[i].srNo = document.createElement("h4") ;
			rightRow[i].srNo.textContent = (rightCount+1) ;
			rightRow[i].appendChild(rightRow[i].srNo) ;
			
			// 2 -> item name
			rightRow[i].itemName = document.createElement("h4") ;
			rightRow[i].itemName.textContent = leftRow[i].itemName.textContent ;
			rightRow[i].appendChild(rightRow[i].itemName) ;

			// 3 -> Quantity
			rightRow[i].quantity = document.createElement("h4") ;
			rightRow[i].quantity.textContent = Number(leftRow[i].quantity.textContent) * 2 ;
			rightRow[i].appendChild(rightRow[i].quantity) ;

			// 4 -> price
			rightRow[i].price = document.createElement("h4") ;
			rightRow[i].price.textContent = `${leftRowPriceArray[i]} * ${rightRow[i].quantity.textContent} = ${leftRowPriceArray[i] * Number(rightRow[i].quantity.textContent)}` ;
			rightRow[i].appendChild(rightRow[i].price) ;

			// horizontal line
			rightRow[i].hr = document.createElement("hr") ;
			document.querySelector("#main-right").appendChild(rightRow[i].hr) ;
		
			rightCount++ ;
		}
	}
	// updating total quantity and total ammount
	document.querySelector("#tq-right").textContent = tqText + leftTotalQuantity * 2 ;
	document.querySelector("#ta-right").textContent = taText + leftTotalAmmount ;
})

// data of items
const itemsInfo = [
	{
		itemName : "item-1",
		itemPrice : 10
	},
	{
		itemName : "item-2",
		itemPrice : 20
	},
	{
		itemName : "item-3",
		itemPrice : 30
	},
	{
		itemName : "item-4",
		itemPrice : 40
	},
	{
		itemName : "item-5",
		itemPrice : 50
	},
	{
		itemName : "item-6",
		itemPrice : 60
	},
	{
		itemName : "item-7",
		itemPrice : 70
	},
	{
		itemName : "item-8",
		itemPrice : 80
	}
]