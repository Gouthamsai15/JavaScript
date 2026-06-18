const reverseString = str => {
    let reverse = "";
    str.split("").reverse().forEach(char => {
        reverse += char;
    });
    console.log(`${reverse}`);
};
reverseString("Goutham");