const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give a description on how to install the application: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions or examples for use of the project: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Provide instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please offer instructions on how to contribute to this project, if any: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Provide instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write or paste tests for your application: (Required!)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Tests!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('License!');
                return false;
            }
        },
        message: 'Please select any license that your project uses, if any: (Required!)',
        choices: [
            {
                name: 'MIT',
                value: {
                    text: "MIT",
                    url: "https://opensource.org/licenses/MIT",
                    color: "yellow"
                }
            },
            {
                name: 'GNU GPLv3',
                value: {
                    text: "GNU GPLv3",
                    url: "https://www.gnu.org/licenses/gpl-3.0",
                    color: "blue"
                }
            },
            {
                name: 'UNLICENSE',
                value: {
                    text: "UNLICENSE",
                    url: "http://unlicense.org/",
                    color: "blue",
                }
            },
            {
                name: 'APACHE LICENSE 2.0',
                value: {
                    text: "APACHE LICENSE 2.0",
                    url: "https://opensource.org/licenses/Apache-2.0",
                    color: "blue"
                }
            },
            {
                name: 'None',
                value: {
                    text: "No License",
                    url: "https://choosealicense.com/no-permission/",
                    color: "orange"
                }
            },
        ]
    },
    {
        type: "input",
        name: "license Url",
        message: "Provide License url: (Required!) ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('License url!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username: (Required!)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: (Required!)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Email!');
                return false;
            }
        }
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


