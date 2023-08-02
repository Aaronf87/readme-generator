// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
 inquirer
      .prompt ([{
  type: 'input',
  name: 'name',
  message: 'What is your project title?',
},
{
  type: 'checkbox',
  message: 'What languages do you know?',
  name: 'stack',
  choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
},
{
  type: 'list',
  message: 'What is your preferred method of communication?',
  name: 'contact',
  choices: ['email', 'phone', 'telekinesis'],
},
{
  type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
},
])

.then((answers) => {
// TODO: Create a function to write README file
/*WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/

const generateReadme = ({projectTitle, description, install, usage, contributions, tests, license})


// function writeToFile(fileName, data) {
  const readmePageContent = generateHTML(answers);


  fs.writeFile('readme.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.readme!')
  );
});



// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



