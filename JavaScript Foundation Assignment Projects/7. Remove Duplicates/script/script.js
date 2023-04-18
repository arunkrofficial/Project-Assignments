
const itemsInfo = {
	item_1 : {
		proName : "Black" ,
		proPrice : "100" ,
		// quantity : 0 
	} ,
	item_2 : {
		proName : "Blue" ,
		proPrice : "200" ,
		// quantity : 0
	} ,
	item_3 : {
		proName : "Red" ,
		proPrice : "300" ,
		// quantity : 0
	} ,
	item_4 : {
		proName : "White" ,
		proPrice : "400" ,
		// quantity : 0
	} ,
	item_5 : {
		proName : "yellow" ,
		proPrice : "500" ,
		// quantity : 0
	} 
}
// array for adding items
let itemsRow = [] ;
let line = [] ;
let itemsDupliRow = [] ;
let objItems = {} ;
let strQuantity = "Total Quantity : " ;
let strAmmount = "Total Ammount : " ;
let withDupliAmmount = 0 ;
let withoutDupliAmmount = 0 ;

var count = 0 ;
var dupliCount = 0 ;


// addItem function for click on the add to cart button
function addItem(itemId){
 	// one row for data
	itemsRow[count] = {} ;
	itemsRow[count].row =  document.createElement("div") ;
	itemsRow[count].row.className = "item-list-row" ;
	itemsRow[count].row.idName = `item-list-row-${count}` ;
	itemsRow[count].row.innerHTML = `<p class="sr-no">${(count+1)}</p>  <p class="pro-name">${itemsInfo[itemId].proName}</p>  <p class="pro-price">${itemsInfo[itemId].proPrice}</p>` ;

	// adding info in objItems
	if(objItems.hasOwnProperty(itemId)){
		objItems[itemId].proQuantity =  objItems[itemId].proQuantity + 1;
	}
	else{
		objItems[itemId] = {} ;
		objItems[itemId].proName =  itemsInfo[itemId].proName;
		objItems[itemId].proPrice=  itemsInfo[itemId].proPrice;
		objItems[itemId].proQuantity=  1;
	}

	document.querySelector("#item-list").appendChild(itemsRow[count].row)
	let line = document.createElement("hr") ;
	document.querySelector("#item-list").appendChild(line)

	// footer updation 
	withDupliAmmount = withDupliAmmount + Number(itemsInfo[itemId].proPrice) ;
	document.querySelector("#TQ-s").textContent = strQuantity + (count+1) ;
	document.querySelector("#TA-s").textContent = strAmmount + withDupliAmmount + "$" ;

	count++ ;
}

// removeDupliItem function for button Remove Duplicate's
function removeDupliItem(){
	let keysArrayObjItems = Object.keys(objItems) ;
	// removing previous element from item-list-duplicate and line
	for(let i=0; i<dupliCount; i++){
		itemsDupliRow[i].row.remove() ;
		line[i].remove() ;
	}

	dupliCount = 0 ;
	withoutDupliAmmount = 0 ;


	for(let key of keysArrayObjItems){
		itemsDupliRow[dupliCount] = {} ;
		itemsDupliRow[dupliCount].row =  document.createElement("div") ;
		itemsDupliRow[dupliCount].row.className = "item-list-row" ;
		itemsDupliRow[dupliCount].row.idName = `item-list-row-${dupliCount}` ;

		itemsDupliRow[dupliCount].row.innerHTML = `<p class="sr-no">${(dupliCount+1)}</p>  <p class="pro-name">${objItems[key].proName}</p>  <p class="pro-price">${objItems[key].proPrice}</p>` ;
		
		document.querySelector("#item-list-duplicate").appendChild(itemsDupliRow[dupliCount].row)
		line[dupliCount] = document.createElement("hr") ;
		document.querySelector("#item-list-duplicate").appendChild(line[dupliCount])

		// footer updation 
		withoutDupliAmmount = withoutDupliAmmount + Number(objItems[key].proPrice) ;
		document.querySelector("#TQ-d").textContent = strQuantity + (dupliCount+1) ;
		document.querySelector("#TA-d").textContent = strAmmount + withoutDupliAmmount + "$" ;

		dupliCount++ ;
	}
	
}