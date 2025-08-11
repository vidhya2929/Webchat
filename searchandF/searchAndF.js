function largest(a,b,v){
  return Math.max(a,b,v);
}
console.log(largest(3,4,87))
//       const regex = new RegExp(`${searchTerm}`, "gi");
//       product.innerHTML = product.textContent.replace(regex`<span class = "highlight">$1</span>`)
//     }
//     else if(text.includes(searchTerm) && searchTerm === ""{
//       product.style.display = "block";
//       product.innerHTML = product.textContent;
//     }else if{
      
//     }
//   )

//   })
// });
const input = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase();
  let found = false;

  products.forEach(product => {
    const text = product.textContent.toLowerCase();

    if (text.includes(searchTerm) && searchTerm !== "") {
      found = true;
      product.style.display = "block";

      // Highlight matching text
      const regex = new RegExp(`(${searchTerm})`, "gi");
      product.innerHTML = product.textContent.replace(regex, `<span class="highlight">$1</span>`);

    } else if (text.includes(searchTerm) && searchTerm === "") {
      product.style.display = "block";
      product.innerHTML = product.textContent; // Remove highlight

    } else if (!text.includes(searchTerm)) {
      product.style.display = "none";
    }
  });

  // Show "No results"
  noResult.style.display = found ? "none" : "block";
});
