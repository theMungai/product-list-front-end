
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

//  1. Modifying an add to cart button to change it's state on click.
//  2. When the plus svg is clicked, it is supposed to add items to the cart.
//  3. The product clicked should be the one to be add to the cart.
//  4. When the minus icon is clicked it is supposed to reduce the item from the cart.
//  5. When the remove button is clicked, it is supposed to remove the item from the cart.
//  6. When adding the item to the cart, the total price should be updated.

const addToCartButton = document.querySelectorAll(".add-to-cart-button");

function modifyAddToCartBtn(){
    
}
let cartQuantity = 0
addToCartButton.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(button)
        button.classList.add("js-clicked-button");
        button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" class = "minus-button"><path fill="#fff" class="svg-path" d="M0 .375h10v1.25H0V.375Z"/></svg>
        
        <p> ${cartQuantity} </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" class = "plus-button"><path fill="#fff" class="svg-path" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`

        // Accessing and modifying plus icon
        const plusIcon = button.querySelectorAll(".plus-button");
        plusIcon.forEach((button) => {
            button.addEventListener("click", () => {
                cartQuantity ++
            })
        })

        // Accessing and modifying minus icon
        const minusIcon = button.querySelectorAll(".minus-button");
        minusIcon.forEach((button) => {
            button.addEventListener("click", () => {
                
                if(cartQuantity > 0 ){
                    cartQuantity --
                }
            })
        })
        
    })

         
 

    
})



