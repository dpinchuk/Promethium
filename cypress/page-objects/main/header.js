import '@testing-library/cypress/add-commands'
import { REGISTER_URL } from "../../config/config";

const HEADER = 'header';
const LOGO = 'img';
const TEXT1 = 'Promethium Collaborative Data Analytics';
const TEXT2 = 'Never miss an opportunity.';
const TRY_NOW = `a[href="${REGISTER_URL}"]`;
const HEADER_NAVBAR_ITEMS = 'li';

const header = {
    itself() {
        return cy.get(HEADER);
    },
    getLogo() {
        return this.itself().find(LOGO);
    },
    getText1() {
        return cy.findByText(TEXT1);
    },
    getText2() {
        return cy.findByText(TEXT2);
    },
    getTryNowButton() {
        return this.itself().find(TRY_NOW).invoke('removeAttr', 'target');
    },
    getProductMenuItem() {
        return this.itself().find(HEADER_NAVBAR_ITEMS).eq(0)
    },
};

export { header };