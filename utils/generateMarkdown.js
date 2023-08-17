// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `[<img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg">]`
      break;
    case 'Boost':
      return `[<img src="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg">]`
      break;
    case 'MIT':
      return `[<img src="https://img.shields.io/badge/License-MIT-yellow.svg">]`
      break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return `(https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'Boost':
      return `(https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`
      break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== ''){
  return `${license}`
}else{
  return '';
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  # ${data.Title}

## Table of Content 

- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${data.Description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
${renderLicenseSection(data.license)}

## Contributing 
${data.Contributions}

## Tests 
${data.tests}

## Questions 
Email: ${data.questions} \n
Github Profile: [Github](https://github.com/${data.Github})
`;
}

module.exports = generateMarkdown;
