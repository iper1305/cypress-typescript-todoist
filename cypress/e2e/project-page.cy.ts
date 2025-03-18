import { LoginPage } from '../page-objects/login-page';
import { HomePage } from '../page-objects/home-page';
import { ProjectPage } from '../page-objects/project-page';

describe('Todoist Project Page Tests', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const projectPage = new ProjectPage();
    const uniqueTaskName = `Test Task ${Date.now()}`;
    const projectName = 'Inbox';

    before(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('email'), Cypress.env('password'));
        cy.url().should('include', '/app');
    });

    beforeEach(() => {
        cy.visit('/app');
    });

    it('should navigate to a project and verify its title', () => {
        projectPage.navigateToProject(projectName);
        projectPage.verifyProjectOpened(projectName);
    });

    it('should add a task in a specific project', () => {
        projectPage.navigateToProject(projectName);
        homePage.addTask(uniqueTaskName);
        homePage.verifyTaskExists(uniqueTaskName);
    });

    it('should verify project task count increases', () => {
        projectPage.navigateToProject(projectName);
        cy.get('nav')
            .contains(projectName)
            .parent()
            .find('.task_count')
            .invoke('text')
            .then((initialCount) => {
                const countBefore = parseInt(initialCount) || 0;
                homePage.addTask(uniqueTaskName);
                cy.get('nav')
                    .contains(projectName)
                    .parent()
                    .find('.task_count')
                    .should('have.text', (countBefore + 1).toString());
            });
    });
});
