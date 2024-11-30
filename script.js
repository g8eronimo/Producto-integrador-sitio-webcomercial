// Seleccionar elementos del DOM
const sliderContainer = document.querySelector('.slider-container');
const productosContainer = document.querySelector('.productos');
const promocionesContainer = document.querySelector('.promociones');
const comprarButton = document.querySelectorAll('#btn-comprar');

// Agregar evento de clic a los botones de comprar
comprarButton.forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Producto agregado al carrito!');
    });
});

// Agregar evento de hover a las imágenes de productos
productosContainer.addEventListener('mouseover', event => {
    if (event.target.tagName === 'IMG') {
        event.target.style.transform = 'scale(1.1)';
    }
});

productosContainer.addEventListener('mouseout', event => {
    if (event.target.tagName === 'IMG') {
        event.target.style.transform = 'scale(1)';
    }
});

// Agregar evento de clic a las imágenes de promociones
promocionesContainer.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        alert('¡Promoción seleccionada!');
    }
});

// Agregar efecto de transición a las imágenes del slider
sliderContainer.addEventListener('mouseover', event => {
    if (event.target.tagName === 'IMG') {
        event.target.style.opacity = '0.5';
    }
});

sliderContainer.addEventListener('mouseout', event => {
    if (event.target.tagName === 'IMG') {
        event.target.style.opacity = '1';
    }
});
