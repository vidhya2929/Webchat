let a =5, b= 10; a= a+b; b= a-b; a= a-b; console.log("a = ", a ,"b = ", b);
function isPalindrome(str){
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

for(let i = 1; i <= 100; i++){
  console.log(i);
}
let n = 5; 
for(let i =1; i <=n; i++){
  console.log("*".repeat(i));
}
let sum = 0; for(let i = 1; i <= 50; i++){sum +=i}console.log("Sum =",sum);

function factorial (n){
  let fact = 1;
  for(let i = 1; i <=n; i++){
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
function reverseNumber(num){
  let rev = 0; while(num > 0){
    let digit = num % 10;
    rev = rev * 10 +digit;
    num = Math.floor(num/10);
  }
  return rev;
}
console.log(reverseNumber(1234));