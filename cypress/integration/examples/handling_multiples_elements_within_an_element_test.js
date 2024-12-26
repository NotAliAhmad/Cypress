//cypress - spec file


describe('Handling elements within an element', () => {
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
        // Aliases can be used to reduce redundant code
        cy.get('.products').as('productLocator')

        // each goes through each elements and performs some task
        cy.get('.products').find('.product').each(($ele, index, $list) => {
            const ele_text = $ele.find('.product-name').text()
            // Can also use includes method that matches text partically 
            if ( ele_text.includes('Cashews')){
                // wrap this element so we can use cypress commands on it
                cy.wrap($ele).find('.product-action').click()
            }
        }) 

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
  })