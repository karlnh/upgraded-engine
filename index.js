const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ['GNU GPLv3','MIT', 'Apache 2.0'],
    }
]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const output = generateMarkdown(answers);
        fs.writeFile("README.md", output,
        (err) => err ? console.error(err) : console.log('Generated README.')
        );
    })
}

// Function call to initialize app
init()
