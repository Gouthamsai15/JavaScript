const one = () => {
    console.log(`One`);
};
const two = () => {
    one();
    console.log(`Two`);
};
two();