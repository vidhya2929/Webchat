function checkPalindrome(){
  const text = document.getElementById('textInput').value.toLowerCase();
  const cleaned = text.replace(/[^a-z0-9]/gi, '');
  const reversed = cleaned.split('').reverse().join('');
  
}