// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })



    Cypress.Commands.add('login', (username, password)=>{
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#signInBtn').click()
    })

    Cypress.Commands.add('LoginAPI', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://rahulshettyacademy.com/api/ecom/auth/login', // Relative or absolute URL of the endpoint
            headers: {
              // Optional headers
              'Content-Type': 'application/json',
            },
            body: {
              // The payload to send with the POST request
              userEmail: 'rahulshetty@gmail.com',
              userPassword: 'Iamking@00',
            },
        }).then((response) => {
            // Assertions on the response
            expect(response.status).to.be.equal(200); // Check status code
            expect(response.body).to.have.property('message', 'Login Successfully'); // Validate response body
            Cypress.env('token',response.body.token) // Adds token to env var 'token'
        })
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })