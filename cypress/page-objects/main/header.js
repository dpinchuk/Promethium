import '@testing-library/cypress/add-commands'
import { REGISTER_URL } from "../../config/config";

const HEADER = '#SITE_HEADER';
const LOGO = 'img';
const TRY_NOW = `a[href="${REGISTER_URL}"]`;
const HEADER_NAVBAR_ITEMS = 'ul li';
const DATA_CONNECTOR = 'a[href="https://www.pm61data.com/promethium-data-connectors"]';
const COLLATERAL_AND_WEBINAR = 'a[href="https://www.pm61data.com/resource-library"]';

const header = {
    itself() {
        return cy.get(HEADER);
    },
    getLogo() {
        return this.itself().find(LOGO);
    },
    getText(text) {
        return cy.findByText(text);
    },
    getTryNowButton() {
        return cy.get(TRY_NOW).eq(0);
        // return this.itself().find(TRY_NOW);
    },
    getProductMenuItem() {
        // return this.itself().find(HEADER_NAVBAR_ITEMS).eq(0);
        return this.itself().findByText('Product');
    },
    getResourcesMenuItem() {
        // return this.itself().find(HEADER_NAVBAR_ITEMS).eq(2);
        return this.itself().findByText('Resources');
    },
    getDataConnectorProductMenuItem() {
        return this.itself().find(DATA_CONNECTOR).eq(1);
    },
    getCollateralAndWebinarsResourcesMenuItem() {
        return this.itself().find(COLLATERAL_AND_WEBINAR).eq(1);
    },
};

export { header };