
//  Looping through the "products" array to get products from the array instead of typing them manually in the HTML.
const cart = []
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

})

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

        plusIcon.forEach((plusButton) => {
            plusButton.addEventListener("click", () => {              
                cartQuantity ++    
            });
        });

        // Accessing and modifying minus icon
        const minusIcon = button.querySelectorAll(".minus-button");
        
        minusIcon.forEach((minusButton) => {
            minusButton.addEventListener("click", () => {   
                if(cartQuantity > 0 ){
                    cartQuantity --
                }
            });
        });

        document.querySelector(".cart-quantity-display").innerHTML = cartQuantity   
        
    });
});





