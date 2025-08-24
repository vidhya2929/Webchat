// let toggleBtn = document.getElementById("toggleBtn");
// // selects the button that will show/ hide the menu
// let menu = document.getElementById("menu");
// // selects the element that you want to toggle
// toggleBtn.addEventListener("click", () =>{
//   if(menu.style.display === "none" || menu.style.display === ""){
//     menu.style.display = "block";
//   }
//   else{
//     menu.style.display = "none";
//   }
// });
 
let searchInput =document.getElementById("search");
let products = document.querySelectorAll("#productList li");

searchInput.addEventListener("keyup", ()=>{
  let text = searchInput.value.toLowerCase();

  products .forEach(item =>{
    let productName =  item.textContent.toLowerCase();
    if(productName.includes(text)){
      item.style.display ="block";
    }
    else{
      item.style.display = "none";
    }
  });
});

function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            document.write('the word is palindrome.');
        }else{
            document.write('the word is not palindrome!');
        }
    }
}
checkPalindrom('wordthatwillbechecked');