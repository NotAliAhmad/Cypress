//cypress - spec file


describe('Handing mouse hover over', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        // --- Dealing with mouse hover over---
        // Mouse hover over are not supported in cypress
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        // another way to do it is to force click, cypress understands that the element is hidden and find it and clicks on it
        // cy.contains('Top').click({force:true})


        cy.url().should('include','top')
                


    })
  })