import { LoginPage } from '../page-objects/login-page';
import { HomePage } from '../page-objects/home-page';

describe('Todoist Home Page Tests', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const uniqueTaskName = `Test Task ${Date.now()}`;

    before(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', '/app');
    });

    beforeEach(() => {
        cy.visit('/app');
    });

    it('should add a new task and verify it exists', () => {
        homePage.addTask(uniqueTaskName);
        homePage.verifyTaskExists(uniqueTaskName);
    });

    it('should mark a task as completed', () => {
        homePage.addTask(uniqueTaskName);
        homePage
            .getTaskList()
            .contains(uniqueTaskName)
            .parent()
            .find('button[aria-label="Complete task"]')
            .click();
        homePage
            .getTaskList()
            .contains(uniqueTaskName)
            .should('have.class', 'completed');
    });

    it('should delete a task', () => {
        homePage.addTask(uniqueTaskName);
        homePage
            .getTaskList()
            .contains(uniqueTaskName)
            .rightclick()
            .get('button[aria-label="Delete task"]')
            .click();
        homePage.verifyTaskExists(uniqueTaskName).should('not.exist');
    });
});
