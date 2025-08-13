
// function capitalWord(str){
//   let words = str.split(" ");

//   for(let i =0; i < words.length; i++){
//     if(words[i]>0){
//       words[i] = words[i][0].toupperCase()+ words[i].slice(1);
//         }
//   }
//   return words.join(" ");
// }
// function wordCount(str){
//   return str.trim().split(/\s+/).length;
// }
// console.log(wordCount("hello everyone , good morning"));


// function countLoop(str){
//   let count = 0;
//   let inword = false;

//   for(let char of str){
//     if(char !== " " && !inword){
//       count++;
//       inword = true;
//     }
//     else if (char === " "){
//       inword = false;
//     }
//   }
//   return count;
// }


// function removeDupli(str){
//   return [...new Set(str)].join('');
// }
// console.log(removeDupli("harrypotter"));

// function removeDupli(str){
//   let result = "";

//   for(let char of str){
//     if(!result.includes(char)){
//     result +=char
//   }
// }
// return result;
// }
// console.log(removeDupli("lamborghini car"));
// // iterative
// function factorial(n){
//   let fact = 1;
//   for(let i = 1; i <=n; i++){
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(6));

// // recursive
// function factorialRec(n){
//   if(n === 0) return 1;
//   return n * factorialRec(n-1);
// }
// console.log(factorialRec(5));
// // 
console.log("Start");
setTimeout(()=>{
  console.log("After 2 seconds");
}, 2000);
console.log("End");