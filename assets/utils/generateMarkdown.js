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
\`\`\`
${data.request}
\`\`\`

### User Story
\`\`\`
${data.story}
\`\`\

### Acceptance Criteria
\`\`\`
${data.criteria}
\`\`\`

## Mockup

${data.mockup}

## Website Features and Highlights

The follwing are all of the feautres and highlights of my portfolio:


### JAVASCRIPT
\`\`\`
${data.features}
\`\`\`
## Live Project Site

${data.video}

![portfolio](./assets/${data.img})

## Installation and Git Repository

Respository: ${data.repo}

Please follow the installation process below:

${data.install}

## License Agreement

${data.license}
`;
}

module.exports = generateMarkdown;
