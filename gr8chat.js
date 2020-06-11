//Δημιουργία μεταβλητής με το addButton
const addButton = document.querySelector('#add-button')

//Δημιουργία event στο κλίκ και συνάρτηση addChat
addButton.addEventListener('click', addChat);

//  Μεταβλητή που περιεχει τοText
const addedText = document.querySelector('#item');

//Μεταβλητή που περιέχει την λίστα
const Conversations = document.querySelector('#conversations')

//Προσθήκη στο chat με Εnter
addedText.addEventListener("keyup", (e)=> {
    //Έλεγχος keys
    console.log(e.code);
    if (e.code === "Enter"){addChat();}  
  }
)


function addChat(){
    
    let newChat = addedText.value;
    if (newChat.length>0) {
      
        let item = document.createElement('li');

        ///style list item
        item.style.width = "100%";;
        item.style.maxWidth = '20em';
        
        item.style.fontSize = "1.2em";



        item.textContent = newChat;
        
        //Create delete button , set a delete function and add to list item
        let itemButton = document.createElement('button');
        itemButton.textContent = 'Διαγραφή';
        itemButton.addEventListener('click',deleteItem);
        item.appendChild(itemButton);


        Conversations.appendChild(item);
        addedText.value = '';
    }
}

function deleteItem(){
    this.parentNode.remove();
}


