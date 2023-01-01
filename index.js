const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	{
		name: 'projTitle',
		type: 'input',
		message: 'Enter the name of the application.',
	},
	{
		name: 'projDesc',
		type: 'input',
		message: 'Give a short description of the project.',
	},
    {
        name: 'projLicns',
        type: 'list',
        message: 'Select a license:',
        choices: ['test1','test2'],
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err
        ? console.error(err)
        : console.log("Successfully wrote to file."));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
    console.log(response))
    // writeToFile("README.md", response));
};

// Function call to initialize app
init();
