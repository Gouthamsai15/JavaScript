let arr = [10, 25, 7, 89, 45];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);