//

const neatCsv = require("neat-csv");

describe('Inject JWT Session && dealing with csv files',()=>{

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
        cy.contains('CSV').click()

        // Returns the data back as a text
        cy.readFile(Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_rahulshetty.csv')
        .then(async(text)=>{
            // Converting the contents of the csv to a javascript object
            // neatCSV needs the csv file contents as a text format
            const csv = await neatCsv(text) 

            expect(csv[0]["Product Name"]).to.be.equal(productName)
        })

    })

})