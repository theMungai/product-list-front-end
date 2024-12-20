//  Looping through the products to display each product without typing manually in HTML,
const cart = []
let productsHTML = "";
products.forEach((product) => {
    productsHTML = productsHTML + `
        <div class="product-container" data-product-name = ${product.name}>
            <div class="product-image-container">
                <picture class = "product-image-${product.name}">
                    <source 
                        srcset="${product.image.mobile}" 
                        media="(max-width:480px)"
                    />

                    <source 
                        srcset="${product.image.tablet}" 
                        media="(min-width:481px) and (max-width: 1199px)"
                    />

                    <source 
                        srcset="${product.image.desktop}" 
                        media="(min-width:1200px) and (max-width: 1900px)"
                    />

                    <img src = "${product.image.thumbnail}">
                </picture>
            </div>

            <button class="add-to-cart-button" data-product-name = "${product.name}">
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
});

document.querySelector(".js-product-grid").innerHTML = productsHTML
let cartQuantity = 0;
let matchingItem;
document.querySelectorAll(".add-to-cart-button")
    .forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.add("js-clicked-button")
            button.innerHTML = `
                <img src = "images/icon-decrement-quantity.svg" class = "minus-button">

                <p>${cartQuantity}</p>
                
                <img src = "images/icon-increment-quantity.svg" class = "plus-button">
            `;

            const plusIcon = button.querySelectorAll(".plus-button");
            plusIcon.forEach((addButton) => {
                addButton.addEventListener("click", () => {
                    const productName = button.dataset.productName;

                //  to check if the product already exist in the cart 

                cart.forEach((cartItem) => {
                    if(productName === cartItem.productName){
                        matchingItem = cartItem
                    }
                });

                if (matchingItem){
                    matchingItem.quantity =+ 1;
                }
                else {
                    cart.push({
                        productName : productName,
                        quantity : 1
                    });
                }

                cart.forEach((cartItem) => {
                    cartQuantity = cartQuantity + 1
                });

                    
            })

            const minusIcon = button.querySelectorAll(".minus-button");
            minusIcon.forEach((reduceButton) => {
                reduceButton.addEventListener("click", () => {
                    const productName = button.dataset.productName;

                    //  to check if the product already exist in the cart 
                    cart.forEach((cartItem) => {
                        if(productName === cartItem.productName){
                            matchingItem = cartItem
                        }
                    });

                    if (matchingItem){
                        matchingItem.quantity =+ 1;
                    }
                    else {
                        cart.push({
                            productName : productName,
                            quantity : 1
                        });
                    }

                    cart.forEach((cartItem) => {

                        if(cartQuantity > 0){
                            cartQuantity = cartQuantity - 1
                        }
                        
                    });
                    
                    
                })
            });
            document.querySelector(".cart-quantity-display")
            .innerHTML = cartQuantity 
        });
    });
});


