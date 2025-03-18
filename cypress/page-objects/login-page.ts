export class LoginPage {
    public visit(): void {
        cy.visit('/app/login');
    }

    public getEmailField(): Cypress.Chainable {
        return cy.get('input[name="email"]');
    }

    public getPasswordField(): Cypress.Chainable {
        return cy.get('input[name="password"]');
    }

    public getLoginButton(): Cypress.Chainable {
        return cy.get('button[type="submit"]');
    }

    public login(email: string, password: string): void {
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}
