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
      type: "list",
      name: "title",
      message: "What is the application name?",
      choices: ["Choice A", new inquirer.Separator(), "choice B"],
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
      type: "input",
      name: "license",
      message: "What is your programs License?",
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
