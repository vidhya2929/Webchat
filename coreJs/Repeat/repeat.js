let name = "meera";  // can be changed
const pi = 3.1416; // Cannot be reassigned
var oldWay = "Avoid this in modern JS"; //function scoped
console.log(name, pi, oldWay);
let age = 21;
let isStudent = true;
let hobbies = ["Coding", "Music"];
let person = {name: "harry", age: 21}
console.log(typeof age);
console.log(typeof hobbies);  //objects because array in java script are special kind of objects & also "typeof" operator is limited  
// to check if somthing is an array
console.log(Array.isArray(hobbies));
// or
console.log(hobbies instanceof Array)
console.log(typeof person)

let data = 42;
console.log(typeof data);  //number
data = "Now it is a string!";
console.log(typeof data); //string
// variable type can change -; because JS is dynamically typed

// Data Types
let str = "Hello";
let num = 42;
let isCool = true;
let nothing = null;
let notDefined;
let list = [1,2,3];
let persone = {name: "Vidhya", age: 21};
// Operators
let a = 10, b=3;
console.log(a+b, a-b, a*b, a/b, a%b, a**b);
console.log(a>b, a<b, a===b, a!==b);
// Conditional Statements
let score = 85;
if(score >= 90){
  console.log("Grade A");
}
else if(score >= 75){
  console.log("Grade B");
}
else{
  console.log("Grade C")
}
// Ternary Operator
let aage = 18;
let status = (age >= 18) ? "Adult": "Minor";
console.log(status);
// Loops
for(let i=1; i<=5; i++){
  console.log("Count:", i);
}
let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits){
  console.log(fruit);
}
// While Loop
let n= 5;
while(n>0){
  console.log("Countdown:", n);
  n--;
}
// Functions & Core Programming Skills
function greet(name){
  return `Hello, ${name}`;
}
console.log(greet("Harry"));
// Arrow Functions
const square = (n) => n*n;
console.log(square(5));
// Function as Value(Higher-Order)
function calculator(x,y, operation){
  // x->first arg, y-> second arg, operation -> a function that decides how to combine x and y
  return operation(x,y);
}
let result = calculator(5, 3, (a,b)=> a+b);
// x=5, y=3, operation = (a,b)=> a+b (arrow function that adds 2 numbers)
console.log(result);

// Basic Array
let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors.length);

// Array Methods 
let nums = [1,2,3,4];
let doubled = nums.map(n=> n*2);
let evens = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((acc, n)=> acc + n, 0);
console.log(doubled, evens, sum);
nums.push(5); // add at end
nums.unshift(0); //add at first
nums.pop();  //remove last
nums.shift(); //remove first

// Spread and Rest
let aa = [1,2];
let bb = [3,4];
let merged = [...a, ...b];
console.log(merged);

function add(...nums){
  return nums.reduce((sum, n)=> sum + n, 0);
  // reduce takes 2 things:
  // A callback function(sum, n) => sum + n
  // An initial value 0
}
console.log(add(1,2,3,4));
// Objects store key-value pairs

let pers = {
  name: "harry",
  age: 21,
  isStudent: true
};
console.log(person.name);

// Adding & Deleting
let car = {brand: "Tesla"};
car.model = "Model 3";
delete car.brand;
console.log(car);

// Object Methods
let student = {
  name: "Riya",
  greet: function(){
    console.log(`Hi, I'm ${this.name}`);
  }
};
student.greet();
// Looping Objects 
let book = {title: "JS Guide", author : "Unknown"};
for(let key in book){
  // key = title,author
  console.log(`${key}: ${book[key]}`);
  // book["title"] = "JS Guide"
  // book["author"] = "Unknown"

// book.key looks for a property literally called "key"
// book[key] means: use the value stored in the variable "key"
}

// Destructuring
let user = {id: 1, username: "Liya"};  //user has 2 properties
let {id, username} = user;
// take the properties "id" and "username" from the object user
// create variables  named "id" and "username"
// Assign their values
console.log(id, username);

// Java Script can select ,change, or remove elements
// getElmeentById
let element = document.getElementById("msg");
console.log(element.textContent);
// querySelector

let el = document.querySelector(".greet");
el.style.color = "blue";

// Multiple Items
let items = document.querySelectorAll(".item");
// items.forEach( i => console.log(i.textContent));i represents the current <li> element in the loop, i.textContent gives the text inside the element.

// Changing Content & Style
function changeText(){
  let p = document.getElementById("demo");
  p.textContent = "New text set by JS!";
  p.style.color = "red";
}
// Add or Remove Classes
function goOnline(){
  let p = document.getElementById("status");
  p.textContent = "Online";
  p.classList.add("online");
}
function goOnline(){
  let p = document.getElementById("status");
  p.textContent = "Online";
  p.classList.add("online");
}
// Making page Interactive
const output = document.getElementById("output");
document.getElementById("btn").addEventListener("click", ()=>{
  output.textContent = "Button was Clicked";
})

// Input Event(Live Typing)
const namee = document.getElementById("name");
const preview = document.getElementById("preview");
namee.addEventListener("input", e =>{
  preview.textContent = `Hello, ${e.target.value}`;
});
// MOUSE EVENTS
const box = document.getElementById("box");
box.addEventListener("mouseenter", ()=> box.style.background = "blue");
box.addEventListener("mouseleave", ()=> box.style.background = "gray");

// Template Literals
let naame = "Harry";
let agee = 21;
console.log("My name is"+naame+ "and my age is" + agee);

// Destructuring
// unpack values from array or objects.
let arr = [10,20,30];
let [ar,br] = arr;
console.log(a,b);
let personn = {name:"harry", brand: "Tesla"};
let{namme,brannd} = personn;
console.log(namme, brannd);

// Spread Operator(...)
// copy or merge arrays/objects
let num1 = [1,2];
let num2 = [3,4];
let combined = [...num1, ...num2];
console.log(combined);

let userr = {name: "Riya"};
let details = {age: 21};
let full = {...userr, ...details};
console.log(full);

// Rest Parameters
// "..." in the "function parameter" means "rest parameter"
// It takes all the arguments passed to the function and packs them into an array
function sum(...numb){
  return numb.reduce((a, b) => a+b, 0);
  // reduce processes all elements of an array and reduces then to a single value.
  // accumulator(a) => holds the result of previous additions
  // currentValue (b)=> the current element in the array
  // initialValue (0) => starting value of "a" 

  // a = 0
  // a = 0+1 =1
  // a = 1+ 2 = 3
}
console.log(sum(1,2,3,4,5,6));

// Default Parameters
// in Js, we can give a function parameter a default value. If the caller doesn't pass a value, or passes "undefined", that default will be used.
// function gets a fallback value
function greet(name = "Guest"){
  // if name is not provided, it will automatically be "Guest".
  console.log(`Hello, ${name}`);
}
greet("Rahul");
// during this first call we passed "rahul" as the argument. So name = "rahul"
greet();
greet(null); // Hello, null (because null is a value , not undefined)
// here we didn't pass any argument, so name is "undefined" .
// since default is defined => name = "Guest"
// so it prints Hello, Guest
// it is only kick when =;
//  No arguments is provided
// OR the argument is "undefined"

// Arrow Functions
let squae = n => n *n; 
//  === let square = function(n){
//   return n * n
// }
//  n => parameter
// n*n => expression to calculate the square
console.log(square(6));

// Classes (OOP in JS)
// cleaner way to make objects with functions
// class is a blueprint for creating objects.It defines properties and methods for those objects.
class Car{
  constructor(brand){
    // "constructor" is a special method that runs automatically when you create a new object using "new"
    // brand is a parameter passed while creating the object
    this.brand = brand;
    // stores the brand name inside the object
  }
  drive(){
    console.log(`${this.brand} is driving`);
  }
}
let myCar = new Car("Tesla");
// when we calll new car("Tesla") the constructor runs, and sets "this.brand = "Tesla""
myCar.drive();
// Tesla is driving
// Modules 
// helps split code into multiple files.
// math.js =>
  // export function add(a,b){
  //   return a + b;
  // }
  // export const pi = 3.14;

import{add,pi} from './math.js';
console.log(add(5, 3));
console.log(pi);

// PROMISES
// A promise represents a value that may be available now, later, or never
// it is used to handle asynchronous operations(eg: fetching data from a server, reading a file, timers)
//  A promise has 3 states =;
// Pending(still running), Fulfilled(success/resolved),Rejected(failed)
let promise = new Promise((resolve, reject)=>{
  // new Promise() takes a function with 2 parameters
  //resolve(value) => call this when the operation is successfull
  // reject(error) => call this when the operation fails. 
  let success = true;
  // as we set success = true, it runs resolve("Done!")
  success ? resolve("Done!") : reject("Error!");
});
// Consuming the promise
// .then() -> runs when thee promise is resolved
  //  "msg" receives "Done!"
promise.then(msg => console.log(msg))
.catch(err => console.log(err));
// .catch() -> runs when the promise is rejected
  // err would receive "Error!".


// HOISTING
//  In Js, before execution, the JS engine scans the code and move all variable and function declarations to the top of their scope. === Hoisting
// IM => only declarations are hoisted, not initializations.
console.log(z);
var z = 5;
// After hoisting
// var z;
// console.log(z);       //here gets undefined because "a" was declared, but value not assigned yet
// z = 5   
sayHi();
function sayHi(){      // function => hoisted with full body
  console.log("Hello!");
// the whole function body is hoisted, so you can it before it is defined
}
// "let" and "cost", declarations are hoisted but not initialized (they are in temporal dead zone)
// Accessing it before declaration -> ReferenceError

// Scope = where a variable is accessible
let globalVar = "Global";
function test(){
  let localVar = "Local";
  console.log(globalVar);
  console.log(localVar);
}
test();
console.log(localVar); // Error not accessible outside 
console.log(globalVar);
// Possible as it is in the global scope
// CLOSURES
// A closure is when a function "remembers" variables form its outer scope even after outer function has finished
function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}
let c = counter();
// calls the inner function . Increases count from 0 -> 1 returns 1
console.log(c());
// same inner function, still remembers "count" 
// Increases count from 1-> 2 ,Returns 2.
console.log(c());
console.log(c());
// when counter () is called => it creates count = 0
// Then it returns inner function and the inner function keeps a refernce to count
// so even though counter() has finished, count still exists in memory, because the inner function "remembers" it. 


// "THIS" keyword
// refers to the object that calls the function
let eser = {
  name: "Priya", 
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }
};

eser.greet();

// Arrow functions don't bind their own  "this".
// Instead, they use "this" from the parent scope(the scope where the function was created)
let obj = {
  name: "Harry",
  greet: () => console.log(this.name)
};
obj.greet(); // undefined

// HOF => Higher Order Functions

// takes another function as an argument(callback),
// Returns a function as its result,
// Or does both.
function doTwice(fn){
  // here doTwice is a HOF because it takes another fn as a parameter
  // Inside, it calls fn() 2 times
  fn();
  fn();
}
doTwice(()=> console.log("Hello!"));
// this arrow function is executed twice


// Error Handling 
// Use try...catch to handle runtime errors safely

try{
  let x = y+1;   // here y is not defined
}
catch(error){
  console.log("Error caught:", error.message);
}finally{
  console.log("This runs always");
}
