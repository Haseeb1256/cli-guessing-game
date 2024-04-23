import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-5: ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(" Congratulation You guessed the right number");
}
else {
    console.log("sorry, you guessedthe wrong number");
}
