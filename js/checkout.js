let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout(){

    const container = document.getElementById("checkout-items");
    const totalEl = document.getElementById("checkout-total");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += Number(item.price);

        container.innerHTML += `
        <div class="order-item">

            <div class="item-info">
                <h4>${item.name}</h4>
                <span>₱${item.price}</span>
            </div>

        </div>
        `;
    });

    totalEl.textContent = total;
}

document.addEventListener("DOMContentLoaded", renderCheckout);