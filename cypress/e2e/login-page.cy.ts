import { LoginPage } from '../page-objects/login-page';

describe('Todoist Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login successfully with valid credentials', () => {
        loginPage.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', '/app');
    });

    it('should display error for invalid credentials', () => {
        loginPage.login('wrong@example.com', 'wrongpassword');
        cy.get('.error_message')
            .should('be.visible')
            .and('contain', 'Wrong email or password');
    });
});
