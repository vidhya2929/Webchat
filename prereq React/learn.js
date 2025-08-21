// ES6 Basics
//  let and const
// let => Block-scoped only works inside {} where it is assigned, re-assignable but cannot be redeclared in the same scope
// const => Block-scoped, cannot be re-assigned (but objects/arrays inside can mutate it's content, not the reference)
// var => re-declaration is allowed
// let name = "Vidhya";
// name= "robert";

// const age = 22;
// // age = 23;   // not allowed

// const arr = [1,2];
// arr.push(3);

// // Arrow Functions
// // shorter syntax, they don't bind their own "this".

// function add(a, b){
//   return a+b;
// }

// const addArrow = (a,b) => a+b;
// console.log(addArrow(5,3));


// let nums = [1,2,3,4];  // normal function
// let doubled1 = nums. map(function(n){
//   return n * 2
// });
// let doubled2 = nums.map(n=> n*2);
// console.log(doubled1);
// console.log(doubled2);

// // With no params
// const greet = () => "Hello World"
// console.log(greet());

// // Inside setTimeout
// setTimeout(() =>{
//   console.log("Executed after 1 second");
// }, 1000);


// // Spread Operator

// let arr1 = [1,2];
// let arr2 = [3,4];
// let combined = [...arr1, ...arr2];
// console.log(combined);

// // Rest operator
// // it gathers the remaining arguments into an array
// // Collect into one
// // Only one rest parameter per function
// // It must be the last parameter
// function fn(a,b, ...rest){

// }
// function sum(...nums){
//   return nums.reduce((acc,curr)=> acc+n, 0);
// }
// sum(1,2,3,4);
// sum();







// // Template Literals
// let user = "Vidhya";
// let greeting = `Hello, ${user}! Welcome to JavaScript`;
// console.log(greeting);

// let naame = "Riya";
// let agee = 22;
// let country = "India";
// let msg = `Welcone ${name}! You are ${age} years old and you live in ${country}`
// console.log(msg);



// let a =5, b=10;
// console.log(`The sum of ${a} and ${b} is ${a+b}`);
// // Function usage
// function welcome(user){
//   return `Welcome, ${user}!`;
// }
// console.log(welcome("Harry"));

// // Destructuring
// let colors = ["red", "green", "blue"]
// let [first, second] = colors;
// console.log(first, second);

// let [aa, , c] = [10,20,30];
// console.log(aa,c);  //O/p => 10 30

// let[x, y = 5] =[1];
// console.log(x, y);  // 1 5

// let person = {name: "Riya", age:22}    //Object
// let {nme, ag} = person;
// console.log(nme, ag);
// // Renaming
// let {name: username} = person;
// console.log(username);

// // Default Parameters
// function greet(name = "Guest"){
//   return `Hello, ${name}`;
// }
// console.log(greet());
// console.log(greet("Vidhya"));

// function multiply(a, b=2){
//   return a *b;
// }
// console.log(multiply(5));  //10
// console.log(multiply(5,3));  // 15

// // With arrow function
// const power = (base, exp = 2) => base ** exp;
// console.log(power(3));
// console.log(power(3,3));


// // Object Literals 
// // An object literal is the simplest way of creating objects using {}

// let Uname = "Vidhya";
// let Age = 20;
// let User = {Uname, Age};
// console.log(user);


// // "THIS" KEYWORD
// // Global
// console.log(this); // window(in browser)

// // Iside Object
// let oUser = {
//   name: "Vidhya",
//   show: function(){
//     console.log(this.name);
//   }
// };
// oUser.show();

// // Arrow Funtion
// // Arrow fucntions are shorter way to write functions introduces in ES6
// let Ouser = {
//   name: "Vidhya",
//   show: () =>{
//     console.log(this.name);
//   }
// };
// user.show();  //undefined  (arrow functin doesn;t bind it's own "this")

// // Constructor function
// function person(name){
//   this.name = name;
// }
// let p = new person("Priya");
// console.log(p.name);


// function Person(){
//   this.age = 20;
//   setTimeout(()=>{
//     this.age++;
//   }, 1000);
// }
// new Person();


// // Array Methods
// // 1) FILTER() -> returns elements matching condition
// let num = [1, 2, 3, 4, 5];
// let evens = nums.filter(n => n % 2 === 0);
// console.log(evens);
// // Gets adults age
// let people = [
//   {name: "Riya", age: 21},
//   {name: "rahul", age: 19},
//   {name: "Anu", age: 19}
// ];
// let adults = people.filter(p => p.age >=18);
// console.log(adults);

// // words longer than 5 letters
// let words = ["cat", "elephant","dog","giraffe"];
// let longWords = words.filter(w => w.length > 5);
// console.log(longWords);

// // 2) MAP() -> Transforms elements
// let numb = [1,2,3];
// let doubled = numb.map(n => n * 2);
// console.log(doubled);

// let fruits = ["apple", "banana", "mango"];
// let upper = fruits.map(fruit => fruit.toUpperCase());
// console.log(upper);
// // Extract property from Objects
// let users = [
//   {name: "Riya", age:22},
//   {name: "rahul", age: 25},
//   {name: "Anu", age: 19}
// ];
// let names = users.map(user => user.name);
// console.log(names);


// // 3) REDUCE() => reduces to a single value
// let nom = [1,2,3,4];
// let sum = nom.reduce((acc,curr) => acc+curr,0);
// console.log(sum); 

// let numbers = [10, 25, 8, 99, 45];
// let max = numbers.reduce((acc, curr)=> acc > curr ? acc: curr);
// console.log(max);

// let vegs = ["cucumber", "carrot", "beetroot","cabbage","beans"];
// let counts = vegs.reduce((acc,veg)=>{
//   acc[veg] = (acc[veg] || 0) + 1;
//   return acc;
// }, {});


// // Counter
// let count = 0;
// const step = 1;

// function increase(){
//   count += step;
//   document.getElementById("count"),textContent = count;
// }
// function decrease(){
//   count -= step;
//   document.getElementById("count").textContent =count;
// }

// // Chaining map(), filter(),reduce()
// // Double even numbers
// let numbbers = [1,2,3,4,5,6];
// let result = numbbers.filter(n => n % 2 === 0).map(n => n *2);
// console.log(result);

// // Total Age of Adults 
// let peoples = [
//   {name: "Priya", age: 22},
//   {name: "Rahul", age: 21},
//   {name: "Dona", age: 28}
// ];
// let totalAge = peoples.filter(p => p.age >=18).map(p =>p.age).reduce((sum,age)=> sum +age, 0);
// console.log(totalAge);

// let swords = ["cat", "elephant","dog","giraffe"];
// let longest = words.reduce((longest, sword)=>
// words.length > longest.length ? word : longest);
// console.log(longest);

// let key = "score"
// let player = {
//   name: "Ria",
//   [key]: 100
// }
// console.log(player);



//   //  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
