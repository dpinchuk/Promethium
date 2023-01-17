import { mainPage } from "../../page-objects/main/main.page";
import { header } from "../../page-objects/main/header";

const mainSteps = {
    openHomePage() {
        mainPage.visit();
    },
    checkLogoPresence() {
        header.getLogo().should('be.visible');
    },
    checkText(text) {
        header.getText(text).should('be.visible');
    },
    clickOnTryNowButton() {
        return header.getTryNowButton().invoke('removeAttr', 'target').click();
    },
    hoverOnProductMenuItem() {
        return header.getProductMenuItem().trigger('mouseover');
    },
    hoverOnResourcesMenuItem() {
        return header.getResourcesMenuItem().trigger('mouseover');
    },
    clickOnDataConnectorProductMenuItem() {
        return header.getDataConnectorProductMenuItem().click();
    },
    clickOnCollateralAndWebinarsResourcesMenuItem() {
        return header.getCollateralAndWebinarsResourcesMenuItem().click();
    },
};

export { mainSteps };