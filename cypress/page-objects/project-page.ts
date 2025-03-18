export class ProjectPage {
    public navigateToProject(projectName: string): void {
        cy.get('nav').contains(projectName).click();
    }

    public getProjectTitle(): Cypress.Chainable {
        return cy.get('h1[class*="project_title"]');
    }

    public verifyProjectOpened(projectName: string): void {
        this.getProjectTitle().should('contain', projectName);
    }
}
