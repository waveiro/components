window.addEventListener("load", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const nextSlideButton = document.querySelector(".btn-next");
  const previousSlideButton = document.querySelector(".btn-previous");

  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  transformSlides((index) => `translateX(${index * 100}%)`);

  nextSlideButton.addEventListener("click", () => {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    transformSlides((index) => `translateX(${100 * (index - currentSlide)}%)`);
  });

  previousSlideButton.addEventListener("click", () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }

    transformSlides((index) => `translateX(${100 * (index - currentSlide)}%)`);
  });

  slider.classList.remove("slider--hidden");

  function transformSlides(propertyFn) {
    slides.forEach((slide, index) => {
      slide.style.transform = propertyFn(index);
    });
  }
});
