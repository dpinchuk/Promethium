import { mainSteps } from '../../page-steps/main/main.steps';
import { orientationX_HD, orientationY_HD } from '../../config/setting.config';
import { REGISTER_URL } from '../../config/config';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';
import 'cypress-network-idle'

/* Disable all uncaught exceptions */

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

/* Before each test */
beforeEach(() => {
    cy.viewport(orientationX_HD, orientationY_HD);
    mainSteps.openHomePage();
});

xcontext('1. [MAIN_PAGE] Checking for present elements', () => {
    it('should see [LOGO] Logo', () => {
        mainSteps.checkLogoPresence();
    });

    it('should see [TEXT1] Promethium Collaborative Data Analytics', () => {
        mainSteps.checkText1();
    });

    it('should see [TEXT2] Never miss an opportunity ', () => {
        mainSteps.checkText2();
    });
});

xcontext('2. [MAIN_PAGE] Actions', () => {
    it('Handling new tab: Registration page', () => {
        mainSteps.clickOnTryNowButton();
        const email = faker.internet.exampleEmail('test_company_');
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const companyName = faker.company.name();
        cy.origin(REGISTER_URL, {
            args: {
                email,
                firstName,
                lastName,
                companyName
            }
        }, ({email, firstName, lastName, companyName}) => {
            cy.get('#UserRegister_root_user').type(email.toLowerCase());
            cy.get('#UserRegister_first_name').type(firstName);
            cy.get('#UserRegister_last_name').type(lastName);
            cy.get('#UserRegister_company_name').type(companyName);
            cy.get('#UserRegister_job_function').click().then(() => {
                cy.get('div[data-inspector-column="28"]').then(listing => {
                    const listingCount = Cypress.$(listing).length;
                    const index = Math.floor(Math.random() * (listingCount + 1));
                    cy.get(listing[index]).click();
                })
            });
            cy.get('button[data-inspector-line="155"]').click();
            cy.get('div[data-inspector-relative-path="src/pages/user/RegisterSuccess/index.tsx"]')
                .should('be.visible')
                .should('contain.text', 'Thank you for signing up.');
        });
    });
});

context('3. [MAIN_PAGE] Checking for header menu', () => {
    it('should see [PRODUCT MENU ITEM] Data Connectors', () => {
        //cy.wait(20000);
        cy.waitForNetworkIdle('+(POST|GET)', '*', 5000);
        // cy.get('header li').eq(0).should('be.visible').click().invoke('show').then(() => {
        cy.get('header li').eq(0).should('be.visible').trigger('mouseover').then(() => {
            //cy.get('header li').eq(0).find('ul li').eq(4).click();
            //cy.contains('Data Connectors').click( { force: true });
            cy.get('a[href="https://www.pm61data.com/promethium-data-connectors"]').eq(1).click();
            cy.url().should('include', '/promethium-data-connectors');
            cy.get('div[data-testid="mesh-container-content"]').eq(6).find('.MazNVa')
                .should('have.length', 17)
                .then(() => {
                    cy.findByText('Microsoft SQL Server');
                    cy.findByText('MySQL').should('be.visible');
                    cy.findByText('PostgreSQL').should('be.visible');
                    cy.findByText('Teradata').should('be.visible');
                });
        })
    });
});

xcontext('4. [MAIN_PAGE] Checking for header menu', () => {
    it('should see [PRODUCT MENU ITEM] Data Connectors', () => {
        //cy.get('header li').eq(2).should('be.visible').click().invoke('show').then(() => {
            cy.url().should('include', '/promethium-data-connectors');
            cy.get('div[data-testid="mesh-container-content"]').eq(6).find('.MazNVa')
                .should('have.length', 17)
                .then(() => {
                    cy.findByText('Microsoft SQL Server');
                    cy.findByText('MySQL').should('be.visible');
                    cy.findByText('PostgreSQL').should('be.visible');
                    cy.findByText('Teradata').should('be.visible');
                });
       // })
    });
});