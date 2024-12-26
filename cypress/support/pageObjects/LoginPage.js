class LoginPage {
    goTo(url){
        cy.visit(url);
    }

    login(username, password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)

        // Selecting user account type
        cy.get('.customradio:nth-child(2)').click()

        // asserting popup
        cy.get('div.modal-body').then(function(pop_up_ele){
            expect(pop_up_ele).to.contain('You will be limited to only fewer functionalities of the app. Proceed?')
            cy.wait(500)
            cy.get('#okayBtn').click()
        })

        // Selecting from dropdown
        cy.get('.form-control').eq(2).select('Teacher')

        // Selecting checkbox
        cy.get('#terms').check().should('be.checked')

        // Sign in
        cy.get('#signInBtn').click()
    }
}
export default LoginPage