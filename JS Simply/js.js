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

let products = ["Laptop", "shoes", "Watch"];
let ul = document.getElementById("products");

products.forEach(item =>{
  let li = document.createElement("li");
  li.textContent = item + "-Add to cart";
  ul.appendChild(li);
});
// https://chatgpt.com/share/68a6ee23-d8e0-8010-96e9-0404908dcbb2