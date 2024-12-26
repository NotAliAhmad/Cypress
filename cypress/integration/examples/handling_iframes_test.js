//cypress - spec file
import 'cypress-iframe'

describe('Handing iframe', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        // --- Dealing iframes ---
        // iframe knowledge must be downloaded via 'npm install -D cypress-iframe'
        // The frame is loaded via the frameLoaded method
        cy.frameLoaded('#courses-iframe')
        
        // When working with iframe, you must use the iframe() method to access the iframe and then do find() on it
        cy.iframe().find('.navigation a[href="mentorship"]').eq(0).click()
        // This wait is essential in order for the test to pass since working in an iframe
        cy.wait(3000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
    })
  })