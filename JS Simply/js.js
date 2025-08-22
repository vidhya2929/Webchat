// var -> function-scoped, hoisted(can be accessed before declaration).
// let -> Block- scoped, not hoisted the same way(Temporal Dead Zone).
// cont -> Block-scoped, cannot be reassigned
// var x =10;
// let y = 20;
// const z = 30;

// if(true){
//   var a = 5;
//   let b= 15;
//   const c = 25;
// }
// for(var i = 0; i<3; i++){
//   setTimeout(()=> console.log(i), 1000);

//  var (one box for all balloons(1,2,3))
// first balloon(0) goes in , then you throw it away and replace it with balloon(1).Then replace it with balloon(2).finally, after blowing 3 balloons, the box only has balloon 3 inside(because ypu replaced it every time).
// let(seperate box for each balloon) first balloon goes in first box,seconsd balloon goes in box 2,third box goes in box3
// }
// OUTPUT => 3 3 3  because var is a function scoped, not block scoped
// It means inside the whole function , there is only one i.Unlike let, it does not create a new i for each loop iteration.
// console.log(a);
// var a = 10;      // undefined "var" is hoisted but initialized with undefined
// console.log(b);
// let b = 20;      //ReferenceError => Temporal Dead Zone(TDZ)
// var = one shared box ->keeps getting replaced
// let = new box for each loop -> remembers each value seperately

// Function => it is like a recipe: you give it incredients(input), it does somthing. and returns a result.
// function add(a,b){
//   return a+b;
// }
// console.log(add(2,3));
// // Function Scope => Variables declared inside a function cannot be used outside
// function greet(){
//   let name = "Priya";
//   console.log("Hello"+name);
// }
// greet();
// console.log(name);  // Error: name is not defined , because it is not inside the scope of the function
// Types of Functions
// Function Declaration

// function sayHai(){
//   console.log("HI");
// }
// sayHai();
// // Function Expression
// const sayHi = function(){
//   console.log("Hi");
// };
// sayHi();
// // Arrow function
// const sayHii = () => console.log("hi");
// sayHii();
// // Default Parameters
// function multiply(a, b = 2){
//   return a*b;
// }
// console.log(multiply(5)); // 10

// // Return vs Console.log
// // return => gives back a value for later use.
// // console.log only shows it on screen
// function square(n){
//   return n * n;
// }
// console.log(square(4));
// let result = square(5);
// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isEven(4));

// function sumArray(arr){
//   return arr.reduce((sum,n)=> sum+n,0)
// }
// console.log(sumArray([1,2,3,4]));
// // Using a loop
// function sumArray(arr){
//   let sum = 0;
//   for(let i =0; i<arr.length; i++){
//     sum +=arr[i];
//   }
//   return sum
// }
// function greetUser(name = "Guest"){
//   return `Hello ${name}`;
// }
// console.log(greetUser());
// // findMax(a,b,c)
// function findMax(a,b,c){
//   return Math.max(a,b,c);
// }
// console.log(findMax(10,5,7));
// // Manual Comparison
// function findMax(a, b, c){
//   let max = a;
//   if(b > max) max = b;
//   if(c > max)max = c;
//   return max;
// }
// // An array is like a list that can store multiple items
// let fruits = ["apple","banana","mango"];
// console.log(fruits[0]);
// console.log(fruits.length);

// // push/Pop => add/remove at the end
// let nums = [1,2,3];
// nums.push(4); //[1,2,3,4]
// nums.pop(); //[1,2,3]
// // shift/Unshift => add/remove at the start
// nums.unshift(0); // [0,1,2,3]
// nums.shift();  //[1,2,3]
// // map => transforms each element -> returns a new array
// let doubled = nums.map(n => n* 2);
// // filter => keeps only matching elements
// let evens = nums.filter(n => n% 2 === 0);
// // reduce => combine all values into one
// let sum = nums.reduce((sum,n)=> sum+n,0);
// // forEach() => loop through array(no return)
// fruits.forEach(fruit => console.log(fruit));
// // find => find first matching item
// let found = nums.find(n => n >10);
// console.log(found);

// function doubleNumbers(arr){
//   return arr.map(a => a * 2);
// }
// console.log(doubleNumbers([1,2,3,4]));

// function filterLong(words){
//   return words.filter(word => word.length > 4);
// }
// console.log(filterLong(["apple", "kiwi","banana","fig"]));
// // Find the product
// function product(arr){
//   return arr.reduce((acc,n)=>acc * n, 1);
// }
// console.log(product([2,3,4]));

// function product(arr){
//   return arr.reduce((acc,n)=>acc * n,1);
// }
// console.log(product([2,3,4]));
// // Find User by ID
// let users = [
//   {id:1, name: "Rahul"},
//   {id:2, name:"Riya"},
//   {id: 3, name:"harry"}
// ];
// let user = users.find(u=> u.id === 2);
// // find returns the first object where the condition matches.
// console.log(user);
// // Total Price of cart
// let cart = [
//   {item:"Book",price:200},
//   {item: "Pen", price:20},
//   {item:"Bag", price:500}
// ];
// let total = cart.reduce((acc,curr)=> sum + product.price,0);
// console.log(total);
// // Object is a collection of key-value pairs
// let iser = {
//   name: "Harry",
//   age: 21,
//   isStudent: true
// };
// console.log(iser.name);
// console.log(iser["age"]);
// // console.log(iser);
// // Adding/Updating/Deleting
// iser.city = "wayanad";
// iser.age = 23;
// delete iser.isStudent;
// console.log(iser);
// // Lopps through Objects
// let car = {brand: "Toyota", model: "Fortuner", year: 2020};
// // let car = {key:"car[key]",key:"car[key]",key: "car[key"};
// for(let key in car){
//   console.log(key, ":", car[key]);
// }
// // Array of Objects
// let products = [
//   {id:1, name: "Book", price: 200},
//   {id:2, name:"Pen", price:20}
// ];
// console.log(products[0].name);
// // Access the object values =>
//   let student = {name: "Kiran", roll:101, grade: "A"};
// console.log(student.name);
// console.log(student.grade);
// student.college = "CSE Dept";
// student.grade = "A+";
// console.log(student);
// let cars = {brand:"Dodge",model:"challenger",year:2020};

// for(let key in cars){
//   console.log(key,":",cars[key]);
// }
// let employee = {
//   id:1,
//   info: {
//     name: "ram",
//     dept:"IT"
//   }
// };
// // Scope
// // Global scope => Avaliable everwhere
// // Local Scope => Available only inside a function
// let x = 10;
// function test(){
//   let y = 20;
//   console.log(x);
//   console.log(y);
// }
// test();
// console.log(x);
// Function inside objects(Methods)
// let cartt = {
//   items: ["Book", "Pen"],
//   showItems: function(){
//     console.log(this.items);
//   }
// };
// cart.showItems();
// function sayHello(name){
//   return `hello, ${name}`;
// }
// console.log(sayHello("merwena"));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Displaying a n array on the webpage

// let items = ["Laptop", "Shoes","Bag"];
// let ul = document.getElementById("products");
// items.forEach(product => {
//   let li = document.createElement("li");
//   li.textContent = product;
//   ul.appendChild(li);
// });
// 

// let title = document.getElementById("title");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", ()=>{
//   title.textContent = "Hey Kiran";
// })


// let list = document.getElementById("list");
// let addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", ()=>{
//   let li = document.createElement("li");
//   li.textContent = "Mango";

// let delBtn = document.createElement("button");
// delBtn.textContent = "delete";
// delBtn.addEventListener("click",()=>{
//   li.remove();
// })
//   li.appendChild(delBtn);
//   list.appendChild(li);
// });
// let count = 0;
// let display = document.getElementById("count");
// let btn = document.getElementById("add");

// btn.addEventListener("click", ()=>{
//   count++;
//   display.textContent = count;
// })

// let body = document.getElementById("body");
// let btn = document.getElementById("toggle");
// btn.addEventListener("click", ()=>{
//   body.style.backgroundColor = 
//   body.style.backgroundColor === "black" ? "white":"black";
//   body.style.color === "white"? "black": "white";
// });

// let products = ["Laptop", "shoes", "Watch"];
// let ul = document.getElementById("products");

// products.forEach(item =>{
//   let li = document.createElement("li");
//   li.textContent = item + "-Add to cart";
//   ul.appendChild(li);
// });
// https://chatgpt.com/share/68a6ee23-d8e0-8010-96e9-0404908dcbb2

// let textChange = document.getElementById("textChange");
// let btn = document.getElementById("Btn");

// btn.addEventListener("click", ()=>{
//   textChange.textContent = "Welcome Harry!"
// })

// let btn = document.getElementById("toggle");
// btn.addEventListener("click", ()=>{
//   body.style.backgroundColor = body.style.backgroundColor === "black" ? "white" : "black"
// })
// let products = ["Laptop", "Shoes", "Watch"];
// let ul = document.getElementById("products");
// products.forEach(item =>{
//   let li = document.createElement("li");
//   li.textContent = item;
//   ul.appendChild(li);
// });

// JavaScript Events COre Concepts
// click => When user clicks a buttton,lik, etc.
// mouseover/mouseout -> when hovering over an element
// keydown/keyup/input -> when typing in a textbox
// submit ->when submitting a form
// change -> when value of dropdown or input changes
// load -> when page fully loads

// document.getElementById("btn").addEventListener("click", ()=>{
//   alert("Button Clicked");
// });

// let button= document.getElementById("hover");
// let para = document.getElementById("msg");

// button.addEventListener("mouseover", ()=>{
//   para.textContent = "Mouse is over button!";
// });
// button.addEventListener("mouseout", ()=>{
//    para.textContent = "Mouse left button!";
// });

// let form = document.getElementById("form");
// let msg = document.getElementById("msg");

// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   let name = document.getElementById("username").value;
//   msg.textContent = "Hello  " +name;
// });

// let count = 0;
// let btn = document.getElementById("countBtn");
// let result = document.getElementById("result");

// btn.addEventListener("click", ()=>{
//   count++;
//   result.textContent = "Clicked " +count+ " times";
// });

// let pswd = document.getElementById("pswd");
// let toggle = document.getElementById("toggle");
// toggle.addEventListener("change", ()=>{
  // "change" event fires when the state of an input changes.
  // here as toggle is a checkbox, "change" is the correct event because it runs whenever the checkbox is checked or unchecked
  // "click" also work, but "change" is more semantically correct for inputs like checkboxes,dropdowns, and radios 
  // pswd.type = toggle.checked ? "text" : "password";
  // here toggle.checked is already a true or false, we don't need "==="  because ternary operator works like:
  // condition ? valueIfTrue : valueIfFalse
// });

// let form = document.getElementById("myForm");
// let msg = document.getElementById("msg");

// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   let name = document.getElementById("username").value.trim();

//   if(name === ""){
//     msg.textContent = "Name Required!";
//     msg.style.color = "red";
//   }
//   else{
//     msg.textContent = "Welcome "+name;
//     msg.style.color = "green";
//   }
// });
 
// document.addEventListener("keydown", (e)=>{
//   if(e.key === "r"){
//     document.body.style.background = "red";
//   }
//   else if(e.key === "g"){
//     document.body.style.background = "green";
//   }
//   else if(e.key === "b"){
//     document.body.style.background = "blue";
//   }
// });

// let search = document.getElementById("search");
// let items = document.querySelectorAll("#list li");

// search.addEventListener("input", ()=>{
//   let text = search.value.toLowerCase();

//   items.forEach(item =>{
//     let fruit = item.textContent.toLowerCase();
//     item.style.display = fruit.includes(text) ? "block":"none";
//   });
// });

// 3 types of functions => function declaration, function Expression, Arrow Function(ES6)
// HOF(Higher Order Functions)
// A function that takes another function as arguments or returns a function(Used in map, filter, reduce,event handlers, etc..)

// function higherOrder(fn){
//   // here higherOrder(fn) takes a function (fn) as its parameter -> so it is higher-order function
//   console.log("Before running function...");
//   fn();
//   // which eecutes the arrow function you passed
// }
// higherOrder(()=> console.log("Inside callback!"));
// // you are passing an arrow function (()=> console.log("Inside callback!")) as an argument.
// // Inside higherOrder, it runs : console.log("Before running function...")
// // Callback Functions
// // a function passed into another function to be executed later
// function fetchdata(callback){
//   console.log("Fetching data...");
//   callback();
// }
// fetchdata(()=>{
//   console.log("Data received!");
// });
// // A function that runs immediately after it is defined

// (function(){
//    console.log("IIIFE runs automatically!");
// })();

// // closure use-case (Function returning function)
// function outer(){
//   let counter = 0;
//   return function(){
//     counter++;
//     return counter;
//   };
// }
// let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// // function to calculate the squre of a number using function declaration, function expression and arrow function
function squre(n){
  return n * n;
}
console.log(squre(4));
const sqre = function(n){
  return n * n;
}
console.log(sqre(5));
const square = n => n * n;
console.log(square(6));

// HOF
// Create a higher -order - function 'operate' that takes 2 numbers and a function(add,subtract) as an argument
function operate(a, b, fn){
  // consider oprate as a magic box with a,b as first and second number and a helper called fn(a function that tells how to use these two numbers)
  return fn(a, b);
}
function add(x,y){return x + y;}
// add is a helper that knows how to put numbers together.
function sub(x,y){return x - y;}
// sub is another helper that knows how to take away numbers.

console.log(operate(10, 5, add));   //15
console.log(operate(10, 5, sub));   //5
// Callback Function
function greetUser(name, callback){
  // greetUser is like the mom at door,she knows the visitor and she also has a helper(tou) to say welcome
  console.log("Processing...");
  // mom says processing while opening the door
  callback(name); //mom tells you(helper) to go and greet the person
}
function welcomeMsg(user){
  // helper says welcome
  console.log("welcome, "+ user + "!");
}
console.log(greetUser("Harry", welcomeMsg));
// Harry is the visitor, mon does the checking, you say hello to the guest
// Closure
function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  };
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());

// Function returning function
// create a function 'multiply' that returns another function which multiplies a number by the given factor
function multiplyBy(factor){
  // consider a magic machine that makes number bigger,when you build the machine, you tell it what its power is eg: double machine => multiplies everything by 2, triple machine => multiplies everything by 3
  return function(num){
    return num * factor;
  };
}
let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
// Scope and Closures
// Scope => where avariable can be used Global scope => variable declared outside any function,Function scope => Varables decalared inside a function are not visible outside.
// Block Scope=> let and conts are block-scoped
// Lexical Scope => Inner functions can use variables from outer functions
function outer(){
  let name = "Harry";
  function inner(){
    console.log("Hello" +name);
 }
 inner();
}
outer();

// 
function fetchData(callback){
  console.log("Fetching data...");
  setTimeout(()=>{
    callback("Here is your data!");
  },2000);
}
fetchData((result)=>{
  console.log(result);
});
// call fetchData and pass a function(the callback),Inside fetchData,Fetching Data logs immediately ,setTimeout() is scheduled.
// Promises
// A promise represents something that will be done in the future -; It has 3 states -; Pending,Resolved,Rejected
let promise = new Promise((resolve, reject)=>{
  // new Promise(...) you are asking someone to do a task
  let success = true;
  if(success){  //if the task is successfull,then it calls resolve("Task successful")
    resolve("Task successfull");
  }
  else{
    reject("Task failed!");
  }
});
promise.then(result => console.log(result)).catch(error => console.log(error));
// .then() what to do if the task was successful, .catch() what to do if the the task was failure
// A promise is like making a deal ,resolve means the task was successful,reject means the task failed
// If succeed the celebrate it in the .then(),if fail => handle it in .catch()

// Async /Awaits
function getData(){
  return new Promise(resolve => {
    setTimeout(()=> resolve("Data received"),2000);
  });
}
async function showData(){
  console.log("Waiting for data...");
  let result = await getData();
  console.log(result);
}
showData();
// getdData() returns a Promise, Inside we use setTimeout to wait 2 seconds, then call resolve("Data received").Ather 2 seconds the promise is fullfilled with the value "Data received". "ASYNC" means the function always return a promise and allow us to use await.
// OOP(Object Oriented Programming) => OOP is about structuring code using objects.Objects have properties and methods
// Objects
let user = {
  name: "Vidhya",
  age: 21,
  greet: function(){
    console.log("Hello, "+this.name);
  }
};
user.greet();
// Constructor Functions
function Person(name, age){
  this.name = name;
  this.age = age;
}
let p1 = new Person("Meera", 20);
console.log(p1.name);

// In JS, functions can be used to create objects.Constructor function names start with a capital letter, when we call it with the new keyword,JS creates a new empty object{},Sets "this" inside the function to refer to that new object,runs the function body, attaching properties to "this".Returns the object automatically.
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hi, I'm ${this.name}`);
  }
}
let p2 = new Person("harry",21)
p1.greet();
// Inheritance
class Animal{
  speak(){
    console.log("This os an animal sound");
  }
}
class Dog extends Animal{
  speak(){
    console.log("Woof! Woof!");
  }
}
let d = new Dog();
d.speak();
// Encapsulation
class Account{
  #balance = 0; // # makes balance a private field, That means it can only be accessed inside the class
  deposit(amount){
    this.#balance += amount;
  }
  getBalance(){
    return this.#balance;
  }
}
let acc = new Account();
acc.deposit(100);
console.log(acc.getBalance());
// Error handling and Debugging
// try catch
try{
  let num = 10/0;
  console.log(num);
  throw new Error("Something went wrong!");
}
catch(error){
  console.log("Error caught: ", error.message);
}
// finally
try{
  console.log("Trying...");
}catch(e){
  console.log("Error:", e);
}finally{
  console.log("This always run");
}
// Custom Errors
function divide(a, b){
  if(b === 0){
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
try{
  console.log(divide(10,0));
}catch(e){
  console.log("Oops:", e.message);
}
// console.log() => print values
// console.error() => print errors
// console.table() => print arrays/objects as tables

// Modules help us split code into files and reuse them easily.
export function add(a,b){
  return a +b;
}
export const PI = 3.14;
// Importing 
import {add,PI} from './math.js';
console.log(add(5,10));
console.log(PI);
// Default Export
export default function greet(name){
  return `Hello, ${name}`;
}
import greet from './greet.js';
console.log(greet("Meera"));