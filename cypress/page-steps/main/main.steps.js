import { mainPage } from "../../page-objects/main/main.page";
import { header } from "../../page-objects/main/header";

const mainSteps = {
    openHomePage() {
        mainPage.visit();
    },
    checkLogoPresence() {
        header.getLogo()
            .should('be.visible');
    },
    checkText1() {
        header.getText1()
            .should('be.visible');
    },
    checkText2() {
        header.getText2()
            .should('be.visible');
    },
    clickOnTryNowButton() {
        return header.getTryNowButton().click();
    },
    hoverOnProductMenuItem() {
        return header.getProductMenuItem().trigger('mouseover');
    }
};

export { mainSteps };