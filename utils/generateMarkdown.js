// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Liscence](#liscence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
### Installation
${data.installation}
### Usage
${data.usage}
### Liscence 
This project is liscenced under:
${data.liscence}
### Contribution
${data.contribution}
### Tests
${data.tests}
### Questions
If you have any questions contact me on Github [Github](https://github.com/${data.github}) or contact me at ${data.email}


`;
}

module.exports = generateMarkdown;
