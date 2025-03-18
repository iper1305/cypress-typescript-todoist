/* eslint-disable @typescript-eslint/no-require-imports */
const {defineConfig} = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://todoist.com',
        specPattern: 'cypress/e2e/**/*.cy.ts',
        supportFile: 'cypress/support/index.ts'
    }
});
