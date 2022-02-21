// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const utils = require('utils')

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
        message: "What is a description of the project?",
        name: "description"
    },
    
    {
        type: "input",
        message: "what were the steps needed to run the project and how did did you get the enviornment to run?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are some instructions and links to use the README.md?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of liscence should your project have?",
        name: "liscence",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "who were the contributors on the project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What were the tests for application and how did they run?",
        name: "tests"
    },
    {
        type: "input",
        message: "what is the github username",
        name: "github"
    },
    {
        type: "input",
        message: "what is your email",
        name: "email"
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
