// Configuración de imágenes
const gallery = document.getElementById("gallery");
const numImages = 10; // Número total de imágenes
const imageFolder = "investigación";
const imagePrefix = "img_inv";

// Generar las imágenes dinámicamente
for (let i = 1; i <= numImages; i++) {
    const img = document.createElement("img");
    img.src = `${imageFolder}/${imagePrefix}${String(i).padStart(2, "0")}.jpg`;
    img.alt = `Imagen ${i}`;
    img.id = `image_${i}`;
    gallery.appendChild(img);
}
