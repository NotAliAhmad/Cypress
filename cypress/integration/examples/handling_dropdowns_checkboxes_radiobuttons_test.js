//cypress - spec file


describe('Handling checkboxes, dropdowns and radio buttons', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        // --- Dealing with checkbox ---
        cy.get('#checkBoxOption1').check().should('be.checked')

        cy.wait(1000)

        // You can use and() instead of multiple should methods
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')

        // Getting the text of the checkbox
        cy.get('[value="option1"]').should('have.text','Option1')

        // These checks are based off of the values provided. note the values are different than the text
        cy.get('input[type="checkbox"]').check(['option3','option2'])


        // --- Dealing with static dropdown ---
        cy.get('select').select(1).should('have.value','option1')

        
        // --- Dealing with dynamic dropdown ---
        cy.get('#autocomplete').type('ind')
        // each goes through all the elements of the drop down and check to see if the value I want is selectable
        cy.get('.ui-menu-item-wrapper').each(($ele, index, $list) => {
            const ele_text = $ele.text()
            cy.wait(1000)
            cy.log(ele_text)
            // Can also use includes method that matches text partically 
            if ($ele.text().includes('Indonesia')){
                // wrap this element so we can use cypress commands on it
                cy.wrap($ele).click()
            }
        }) 

        // Very That selected item is as intended
        cy.get('#autocomplete').should('have.value','Indonesia')


        // --- Dealing with visible/invisible objects ---
        cy.get('#displayed-text').should('be.visible')

        // Make the text box disappear and verify that it is gone
        cy.get('#hide-textbox').click()        
        cy.get('#displayed-text').should('not.be.visible')

        // Make the text box reappear and verify that it is back
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        // --- Dealing with radio buttons ---
        // Dealing with radio buttons is similar to checkboxes
        cy.get('input[value="radio1"]').check().should('be.checked')

        cy.wait(1000)

        cy.get('input[value="radio2"]').check().should('be.checked')

        cy.get('[value="radio1"]').should('not.be.checked')

        // Getting the text of the radio button
        // cy.get('[value="radio1"]').should('have.text','radio1')

        // These checks are based off of the values provided. note the values are different than the text
        cy.get('input[name="radioButton"]').check(['radio3','radio2'])

    })
  })