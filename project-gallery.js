/* Imagen principal */
.main-image-container {
  margin: 1.5rem 0;
  text-align: center;
}
.main-image-container img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
}

/* Galería de miniaturas */
.gallery {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.gallery-thumb {
  width: 100px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.gallery-thumb:hover {
  border-color: var(--primary);
}
