//cypress - http request mocking


describe('Security Mocking http requests', () => {

    it('Take two', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        // Intercepting the call and sending in a different response
        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            
        },
        (req)=>{
            // Alter the url and send in a new url
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotraa"
            req.continue((res=>{
                expect(res.statusCode).to.be.equal(404)
            }))
        }).as('getBookResponse')

        // Clicking on the virtual library button
        cy.get('.btn-primary').click()

        cy.wait('@getBookResponse')
            



        
    })
  })