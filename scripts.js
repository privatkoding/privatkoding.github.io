const products = [
    { id: 1, name: 'E-commerce Template', price: 49, image: 'product1.jpg', description: 'A comprehensive e-commerce template for React Native.' },
    { id: 2, name: 'Social Media App Template', price: 59, image: 'product1.jpg', description: 'A feature-rich social media app template for React Native.' },
    { id: 3, name: 'Fitness App Template', price: 39, image: 'product1.jpg', description: 'A modern fitness app template for React Native.' },
    { id: 4, name: 'Travel Booking App Template', price: 69, image: 'product1.jpg', description: 'A complete travel booking app template for React Native.' }
];

function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => showProductDetail(product.id);

        const productImg = document.createElement('img');
        productImg.src = `images/${product.image}`;
        productImg.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productGrid.appendChild(productDiv);
    });
}

function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    const url = new URL('product-detail.html', window.location.href);
    url.searchParams.set('id', product.id);
    window.location.href = url;
}

// On product-detail.html page, populate details
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `Price: $${product.price}`;
            document.getElementById('product-image').src = `images/${product.image}`;
            document.getElementById('product-image').alt = product.name;
            document.getElementById('product-description').textContent = `Description: ${product.description}`;
        }
    }
});

// Load products on the main page
if (document.getElementById('product-grid')) {
    loadProducts();
}