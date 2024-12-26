class ConfirmationPage {

    getCountry(country){
        cy.get('#country').type(country)
        // Explicit wait for the element to pop up, this overrides the 4 sec default timer
        cy.get('.suggestions ul li a', { timeout: 10000 }).eq(1).click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input.btn').click()
    }


}
export default ConfirmationPage