const findSecondLargest = nums => {
    let biggest = 0;
    let secondBiggest = 0;
    nums.forEach(num => {
        if (num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        } else if (num > secondBiggest) {
            secondBiggest = num;
        }
    });
    console.log(`${secondBiggest}`);
};
findSecondLargest([10, 20, 50, 80, 60]);