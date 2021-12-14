function retrieveBadge(license) {
    let licBadge = "";
    if (license === "no License") {
        licBadge = "";
        return licBadge;
    }
    else if (license === "Apache 2.0 License") {
        licBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        return licBadge;
    }
    else if (license === "Boost Software License 1.0") {
        licBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
        return licBadge;
    }
    else if (license === "GNU AGPLv3") {
        licBadge = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg";
        return licBadge;
    }
    else if (license === "GNU GPLv3") {
        licBadge = "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
        return licBadge;
    }
    else if (license === "GNU GPLv2") {
        licBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
        return licBadge;
    }
    else if (license === "GNU LGPLv3") {
        licBadge = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
        return licBadge;
    }
    else if (license === "ISC") {
        licBadge = "https://img.shields.io/badge/License-ISC-blue.svg";
        return licBadge;
    }
    else if (license === "MIT") {
        licBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
        return licBadge;
    }
    else if (license === "Mozilla Public License 2.0") {
        licBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
        return licBadge;
    }
    else if (license === "The Unlicense") {
        licBadge = "https://img.shields.io/badge/License-Unlicense-blue.svg";
        return licBadge;
    }
    else {
        console.log('undefined license (retrieveBadge()');
    }
}

function retrieveLicenseSect(license) {
    if (license === "No License") {
        license = "";
        return license;
    }
    else {
        return `
        ## License
        [![License](${retrieveBadge(license)})](${retrieveLicLink(license)})`
    }
}

function retrieveInstall(data) {
    if (data.confirmInstall === true) {
        return `
        * [Installation](#installation)`
    }
    else {
        return ``;
    }
}

function retrieveInstallSect(data) {
    if (data.confirmInstall === true && data.installInfo !== null) {
        return `
        ## Install
        ${data.insatallInfo}`
    }
    else {
        return ``;
    }
}

function retrieveTOCUsage(data) {
    if (data.confirmUsage === true) {
        return `
        * [Usage](#usage)`
    }
    else {
        return ``;
    }
}

function retrieveUsageSect(data) {
    if (data.confirmUsage === true && data.usageInfo !== null) {
        return `
        ## Usage
        ${ data.usageInfo }`
    }
    else {
        return ``;
    }
}

function retrieveTOCCredits(data) {
    if (data.confirmCredits === true) {
        return `
        * [Credits](#credits)`
    }
    else {
        return ``;
    }
}

function retrieveCredSect(data) {
    if (data.confirmCreds === true && data.credsInfo !== null) {
        return `
        ## Credits
        
        Credit List
        
        **${data.credsInfo}**
        
        Thanks for the assistance!`
    }
    else {
        return ``;
    }
}

function retrieveTOCContrib(data) {
    if (data.confirmContrib === true) {
        return `
        * [Contributing](#contributing)`
    }
    else {
        return ``;
    }
}

function retrieveContribSect(data) {
    if (data.confirmContrib === true && data.contributingInfo !== null) {
        return `
        ## Contributing
        
        ${data.contributingInfo}`
    }
    else {
        return ``;
    }
}

function retrieveTOCTests(data) {
    if (data.confirmTests === true) {
        return `
        * [Tests](#tests)`
    }
    else {
        return ``;
    }
}

function retrieveTestsSect(data) {
    if (data.confirmTests === true && data.testsInfo !== null) {
        return `
        ## Tests
        
        ${data.testsInfo}`
    }
    else {
        return ``;
    }
}

function retrieveTOCQuest(data) {
    if (data.confirmQuest === true) {
        return `
        * [Questions] (#questions)`
    }
    else {
        return ``;
    }
}

function retrieveQuestSect(data) {
    if (data.confrimQuest === true && data.questInfo !== null) {
        return `
        ## Questions
        Any questions? Please view my [Github](https://github.com/${data.githubUsername}) or email me at ${data.emailAddress}!`
    }
    else {
        return ``;
    }
}

function retrieveDescriptSect(data) {
    return `
    ## Description
    
    ${data.description}`
}

function retrieveTOC(data) {
    if (data.confirmTabOCon === true) {
        return `
        ## Table of Contents
        ${retrieveTOCInstall(data)}
        ${retrieveTOCUsage(data)}
        ${retrieveTOCCredits(data)}
        ${retrieveTOCContrib(data)}
        ${retrieveTOCTests(data)}
        ${retrieveTOCQuest(data)}`
    }
    else if (data.confirmTabOCon === false) {
        return ``;
    } else {
        confirm.log('Error TOC');
    }
}

function generateMarkdown(data) {
    return `
    # ${data.title}
    ${retrieveLicenseSect(data.licenseInfo)}
    ${retrieveDescriptSect(data)}
    ${retrieveUsageSect(data)}
    ${retrieveCredSect(data)}
    ${retrieveContribSect(data)}
    ${retrieveTestsSect(data)}
    ${retrieveQuestSect(data)}`;
}

module.exports = generateMarkdown;