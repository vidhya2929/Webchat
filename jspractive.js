function changeText(){
  document.getElementById("text").innerText = "Text changed using JavaScript";
}

function greetUser(){
  const name = document.getElementById("nameInput").value;
  if(name.trim() !== ""){
    document.getElementById("greeting").innerText = "Welcome, "+ name + "!";
  }
  else{
    document.getElementById("greeting").innerText = "Please Enter your name.";
  }
}
function keyPress(event){
  if(event.key === "Enter"){
    addItem();
  }
}

function addItem(){
  const input = document.getElementById("itemInput");
  const value = input.value.trim(); //trim() => remove extra spaces from the start and end.
  if(value){
    // check if value is not empty
    // if the input is blank (""),it will not run the code inside the if block.
    const li = document.createElement("li");
    // Create a new "li" element in memory
    li.textContent = value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft="10px";
    delBtn.style.cursor = "pointer";

    delBtn.onclick = function(){
      li.remove(); //removes the li element from DOM
    };
    li.appendChild(delBtn);
    // adding the button to delete button



    // sets the text inside the <li> to the value the user typed.
    document.getElementById("itemList").appendChild(li);
    // it add the new <li> as the last child of the list
    input.value= "";
    // this clears the input field after adding the item
  }
}
// localStorage is a place where broser can store data even after the page is refreshed.
function saveToLocalStorage(){
  const items = [];
  // this creates an empty array call items
  // we will use this arrau to store the text of each item in the list
  document.querySelectorAll("#itemList li").forEach(li => {
    // document.querySelectAll('#itemList li') this will select all "li" elements inside the element with ID itemList
    //forEach(li => { } loop that goes through each <li>item one by one
    items.push(li.firstChild.textContent)
    // li.firstChild => means first content inside the <li>
    // .textContent gets the text only,ignor buttons or other HTML 
  });
  localStorage.setItem("myList", JSON.stringify(items));
  // localStorage.setItem => saves the data into browsers storage
  // "myList" is the key (like a label to identify the data) 
  // Json.stringify(items) converts JavaScript array to a string format
}

// function loadFromLocal(){
//   const savedItems = localStorage.getItem("myList");
//   // try to read the data stored under the key "myList"
//   // if nothing is saved yet,it will return null.
//   // if something is saved, it will return a string

//   if(savedItems){
//     // check if anything is saved

//     const items = JSON.parse(savedItems);
//     // Converting string back to array
//     const list = document.getElementById("itemList")
//     list.innerHTML = "";
//     // removes anything currently inside the list to avoid duplicates when loading
//     items.forEach(itemText => {
//       const li = document.createElement("li")
//       // this loops through each items in the items array.,Each itemText is a string
//         li.textContent = itemText;
//         const btn =document.createElement("button");
//         btn.textContent = "Remove";
//       btn.onclick = () => {
//         li.remove();
//         saveToLocalStorage();
//       };
//       li.appendChild(btn);
//       list.appendChild(li);

//     })

//   }
// }


function loadfromLocal(){
  const savedItems = JSON.parseFloat(localStorage.getItem("myList")) || [];
  savedItems .forEach(item => createListItem("item"));
}
window.onload = loadfromLocal
// load items from localStorage on page load