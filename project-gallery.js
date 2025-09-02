// Array con las rutas de las imágenes del proyecto
const images = [
  "../assets/proyectos/proyecto1/proy1-1.jpg",
  "../assets/proyectos/proyecto1/proy1-2.jpg",
  "../assets/proyectos/proyecto1/proy1-3.jpg"
];

// Seleccionamos la imagen principal y las flechas
const carouselImg = document.getElementById("carousel-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Índice actual
let currentIndex = 0;

// Función para mostrar la imagen según índice
function showImage(index) {
  if(index < 0) index = images.length - 1;
  if(index >= images.length) index = 0;
  currentIndex = index;
  carouselImg.src = images[index];
}

// Event listeners para flechas
prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

// Inicializamos mostrando la primera imagen
showImage(0);
