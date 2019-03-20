var groceryName = document.getElementById('groceryName')
var groceryList = document.getElementById('groceryList')

function addTo() {
  var value = groceryName.value
  var newGroceryItem = document.createElement('li')
  newGroceryItem.innerHTML = value
  newGroceryItem.onclick = clear
  groceryList.appendChild(newGroceryItem)
  groceryName.value = ''
}

function clear () {
  groceryList.removeChild(this)
}