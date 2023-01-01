// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectTitle',
        type: 'input',
        message: 'Enter the name of the application.',
    },
    {
        name: 'projectLink',
        type: 'input',
        message: 'Paste the deployed application URL.',
    },
    {
        name: 'projectShortDesc',
        type: 'input',
        message: 'Give a short description of the project.',
    },
    {
        name: 'projectUsage',
        type: 'input',
        message: 'Describe how to use the project.',
    },
    {
        name: 'licenseName',
        type: 'input',
        message: 'Name the type of license used for the project.',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) // if error log error
            : console.log("README created.")
        )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile('README.md',
    (response) => {

`# ${response.projectTitle.toUpperCase()}
${response.projectLink}
## DESCRIPTION
${response.projectShortDesc}
## USAGE
![Screenshot of the application.](./assets/img/screenshot.png)
The application is used as follows:
${response.projectUsage}
## LICENSE
This project is licensed under [${response.licenseName}](./LICENSE).`;
    }
    ));
};

// Function call to initialize app
init();
