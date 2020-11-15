//Generate rest of Markdown
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![License](${encodeURI(`https://img.shields.io/badge/License-${data.license.text}-${data.license.color}`)})](${data.license.url})
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
 
  
  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}
    
  ## Usage Information
  ${data.usage}
    
  ## Contribution Guidelines
  ${data.contributing}
    
  ## Tests
  ${data.test}
    
  ## License
  This license is covered by ${data.license.text} license. 
  
  ## Questions
  How to reach me:
  
  On Github: https://github.com/${data.username}

  Email: ${data.email}
      `;
}

module.exports = generateMarkdown;