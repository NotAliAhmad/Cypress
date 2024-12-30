const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );


  // Configuration for the SQL Server
  config.db = {
      userName: "myAzure",
      password: "myPassword",
      server: "bobtheserverdemo2.database.windows.net",
      options: {
          database: "bobtheserver",
          encrypt: true,
          rowCollectionOnRequestCompletion : true
      }
  },

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "ioss2u",
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   // @ts-ignore
    //   require('cypress-mochawesome-reporter/plugin')(on)
    // },
    setupNodeEvents,
    // This allows for both feature and js files to be visible for execution as well we 
    // add ,'cypress/integration/**/*test*.js' to account for js tests too
    // or
    // add ,'cypress/integration/**/*test*.fea' to account for js tests too

    specPattern: ['cypress/integration/**/*test*.js']
    
  },
  env: {
    DEBUG: "cypress:*", // Enable verbose Cypress debug logs
    baseUrl: "https://rahulshettyacademy.com/",
    TAGS: '@smoke', // Default tag filtering
  },
  // Extending the default 4000ms wait time to 6000ms
  defaultCommandTimeout: 6000,

});
