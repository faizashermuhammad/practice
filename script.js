let randomNumber;
let wrongGuessCount=0;

function resetGame() {
    randomNumber = parseInt(Math.random() * 100);
    wrongGuessCount = 0;
}
resetGame();

function guessTheNumber() {
    let userInput = parseInt(document.querySelector("input").value );

    if (userInput < randomNumber) {
        alert("To small");
        wrongGuessCount++;
    }
    else if (userInput > randomNumber) {
        alert("To Big");
        wrongGuessCount++;
    } else {
        alert("congratulation! wrong guess " + wrongGuessCount);
        resetGame();
    }
}