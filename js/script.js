document.addEventListener('DOMContentLoaded', () => {
    // Elementos del carrusel normal
    const slides = document.querySelectorAll('.main-image-container img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    
    // Elementos del visor (lightbox)
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentIndex = 0;

    // Función para actualizar la imagen principal y las miniaturas
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    // Función para abrir el visor
    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = slides[currentIndex].src;
        lightboxOverlay.style.display = 'block';
    }

    // Eventos para abrir el visor al hacer clic en las miniaturas
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            showSlide(index); // Actualiza el carrusel normal
            openLightbox(index); // Abre el visor
        });
    });

    // Evento para abrir el visor haciendo clic en la imagen principal activa
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Evento para cerrar el visor
    closeBtn.addEventListener('click', () => {
        lightboxOverlay.style.display = 'none';
    });

    // Navegación dentro del visor
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        lightboxImage.src = slides[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        lightboxImage.src = slides[currentIndex].src;
    });

    // Inicializa la página mostrando la primera imagen
    showSlide(currentIndex);
});
