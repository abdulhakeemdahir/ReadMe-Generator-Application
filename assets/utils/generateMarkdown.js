// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${data.license}

  # ${data.title}

UW Code Bootcamp Week 9 HW

## Description

${data.description}

## Table of Contents

${data.tableofcontents}


## Installation

${data.video}

![portfolio](./assets/${data.img})

Respository: ${data.repo}

Please follow the installation process below:

${data.install}


### Usage

${data.usage}


### License
This application is covered under the ${data.license} License


## Tests

${data.test}

## Questions

github.com/${data.username}

`;
}

module.exports = generateMarkdown;
