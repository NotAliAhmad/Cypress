//cypress - spec file

import LoginPage from "../../../support/pageObjects/LoginPage"
import HomePage from "../../../support/pageObjects/HomePage"
import CartPage from "../../../support/pageObjects/CartPage"
import ConfirmationPage from "../../../support/pageObjects/ConfirmationPage"



describe('End to End ecommerce test', () => {
    // data needs to be defined outside the before block for it to be accessible in the it block
    var myvars = {
        data: '',
        loginpage: new LoginPage(),
        homepage: new HomePage(),
        cartpage: new CartPage(),
        confirmationpage: new ConfirmationPage(),
    } 

    // This method runs before all tests 
    before(()=>{
        // Loading fixture file example
        cy.fixture('e2e_ecommerce').then((example_data)=>{
            // this allows data to be accessed in the entire class
            myvars.data=example_data
        })
    })


    it('submit an order', () => {

        // navigating to a site
        // using cypress.env to get the env vars from the config file
        myvars.loginpage.goTo(Cypress.env('baseUrl')+'/loginpagePractise/')

        // Logging in, calling login method
        myvars.loginpage.login(myvars.data.username, myvars.data.password)
        // Added a custom command to login using 'Cypress.Commands.Add()'
        //cy.login(myvars.data.username,myvars.data.password)

        // Pauses the script at the location of the pause - this is good for debugging purposes
        // cy.pause()

        // Home Page - Shop
        const homepage = new HomePage()
            // add products to cart
            homepage.pageValidation()
            homepage.verifyCardLimit()

            const nokiaProduct = myvars.data.nokiaProductName
            myvars.homepage.selectProduct2(nokiaProduct)

            const berryProduct = myvars.data.berryProductName
            // Alternatively the filter method can be used to get a specific element back and on that element you can do whatever else you like
            // Parameterizing the product name
            homepage.selectProduct(berryProduct)

            // click on checkout 
            myvars.homepage.goToCart()
        
        // Cart Page
            // checking each price, getting the sum then asserting the total
            myvars.cartpage.getIndivdualSum().then((totalSummed)=>{
                expect(totalSummed).to.be.lessThan(200000)

            // asserting the total 
            myvars.cartpage.getTotalSum().then((total)=>{
                expect(total).to.be.lessThan(200000)

            // assert the results of the 2 totals 
            expect(total).to.be.equal(totalSummed)
            })


            })



            
            // Click on second checkout
            cy.get('.btn-success').click()
        // Confirmation Page
            // Send the country, select it from a dynamic drop down and click on it 
            myvars.confirmationpage.getCountry('united')

            // Can also do this so this it applies to the entire test case level
            // cy.config('defaultCommandTimeout',10000) 

            // Verify that the success text is shown
            cy.get('div.alert-success strong').should('have.text','Success!')

    })
  })