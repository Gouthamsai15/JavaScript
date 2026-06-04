let student = {

    name: "Goutham",

    marks: [90,85,95]
}

let total = 0

for(let mark of student.marks){

    total += mark
}

let average = total / student.marks.length

let grade

if(average >= 90){
    grade = "A"
}
else if(average >= 75){
    grade = "B"
}
else{
    grade = "C"
}

console.log("Name:", student.name)
console.log("Total:", total)
console.log("Average:", average)
console.log("Grade:", grade)