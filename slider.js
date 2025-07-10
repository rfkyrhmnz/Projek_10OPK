const images = [
  "../../../images/IMG20250604091134.jpg",
  "../../../images/IMG20250604092255 (1).jpg",
  "i../../../mages/IMG20250604092255.jpg",
 
];

let currentIndex = 0;
const sliderImage = document.querySelector(".slider-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateImage() {
  sliderImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
