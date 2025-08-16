const search = document.getElementById("search");
const list = document.querySelectorAll(".item");
search.addEventListener("input", e =>{
  let value = e.target.value.toLowerCase();
  list.forEach(item =>{
    item.style.display = item.textContent.toLowerCase().includes(value) ? "block" : "none";
  });
});
