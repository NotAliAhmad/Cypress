How to install cypress ?
- With the command: npm install cypress --save-dev 

What reporter do you use?
- cypress-mochawesome-reporter -- https://www.npmjs.com/package/cypress-mochawesome-reporter
- you can install it with the following command: 
- npm i --save-dev cypress-mochawesome-reporter

Command to run a single cypress test
-- npx cypress run --spec cypress/integration/examples/e2e_test/e2e_test.js --headed --browser chrome

Working with iframe?
- Cypress doesnt support them so we make use of that with the external framework called cypress-iframe
- You can install it with: npm install -D cypress-iframe

How to use alaises in cypress?
- Using the scripts field in package.json, you can set a command as an alais and just run that command
- using 'npm run myScriptName'

