// const products = [
//   {name: "Laptop", price:30000},
//   {name: "Phone",price:20000},
//   {name: "tablet",price:45000}
// ];

// const container = document.getElementById("container");
// products.forEach(product =>{
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `
//   <h3>${product.name}</h3>
//   <p>Price: ${product.price}</p>`;
//   container.appendChild(card);
// });

const names = ["Riya", "ron","don"];
let html = "";
for(let i = 0; i< names.length; i++){
  html += `<p> ${i+1}. ${names[i]}</p>`;
}
document.getElementById("list").innerHTML = html;

const users = [
  {name: "Dupe", role: "developer"},
  {name: "Dupe", role:"Designer"}
];

document.getElementById("users").innerHTML = users.map(user => `
  <div class="user">
  <h3>${user.name}</h3>
  <p>${user.role}</p>
  </div>`).join("");

const data = [
  {title: "Card 1", desc: "Description 1"},
  {title: "card 2", desc:"Description 2"}
];

const container = document.getElementById("cards");
const template = document.getElementById("cardTemplate");

data.forEach(item =>{
  const clone = template.content.cloneNode(true);
  clone.querySelector(".title").textContent = item.title;
  clone.querySelector(".desc").textContent = item.desc;
  container.appendChild(clone);
});

const students = [
  {name: "Dupe", marks: 95},
  {name: "Focus", marks: 88},
  {name: "Sloth", marks: 92}
];

const cities = document.getElementById("citySelect");
const select = document.createElement("option");

// cities.forEach(city =>{
//   const option = document.createElement("option");
//   option.value = city;
//   option.textContent = city;
//   select.appendChild(option);
// });