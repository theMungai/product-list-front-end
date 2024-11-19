
//  Looping through the "products" array to get products from the array instead of typing them manually in the HTML.

let productsHTML =  ""
products.forEach((product) => {
    productsHTML = productsHTML + `
        <div class="product-container">
            <div class="product-image">
                <img src="${product.image.mobile}" alt="">
            </div>
            <button class="add-to-cart-button" data-product-name = "${product.name}"><img src="/images/icon-add-to-cart.svg" alt="" class="image-cart-button"> Add to Cart</button>

            <div class="product-details">
                <p class="main-product">${product.category}</p>
                <p class="full-product">${product.name}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;

})

document.querySelector(".js-product-grid").innerHTML = productsHTML

// Add to Cart Button changing its state

let cartQuantity = 0
const cartQuantityDisplay = document.querySelector(".cart-quantity-display");
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("js-clicked-button");
        button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" class = "minus-button"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" class = "svg-path"/></svg>
        <p>${cartQuantity}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" class = "plus-button"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" class = "svg-path"/></svg>
        `


        // Giving the "plus Icon" its functionality
        const addedItems = [{}]
        const emptyCart = document.querySelector(".cart-empty");
        const cartWithItems = document.querySelector(".cart-with-items");
        button.querySelectorAll(".plus-button").forEach((plusIcon) => {
            plusIcon.addEventListener("click", () => {
                //  accessing each product Name when clicked
                const productName = button.dataset.productName;
                console.log(productName)
                cartQuantity += 1
                cartQuantityDisplay.innerHTML = cartQuantity
                emptyCart.style.display = "none"
                cartWithItems.style.display = "block";
                addedItems.forEach((item) => {
                    addedItems.push({
                        productName : productName,
                        cartQuantity : cartQuantity
                    })
                })
                console.log(addedItems)
            });
        });

        // Giving the "minus Icon" its functionality
        button.querySelectorAll(".minus-button").forEach((minusIcon) => {
            minusIcon.addEventListener("click", () => {
                
                if(cartQuantity > 0){
                    cartQuantity = cartQuantity - 1;
                    cartQuantityDisplay.innerHTML = cartQuantity
                }
            })
        });
    });
    
});

// Generating Cart
let generatedCart = "";
products.forEach((product) => {
    generatedCart = generatedCart + 
    `
        <div class="cart-with-items">
            <div class="cart-items-container">
                <div class="added-items">
                    <div class="full-product-in-cart">
                        <p style="color: hsl(14, 65%, 9%); font-weight: 500;"> ${productName}</p>
                    </div>
                    
                    <div class="cart-price-product">
                        <span style="color: hsl(14, 86%, 42%); font-weight: 450; padding-right: 10px;">${cartQuantity}x</span>
                        <span style="color: hsl(7, 20%, 60%); padding: 0px 10px;">@ $${product.price}</span>
                        <span style="color: hsl(12, 20%, 44%);font-weight: 480">$${(product.price) * cartQuantity}</span>
                    </div>


                </div>
                <div class="remove-item">
                    <img src="/images/icon-remove-item.svg" alt="" style="cursor: pointer;" class="remove-item-button">
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

    document.querySelector(".cart-with-items").innerHTML = generatedCart

})



//Pop up modal

const popupModal = `
        <div class="pop-up-container">
        <div class="pop-up-details">
            <div class="pop-up-header">
                <img src="images/icon-order-confirmed.svg" alt="">
                <h1 style="color:hsl(14, 65%, 9%) ;">Order Confirmed</h1>
                <p style="color:hsl(7, 20%, 60%) ;">We hope you enjoy your food</p>
            </div>

            <div class="items-confirmed">

            </div>

            <div class="total">
                <p>Order Total</p>
                <h1>$46.50</h1>
            </div>

            <button class="order-button js-start-new-order">Start New Order</button>
        </div>
    </div>
`;


// Making pop up modal interactive 
const popModal = document.querySelector(".pop-up-container");
document.querySelector(".js-confirm-order").addEventListener("click", () => {
    popModal.style.display = "block"
});


// Refreshing the page after  clicking Start New Order Button
document.querySelector(".js-start-new-order").addEventListener("click", () => {
    window.location.reload(true)
})


// Remove Item Button
// const addedItems = document.querySelector(".added-items")
// document.querySelector(".remove-item-button").addEventListener("click", () => {
//     addedItems.removeChild(addedItems)
// })






