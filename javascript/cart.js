const cartItemsList = document.getElementById('cartItems');
const checkoutButton = document.querySelector('button');
const cartLink = document.getElementById('cartLink');

// Load cart items from local storage or initialize an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Check if the cart is empty
if (cartItems.length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'Your cart is empty.';
    cartItemsList.appendChild(emptyCartMessage);
} else {
    // Populate the cart items on the cart.html page
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item);

        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });

    updateCartCount(cartItems.length);
}

checkoutButton.addEventListener('click', checkout);

function removeFromCart(item) {
    // Remove item from the cart
    const index = cartItems.indexOf(item);
    if (index !== -1) {
        cartItems.splice(index, 1);
        // Update the cart items in local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Refresh the cart page to reflect changes
        location.reload();
    }
}

function checkout() {
    // Implement your checkout logic here
    alert('Checkout logic goes here!');
}

function updateCartCount(count) {
    // Update cart count in the navbar
    cartLink.textContent = `Cart(${count})`;
}
