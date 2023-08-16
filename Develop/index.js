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
                message: 'Descrption',
                name: 'Description',
            },
            {
                type: 'input',
                message: 'Installation',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Usage information',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'License',
                name: 'license',
                choices: ['Apache', 'Boost', 'MIT']
            },
            {
                type: 'input',
                message: 'Contributions',
                name: 'Contributions',
            },
            {
                type: 'input',
                message: 'Tests',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'Github',
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
