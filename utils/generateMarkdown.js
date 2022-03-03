

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
[![License](https://img.shields.io/badge/License-${data.license}-liblue.svg)]
${data.licence}
### Contribution
${data.contribution}
### Tests
${data.tests}
### Questions
If you have any questions contact me on Github [Github](https://github.com/${data.github}) or contact me at ${data.email}


`;
}

module.exports = generateMarkdown;
