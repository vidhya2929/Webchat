// String is a sequence of characters

// to reverse it :
// 1) Split the string into an array of characters
// 2) Reverse the array
// 3)Join it back into a string.
function reverseString(){
  const input = document.getElementById('inputString').value;
  const reversed = input.split('').reverse().join('');
  document.getElementById('result').innerText = "Reversed: " +reversed;
}
