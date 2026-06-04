let nums = [1, 1, 2, 2, 3, 4, 4, 5]

for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
        nums.splice(i, 1)
        i--
    }
}

console.log(nums);