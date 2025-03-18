export class HomePage {
    public getTaskInput(): Cypress.Chainable {
        return cy.get('button[aria-label="Add task"]').click().get('input[class*="task_input"]');
    }

    public getTaskList(): Cypress.Chainable {
        return cy.get('ul[class*="task_list"]');
    }

    public addTask(taskName: string): void {
        this.getTaskInput().type(`${taskName}{enter}`);
    }

    public verifyTaskExists(taskName: string): Cypress.Chainable {
        return this.getTaskList().contains(taskName).should('exist');
    }
}
