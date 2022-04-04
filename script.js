btnAdd.addEventListener('click', () => {
  if(!inputName.value){
    return inputName.focus()
  }
  addNameToCard()
})

btnDel.addEventListener('click', () => {
  if(!cards.children.length){
    return inputName.focus()
  }
  deleteAllCards()
})

btnDelLast.addEventListener('click', () => {
  if(!cards.children.length){
    return inputName.focus()
  }
  deleteLastCard()
})

function getData() {
  const name = inputName.value
  const currentTime = new Date().toLocaleTimeString()
  
  return {name, currentTime}
}

function addNameToCard(){
  const data = getData()
  cards.innerHTML += `<div class="card-name">
                        <span>${data.name}</span>
                        <span>${data.currentTime}</span>
                      </div>`
}

function deleteAllCards() {
  cards.innerHTML = '';
}

function deleteLastCard(){
  const lastCard = cards.children[cards.children.length - 1]
  cards.removeChild(lastCard)
}