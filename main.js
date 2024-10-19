//Task 2:Add Event Listeners for Product Selection 
const productPrice= document.getElementById("product-price");
const productSize= document.getElementById ("product-size");

productSize.addEventListener("change",(event) => {
    const selectedPrice = event.target.value;
    productPrice.textContent= `$${selectedPrice}`;   //price updated based on selected size
});

//Task 3:Handle Stock Availability 

function updateProductDetails() {
    const priceDisplay = document.getElementById('product-price');
    const sizeDropdown = document.getElementById('product-size');
    const stockStatus = document.getElementById('stock-status');
    const addToCartButton = document.getElementById('add-to-cart');

    const selectedSize= sizeDropdown.options[sizeDropdown.selectedIndex];
    const price = selectedSize.value;
    const stock = selectedSize.getAttribute('data-stock');

    priceDisplay.textContent = `$${price}`; // Updates price 
    
    if (stock > 0) {    // Updates the stock status
        stockStatus.textContent = "In Stock"; //Availability
        addToCartButton.disabled = false; 
    } else {
        stockStatus.textContent = "Out of Stock";
        addToCartButton.disabled = true;  
    }
}

const sizeDropdown = document.getElementById('product-size'); 
sizeDropdown.addEventListener('change', updateProductDetails); //adds to size dropdown

updateProductDetails();

  //Task 4: Create A Checkout Event
 
  const sizesDropdown = document.getElementById("product-size");
  const checkoutButton = document.getElementById("add-to-cart");    
  
  checkoutButton.addEventListener('click', () => {
const selectedSize = sizesDropdown.options[sizesDropdown.selectedIndex];
const stock = sizesDropdown.options[sizesDropdown.selectedIndex].getAttribute('data-stock');  //Checks stock 
  
    if (stock > 0) {
      alert(`Item has been added`); //alert message
    } else {
      alert(`${selectedSize} is out of stock`);  //alert message
    }
  });
