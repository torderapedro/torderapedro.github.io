// Selecciona todas las imágenes y los botones
const slides = document.querySelectorAll('.main-image-container img');
const prevBtn = document.querySelector('.main-image-container .prev');
const nextBtn = document.querySelector('.main-image-container .next');

let currentIndex = 0;

// Función para mostrar solo la imagen activa
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Funciones para navegar
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Inicializa mostrando la primera imagen
showSlide(currentIndex);

// Eventos de botones
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
