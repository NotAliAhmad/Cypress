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

How to implement cucumber into your cypress framework?
- First install cucumber using: npm install @badeball/cypress-cucumber-preprocessor
- update the config file and update the test with given, when and then followed by the definations for it
- config file update can be found here: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/browserify-cjs/cypress.config.js
- Given when and then updates can be found in the introduction of: https://github.com/badeball/cypress-cucumber-preprocessor

How to run tagged tests using cucumber?
- Firstly make sure your tests are tagged with the tag you want then run this command:
- npx cypress run --env tags="@smoke" --headed

How to get results in json and convert it into html?
- Add this block of code to your package.json
  "cypress-cucumber-preprocessor":{
    "json":{
      "enabled": true,
      "output":"cypress/cucumberReports/results.json"
    }
  }
- Get the cucumber json formatter from here https://github.com/cucumber/json-formatter and bring it 
to your root dir
- Get multiple-cucumber-html-reporter from: npm install multiple-cucumber-html-reporter --save-dev
- Add the cucumber-html-report.js file and data from https://www.npmjs.com/package/multiple-cucumber-html-reporter to your root dir and update its contents
- Lastly execute the js file using the command 'node cucumber-html-report.js'