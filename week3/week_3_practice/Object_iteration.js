let mobile = {
    brand: "Samsung",
    price: 20000,
    color: "Black"
};

const displayProperty = key => {
    console.log(key + ": " + mobile[key]);
};

Object.keys(mobile).forEach(displayProperty);