// dealing with excel files



describe('Inject JWT Session && dealing with excel files',()=>{

    it('Logging in using the JWT local storage session token aka bypassing the login screen',async()=>{
        cy.LoginAPI().then(()=>{
            cy.visit("https://rahulshettyacademy.com/client",{ onBeforeLoad(win) {
                win.localStorage.setItem('token',Cypress.env('token')); 
            }})
        })
        let productName
        cy.get('.w-10').eq(1).click()
        cy.get('.card-body h5').eq(1).then((ele)=>{
           productName = ele.text()

        })

        cy.contains('Cart',{ timeout: 10000 }).click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*='Select Country']").type('ind')
        cy.get('span.ng-star-inserted').each(($ele, index, $list) => {
            cy.log($ele.text())
            if($ele.text().includes('India') && $ele.text().length < 10){
                cy.wrap($ele).click()
            }
        })

        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.contains('Excel').click()

        const filepath = Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_rahulshetty.xlsx'
        cy.task('readExcelFile',filepath).then((result)=>{
            expect(result.data[1].E).to.be.equal('India')
        })

        // Checking to see if the csv includes a certain field
        // This should work for any file
        cy.readFile(filepath).then((text)=>{
            expect(text).to.include(productName)
        })

    })

})