const inquirer = require('inquirer');
const fs = require('fs');

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

let markdown =
`
# ${response.projectTitle.toUpperCase()}
${response.projectLink}
## DESCRIPTION
${response.projectShortDesc}
## USAGE
![Screenshot of the application.](./assets/img/screenshot.png)
The application is used as follows:
${response.projectUsage}
## LICENSE
This project is licensed under [${response.licenseName}](./LICENSE).
`;

inquirer
    .prompt(questions) // ask the questions
    .then((response) => 
        fs.writeFile('README.md', markdown, (err) =>
            err ? console.error(err)
            : console.log("README created.")
        )
    );