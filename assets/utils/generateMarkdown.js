// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

UW Code Bootcamp Week 9 HW

## Description

${data.description}

## Table of Contents

${data.tableofcontents}


## Installation

${data.video}

![portfolio](./assets/${data.img})

## Installation and Git Repository

Respository: ${data.repo}

Please follow the installation process below:

${data.install}


### Usage

${data.story}


### License

${data.license}


## Contributing Guidelines

${data.mockup}

## Tests

${data.features}

## Questions


`;
}

module.exports = generateMarkdown;
