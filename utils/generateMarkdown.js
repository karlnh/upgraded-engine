// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU GPLv3":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    default:
      return "";
  }
  // credit to https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "GNU GPLv3":
      return `This project is licensed under the GNU General Public License, version 3.`;
    case "MIT":
      return `This project is licensed under the The MIT License.`;
    case "Apache 2.0":
      return `This project is licensed under the Apache License 2.0.`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License](!${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Testing](#Testing)
  - [License](#License)
  - [Contact](#Contact)
  
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
  [This project is licensed under ${renderLicenseSection(data.license)}](${renderLicenseLink(data.license)})

  ## Further Questions
  Direct any further questions to one of the following:
  [${data.email}](mailto:${data.email})\n
  [https://github.com/${data.user}](https://github.com/${data.user})
`
};

module.exports = generateMarkdown;
