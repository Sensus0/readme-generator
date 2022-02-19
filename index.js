// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of the project",
        name: "title"
    },
    
    {
        type: "input",
        message: "what is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "what is the github username",
        name: "github"
    },

];

// TODO: Create a function to write README file
function writeToFile(template) {
    fs.writeFile('README.md', template, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("successful file created!")
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( (answers) => {
        console.log(answers)
        const template = generateMarkdown(answers)
        console.log(template)
        writeToFile(template)
    })
}

// Function call to initialize app
init();
