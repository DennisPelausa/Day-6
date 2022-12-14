let addNameBtn = document.querySelector("#addBtn");
addNameBtn.addEventListener("click", addName);

function addName() {
    let firstName = document.querySelector("#firstName").value;
    
    //get the parent node
   let nameList = document.querySelector("#nameList");

   let nameItem = document.createElement("div");
   let nameInput = document.createElement("input");
   nameInput.type = "text";
   nameInput.setAttribute("disabled", "");
   nameInput.value = firstName;

   let editBtn = document.createElement("button");
   editBtn.textContent = "Edit";
   editBtn.classList = "editBtn";
   editBtn.addEventListener("click", editValue);

   //append
   nameList.appendChild(nameItem);
   nameItem.appendChild(nameInput);
   nameItem.appendChild(editBtn)

   function editValue() {
    //removed disabled attribute
    nameInput.removeAttribute("disabled", "");
    //disabled the edit
    editBtn.setAttribute("disabled", "")

    //create save button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList = "saveBtn";
    saveBtn.addEventListener("click", saveValue);

    //append ulit
    nameItem.appendChild(saveBtn);

    function saveValue() {
        let text = "Are you sure you want to save changes?";
        if (confirm(text) == true) {
        let newValue = nameInput.value;
        //enable the edit    
        editBtn.removeAttribute("disabled", "")

    //disable
    nameInput.setAttribute("disabled", "")

    //hide 
    //saveBtn.setAttribute("display", "none")
    nameItem.removeChild(saveBtn)

    //text
    text = "Ano ba? Pabago bago ng isip. Ayan na save na";
        }   
        else {
            text = "Cancel, cancel eh di ipa billboard mo!";
        }  
        alert (text);    
        
    }
   }
}