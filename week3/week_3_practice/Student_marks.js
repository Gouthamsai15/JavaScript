let student = {
    name: "Goutham",
    marks: [90, 65, 89]
};
let total = 0;
student.marks.forEach(mark => {
    total = total + mark;
});
let average = total / student.marks.length;
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average}`);