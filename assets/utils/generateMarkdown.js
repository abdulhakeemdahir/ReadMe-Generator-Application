// function to generate markdown for README
function generateMarkdown(data) {
  return `

 [![License: ${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  # ${data.title}

UW Code Bootcamp Week 9 HW

## Description

${data.description}

## Table of Contents

${data.tableofcontents}


## Installation

Please follow the installation process below:

\`\`\`
${data.install}
\`\`\`
Respository: 
${data.repo}


## Usage

${data.usage}


## License
This application is covered under the ${data.license} License

## Contributing
${data.contribute}

## Tests
Below is video test of my working application

[![image](../img/hw9.png)](${data.video})


## Questions

If you have any additional questions, you can reach me at:

Github Profile: github.com/${data.username}

E-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
