#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome in my calculator")
const answer = await inquirer.prompt([
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus",
    ],
  },
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else {
  console.log("please select valid operator");
}
console.log("THE END")