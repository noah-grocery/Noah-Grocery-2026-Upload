let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    updateCartCount(cartCount);
    alert(productName + " added to cart!");
}

function updateCartCount(count) {
    const cartElement = document.getElementById('cart');
    cartElement.textContent = 'Cart (' + count + ')';
}
