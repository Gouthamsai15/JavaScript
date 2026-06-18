const fibonacci = () => {
    let a = 0;
    let b = 1;
    console.log(`${a}`);
    console.log(`${b}`);
    Array(8).fill().forEach(() => {
        let c = a + b;
        console.log(`${c}`);
        a = b;
        b = c;
    });
};
fibonacci();