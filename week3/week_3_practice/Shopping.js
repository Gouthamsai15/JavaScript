let cart = [
    {
        item: "Laptop",
        price: 50000,
        quantity: 2
    },
    {
        item: "Mouse",
        price: 1000,
        quantity: 3
    }
];
let total = 0;
cart.forEach(product => {
    total = total + (product.price * product.quantity);
});
console.log(`${total}`);