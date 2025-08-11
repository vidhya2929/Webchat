const priceRange = document.getElementById("priceRange");
const maxPriceText = document.getElementById("maxPrice");
// span or p tag showing the number from the slider
const products = document.querySelectorAll(".product");

priceRange.addEventListener("input", ()=>{
  // the "input" event triggers every time the user moves the slider
  // in this we will update the display and filter products
  const maxPrice = parseInt(priceRange.value);
  // gets the slider's current value (as a string eg: "200")
  // parseInt => converts a string to a number
  maxPriceText.textContent = maxPrice;
  // shows the new slider value
  products.forEach(product =>{
    const productPrice = parseInt(product.getAttribute("data-price"));
    // reads the custom HTML attribute data-price from the product
    if(productPrice <= maxPrice){
      product.style.display = "block";
    }
    else{
      product.style.display = "none";
    }
  })
})