//cypress - http request mocking


describe('Security Mocking http requests', () => {

    it('Take two', () => {


        cy.request({
            method: 'POST',
            url: 'http://216.10.245.166/Library/Addbook.php', // Relative or absolute URL of the endpoint
            headers: {
              // Optional headers
              'Content-Type': 'application/json',
            },
            body: {
              // The payload to send with the POST request
              name: 'Learning how to learn about learning',
              isbn: 'bcdsss23dr',
              aisle: '22s7',
              author: 'john doe',
            },
          }).then((response) => {
            // Assertions on the response
            expect(response.status).to.be.equal(200); // Check status code
            expect(response.body).to.have.property('Msg', 'successfully added'); // Validate response body
          });

    })
  })