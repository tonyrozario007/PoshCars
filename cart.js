let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");
    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.product} - $${item.price}</li>`;
        totalPrice += item.price;
    });
    total.innerText = totalPrice.toFixed(2);
}
