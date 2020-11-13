const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give a description on how to install the application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions or examples for use of the project'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please offer instructions on how to contribute to this project, if any.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write or paste tests for your application'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Please select any license that your project uses, if any',
        choices: ['MIT', 'GNU GPLv3', 'UNLICENSE', 'APACHE LICENSE 2.0',]
    },
    {
        type: "input",
        name: "license Url",
        message: "provide License url ",
    },
    {
        type: 'input',
        name: 'username',
        message: 'please enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email address'
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}


function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            // console.log(data);
            writeToFile('./dist/README.md', generateMarkdown(data));
        })
}

//function call to initialize program
init();


