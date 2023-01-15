const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries: 0,
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 60000,
  video: true,
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  report: '',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
