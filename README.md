Simple Shopping Cart Web App

This is a simple shopping cart web app built with HTML, CSS, JavaScript, and Axios for making HTTP requests. The app fetches product data from a dummy API (https://dummyjson.com/products) and displays the products on the main page. Users can add products to their cart, view the cart with added items, remove items, and see a summary of their order.

Features:

Product Display: Products are fetched from the dummy API and displayed with their images, titles, prices, and an "ADD TO CART" button.

Add to Cart: Clicking the "ADD TO CART" button adds the selected product to the cart. If the same product is added multiple times, it increments the quantity.

View Cart: Users can click the "CART" button to view the products they've added to their cart.

Remove from Cart: In the cart view, users can remove items from the cart by clicking the "Remove" button next to each item.
Quantity Selection: Users can change the quantity of each item in the cart using a dropdown menu.

Order Summary: The cart displays the subtotal, shipping estimate, tax estimate, and the total order amount.

How to Use:

Loading Products: The app loads products from the dummy API when the page loads.

Adding to Cart: Click "ADD TO CART" on any product to add it to the cart.

Viewing Cart: Click the "CART" button to view the items added to the cart.

Removing Items: In the cart view, click "Remove" next to an item to remove it from the cart.

Changing Quantity: Use the dropdown menu in the cart view to change the quantity of items.

Order Summary: The cart view displays a summary of the order including subtotal, shipping estimate, tax estimate, and total.

Code Structure:

HTML: The structure of the web page including the main content area and cart area.

CSS: 

Styling for the web page and cart display.

JavaScript:

fetchData(): Fetches product data from the API and initializes the app.
getData(arr): Renders products on the main page.
addTO_cart(data): Handles adding products to the cart.
openCart(): Opens the cart view.
closeCart(): Closes the cart view.
cartData(arr): Renders cart items in the cart view.
removeFROM_cart(el, index): Removes items from the cart.
calculate_Cart(arr): Calculates and displays the order summary.
resetButtonStyles(): Resets button styles in the main page when the cart is empty.

Event listeners:

Click events for adding to cart, opening/closing cart, removing from cart.
Change event for quantity selection.

Additional Notes:

Axios: The app uses Axios for making HTTP requests to fetch product data. Make sure Axios is included in the project.

Styling:
 The styling is kept minimal for demonstration purposes. Modify the CSS as needed for a better user interface.
API Endpoint: The app currently uses https://dummyjson.com/products as the API endpoint. Replace it with a real API endpoint for a live application.

Feel free to modify and expand upon this code for a more robust shopping cart application!

Contact

If you have any questions, suggestions, or need support, you can contact me through the following:
cahandarov@gmail.com




## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-projectygujhkj
```
    