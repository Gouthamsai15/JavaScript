let questions = [
    {
        question: "2 + 2 ?",
        answer: 4
    },
    {
        question: "5 + 5 ?",
        answer: 10
    }
]

let score = 0

let userAnswers = [4, 10]

for (let i = 0; i < questions.length; i++) {

    if (userAnswers[i] == questions[i].answer) {
        score = score + 1
    }
}

console.log("Score:", score)