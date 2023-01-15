import {registerPage} from "../../page-objects/register/register.page";
import { faker } from '@faker-js/faker';


const registerSteps = {
    inputEmail(email) {
        return registerPage.getCompanyEmail().type(email.toLowerCase());
    },
    inputFirstName(firstName) {
        return registerPage.getFirstName().type(firstName);
    },
    inputLastName(lastName) {
        return registerPage.getLastName().type(lastName);
    },
    inputCompanyName(companyName) {
        return registerPage.getLastName().type(companyName);
    },
    clickOnJobFunctionPopup() {
        return registerPage.getJobFunction().click();
    },
    collectJobFunctionItems() {
        return registerPage.getJobFunctionItems();
    }
};

export { registerSteps };