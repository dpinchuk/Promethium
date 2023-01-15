import {mainPageURL} from "../../config/config";

const mainPage = {
    visit() {
        return cy.visit(mainPageURL);
    },
    getURL() {
        return cy.url();
    },
    reload() {
        return cy.reload();
    },
};

export { mainPage };