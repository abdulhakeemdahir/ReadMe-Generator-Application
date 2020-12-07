const inquirer = require("./assets/node_modules/inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/utils/generateMarkdown");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the application name?",
    },
    {
      type: "editor",
      name: "comment",
      message: "Developer Comment?",
    },
    {
      type: "editor",
      name: "request",
      message: "Developer Request?",
    },
    {
      type: "editor",
      name: "story",
      message: "User Story?",
    },
    {
      type: "editor",
      name: "criteria",
      message: "Acceptance Criteria?",
    },
    {
      type: "input",
      name: "Mockup",
      message: "Any Mockup?",
    },
    {
      type: "editor",
      name: "features",
      message: "Features and Highlights?",
    },
    {
      type: "input",
      name: "video",
      message: "Video Link?",
    },
    {
      type: "input",
      name: "img",
      message: "Image Link?",
    },
    {
      type: "editor",
      name: "repo",
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
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  questions()
    .then((data) => writeToFile("readme.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to readme"))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
