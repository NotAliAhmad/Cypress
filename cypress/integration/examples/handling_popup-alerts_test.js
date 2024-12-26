//cypress - spec file


describe('Handing alerts', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        // --- Dealing with pop up alert ---
        // Cypress handles these popup alerts automatically therefore you wont see them
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // Since cypress handles popup alerts automatically, in order to test popups they need to be triggered using the on method
        // Handling ok alert
        cy.on('window:alert',(str)=> {
            // Mocha string comparison
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // Handling confirm alert
        cy.on('window:confirm',(str)=> {
            // Mocha string comparison
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
  })