const inquirer = require("./assets/node_modules/inquirer");
const fs = require("fs");
const util = require("./assets/utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the application name?",
    },
    {
      type: "input",
      name: "comment",
      message: "Developer Comment?",
    },
    {
      type: "input",
      name: "developer",
      message: "Developer Request?",
    },
    {
      type: "input",
      name: "story",
      message: "User Story?",
    },
    {
      type: "input",
      name: "criteria",
      message: "Acceptance Criteria?",
    },
    {
      type: "input",
      name: "Mockup",
      message: "Any Mockup?",
    },
    {
      type: "input",
      name: "features",
      message: "Features and Highlights?",
    },
    {
      type: "input",
      name: "live",
      message: "Video Link?",
    },
    {
      type: "input",
      name: "install",
      message: "Installation and Git Repo?",
    },
    {
      type: "input",
      name: "contributors",
      message: "Any Contributors?",
    },
    {
      type: "input",
      name: "license",
      message: "What's the license?",
    },
  ]);
// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  questions();
}

// function call to initialize program
init();
