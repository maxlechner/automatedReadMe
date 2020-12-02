
  # Automated ReadMe Tool      
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

  ## Description
  This project seeks to reduce the burden of formatting ReadMe's for developers as well as establishing a content standard for project owners to fulfill. This project is intended for developers of all skill levels to ensure that their ReadMe is adequate for their intended users!

  ## Installation
  The installation process for this project is simple. The user must interact with the program using the CLI in a node environment. The first step is to clone down the GitHub repo using the following link: git@github.com:maxlechner/automatedReadMe.git Once this is cloned, there are two open source package dependencies, inquirer and fs that will be required to get the application to work. Inquirer is used to prompt the user for their input and fs is used to construct the file for the user. Inquirer will need to be installed while fs is standard. Preparing the node environment is accomplished by invoking the following commands: first run the init command using, [ node init - y ] and second install inquirer with, [ npm install inquirer --save ]. Once these required steps are complete, the user can launch the CLI based application using the command [ node index.js ]  from the integrated terminal. 

  ## Usage
  The user is guided through the process with prompts that provide a brief description of each component of the ReadMe. If the user follows these prompts they will construct a ReadMe according to best practice. An example of this, is the ReadMe that your currently in which prompted me with each elements description and allowed me to follow a comprehensive guide for filling out a readme. The only non-text input to the ReadMe is the license which provides the user a list of the most common types of open source licenses.

  ## Credits
  Kateryna Gomozova https://github.com/kgo87 and I worked together to develop this automated read me generator. To create badges we used shields.io which provides a method to quickly develop badges for licenses in markdown.


