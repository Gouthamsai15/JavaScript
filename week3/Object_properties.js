let student = {
    name: "Goutham",
    age: 20,
    course: "CSE"
};
Object.keys(student).forEach(key => {
    console.log(`${key}`);
    console.log(`${student[key]}`);
});