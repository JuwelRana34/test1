let carosulslides = document.querySelectorAll(".absolute");
let i = 0;

carosulslides.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

setInterval(() => {
  carosulslides.forEach((slide) => {
    slide.style.transform = `translateX(-${i * 100}%)`;
  });
  if (i < carosulslides.length) {
    i++;
  } else {
    i = 0;
  }
}, 3000);

// script.js
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

function rotateSlides() {
  currentIndex = (currentIndex + 1) % carouselItems.length;

  showSlide(currentIndex);
}

// Set an interval for auto-rotation (adjust the timing as needed)
setInterval(rotateSlides, 3500); // 3.5 seconds
