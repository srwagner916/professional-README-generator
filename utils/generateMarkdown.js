// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'no license') {
    return '';
  } else {
    let trimmedLicense = license;
    trimmedLicense = trimmedLicense.toString().replace(/ /g, '%20');
    return `![License Badge](https://img.shields.io/badge/license-${trimmedLicense}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'no license') {
    return '';
  } else {
    return `* [License](##License)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [Contribution](##Contribution)
  * [Tests](##Tests)
  ${renderLicenseLink(data.license)}
  * [Contact](##Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.tests}
## Questions
GitHub: ${data.github}<br>
Email: <${data.email}>
`;
}

module.exports = generateMarkdown;
