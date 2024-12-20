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


const addToCartButton = document.querySelectorAll(".add-to-cart-button");
addToCartButton.forEach((button) => {
    const plusIcon = button.querySelector(".plus-button");
    const minusIcon = button.querySelector(".minus-button");
    const count = button.querySelector(".count");

    let cartCount = 0
    button.addEventListener("click", () => {
        
        button.classList.add("js-clicked-button");
        button.innerHTML = `
            <img src="images/icon-decrement-quantity.svg" alt="" class = "minus-button">
            <p class = "count">${cartCount}</p>
            <img src="images/icon-increment-quantity.svg" alt="" class = "plus-button">
        `;

        

        const updatedPlusIcon = button.querySelector(".plus-button");
        const updatedMinusIcon = button.querySelector(".minus-button");
        const updatedCount = button.querySelector(".count");

        updatedPlusIcon.addEventListener("click", () => {
            cartCount += 1;
            updatedCount.textContent = cartCount
            console.log("cli")
        });

        updatedMinusIcon.addEventListener("click", () => {
            if(cartCount > 0){
                cartCount -= 1
            }
        })

    });
});