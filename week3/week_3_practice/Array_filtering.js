let numbers = [10, 25, 40, 15, 60];

const showNumber = num => {
    if(num > 20){
        console.log(num);
    }
};

numbers.forEach(showNumber);