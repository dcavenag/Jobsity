const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "eoq7ig",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'http://automationpractice.com/index.php',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
