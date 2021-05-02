// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input', 
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email addresss');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message:  'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message:  'Please give a description of your project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please give a description of your project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message:  'Please enter the installation instructions (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter the installation instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter usage information');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter the installation instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter your contribution guidelines (Required)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter your contribution guidelines');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions for your project (Required)',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter test instructions for your project');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project (Please choose one or leave blank if no license)',
    choices: ['MIT', 'Mozilla Public License', 'GNU LGPLv3', 'The Unlicense', 'no license']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('file has been written');
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    return generateMarkdown(data);
  })
  .then(fileData => {
      writeToFile('README.md', fileData);
  })
}

// Function call to initialize app
init();
