// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ${data.description}
  ## Table of Contents
  - [ Installation ](#Installation)
  * [ Usage ](#Usage)
  + [ Contributions ](#Contributions)
  4. [ Tests ](#Tests)
  5. [ Licenses ](#Licenses)
  6. [ Username ](#Username)
  7. [ Email ](#Email)

  <a name="Installation"></a>
  ## Installation
  ${data.installation}
  <a name="Usage"></a>
  ## Usage
  ${data.usage}
  <a name="Contributions"></a>
  ## Contributions
  ${data.contributing}
  <a name="Tests"></a>
  ## Tests
  ${data.testing}
  <a name="Licenses"></a>
  ## Licenses 
  This license is covered by the ${data.licenses} license. 
  <a name="Username"></a>
  ## Username
  ${data.username}
  <a name="Email"></a>
  ## Email 
  ${data.email}
`;
}

module.exports = generateMarkdown;