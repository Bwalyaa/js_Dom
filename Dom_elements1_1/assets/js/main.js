
function addElement() {
    let inputText = document.getElementById('inputText');
    let shoppingList = document.getElementById('myList');
  
    const newItem = inputText.value.trim();
    if (newItem === '') {
      return;
    }

    let li = document.createElement('li');
    li.textContent = newItem;
  
    shoppingList.appendChild(li);
  
    inputText.value = '';
  }

  