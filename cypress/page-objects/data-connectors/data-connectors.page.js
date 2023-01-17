const DATABASE_CONNECTORS = 'div[data-testid="mesh-container-content"]';
const DATABASE_CONNECTORS_IMG = '.MazNVa';

const dataConnectorsPage = {
    itself() {
        return cy.get(DATABASE_CONNECTORS).eq(6);
    },
    getDatabaseConnectorsImg() {
        return this.itself().find(DATABASE_CONNECTORS_IMG);
    },
};

export { dataConnectorsPage };