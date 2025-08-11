const input = document.getElementById('todoInput');
const addBtn =document.getElementById('addBtn');
const list = document.getElementById('todoList');

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
// Load items from localStorage on page load


// Add task
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if(text != ''){
    createListItem(text);
    input.value = '';
    saveToLocalStorage();
  }
});
// Create and display list item
function createListItem(taskText){
  const li = document.createElement('li');
  li.textContent = taskText;


  const delBtn = document.createElement('button');
  delBtn,textContent= "Delete";
  delBtn.addEventListener('click', ()=> {
    li.remove();
    saveToLocalStorage();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

}
// Save task to localStorage
function saveToLocalStorage(){
  const tasks = [];
    document.querySelectorAll('#todoList li').forEach(li => {
      tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('myTodos', JSON.stringify(tasks));
  
}
// load tasks from localStorage
function loadFromLocalStorage(){
  const saved =JSON.parse(localStorage.getItems('myTodos')) || [];
  saved.forEach(task => createListItem(task));
}