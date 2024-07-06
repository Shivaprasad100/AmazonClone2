let mainHTML = '';

productData.forEach(
    (product) =>{
        mainHTML +=  
        `
        <div class="product-container">
            <div class="product">
                <img class="product-img" src="${product.productImg}">
            </div>

            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price" >$${product.price}</div>
                <div class="add-to-cart" ><button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button></div>
            </div>
        </div>
        `
    }

);

console.log(productData[0].price);

let mainBody = document.querySelector("main");

mainBody.innerHTML = mainHTML;


let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach((addToCartBtn) => {
    addToCartBtn.addEventListener("click", () =>{

        let productId = addToCartBtn.dataset.productId;

        let mathchingItem;

        cart.forEach((item) =>{
            if(productId === item.productId){
                mathchingItem = item;
            }
        });


        if(mathchingItem){
            mathchingItem.quantity += 1;
        }
        else{
            cart.push(
                {
                    productId: productId,
                    quantity: 1
                }
            );
        }
        

        console.log(cart);

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector(".cart-count").innerHTML
        = cartQuantity;

    });
 });