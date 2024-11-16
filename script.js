//  Looping through the "products" array to get products from the array instead of typing them manually in the HTML.

let productsHTML =  ""
products.forEach((product) => {
    productsHTML = productsHTML + `
        <div class="product-container">
            <div class="product-image">
                <img src="${product.image.mobile}" alt="">
            </div>
            <button class="add-to-cart-button"><img src="/images/icon-add-to-cart.svg" alt="" class="image-cart-button"> Add to Cart</button>

            <div class="product-details">
                <p class="main-product">${product.category}</p>
                <p class="full-product">${product.category}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;

})

document.querySelector(".js-product-grid").innerHTML = productsHTML

document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("js-clicked-button");
        button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" class = "minus-button"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
        <p>0</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" class = "plus-button"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
        `
    });
});



