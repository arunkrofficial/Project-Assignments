let leftRow = [] ;
let leftCount = 0 ;

let leftTotalQuantity = 0 ;
let leftTotalAmmount = 0 ;
let tqText = "Total Quantity : " ;
let taText = "Total Ammount : " ;

let leftRowPriceArray = [] ;

function addItem(id){
	// if there is present a row for particular item then we have to just update the quantity and price & change the value of total quantity and total price
	if(leftRow[id] != undefined){
		leftRow[id].quantity.textContent = Number(leftRow[id].quantity.textContent) + 1 ;
		leftRow[id].price.textContent = `${itemsInfo[id].itemPrice} * ${leftRow[id].quantity.textContent} = ${Number(itemsInfo[id].itemPrice) * Number(leftRow[id].quantity.textContent)}` ;

		leftTotalQuantity = leftTotalQuantity + 1 ;
		leftTotalAmmount = leftTotalAmmount + Number(itemsInfo[id].itemPrice) ;
		document.querySelector("#tq-left").innerHTML =`${tqText} <span>${leftTotalQuantity}</span>` ;
		document.querySelector("#ta-left").innerHTML = `${taText} <span>${(leftTotalAmmount)}₹</span>` ;

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
	leftRow[id].quantity.textContent = 1 ;
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
	leftTotalQuantity = leftTotalQuantity + 1 ;
	leftTotalAmmount = leftTotalAmmount + Number(itemsInfo[id].itemPrice) ;
	document.querySelector("#tq-left").innerHTML =`${tqText} <span>${leftTotalQuantity}</span>` ;
	document.querySelector("#ta-left").innerHTML = `${taText} <span>${(leftTotalAmmount)}₹</span>` ;

	leftCount++ ;
}

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