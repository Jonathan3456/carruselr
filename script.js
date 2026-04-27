let index = 0;
const slides = document.querySelectorAll(".slides img");

function cambiarImagen() {
    slides.forEach(img => img.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// Cambia cada 3 segundos
setInterval(cambiarImagen, 3000);
