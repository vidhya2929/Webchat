const search = document.getElementById("search");
const items = document.querySelectorAll("#list li");

search.addEventListener("input", ()=>{
  // whenever the user types something into the search box, the function inside will run immediately.
  const text = search.value.toLowerCase();

  items. forEach(item =>{
    const match = item.textContent.toLowerCase().includes(text);
    // the text inside the li 
    // check if the search term is found anywhere insid the item text
    item.style.display = match ? "":"none"
  });
});
// const search = document.getElementById("search");
// const items = document.querySelectorAll("#list li");

// search.addEventListener("input", ()=>{
//   const text = search.value.toLowerCase();

//   items.forEach(item =>{
//     const match = item.textContent.toLowerCase().includes(text);
//     item.style.display = match ? "": "none";
//   });
// });