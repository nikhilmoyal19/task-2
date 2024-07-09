// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 }
];

const cart = [];

// Load products
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
});

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart
function updateCart() {
    const cartContainer = document.querySelector('.cart-list');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartElement = document.createElement('div');
        cartElement.classList.add('cart-item');
        cartElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartElement);
    });
}
