let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Agregar el producto al carrito
    cart.push({ name: productName, price: productPrice });

    // Actualizar el carrito visualmente
    updateCart();
}

function updateCart() {
    // Actualizar los productos del carrito
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar lista de productos en el carrito

    // Agregar productos al carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} MXN`;
        cartItems.appendChild(li);
    });

    // Actualizar el precio total
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice;
}

function completePurchase() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de comprar.");
    } else {
        alert(`¡Gracias por tu compra!\nTotal: $${totalPrice} MXN`);
        cart = []; // Vaciar carrito
        updateCart(); // Actualizar visualmente el carrito
    }
}
