const images = [
  "../images/orem1.jpg",
  "../images/orem2.jpg",
  "../images/orem3.jpg",
  "../images/orem4.jpg"
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
