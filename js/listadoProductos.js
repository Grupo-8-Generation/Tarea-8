// Define los productos de café por galería
var cafeProducts = {
    gallery1: [
        { name: 'Product 1', imgSrc: 'img/gallery-1.jpg', description: 'Descripción del producto 1' },
        { name: 'Product 2', imgSrc: 'img/gallery-2.jpg', description: 'Descripción del producto 2' },
        // Agrega más productos de la galería 1 aquí
    ],
    gallery2: [
        { name: 'Product 3', imgSrc: 'img/gallery-3.jpg', description: 'Descripción del producto 3' },
        { name: 'Product 4', imgSrc: 'img/gallery-4.jpg', description: 'Descripción del producto 4' },
        // Agrega más productos de la galería 2 aquí
    ],
    gallery3: [
        { name: 'Product 5', imgSrc: 'img/gallery-5.jpg', description: 'Descripción del producto 5' },
        { name: 'Product 6', imgSrc: 'img/gallery-6.jpg', description: 'Descripción del producto 6' },
        // Agrega más productos de la galería 3 aquí
    ]
};

// Función para agregar productos de café al contenedor
function addCafeProducts(galleryId) {
    // Obtener el contenedor de productos de café
    var container = document.getElementById('cafe-products-container');

    // Obtener la galería actual
    var galleryProducts = cafeProducts['gallery' + galleryId];

    // Limpiar el contenedor antes de agregar los nuevos productos
    container.innerHTML = '';

    // Agregar los productos de la galería actual al contenedor
    galleryProducts.forEach(function(product) {
        var col = document.createElement('div');
        col.classList.add('col-lg-3');

        var galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img', 'position-relative');

        var img = document.createElement('img');
        img.classList.add('img-fluid', 'rounded', 'w-100');
        img.src = product.imgSrc;
        img.alt = product.name;

        var galleryOverlay = document.createElement('div');
        galleryOverlay.classList.add('gallery-overlay', 'p-4');
        galleryOverlay.innerHTML = '<h4 class="text-secondary">' + product.name + '</h4><p>' + product.description + '</p>';

        var searchIcon = document.createElement('div');
        searchIcon.classList.add('search-icon', 'text-center', 'p-3');
        var searchLink = document.createElement('a');
        searchLink.href = product.imgSrc;
        searchLink.setAttribute('data-lightbox', 'gallery-' + galleryId);
        searchLink.classList.add('my-auto');
        var searchIconElement = document.createElement('i');
        searchIconElement.classList.add('fas', 'fa-search-plus', 'btn-primary', 'btn-primary-outline-0', 'rounded-circle', 'p-3');

        searchLink.appendChild(searchIconElement);
        searchIcon.appendChild(searchLink);

        galleryImg.appendChild(img);
        galleryImg.appendChild(galleryOverlay);
        galleryImg.appendChild(searchIcon);

        col.appendChild(galleryImg);

        container.appendChild(col);
    });
}

// Detectar el cambio de pestaña y agregar los productos correspondientes
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.nav-link');
    
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var galleryId = this.getAttribute('data-gallery-id');
            addCafeProducts(galleryId);
        });
    });
});

