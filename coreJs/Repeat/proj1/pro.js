let count = 0;
const display = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

inc.addEventListener("click", ()=>{
  display.textContent = ++count;
});
dec.addEventListener("click", ()=>{
  display.textContent = --count;
})
reset.addEventListener("click", ()=>{
  count = 0;
  display.textContent = count;
})