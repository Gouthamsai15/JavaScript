let nums = [10, 20, 50, 80, 60]

let biggest = 0
let secondBiggest = 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > biggest) {
        secondBiggest = biggest
        biggest = nums[i]
    } else if (nums[i] > secondBiggest) {
        secondBiggest = nums[i]
    }
}

console.log(secondBiggest)