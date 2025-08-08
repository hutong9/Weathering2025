<template>
  <div class="carousel" @mouseover="pauseCarousel" @mouseout="resumeCarousel">
    <div id="slide1" class="carousel-item">
      <img src="/img/banner1.jpg" class="w-full" />
    </div>
    <div id="slide2" class="carousel-item">
      <img src="/img/banner2.jpg" class="w-full" />
    </div>
    <div id="slide3" class="carousel-item">
      <img src="/img/西安科技大学4.jpg" class="w-full" />
    </div>
    <div id="slide4" class="carousel-item">
      <img src="/img/西安科技大学5.png" class="w-full" />
    </div>
  </div>
</template>

<style>
.carousel {
  display: flex;
  overflow: hidden;
}

.carousel-item {
  width: 100%;
  flex: 0 0 auto;
  transition: transform 1s ease;
}
</style>

<script setup>
const slides = ['slide1', 'slide2', 'slide3', 'slide4'];
let currentSlide = 0;
let carouselInterval;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateTransform();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateTransform();
}

function updateTransform() {
  const transformValue = `translateX(-${currentSlide * 100}%)`;
  slides.forEach((slide) => {
    const element = document.getElementById(slide);
    if (element) {
      element.style.transform = transformValue;
    }
  });
}

function pauseCarousel() {
  clearInterval(carouselInterval);
}

function resumeCarousel() {
  carouselInterval = setInterval(nextSlide, 3000);
}

// Automatically transition to the next slide every 3 seconds
onMounted(() => {
  carouselInterval = setInterval(nextSlide, 3000);
});
</script>
