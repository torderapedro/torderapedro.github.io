const slides = document.querySelectorAll('.main-image-container img');
const prevBtn = document.querySelector('.main-image-container .prev');
const nextBtn = document.querySelector('.main-image-container .next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Inicializa
showSlide(currentIndex);

// Eventos
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
