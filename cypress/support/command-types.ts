declare module 'cypress' {
    interface Chainable {
        login(email: string, password: string): Cypress.Chainable<void>;
    }
}
