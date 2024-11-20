
//  Looping through the "products" array to get products from the array instead of typing them manually in the HTML.
let productsHTML =  ""

products.forEach((product) => {
    productsHTML = productsHTML + `
        <div class="product-container">
            <div class="product-image">
                <img src="${product.image.desktop}"> 
            </div>

            <button class="add-to-cart-button">
                <img src="/images/icon-add-to-cart.svg" alt="" class="image-cart-button">
                Add to Cart
            </button>

            <div class="product-details">
                <p class="main-product">${product.category}</p>
                <p class="full-product">${product.name}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;

    document.querySelector(".js-product-grid").innerHTML = productsHTML



    let cartQuantity = 0
    const addToCartButton = document.querySelectorAll(".add-to-cart-button");

    addToCartButton.forEach((button) => {
        button.addEventListener("click", () => {

            button.classList.add("js-clicked-button");
            button.innerHTML = `
                <img src="images/icon-decrement-quantity.svg" alt="" class = "minus-button svg-path">
                
                <p> ${cartQuantity} </p>

                <img src="images/icon-increment-quantity.svg" alt="" class = "plus-button svg-path">
            `;

            // Accessing and modifying plus icon
            const plusIcon = button.querySelectorAll(".plus-button");
            const minusIcon = button.querySelectorAll(".minus-button");
            const emptyCart = document.querySelector(".cart-empty");
            const cartWithItems = document.querySelector(".cart-with-items");

            plusIcon.forEach((plusButton) => {
                const cartWithItems = document.querySelector(".cart-with-items");
                plusButton.addEventListener("click", () => {   
                    emptyCart.style.display = "none";
                    cartWithItems.style.display = "block";          
                    cartQuantity = cartQuantity + 1;
                    renderCart()
                    
                });
                
            });

            // Accessing and modifying minus icon
            
            minusIcon.forEach((minusButton) => {
                minusButton.addEventListener("click", () => {   
                    if(cartQuantity > 0 ){
                        cartQuantity = cartQuantity - 1
                    }
                });
            });

            //  Generating Cart with JavaScript

            const cart = []
            let cartHTML = ""
            
            cart.forEach((cartItem) => {
                cartHTML = cartHTML + `
                    <div class="cart-items-container">
                                        <div class="added-items">
                                            <div class="full-product-in-cart">
                                                <p style="color: hsl(14, 65%, 9%); font-weight: 500;"></p>
                                            </div>

                                            <div class="cart-price-product">
                                                <span style="color: hsl(14, 86%, 42%); font-weight: 450; padding-right: 10px;">${cartQuantity}x</span>
                                                <span style="color: hsl(7, 20%, 60%); padding: 0px 10px;">@ $${product.price.toFixed(2)}</span>
                                                <span style="color: hsl(12, 20%, 44%);font-weight: 480">$${(product.price.toFixed(2)) * cartQuantity}</span>
                                            </div>


                                        </div>
                                        <div class="remove-item">
                                            <img src="/images/icon-remove-item.svg" alt="" class="remove-item-button">
                                        </div>

                                    </div>

                                    <div class="total">
                                        <p>Order Total</p>
                                        <h1 class="full-cart-total">$46.50</h1>
                                    </div>
                                    <div class="carbon-neutral">
                                <img src="images/icon-carbon-neutral.svg" alt="">
                                <p>This is a <span>carbon-neutral</span> delivery</p>
                            </div>

                            <button class="order-button js-confirm-order">Confirm Order</button>
                    </div>
        
                `;
                    cart.push(cartItem)
                    console.log(cart)
            });

            function renderCart() {
                const addedItems = document.querySelector(".added-items");
                cart.push(addedItems)
            }
            
            cartWithItems.innerHTML = cartHTML

            document.querySelector(".cart-quantity-display").innerHTML = cartQuantity   
            
        });
    });

});







