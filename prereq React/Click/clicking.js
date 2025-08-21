// function changeColor(){
//   const colors = ["Green", "Yellow", "blue", "orange"];
//   document.body.style.backgroundColor = 
//   colors[Math.floor(Math.random()* colors.length)];
//   // colors.length is here 4 
//   // so multiplying 4 gives a random number between 0 and 4
//   // colors[Math.floor(Math.random()* colors.length)] picks a random index from the "colors" array
// }

// function toggleText(){
//   const paragraph = document.getElementById("text");
//   paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
// }
// function add(){
//   const n1Input = document.getElementById("num1");
//   const n2Input = document.getElementById("num2");

//   const n1 =parseFloat(n1Input.value);
//   const n2 = parseFloat(n2Input.value);
//   // parseFloat() is a JS function that converts a string into a decimal number. Input fields always return string values when we read them with .value
//   document.getElementById("result").textContent = "Result:" +(n1+n2);

//   n1Input.value = "";
//   n2Input.value = "";
// }
// let count = 0;
// function increase(){
//   count++;
//   document.getElementById("count").textContent = count;
// }
// function decrease(){
//   count--;
//   document.getElementById("count").textContent = count;
// }
// function reset(){
//   count = 0;
//   document.getElementById("count").textContent = count;
// }
// function turnOn(){
//   document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
// }
// function turnOff(){
//   document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulboff.gif";
// }
// function calc(op){
// const number1 = parseFloat(document.getElementById("n1").value);
// const number2 = parseFloat(document.getElementById("n2").value);
// const ress = document.getElementById("res");
// let result;
// if(op === 'add') result=number1+number2;
// if(op === 'sub') result= number1-number2;
// if(op === 'mul') result=number1*number2;
// if(op === 'div') result=number1/number2;
// ress.textContent = "Result: "+result
// }
// const secret = Math.floor(Math.random() * 20) +1;
// const result = document.getElementById("msg");
// function Check(){
//   const g = parsesFloat(document.getElementById("guess").value);
//   result.textContent = (g === secret) ? "🎉correct" : "❌Try Agin"
// }
// function ans(choice){
//   document.getElementById("result").textContent =
//   (choice === 'javascript') ? "Correct" : "wrong";
// }

// const quotes = [
//   "Do not pray for easy lives, pray to be stronger men",
//   "Code is like humor. when you have to explain it, it is bad.",
//   "First, solve the problem. Then write the code",
//   "Experience is the name everyone gives to their mistakes"
// ];


// function newQuote(){
//   document.getElementById("quote").textContent =
//   quotes[Math.floor(Math.random()*quotes.length)];
// }

// let timer;
// function start(){
//   timer=setInterval(()=>{
//     document.getElementsById("clock").textContent = new Date().toLocaleTimeString();
//   },500);
// }
// function stop(){
//   clearInterval(timer);
// }

// document.getElementById("btn").addEventListener("click", ()=>{
//   document.getElementById("msg").textContent = "Button was Clicked";
// });

// document.getElementById("name").addEventListener("keyup", (e)=>{
//   document.getElementById("greet").textContent = "Hello "+ e.target.value;
// });

// document.getElementById("myForm").addEventListener("submit", function(e){
//   e.preventDefault();
//   const name = document.getElementById("username").value;
//   document.getElementById("output").textContent = "Welcome, "+name;
// });

// function changeText(){
//   document.getElementById("title").textContent = "Welcome to JavaScript";
// }


// function addItem(){
//   let li = document.createElement("li");
//   li.textContent = "banana";
//   document.getElementById("list").appendChild(li);
// }

// function removePara(){
//   let p = document.getElementById("removeMe");
//   p.remove();
// }
// Simple Object
// let Person = {
//   name: "Harry",
//   age: 21,
//   city: "Banglore"
// };

// console.log(Person["name"]);
// console.log(Person.age);
// Object with Function(Method)
// let student={
//   name: "Dupe",
//   marks: 90,
//   greet: function(){
//     return "Hello, "+ this.name;
//   }
// };
// console.log(student.greet());
// Nested Objects
// let user = {
//   id: 1,
//   profile: {
//     username: "dupe@22",
//     email: "dupe22@gmail.com"
//   }
// };
// console.log(user.profile.email);
// Array of Objects
// let products = [
//   {name: "Laptop",price:50000},
//   {name: "Phone", price: 20000},
//   {name: "Tablet", price: 15000}
// ];
// products.forEach(p => console.log(p.name + " - " +p.price));
// Everything in JS is an Object(Arrays, Functions, DOM elements)
// Objects are used in APIs
// They are the base for OOP(Object-Oriented Programming).
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]);
// console.log(fruits[2]);

// let numbers = [1,2,3,4];
// numbers.forEach(n => console.log(n*2));

// let nums = [10,20,30,40];

// let doubled = nums.map(n => n*2);

// let above20 = nums.filter(n => n >20);

// let sum = nums.reduce((acc, n)=> acc+n, 0);
// Used to store lists of data(users,products,scores, etc.)
// Most real-world JS problems use arrays(like rendering products on amazon,comments on Youtube.etc.)
// You'll combine arrays + object a lot in projects
// Functions
// function greet(name){
//   return 'Hello '+name;
// }
// console.log(greet("harry"));
// const greet = function(name){
//   return "Hello "+name;
// };
// console.log(greet("Vidhya"));
// // Arrow
// const greet = (name) => "Hello, "+name;
// console.log(greet("World"));
// // Default Parameters
// function multiply(a, b=2){
//   return a*b;
// }
// console.log(multiply(5));
// console.log(multiply(5,3));
// // Rest Parameters
// function sum(...numbers){
//   return numbers.reduce((acc,n)=> acc+n, 0);
// }
// console.log(sum(1,2,3,4));
// // Functions returning Functions
// function outer(x){
//   return function inner(y){
//     return x + y;
//   };
// }
// const add5 = outer(5);
// console.log(add5(10));

// const book = {title: "JS Guide", author: "MDN"};
// const{title,author} = book
// console.log(title);
// console.log(author);
// // All code you write in JS is inside functions(event handlers, API calls,utilities, etc)
// // Functions power callbacks and higher-order-functions(like map,filter,reduce)
// // They connect with events(onclick, onchange), timers(setTimeout), and async code.
// // "this" keyword in JS

// // "this" in a simple object
// const person = {
//   name: "Vidhya",
//   greet: function(){
//     console.log("Hello I am ", +this.name);
//   }
// };
// person.greet();
// // "this" in normal function
// function showThis(){
//   console.log(this);
// }
// showThis();  //In browser => window, In strict mode -> undefined

// // "this" inside an object but using arrow function
// const userr = {
//   name: "Priya",
//   greet: () => {
//     console.log("Hello "+this.name);
//   }
// };
// userr.greet(); //Hello undefined because arrow functions do not bind their own "this"

// // "this" in a constructor function
// function Person(name){
//   this.name = name;
// }
// const p1 = new Person("Harry");
// console.log(p1.name);

// With "new", "this" refers to the new object being created

// Object Method => this =that object
// Normal function => this =global(window) or undefined in strict Mode
// Arrow Function => no own "this", takes from outer scope
// Constructor => this = new object
// Event handler => this = element

// REVERSE A STRING
function reversedString(str){
  let reversed = "";
  for(let i = str.length-1; i>=0;i--){
    reversed += str[i];
  }
  return reversed
}
console.log(reversedString("Harry"));
// Using recursion
function reverseString(str){
  if(str === "")return "";
  return reverseString(str.substr(1)) + str[0];
}
  // str.substr(1)) => gives the string without the first character
console.log(reverseString("Harry Potter"));
// avascript +j
// vascript +ja
// ..............................
// Using reduce
function reverseString(str){
  return str.split("").reduce((rev, char)=> char + rev, "");
  // str.split("") => split the string into an array of characters:
  // coding => ["c","o","d","i","n","g"]
}
console.log(reverseString("Coding"));
// "c" + ""
// "o" + "c"
//"d " + "oc"

// Using Built- in- Method
function reversed(str){
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// PRIME NUMBER CHECK
// Basic Loop
function isPrime(n){
  if(n <= 1) return false;
  for(let i = 0; i < n; i++){
    if(n % 2 === 0) return false;
  }
  return true;
}
console.log(isPrime(2));
// Optimized (check up to root n)

function isPrime(n){
  if(n<=1) return false;

  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(29));
console.log(isPrime(49));

// FACTORIAL NUMBER
// Using a Loop
function factorial(n){
  if(n < 0) return "Not defined"; // factorial doesn't exist for negative numbers
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *=i;
  }
  return result;
}
console.log(factorial(5));
console.log(factorial(0));
// Using Recursion
function factorial(n){
  if(n < 0)return "Not defined";
  if(n === 0 || n === 1)return 1;
  return n* factorial(n-1);
}
console.log(factorial(5));
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// ..........................................
// FIBONACCI SEQUENCE
// each number is the sum of the previous two : F(n) = F(n-1) + F(n-2)
function fibonacci(n){
  let seq = [0,1];
  for(let i = 2; i < n;i++){
    seq[i] = seq[i-1]+ seq[i-2];
  }
  return seq.slice(0, n);
  // array.slice(start,end) -> returns a new array from index start up to end. It does not modify the original array. end is not included in it

}
console.log(fibonacci(7));


// DOM MANIPULATION

const btn = document.getElementsById("clickMe");
btn.textContent = "But Now";
const item = document.createElemntt("li");
item.textContent = "New Product";
document.querySelector("ul").appendChild(item);

// EVENTS & EVENT HANDLING */
document.getElementById("search").addEventListener("input", e => {
  console.log("User Typed:", e.target.value);
});