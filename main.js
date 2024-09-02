// Function to update the total price
const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total");
    const productCards = document.querySelectorAll(".card");
  
    let total = 0;
  
    productCards.forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").innerText);
      const unitPrice = parseFloat(card.querySelector(".unit-price").innerText.replace("$", ""));
      total += quantity * unitPrice;
    });
  
    totalPriceElement.innerText = `${total} $`;
  };
// Function to handle the quantity adjustment
function adjustQuantity(event) {
    const quantityElement = event.target.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);

    if (event.target.classList.contains('fa-plus-circle')) {
        quantity += 1;
    } else if (event.target.classList.contains('fa-minus-circle') && quantity > 0) {
        quantity -= 1;
    }

    quantityElement.innerText = quantity;
    updateTotalPrice();
}

// Function to delete a product
function deleteProduct(event) {
    const productCard = event.target.closest('.card');
    productCard.remove();
    updateTotalPrice();
}

// Function to like/unlike a product
document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', function() {
        if (heart.style.color === 'red') {
            heart.style.color = 'black'; // Change back to black if already red
        } else {
            heart.style.color = 'red'; // Change to red on click
        }
    });
});


// Adding event listeners to the buttons
document.querySelectorAll('.fa-plus-circle, .fa-minus-circle').forEach(button => {
    button.addEventListener('click', adjustQuantity);
});

document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', deleteProduct);
});

document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', toggleLike);
});

// Initial total price calculation
updateTotalPrice();
