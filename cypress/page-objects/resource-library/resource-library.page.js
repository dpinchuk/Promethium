const SOLUTION_FOR_DBT = 'div[data-testid="mesh-container-content"]';

const resourceLibraryPage = {
    itself() {
        return cy.get(SOLUTION_FOR_DBT).eq(16);
    },
    getSolutionForDbtDownloadButton() {
        return this.itself().find('a').eq(3).should('be.visible');
    },
};

export { resourceLibraryPage };