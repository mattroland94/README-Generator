const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const quest = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Name? (Required)',
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Need name of Project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licenseInfo',
        message: 'Choose your license:',
        choices: ['No License', 'Apache 2.0 License', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU GPLv2', 'GNU LGPLv3', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project (Required):',
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter a description!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTOC',
        message: 'Would you like a table of contents',
        default: true
    },
    {
        type: 'input',
        name: 'installInfo',
        message: 'Information for the user for repo. This will go in the install section:',
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            }
            else {
                console.log('Enter info for Install')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Want a usage section',
        default: true
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What knowledge does the user need? That info will go here:',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter info for usage!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCreds',
        message: 'Want a Credits section?',
        default: true
    },
    {
        type: 'input',
        name: 'creditsInfo',
        message: 'Name the creditors github name in this list:',
        when: ({ confirmCreds }) => {
            if (confirmCreds) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Input usernames!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContrib',
        message: 'Want a contributing section?',
        default: true
    },
    {
        type: 'input',
        name: 'contribInfo',
        message: 'What needs to be known to contibutors of this repo? Add here:',
        when: ({ confirmContrib }) => {
            if (confirmContrib) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter info for Install section!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Want a test section?',
        default: true
    },
    {
        type: 'input',
        name: 'testInfo',
        message: 'Inser info about your test section here:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter info for test section!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmQuest',
        message: 'Want a question section?',
        default: true
    },
    {
        type: 'input',
        name: 'gitUsername',
        message: 'Enter GitHub username:',
        when: ({ confirmQuest }) => {
            if (confirmQuest) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter GitHub username!');
            }
        }
    },
    {
        type: 'input',
        name: 'emailAdd',
        message: 'Enter email:',
        when: ({ confirmQuest }) => {
            if (confirmQuest) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: nameIn => {
            if (nameIn) {
                return true;
            }
            else {
                console.log('Enter email!')
            }
        }
    },
]

function writetoFile(namefile, data) {}

function init() {
    inquirer
    .prompt(quest)
    .then(data => {
        const info = generateMarkdown(data)
        console.log('info ', data)
        
        fs.writeFile('./dist/README.md', info, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log('Wrote file right')
        })
    });
}

init();