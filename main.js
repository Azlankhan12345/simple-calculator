#!/usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const answer = await inquirer.prompt([
        { message: "Enter your first number", type: "number", name: "firstName" },
        { message: "Enter your second number", type: "number", name: "secondName" },
        {
            message: "Select one of the operators to perform action",
            type: "list",
            name: "operator",
            choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
        }
    ]);
    // CONDITION STATEMENT
    if (answer.operator === "ADDITION") {
        console.log(answer.firstName + answer.secondName);
    }
    else if (answer.operator === "SUBTRACTION") {
        console.log(answer.firstName - answer.secondName);
    }
    else if (answer.operator === "MULTIPLICATION") {
        console.log(answer.firstName * answer.secondName);
    }
    else if (answer.operator === "DIVISION") {
        console.log(answer.firstName / answer.secondName);
    }
    else {
        console.log("Please select a correct operator.");
    }
}
main();
