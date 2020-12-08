// All required modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/utils/generateMarkdown");
const util = require("util");
const Choices = require("inquirer/lib/objects/choices");
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
      name: "description",
      message: "Description of your Program?",
    },
    {
      type: "editor",
      name: "tableofcontents",
      message: "Table of Contents?",
    },
    {
      type: "editor",
      name: "install",
      message: "How to Install Program?",
    },
    {
      type: "input",
      name: "repo",
      message: "Link to your repository?",
    },
    {
      type: "editor",
      name: "usage",
      message: "How to use your Program?",
    },
    {
      type: "list",
      name: "license",
      message: "What is your programs License?",
      choices: [
        "GNU",
        new inquirer.Separator(),
        "MIT",
        new inquirer.Separator(),
        "Apache",
      ],
    },
    {
      type: "editor",
      name: "contribute",
      message: "How you can contribute?",
    },
    {
      type: "input",
      name: "video",
      message: "Video Link?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);

// function to initialize program
function init() {
  questions()
    // function to write README file
    .then((data) => writeToFile("readme.md", generateMarkdown(data)))
    .then(() => console.log("Successfully wrote to readme"))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
