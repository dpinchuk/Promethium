import { mainSteps } from "../../page-steps/main/main.steps";
import { orientationX_HD, orientationY_HD } from "../../config/setting.config";
import { REGISTER_URL } from "../../config/config";
import { faker } from '@faker-js/faker';
import "cypress-real-events/support";

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
        cy.origin(REGISTER_URL, { args: {
                email,
                firstName,
                lastName,
                companyName
            }}, ({ email, firstName, lastName, companyName }) => {
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
    it('Test case 3: cursor is hovered', () => {
        cy.get('header li').eq(0).should('be.visible').click().invoke('show');
        //cy.get('Product').should('be.visible').click().invoke('show');
        cy.contains('Data Connectors').click( {forse: true} );
        cy.url().should('include', '')
    });

    xit('should see [PRODUCT MENU ITEM] Data Connectors', () => {
        // cy.reload();
        // cy.contains('Resources').click();
        // cy.contains('Resources').trigger('mouseover').then(() => {
        //     cy.wait(5000)
        // });
        // cy.get('header li').eq(0).find('p').trigger('mouseover').invoke('show');
        // cy.get('header li').eq(0)
        //     .realHover()
        //     .then(() => {
        //         cy.get('ul li').eq(4).click();
        //         //cy.get("#message").should("contain", "the button was clicked");
        //     });
        // cy.wait(5000)
        // cy.get('header li').eq(0).trigger('mouseout');
        //cy.get('header li').eq(0).find('ul li').eq(5).click();

        // cy.get('header').within(() => {
        //     cy.get('li').eq(0).find('p').contains('Product').invoke("show").click();
        // })
            // .eq(0).invoke('show')
            // .trigger('mouseenter')
            // .wait(1000)
            //.should('have.attr','your-selector','Active tooltip')
            // .trigger('mouseleave');
        // mainSteps.hoverOnProductMenuItem();
        // cy.findByText('Data Connectors');
    });

    xit('Test case 4: PDF', () => {
        cy.get('a').contains('Resources').trigger('mouseover');
        cy.get('a').contains('Collateral & Webinars').click();
        cy.get('a').contains('Solution For dbt™').should('be.visible').then(($a) => {
            const link = $a.prop('href');
            cy.downloadFile(link, 'solution-for-dbt.pdf');
        });
        cy.readFile('solution-for-dbt.pdf', 'base64').then((pdfContent) => {
            expect(pdfContent.pages.length).to.eq(4);
            expect(pdfContent.text).to.include("Reimagining data analytics");
            expect(pdfContent.text).to.include("Why Promethium + dbt");
            expect(pdfContent.text).to.include("From Traditional to Modern In Days, Not Years");
            expect(pdfContent.text).to.include("Learn more, try for yourself, visit promethium.ai");
        });
    });
});