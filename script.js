// Initialize the cart as an empty array
let cart = [];

// Function to add an item to the cart
function addItem(name, price, quantity) {
    // Check if the item already exists in the cart
    let existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += quantity;
        console.log(`Added ${quantity} ${name}(s) to the cart.`);
    } else {
        // If the item does not exist, add it to the cart
        cart.push({ name, price, quantity });
        console.log(`Added ${quantity} ${name}(s) to the cart.`);
    }
}

// Function to view the cart
function viewCart() {
    console.log("Cart:");
    let totalCost = 0;
    
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalCost += itemTotal;
        console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity}, Price: $${item.price} each, Total: $${itemTotal}`);
    });
    
    console.log(`Total Cost: $${totalCost}`);
}

// Function to remove an item from the cart
function removeItem(name) {
    // Find the index of the item to be removed
    let index = cart.findIndex(item => item.name === name);
    
    if (index !== -1) {
        // Remove the item from the cart
        cart.splice(index, 1);
        console.log(`Removed ${name} from the cart.`);
    } else {
        console.log(`${name} not found in the cart.`);
    }
}

// Function to checkout and clear the cart
function checkout() {
    let totalCost = 0;
    
    cart.forEach(item => {
        totalCost += item.price * item.quantity;
    });
    
    console.log(`Checkout Complete!`);
    console.log(`Total Paid: $${totalCost}`);
    
    // Clear the cart
    cart = [];
}

// Example usage
addItem('Apple', 10, 2);
addItem('Banana', 5, 5);
viewCart();
removeItem('Banana');
viewCart();
checkout();