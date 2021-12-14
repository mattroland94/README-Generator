const fs = require('fs');
const inquire = require('inquire');
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
    
]