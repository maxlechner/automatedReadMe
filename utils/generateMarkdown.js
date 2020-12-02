// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title}   License: (https://img.shields.io/badge/License-${data.license}-blue.svg)](https://lbesson.mit-license.org/)

  #Description
  ${data.description}

  #Installation
  ${data.install}

  #Usage
  ${data.usage}

  #Credits
  ${data.credits}


`;
}

module.exports = generateMarkdown;
