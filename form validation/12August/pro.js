// // REVERSE A STRING
// function reversedStr(str){
//   return str.split('').reverse().join('');
//   // split('') => turns the string into array of characters
//   // reverse() => revrses the array in place
//   // join('') => joins array back to a string
// }
// console.log(reversedStr("reverse"));


// function reversedString(str){
//   let reversed = "";
//   for(let i = str.length-1; i>=0;i--){
//     reversed += str[i];
//   }
//   return reversed
// }
// console.log(reversedString("string"));

// // PALINDROME
// function ispalindrome(str){
//   let revrsed = str.split('').reverse().join('');
//   return str ===  revrsed;
// }
// console.log(ispalindrome("madam"));
// console.log(ispalindrome("hello"));
// console.log(ispalindrome("racecar"));

// function ispalindromeClean(str){
//   let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   // ^ inside the bracket means not
// // [^a-z0-9] matches any character that is NOT a letter or digit
// // g(global) replace all occurences in the string
// //  '' means replace them with nothing(remove them)
// let reversed = str.split('').reverse().join('');
// return cleaned === reversed;
// }
// console.log(ispalindromeClean("madam"));
// console.log(ispalindromeClean("race car"));

// // Above demonstration
// let str = "Hello, World! 123";
// let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
// console.log(cleaned);
// // "helloworld123"

// function palindrom(str){
//   let left = 0;
//   let right = str.length-1;
//   while(left < right){
//     if(str[left] !== str[right]){
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(palindrom("madam"));
// console.log(palindrom("hello"));

// COUNT VOWELS IN A STRING


// function countVowels(str){
//   let count = 0;
//   let vowels = 'aeiouAEIOU';
//   for(let char of str){
//     if(vowels.includes(char)){
//       count++
//     }
//   }
//   return count;
// }
// console.log(countVowels("jaavaaScriptt"));

// function countVowelsRegEx(str){
//   let matches = str.match(/[aeiou]/gi);
//   // match() => searches the string for matches to a pattern and returns them in an array
//   // g => global flag , find all matches instead of judt the first one
//   // i =>case-insensitive,so it matches both uppercase and lowercase vowels
//   return matches ? matches.length : 0;
// }
// console.log(countVowelsRegEx("javaaScriiptt"));

// // CAPITALIZE THE FIRST WORD
// function capitalizeWords(str){
//   let words = str.split(" ");
//   for(let i =0; i< words.length; i++){
//     if(words[i].length > 0){
//       // above code checks the word length
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//       // words[i][0] => first letter of the word
//       // .toUpperCase() => make it uppercase
//       // words[i].slice(1) => takes the rest of the word starting from index 1.
//       // slice () is used to get a portion of a string starting at a certain index.
//       }
//   }
//   return words.join(" ");
// }
// console.log(capitalizeWords("hello world from javascript"));


// function capitalize(str){
//   return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
//   // map() => goes through each word
// }
// console.log(capitalize("heyy everybody whatsapp"))

// // FIND FREQUENCY OF CHARACTERS

// function charFrequency(str){
//   let frequency = {};
//   // store char count

//   for(let char of str){
//     // loop through each character
//     if(char !== " "){
//       // skip spaces
//       char = char.toLowerCase();
//       // make it lowerCase so 'J' and 'j' are same
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
//   }
//   return frequency;
// }
// console.log(charFrequency("JavaScript Rocks"));


// function charFreq(str){
//   return str.toLowerCase().split('').filter(char => char !== " ").reduce((acc, char)=>{
//     acc[char] = (acc[char] || 0) + 1;
//     // reduce () => takes an array and turns it into a single value
//     // acc => stores the running result
//     // current value(char) => is each item from the array
//     // initial value => {}, an empty object
//     return acc;
//   }, {});
// }
// console.log(charFreq("jandhebc sbdbd"));

// // FIND LARGEST WORD IN A STRING
// function largest(str){
//   let words = str.split(" ");
//   let largest = ''
//   for(word of words){
//     if(word.length > largest.length){
//       largest = word;
//     }
//   }
//   return largest;
// }
// console.log(largest("javascript is super powerful"));


// function findLargest(str){
//   return str.split(" ").reduce((longest, current)=> 
//   longest.length < current.length ? current: longest, ""
//   );
// }
// console.log(findLargest("java is simple but powerful"));

// SMALLEST WORD IN A STRING

// function smallestfun(str){
//   let words = str.split(" ").filter(word => word.length > 0);
//   let smallest = words[0];
  

// for(let word of words){
//   if(word.length < smallest.length){
//     smallest = word;
//   }
// }
// return smallest;
// }
// console.log(smallestfun("ja nhcb  njwdhbxbe hebdg jebhghbhdjekb"));

// function findSmallest(str){
//   return str.split(" ").filter(word => word.length > 0).reduce((smallest, current)=>
//   current.length < smallest.length ? current : smallest);
// }
// console.log(findSmallest("javascript is a powerful language"));

// COUNT WORDS IN A STRING
// function countWords(str){
//   return str.trim().split(/\s+/).length;
//   // trim() => remove space from start and end
//   // split by one or more white space characters
// }
// console.log(countWords("java is a language"));



// function countLoop(str){
//   let count = 0;
//   // no. of words found so far
//   let inword = false
//   // track if we are inside a word

//   for(let char of str){
//     if(char !== " " && !inword){
//       count++;
//       inword = true;
//     }
//     else if(char === " "){
//       inword = false;
//     }
//   }
//   return count;
// }


// REMOVE DUPLICATESs

// function removeDuplicates(str){
//   return [...new Set(str)].join('');
//   // Set only stores unique values
//   // when we pass a string into it,it automatically removes duplicate characters,but preserves their first appearance order
// }
// console.log(removeDuplicates("programming"));


// function remove(str){
//   let result = "";
//   for(let char of str){
//     if(!result.includes(char)){
//       result +=char;
//     }
//   }
//   return result;
// }
// console.log(remove("programming language"));

//  REMOVE SPACES FROM A STRING
// function removeSpace(str){
//   return str.replace(/\s+/g, '');
//   // replace() => finds matches and replace them with something
//   // \s => matches any whitespace character
//   //  + => matches one or more in a row
//   //  g => global flag, so it removes all occurences in the string
//   //  '' => replace matches with nothing
// }
// console.log(removeSpace("Java Script is a scripting language"));

// // Removes only extra spaces - keep single space between words
// function removeS(str){
//   return str.replace(/\s+/g, ' ');
// }
// console.log(removeS("Java            Script   is  a      scripting   language  hehee        !"));

// // Manual way
// function reoveSpac(str){
//   let result = "";
//   for(let char of str){
//     if(char !== ""){
//       result +=char;
//     }
//   }
//   return result;
// }
// console.log(reoveSpac("hrfke              ehcgeb           ehgce                egche             gefvg"))

// function areAnagrams(str1, str2){
//   let cleanStr1 = str1.tolowerCase().replace(/[^a-z0-9]/g, '');
//   let cleanStr2 = str2.tolowerCase().replace(/[^a-z0-9]/g, '');

//   return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');

// }

// function areAnagrams(str1, str2){
//   let cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
//   // ,atches any character that is noyt a lowercase letter or a digit
//   let cleanStr2 = str2.tozlowerCase().replace(/[^a-z0-9]/g, '');

//   return cleanStr1.split('').sort.join('') === cleanStr2.split('').sort().join('');
// }
// // MAX AND MIN WITHOUT BUILT IN METHODS
// function findMaxMin(arr){
//   let max = arr[0];
//   let min=arr[0];

//   for(let i = 1; i < arr.length; i++){
//       if(arr[i]>max){
//         max = arr[i];
//       }
//       if(arr[i] < min){
//         min= arr[i];
//       }
//   }
//   return {max,min};
// }
// console.log(findMaxMin([10,25,3,99,45,1]));

// // FACTORIAL
// function factorial(n){
//   let fact = 1;
//   for(let i = 1; i <=n; i++){
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(5));


// function factRecur(n){
//   if(n === 0) return 1;
//   return n * factRecur(n-1);
// }
// console.log(factRecur(6));

// // Sum of Digits of a number
// function sumOf(num){
//   let sum = 0;
//   while(num > 0){
//     sum += num % 10;
//     // get the last digit and add it to sum
//     num = Math.floor(num / 10);
//     // remove the last digit
//   }
//   return sum;
// }
// // SHALLOW COPY
// const obj1 = {a:1,b:{x:10}};
// const shallowCopy = {...obj1};

// shallowCopy.a = 99;
// // here a is a number -> copied directly
// // b is an object only it's reference is copied
// // Only changes in shallowCopy
// shallowCopy.b.x = 500;
// // here "obj1.b" and "shallowCopy.b" point to the same object in memory
// // Affects obj1 too(shared reference)
// console.log(obj1);
// //DEEP COPY
// // copies  all level -> no shared references
// const deepCopy = JSON.parse(JSON.stringify(obj1));
// // JSON.stringify(obj1) into a JSON string
// // JSON.parse()-> converts that string back into a new object in memory 
// deepCopy.b.x = 999;  //only affetcs deepCopy
// // Change nested value in the copy 
// console.log(obj1);     //{a:1, b:{x: 500}}
// console.log(deepCopy); //{a:1, b:{x: 999}}
// // In deep copy,every nested object gets duplicated so changes to one don't affect the other  ,,, in a shallowCopy, nested objects are still shared between the original and the copy
// MERGE MULTIPLE OBJECTS
const objA = {name: "Alice"}
const objB = {age: 25};
const objC = {place: "wayanad"}

const merged = {...objA, ...objB, ...objC}; console.log(merged);

const person = {name: "mary", age: 22, city:"wayanad"}; console.log(Object.keys(person).length); // Object.keys(person) => returns an array of all enumerable property names that belong directly to obj(not inherited)name,age,city.  Object.entries(person) => also gives key-value pairs
// OBJECT --> ARRAY (Object.entries)
const obj = {a: 1, b: 2, c:3};
console.log(Object.entries(obj));
// ARRAY --> OBJECT (Object.fromEntries)
const arr = [['a', 1], ['b',2],['c',3]];
console.log(Object.fromEntries(arr));
// Group Objects by a property
const users = [
  {name: "Alice", city: "wayanad"},{name:"Bob", city: "Kochi"},{name:"Charlie",city:"wayanad"}
];
const grouped = users.reduce((acc, user)=>{
  if(!acc[user.city]){
      acc[user.city] = [];
  }
  acc[user.city].push(user);
  return acc;
}, {});
console.log(grouped);
// MAP
function customMap(arr, callback){
  // arr =. the array wanted to transform  , callback => a function applied to each element 
  let result = []; // creates an empty array called result that will store the transformed elements after applying the callback
  for(let i =0; i<arr.length;i++){ //loops every element in the input array
    result.push(callback(arr[i], i, arr)); // arr[i] => the current element, i => the current index , arr => the whole array
  }
  // the callback processes the element and returns a new value and that returned value is added to the result array
  return result;
}
const nums = [1,2,3,4];
const doubled = customMap(nums, (num) => num *2);
console.log(doubled);

// FILTER
function customFilter(arr, callback){
  let result = [];
  for(let i =0; i<arr.length; i++){
    if(callback(arr[i], i, arr)){
      result.push(arr[i]);
    }
  }
  return result;
}
const numse = [1,2,3,4,5];
const evens = customFilter(numse, (num)=> num % 2 === 0); console.log(evens)
// REDUCE
function customReduce(arr, callback, initialValue){
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialvalue !== undefined ? 0 : 1;

  for(let i = startIndex; i < arr.length; i++){
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
const nus = [1,2,3,4];
const sum = customReduce(nums, (acc, num)=> acc + num, 0);
console.log(sum);