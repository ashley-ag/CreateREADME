// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: Create an array of questions for user input
const promptUser = () => 
inquirer
.prompt([
    //project title
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    //description
    {
        type: 'input',
        message: 'Please enter a detailed description of your application.',
        name: 'description',
    },
    // installation instructions
    {
        type: 'input',
        message: 'How do you install the application?',
        name: 'installation',
    },
    //usage information
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage',
    },
    //contribution guidelines
    {
        type: 'input',
        message: 'What are the guidelines for contributing to your application?',
        name: 'contribution',
    },
    //test instructions
    {
        type: 'input',
        message: 'How do we test this application?',
        name: 'test',
    },
])


// TODO: Create a function to write README file
const md = (answers) =>
  `
  # ${answers.title} 

## Table of Contents
[Description](#Description)
[Installation Instructions](#Installation)
[Usage Instructions](#Usage)
[How to Contribute](#Contribute)
[How to Test This Application](#Test)

## <a id="Description"></a> Description 
${answers.description}
<br>

## <a id="Installation"></a> Installation Instructions
${answers.installation}
<br>

## <a id="Usage"></a> Usage Instructions
${answers.usage}
<br>

## <a id="Contribute"></a> How to Contribute
${answers.contribution}
<br>

## <a id="Test"></a> How to Test this application
${answers.test}
  `

// TODO: Create a function to initialize app
const init = () => {
    //prompt user
    promptUser().then((answers) =>{
        try{
        const mdtxt = md(answers);
        fs.writeFileSync('README.md', mdtxt);
        console.log("file write success")
        }catch(error){
            console.log(error)
        };
    })
};

// Function call to initialize app
init();
