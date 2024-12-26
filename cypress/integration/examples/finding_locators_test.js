//cypress - spec file


describe('This is the name of my first test suite', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Selecting an element and typing 'cu' in the search bar
        cy.get('.search-keyword').type('ca')

        // Stops the script for 2 sec
        cy.wait(2000)

        // Checking to see if the product is visible before making teh assertion
        //cy.get('.product:visible').should('have.length', 2)
        
        // Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)

        // Aliases can be used to reduce redundant code
        cy.get('.products').as('productLocator')

        // adding add to product for the second product, index for eq starts from 0 
        // Notice the aliases being used here '@productLocator'
        cy.get('@productLocator').find('.product').eq(1).find('div[class="product-action"]').click()

        //cy.get('.products').find('.product-name').contains('Capsicum').find('div[class="product-action"]').click()


        // each goes through each elements and performs some task
        cy.get('.products').find('.product').each(($ele, index, $list) => {
            const ele_text = $ele.find('.product-name').text()
            // Can also use includes method that matches text partically 
            if ( ele_text.includes('Cashews')){
                // wrap this element so we can use cypress commands on it
                cy.wrap($ele).find('.product-action').click()
            }
        }) 

        /* 
            because of how execution works in cypress, things cannot be put 
            into a const variable, but must be done like the following ->
        */

        cy.get('.brand').then(function(logo_ele)
        {
            cy.log(logo_ele.text())
            // Asserting text in cypress
            cy.wrap(logo_ele).should('have.text', logo_ele.text())
        })
        
    })
  })