let nums = [1, 2, 1, 3, 2, 1];
let count = {};
nums.forEach(num => {
    if (count[num] === undefined) {
        count[num] = 1;
    } else {
        count[num] = count[num] + 1;
    }
});
console.log(`${JSON.stringify(count)}`);