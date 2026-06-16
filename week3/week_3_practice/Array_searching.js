let fruits = ["apple", "banana", "mango"];
let search = "mango";

fruits.forEach((fruit, index) => {
    if(fruit == search){
        console.log("Found at position " + index);
    }
});