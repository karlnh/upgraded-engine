// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License](!${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributing)
  - [Testing Instructions](#testing)
  - [License](#license)
  - [Further Questions](#contact)
  
  ## Description
  ${data.desc}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribute}

  ## Testing Instructions
  ${data.testing}

  ## License
  [![${data.license}](${renderLicenseLink(data.license)})](${renderLicenseSection(data.license)})

  ## Further Questions
  Direct any further questions to one of the following:
  [${data.email}](mmailto:${data.email})
  [https://github.com/${data.user}](https://github.com/${data.user})
`
}

module.exports = generateMarkdown;
