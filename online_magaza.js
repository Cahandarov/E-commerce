var window = document.querySelector("window");
var main = document.querySelector("#main");
var lines = document.querySelector(".lines");
var cart_open = document.querySelector("#box");
var cart_counter = document.querySelector("#chart_counter");
var addTocart = document.getElementsByClassName("add_to_chart");
var main_page = document.getElementById("main_page");
var cart_page = document.getElementById("cart");
var cart_Main = document.getElementById("cart_Main");
var close_cart = document.getElementById("close");
var checkout_BOX = document.getElementById("checkout_BOX");
var continue_shopping = document.getElementById("contTO_shopping");
var price_change = document.getElementsByClassName("option");
var cart_array = [];
var data;

function fetchData() {
    axios
        .get("https://dummyjson.com/products")
        .then((res) => {
            data = res.data.products;

            getData(res.data.products);
            console.log(res.data.products)
            addTO_cart(data);

        })

}

function getData(arr) {
    lines.innerHTML = "";
    arr.forEach((el, index) => {
        lines.innerHTML += ` 

        <div class="product">
            <img src=${el.images[0]} alt="" class="pro_img">

            <label class="rating-label"><strong></strong>
  <input
    class="rating"
    max="5"
    oninput="this.style.setProperty('--value', ${ el.rating } )"
    step="0.1"
    style="--value:${ el.rating } "
    type="range"
    value=${ el.rating } >
</label>
            <p class="product_name">${el.title}</p>
            <p class="price">${el.price}<span>AZN</span></p>
            <button class="add_to_chart">ADD TO CART</button>
        </div>

  `;
    });
}

function addTO_cart(data) {
    const addTocartElements = document.querySelectorAll(".add_to_chart");

    addTocartElements.forEach((element, index) => {
        element.addEventListener("click", (e) => {
            const newItem = { ...data[index], count: 1 };
            const existingItemIndex = cart_array.findIndex((item) => item.id === newItem.id);
            console.log(existingItemIndex)

            if (existingItemIndex !== -1) {
                cart_array[existingItemIndex].count++;
            } else {
                cart_array.push(newItem);
            }
            console.log(cart_array);
            e.target.style.backgroundColor = "green";
            e.target.style.color = "white";
            cart_counter.innerText = cart_array.length;
            cartData(cart_array);
            calculate_Cart(cart_array);
            
        });
    });
}

cart_open.addEventListener("click", () => {
    openCart();
});

function openCart() {
    if (cart_array.length > 0) {
        main_page.style.display = "none";
        cart_page.style.display = "block";
    }
}

close_cart.addEventListener("click", () => {
    closeCart();
    continue_shopping
});

continue_shopping.addEventListener("click", () => {
    closeCart();
});

function closeCart() {
    main_page.style.display = "block";
    cart_page.style.display = "none";
}

window.addEventListener("load", () => {
    fetchData();
});


function cartData(arr) {
    cart_Main.innerHTML = "";
    arr.forEach((el, index) => {
        cart_Main.innerHTML += ` 

        <div class="productsIN_cart">
        <div class="productsIN_cartLEFT">
            <img src="${el.images[0]}" alt="productsIN_cart" class="product_photo">
            <div class="product_datails">
                <div>
                
                    <p class="productNameIN-Cart">${el.title}</p>
                    <p class="pro_detail">${el.description}</p>
                </div>
                <p class="other_details">In stock:${el.stock}</p>
            </div>
        </div>
        
        <div class="productsIN_cartCENTER">
            <select class="select_option">
                <option value="${el.count}" class = "option">${el.count}</option>
                <option value="${el.count + 1}" class = "option">${el.count + 1}</option>
                <option value="${el.count + 2}" class = "option">${el.count + 2}</option>
            </select>
            <p class="remove" onclick="removeFROM_cart(${index})">Remove</p>
        </div>

        <p class="priceIN_CART">${el.price * el.count}<span>AZN</span></p>

    </div>

  `;
 
    });
}

function removeFROM_cart(el, index) {
    cart_array.splice(index, 1);
    cart_counter.innerText = cart_array.length;
    cartData(cart_array)
    calculate_Cart(cart_array)
    if (cart_array.length < 1) {
        closeCart();
        resetButtonStyles(index);
    }
}

function calculate_Cart(arr) {
    checkout_BOX.innerHTML = "";
    var subtotal = 0;
    arr.forEach((el, index) => {
        checkout_BOX.innerHTML = ` 

        <div id="subtotal">
        <p class="subtotal_text checkout_text">Subtotal</p>
        <p class="subtotal_price checkout_text">${subtotal = subtotal + (el.price * el.count)}<span>AZN</span></p>
    </div>
    <div id="shipping">
        <p class="shipping_text checkout_text">Shipping estimate</p>
        <p class="shipping_price checkout_text">50<span>AZN</span></p>
    </div>
    <div id="tax">
        <p class="tax_text checkout_text">Tax estimate</p>
        <p class="tax_price checkout_text">${subtotal * 18 / 100}<span>AZN</span></p>
    </div>

    <div id="total">
        <p class="total_text">Order Total</p>
        <p class="total_price">${subtotal + 50 + subtotal * 18 / 100}<span>AZN</span></p>
    </div>

  `;
    });
}

function resetButtonStyles() {
    const addTocartArray = Array.from(addTocart);

    addTocartArray.forEach((button) => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
}



const selectElements = document.querySelectorAll(".select_option");

selectElements.forEach((selectElement) => {
    selectElement.addEventListener("change", (e) => {
        console.log(selectElements)
        console.log(e)

    

        calculate_Cart(cart_array);
    });
});



