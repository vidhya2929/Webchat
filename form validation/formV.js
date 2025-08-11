const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpasswrd = document.getElementById("Cpass");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passError");
const confirmError = document.getElementById("Cmpass")

const submitBtn = document.getElementById("submitBtn");


function validateEmail(){
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // it is a regular expression(regex) commonly used for basic email validation in javascript
  // /...../ this is how JS mark the start and end of a regex
  //  ^ Matches start of the string
  //  [^\s@]+
  //  []=> a character set(what's allowed)
  // ^ (inside brackets) -> means NOT
  // \s => whitespace
  // @ -> the literal @character
  // [^\s@] ==> any character that is NOT whitespace and NOT @
  //  + ==> one or more of those characters
  // \. matches a literal '.' 
  // . itself would mean any character
  // $ matches the end of the string ensures nothong comes after the last part
  if(!pattern.test(email.value.trim())){
    emailError.textContent= "Invalid email occurs";
    return false;
  }
  emailError.textContent = "";
  return true;
}