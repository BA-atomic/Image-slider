const images = document.querySelectorAll('.slide');
const imageSlider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0; // to keep track of the current slide(initially the first image)

// showing the current slide
function showSlide() {
  const slideWidth = images[0].clientWidth; // get the width of one image
  const translateValue = -currentIndex * slideWidth;
  imageSlider.style.transform = `translateX(${translateValue}px)`; // move the slider to the left by -400px

  //update indicators
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  showSlide();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide();
  });
});
