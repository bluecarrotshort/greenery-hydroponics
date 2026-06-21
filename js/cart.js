let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* SAVE */
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* ADD */
function addToCart(name, price){
    cart.push({
        name: name,
        price: Number(price)
    });

    saveCart();
    updateCartCount();
}

/* COUNT */
function updateCartCount(){
    const countEl = document.getElementById("cart-count");

    if(!countEl) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    countEl.textContent = cart.length;
}



/* RENDER CART ITEMS */
function renderCart(){

    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    if(!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">

            <div>
                <h4>${item.name}</h4>
                <p>₱${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>
        `;
    });

    totalEl.textContent = total;
}

/* REMOVE ITEM */
function removeItem(index){
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

/* CLEAR ALL */
function clearCart(){
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();
});

function addToCart(name, price){

    cart.push({
        name: name,
        price: Number(price)
    });

    saveCart();
    updateCartCount();

    // optional: auto update cart page if open
    renderCart();
}