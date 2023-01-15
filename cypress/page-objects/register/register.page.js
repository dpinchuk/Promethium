const PRIMARY_CONTENT = '//*[@id="root"]/div/div[2]';
const EMAIL = '#UserRegister_root_user';
const FIRST_NAME = '#UserRegister_first_name';
const LAST_NAME = '#UserRegister_last_name';
const COMPANY_NAME = '#UserRegister_company_name';
const JOB_FUNCTION = '#UserRegister_job_function';
const SIGN_UP = '//*[@id="UserRegister"]/div[6]/div/div/div/button';
const JOB_FUNCTION_ITEMS = 'div[data-inspector-column="28"]'

const registerPage = {
    itself() {
        return cy.xpath(PRIMARY_CONTENT);
    },
    getCompanyEmail() {
        return this.itself().find(EMAIL);
    },
    getFirstName() {
        return this.itself().find(FIRST_NAME);
    },
    getLastName() {
        return this.itself().find(LAST_NAME);
    },
    getCompanyName() {
        return this.itself().find(COMPANY_NAME);
    },
    getJobFunction() {
        return this.itself().find(JOB_FUNCTION);
    },
    getJobFunctionItems() {
        return this.itself().find(JOB_FUNCTION_ITEMS);
    },
    getSignUpButton() {
        return this.itself().xpath(SIGN_UP);
    }
};

export { registerPage };