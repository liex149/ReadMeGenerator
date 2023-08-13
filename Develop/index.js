// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markD = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'Title',
                message: 'Title',

            },
            {
                type: 'input',
                message: 'descrption',
                name: 'description',
            },
            {
                type: 'input',
                message: 'table of contents',
                name: 'table',
                
            },
            {
                type: 'input',
                message: 'installation',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'usage information',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'license',
                name: 'license',
                choices: ['Apache', 'Boost', 'MIT']
            },
            {
                type: 'input',
                message: 'contribution guideline',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'tests',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'questions',
                name: 'questions',
            },

        ])

        .then((response) =>

            // TODO: Create a function to write README file
            writeToFile(`${response.Title}.md`, markD(response))
        );
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success')
    );
    
}
// Function call to initialize app
init();
