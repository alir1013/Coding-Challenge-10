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
