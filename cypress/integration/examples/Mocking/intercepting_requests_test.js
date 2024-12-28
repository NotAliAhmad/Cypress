//cypress - http request mocking


describe('Mocking http requests', () => {

    it('Take one', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Intercepting the call and sending in a different response
        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        },   
        { 
            statusCode: 200,
            body: [{
                "book_name": "Postman",
                "isbn": "RS10",
                "aisle": "123"
            }],
        }).as('getBookResponse')
        // Clicking on the virtual library button
        cy.get('.btn-primary').click()

        cy.wait('@getBookResponse').then(({request,response})=>{
            // Assert the length of the response array and the number of rows
            cy.get('tbody tr').should('have.length',response.body.length)
        })

        cy.get('p').should('have.text','Oops only 1 Book available')


        
    })
  })