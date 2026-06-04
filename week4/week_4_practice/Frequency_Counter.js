let nums = [1, 2, 1, 3, 2, 1]

let count = {}

for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (count[num] == undefined) {
        count[num] = 1
    } else {
        count[num] = count[num] + 1
    }
}

console.log(count)