// Variables and DataTypes
// Store and Manage Data => let , const , var
let naame = "Harry";
const aege = 22;
let isStudent = true;

// FUNCTIONS
// Reusable blocks of code that do a specific task
function greet(name){
  return `Hello, ${name}!`;
}
console.log(greet("Harry"));

// Arrays
// store multiple values in an ordered list
let fruits = ["apple","banana","mango"];
console.log(fruits[1]);

// Objects
// store related data and functions in key-value pairs
let person = {
  name: "Harry",
  age: 22,
  greet: function(){
    console.log("Hi,I am "+this.name);
  }
};
person.greet();
// CONDITIONALS
// make decisions in code
let score = 75;
if(score > 90){
  console.log("Excellent");
}
else if(score > 60){
  console.log("Good");
}
else{
  console.log("Needs Improvement");
}
// LOOPS
// Repeat tasks multiple times
let numbers = [1,2,3,4,5];
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
// DOM Manipulation - Document Object Model
// Map of HTML page that JS can read and change.
// Change HTML elements dynamically
document.getElementById("btn").addEventListener("click", function(){
  document.getElemnentById("msg").textContent = "Button CLicked!";
});
// Selecting Elements - find the elements before you can change it
let heading = document.getElementById("mainTitle");  //element id
let items = document.getElementsByClassName("listItem");   // class name
let para = document.getElementsByTagName("p")   // tag name
// Modern & flexible
let firstItem = document.querySelector(".listItem");  //first Match
let secItem = document.querySelectorAll(".listItem");  //All matches
// Changing COntent
document.getElementById("mainTitle").textContent = "Hello, DOM!" //Changes text only
document.getElementById("mainTitle").innerHTML = "<em>Hello</em> DOM!"; //Allows HTML tags
// changing Styles
let box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";
box.style.fontSize = "20px";
// Creating & Adding Elements
let newItem = document.createElement("li");
newItem.textContent = "New List Item";
document.querySelector("ul").appendChild(newItem);
// Removing Elements
let firstItemToRemove = document.querySelector("li");
firstItemToRemove.remove();
// EVENTS
// Respond to user actions like clicks, typing, scrolling
window.addEventListener("scroll", function(){
  console.log("User scrolled the page");
});
// Add event listeners
let btn = document.querySelector("#myBtn");
btn.addEventListener("click", ()=>{
  alert("Button clicked!");
});
// "click" => User clicks element, "input" => user types in an input, "change" => input value changes(after leaving focus), "keydown" => key pressed, "submit" => form submitted, "scroll" => Page scrolled
document.getElementById("myForm").addEventListener("submit", (e) =>{
  // the function receives an event object named "e"
  e.preventDefault();
  // prevents the browser's default action for form submits--;reloading/navigating to a new page.This keeps on the same page so we can run our own logic
  let nameValue = document.getElementById("name").value.trim();

  if(nameValue === ""){
    alert("Name cannot be empty!");
  }
  else{
    alert(`Hello, ${nameValue}`);
  }
});
// Modern JS Features (ES6+ Features)
// Arrow functions
const add = (a,b) => a+b;
console.log(add(2,3));

function greet(name){
  return "Hello" +name; 
}
// This above code can be written using arrow function
const greet2 = name => `Hello ${name}`;
console.log(greet2("Harry"));

// Template Literals
let nam = "harry";
let Age = 22
console.log(`welcome, ${name}!`);
// old
console.log("My name is"+nam+ "and I am" +Age+ "years old.")
// New
console.log(`my name is ${nam} and I am ${Age} years old.`)


// Destructuring = Quickly extract API data fields
let pers = {name: "harry", age: 24};
let{name, age} = pers;
console.log(name, age);

// Spread Operator
let arr1 = [1,2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

// Asynchronous JS
// Handle actions that take time(like fetching data).
console.log("Start");
setTimeout(()=>{
  console.log("After 2 seconds");
}, 2000);
console.log("End");
