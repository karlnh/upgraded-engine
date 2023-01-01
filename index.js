const inquirer = require("inquirer");
const fs = require("fs");
const generator = require('./utils/generateMarkdown.js');

console.log(generator);

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Enter the name of the application.',
    },
    {
        name: 'desc',
        type: 'input',
        message: 'Give a short description of the project.',
    },
    {
        name: 'link',
        type: 'input',
        message: 'Enter the GitHub repository link.',
    },
    {
        name: 'install',
        type: 'input',
        message: 'Describe how to install this software, if applicable.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Detail how the project is to be used.',
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'Explain how a user can contribute.',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'If you wish to provide tests for the application, enter them here.',
    },
    {
        name: 'user',
        type: 'input',
        message: 'Enter your GitHub username.',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select a license:',
        choices: ['license 1','license 2', 'license 3'],
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile("README.md",
        generator.generateMarkdown(data))
    })
}

// Function call to initialize app
init()
