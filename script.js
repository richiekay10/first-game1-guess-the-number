// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById("guessSubmit");
const guessInput = document.getElementById("guessInput");
const message = document.querySelector(".message");

let attempts = 0;

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`;
        message.style.color = "green";
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else {
        const hint = userGuess < randomNumber ? "higher" : "lower";
        message.textContent = `Wrong guess! Try a ${hint} number.`;
        message.style.color = "red";
        guessInput.value = "";
        guessInput.focus();
    }
}
