const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const button = document.getElementById("addTask");

button.addEventListener("click", ()=>{
  let task = taskInput.value.trim();
  if(!task) return ;
  let li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", ()=> li.remove());
  taskList.appendChild(li);

  taskInput.value = "";
});