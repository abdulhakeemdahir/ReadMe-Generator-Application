// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

UW Code Bootcamp Week 9 HW

## Table of Contents

- [Developer Comment](#developer-comment)
- [Employer Request](#employer-request)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mockup](#mockup)
- [Website Features and Highlights](#website-features-and-highlights)
- [Live Project Site](#live-project-site)
- [Installation and Git Repository](#installation-and-git-repository)
- [Credits](#credits)

## Developer Comment

${data.comment}

## Employer Request

${data.request}

### User Story

${data.story}


### Acceptance Criteria

${data.criteria}

## Mockup

${data.mockup}

## Website Features and Highlights

The follwing are all of the feautres and highlights of my portfolio:


### JAVASCRIPT

${data.features}

## Live Project Site

${data.video}

![portfolio](./assets/${data.img})

## Installation and Git Repository

Respository: ${data.repo}

Please follow the installation process below:

${data.install}


`;
}

module.exports = generateMarkdown;
