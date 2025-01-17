// Cart state
let cart = [];

// Populate products grid dynamically
let productsHTML = "";
products.forEach(product => {
    productsHTML += `
        <div class="product-container" data-product-name="${product.name}">
            <div class="product-image-container">
                <picture class="product-image-${product.name}">
                    <source srcset="${product.image.mobile}" media="(max-width:480px)" />
                    <source srcset="${product.image.tablet}" media="(min-width:481px) and (max-width: 1199px)" />
                    <source srcset="${product.image.desktop}" media="(min-width:1200px) and (max-width: 1900px)" />
                    <img src="${product.image.thumbnail}" alt="${product.name}">
                </picture>
            </div>
            <button class="add-to-cart-button" data-product-name="${product.name}" data-product-price="${product.price}">
                <img src="/images/icon-add-to-cart.svg" alt="" class="image-cart-button"> Add to Cart
            </button>
            <div class="product-details">
                <p class="main-product">${product.category}</p>
                <p class="full-product">${product.name}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
});

document.querySelector(".js-product-grid").innerHTML = productsHTML;

// Handle adding items to the cart
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product-name");
        const productPrice = parseFloat(button.getAttribute("data-product-price"));
        
        // Add to cart logic
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ 
                name: productName, 
                price: productPrice, 
                quantity: 1 });
        }
        
        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartContainer = document.querySelector(".cart-with-items");
    const cartQuantity = document.querySelector(".cart-quantity-display");
    cartContainer.innerHTML = "";
    
    let totalAmount = 0;
    
    cart.forEach(item => {
        let cartItemHTML = `
            <div class="cart-items-container">
                <div class="added-items">
                    <div class="full-product-in-cart">
                        <p style="color: hsl(14, 65%, 9%); font-weight: 500;">${item.name}</p>
                    </div>
                    <div class="cart-price-product">
                        <span style="color: hsl(14, 86%, 42%); font-weight: 450; padding-right: 10px;">${item.quantity}x</span>
                        <span style="color: hsl(7, 20%, 60%); padding: 0px 10px;">@ $${(item.price).toFixed(2)}</span>
                        <span style="color: hsl(12, 20%, 44%);font-weight: 480">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>

                <div class="remove-item">
                    <img src="/images/icon-remove-item.svg" alt="" class="remove-item-button">
                </div>
            
        `;

        cartContainer.innerHTML += cartItemHTML;
        totalAmount += item.price * item.quantity;
    });
    
    cartQuantity.textContent = cart.reduce((acc, item) => item.quantity + acc, 0);
    
    const totalHTML = `
        <div class="total">
            <p>Total</p>
            <h1>$${totalAmount.toFixed(2)}</h1>
        </div>
        <button class="order-button">Confirm Order</button>
    `;
    
    cartContainer.innerHTML += totalHTML;
    
    if (cart.length > 0) {
        document.querySelector(".cart-empty").style.display = "none";
        document.querySelector(".cart-with-items").style.display = "block";
    } else {
        document.querySelector(".cart-empty").style.display = "block";
        document.querySelector(".cart-with-items").style.display = "none";
    }

    // Handle confirm order button click
    const confirmOrderButton = document.querySelector(".order-button");
    confirmOrderButton.addEventListener("click", () => {
        displayOrderConfirmation(totalAmount);
    });


    // Handle Remove button click
    const removeButtons = document.querySelectorAll(".remove-item-button");
    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product-name");
            removeFromCart(productName);
        });
    });
}

// Remove item from the cart
function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        const product = cart[productIndex];
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }
        updateCart();
    }
}

// Display order confirmation modal
function displayOrderConfirmation(totalAmount) {
    const modalContainer = document.querySelector(".pop-up-container");
    modalContainer.style.display = "flex";
    
    let modalHTML = `
        <div class="pop-up-details">
            <div class="pop-up-header">
                <img src="images/icon-order-confirmed.svg" alt="">
                <h1 style="color:hsl(14, 65%, 9%) ;">Order Confirmed</h1>
                <p style="color:hsl(7, 20%, 60%) ;">We hope you enjoy your food</p>
            </div>

            <div class="items-confirmed">
    `;
    
    cart.forEach(item => {
        const product = products.find(product => product.name === item.name);
        modalHTML += `
        
            <div class="cart-items-container">
                <div class="added-items">
                    <div class = "modal-flex-container">
                        <div class="product-image-container">
                            <img src="${product.image.thumbnail}" alt="${item.name}" class="cart-item-thumbnail">
                        </div>
                        <div product-and-price>
                            <div class="full-product-in-cart">
                                <p style="color: hsl(14, 65%, 9%); font-weight: 500;">${item.name}</p>
                            </div>
                            <div class="cart-price-product">
                                <span style="color: hsl(14, 86%, 42%); font-weight: 450; padding-right: 10px;">${item.quantity}x</span>
                                <span style="color: hsl(7, 20%, 60%); padding: 0px 10px;">@ $${(item.price).toFixed(2)}</span>
                                <span style="color: hsl(12, 20%, 44%);font-weight: 480">$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>                        
                    </div>
                </div>
                
            </div>
        `;
    });
    
    modalHTML += `
            <div class="total">
                <p>Order Total</p>
                <h1>$${totalAmount.toFixed(2)}</h1>
            </div>

            <div class="carbon-neutral">
                <img src="images/icon-carbon-neutral.svg" alt="">
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
            <button class="order-button js-start-new-order">Start New Order</button>
        </div>
    `;
    
    modalContainer.innerHTML = modalHTML;

    const startNewOrderButton = document.querySelector(".js-start-new-order");
    startNewOrderButton.addEventListener("click", () => {
        location.reload(true)
    });
}
