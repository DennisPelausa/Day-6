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

    //create save button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList = "saveBtn";
    saveBtn.addEventListener("click", saveValue);

    //append ulit
    nameItem.appendChild(saveBtn);

    function saveValue() {
        let newValue = nameInput.value;

    //disable
    nameInput.setAttribute("disabled", "")

    //hide 
    //saveBtn.setAttribute("display", "none")
    nameItem.removeChild(saveBtn)
    }
   }
}