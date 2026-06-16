let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];
let total = 0;
cart.forEach(product => {
    total = total + (product.price * product.quantity);
});
console.log("Total Bill:", total);