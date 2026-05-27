let student = {
    name: "Goutham",
    marks: [90,65,89]
}
let total = 0

for(let i = 0; i < student.marks.length; i++){
    total = total + student.marks[i]
}
let average = total / student.marks.length

console.log("Total Marks: " + total)
console.log("Average Marks: " + average)