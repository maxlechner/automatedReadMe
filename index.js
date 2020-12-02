// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project.',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project in detail.',
    },
    {
        name: 'install',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use.',
    },
    {
        name: 'credits',
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'list',
        message: 'Select the license',
        name: 'license',
        choices: ['MIT','GPLv3','GPL', 'Apache'],
    },
];
 

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error){
        if (error) {
            throw error;
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) =>{
        console.log(response)
        let readme = generateMarkdown(response);
        writeToFile("./README.md", readme);
    })
};

// function call to initialize program
init();
