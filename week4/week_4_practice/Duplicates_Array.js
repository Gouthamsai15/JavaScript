let nums = [1, 1, 2, 2, 3, 4, 4, 5];
let uniqueNums = nums.filter((num, index) => {
    return nums.indexOf(num) === index;
});
console.log(`${uniqueNums}`);