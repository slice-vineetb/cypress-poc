const { defineConfig } = require("cypress");
const { configureVisualRegression } = require('cypress-visual-regression')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshot/base',
      visualRegressionDiffDirectory: 'cypress/snapshot/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true
    },
    screenshotsFolder: './cypress/snapshot/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      allureCypress(on, config);
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/specs/**/*.spec.js',
    experimentalStudio : true
  },
});
