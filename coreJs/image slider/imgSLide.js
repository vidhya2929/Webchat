const images = ["img1.jpg", "img2.jpg", img3.jpg];
let index = 0;

const sliderImg = document.querySelector("#sliderImg");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
// function to change image
const changeImage = () =>{
  sliderImg.setAttribute("src", images[index]);
};
nextBtn.addEventListener("click", ()=>{
  index = (index+1)% images.length;
  changeImage();
});
prevBtn.addEventListener("click", ()=>{
  index = (index-1 + images.length) % images.length;
  changeImage();
});
