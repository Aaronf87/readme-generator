// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
 inquirer
      .prompt ([
        
        // project title
  {
type: "input",
name: "name",
message: "what is your name?"
  },

  {type: 'input',
  name: 'title',
  message: 'What is your project name?',
},
{
  // description
  type: 'input',
  name: 'description',
  message: 'What is your project description?',
},
{
  // install 
  type: 'input',
  name: 'install',
  message: 'What is meeds to be installed for your project function?',
},
{
  // usage information
  type: 'input',
  name: 'usage',
  message: 'What is the project intended usage?',
},
{
  type: 'list',
  message: 'Please select license for your application',
  name: 'license',
  choices: ['Apache Licese 2.0', 'GNU general Public Licence v3.0', 'MIT License', 'BSD 2-Clause "Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Univeral', 'Eclipse Public License 2.0', 'GNU affero General Public License v3.0', 'GNU General Public license v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
},
{
  type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
},{
  type: 'input',
        name: 'tests',
        message: 'Was their any tests on the project',
},
{
  // name of contributor(s)
  type: 'input',
        name: 'contributors',
        message: 'Enter your name and contributors',
},
{
  // email
  type: 'input',
  message: 'What is your email?',
  name: 'email',
},
])
//  type: 'list',
// type: "checkbox"
// type: "input"

.then((answers) => {
// TODO: Create a function to write README file


const generateReadme = ({title, description, install, usage, contributors, tests, license, name, email, github})=>
`
# ${title} 
by ${name} 
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Description
${description}
## Installation
${install}
## Usage
${usage}
## contributions
${contributors}
## License
${license}
## Tests
${tests}

## questions about the project.  Please contact me at 
${email}
${github}

`

const readmePageContent = generateReadme(answers);

// function writeToFile(fileName, data) {


  fs.writeFile('readme.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});



// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



