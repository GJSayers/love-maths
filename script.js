document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

function runGame(gameType) {
    // Generate 2 random numbers between 1 and 25
    // Math.floor rounds the number to an integer (whole number) 
    // Math.random creates a random number.
    let num1 = Math.floor(Math.random()* 25) + 1;
    let num2 = Math.floor(Math.random()* 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }
    }


function checkAnswer() {
    // Checks the answer against the first element in the 
    // returned calculateCorrecAnswer array

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) 
    // just putting isCorrect into the parentheses is short hand for isCorrect = True
    {
        alert("Hey, your answer is correct, well done!");
    } else {
        alert(`Sorry... ${userAnswer} was the wrong answer. The correct answer is ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {
    // gets the operands from the DOM

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion(operand1, operand2) {

    // IDs are taken from the span elements of the question area

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}
