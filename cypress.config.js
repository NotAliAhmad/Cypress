const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ioss2u",
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // @ts-ignore
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: 'cypress/integration/**/*test*.js'
  },
  env: {
    DEBUG: "cypress:*", // Enable verbose Cypress debug logs
    baseUrl: "https://rahulshettyacademy.com/"
  },
  // Extending the default 4000ms wait time to 6000ms
  defaultCommandTimeout: 6000,

});
