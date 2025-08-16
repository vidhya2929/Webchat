let naame = "Harry";
let agee = 21;
console.log("My name is "+naame+ " and my age is " + agee);
console.log(`my name is ${naame} and I am ${agee} years old`);
// Destructuring
// quickly unpack values from array or objects.
let arr = [10, 20, 30];
let[a,b] = arr;
console.log(a, b);

let person = {name: "Harry", age: 21};
let {name, age} = person;
console.log(name, age);


// PROMISE
let promise = new Promise((resolve, reject)=>{
  let success = true;
  success ? resolve("Done!") : reject("Error!");
});
promise.then(msg => console.log(msg)).catch(err => console.log(err));