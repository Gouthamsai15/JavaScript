let questions = [
    {
        question: "2 + 2 ?",
        answer: 4
    },
    {
        question: "5 + 5 ?",
        answer: 10
    }
];
let userAnswers = [4, 10];
let score = 0;
questions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
        score++;
    }

});
console.log("Score:", score);