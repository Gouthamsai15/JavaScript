let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
]

let total = 0

for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity)
}

console.log("Total Bill:", total)