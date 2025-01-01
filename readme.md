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

How to run tagged tests using cucumber? Note: This only works for cucumber tests
- Firstly make sure your tests are tagged with the tag you want then run this command:
- npx cypress run --env tags="@smoke" --headed

How to get results in json and convert it into html? Note: This only works for cucumber files
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

How to deal with csv?
- You can use neat csv, you can install this using: npm install neat-csv
- Read the csv with cy.readFile() to get it back as a text format and give the full path of
the file using Cypress.config("fileServerFolder") then you can do 'const csv = await neatCsv(text)' to get the property values from the csv which will be available in the form of a
javascript object

How to deal with excel files?
- You can use npm install convert-excel-to-json for an external plug that converts the excel
file to a javascript object

How to work with SQL server via Azure?
- First install cypress-sql-server since cypress doesnt support it with: 
npm install --save-dev cypress-sql-server 
- Set the plugin in the config file in setupNodeEvents() function:
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
- Set the config.db with the necessary info in the config file
- Import the custom sql command in e2e.js and use that custom command to send your query.
Like so, 'cy.sqlServer(`SELECT 'test').should('eq', 'test');'

What is task and how is it used?
- Task halts the cypress execution to deal with things in the backend such as databases
and accessing files using fs. It works by accessing the task code expressed in the
config.js and stops cypress to execute that and switches to the the node engine runs it
and switches back. The code for the task in executed in the config file