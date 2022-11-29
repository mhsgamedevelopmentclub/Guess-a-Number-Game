let maximum = parseInt(prompt("Enter a maximum number!"));
while (!maximum) {
  maximum = parseInt("Enter a maximum number!");
}

const targetNum = Math.floor(Math.random() * maximum) * 1;

let guess = prompt("Enter in your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if(guess > targetNum) {
    guess = parseInt(prompt("Too high! Enter a new guess!"));
  } else {
    guess = parseInt(prompt("Too low! Enter a new guess!"));
  }
}
if(guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}


