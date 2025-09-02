// Seleccionamos la imagen principal y las miniaturas
const mainImage = document.querySelector(".main-image-container img");
const thumbnails = document.querySelectorAll(".gallery-thumb");

// Seleccionamos el enlace alrededor de la imagen principal (para abrir en tamaño completo)
const mainLink = document.querySelector(".main-image-container a");

// Creamos las flechas
const prevBtn = document.createElement("button");
prevBtn.textContent = "❮";
const nextBtn = document.createElement("button");
nextBtn.textContent = "❯";

// Añadimos clases a las flechas
prevBtn.classList.add("prev");
nextBtn.classList.add("next");

// Posicionamos las flechas dentro del contenedor principal
const container = document.querySelector(".main-image-container");
container.appendChild(prevBtn);
container.appendChild(nextBtn);

// Estado actual de la galería
let currentIndex = 0;

// Función para mostrar la imagen según índice
function showImage(index) {
  if (index < 0) index = thumbnails.length - 1;
  if (index >= thumbnails.length) index = 0;
  currentIndex = index;

  // Cambiamos la imagen principal y el enlace
  mainImage.src = thumbnails[index].src;
  if(mainLink) mainLink.href = thumbnails[index].src;

  // Resaltamos la miniatura activa
  thumbnails.forEach(t => t.classList.remove("active"));
  thumbnails[index].classList.add("active");
}

// Flechas de navegación
prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

// Click en miniaturas
thumbnails.forEach((thumb, i) => {
  thumb.addEventListener("click", () => showImage(i));
});

// Inicializamos mostrando la primera imagen
showImage(0);
