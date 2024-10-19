//Task 2:Add Event Listeners for Product Selection 
const productPrice= document.getElementById("product-price");
const productSize= document.getElementById ("product-size");

productSize.addEventListener("change",(event) => {
    const selectedPrice = event.target.value;
    productPrice.textContent= `$${selectedPrice}`;   //price updated based on selected size
});
