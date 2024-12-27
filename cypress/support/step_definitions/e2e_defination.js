import { Given, When , Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../pageObjects/LoginPage"
import HomePage from "../pageObjects/HomePage"
import CartPage from "../pageObjects/CartPage"
import ConfirmationPage from "../pageObjects/ConfirmationPage"

var myvars = {
  data: '',
  loginpage: new LoginPage(),
  homepage: new HomePage(),
  cartpage: new CartPage(),
  confirmationpage: new ConfirmationPage(),
} 

// This is how cucumber deals with actions that happen before each method
before(()=> {
  cy.fixture('e2e_ecommerce').then((example_data)=>{
    // this allows data to be accessed in the entire class
    myvars.data=example_data
  })
})

Given("I am on the login page", () => {
  myvars.loginpage.goTo(Cypress.env('baseUrl')+'/loginpagePractise/')
})

When("I login to the application", () => {
  myvars.loginpage.login(myvars.data.username, myvars.data.password)
})

When("I login to the application, datadriven", (datadriven) => {
  // This is how we can read data driven from the feature file
  myvars.loginpage.login(datadriven.rawTable[1][0],datadriven.rawTable[1][1])
})

When("I add items to the cart and checkout", () => {
    // add products to cart
    myvars.homepage.pageValidation()
    myvars.homepage.verifyCardLimit()

    const nokiaProduct = myvars.data.nokiaProductName
    myvars.homepage.selectProduct2(nokiaProduct)

    const berryProduct = myvars.data.berryProductName
    // Alternatively the filter method can be used to get a specific element back and on that element you can do whatever else you like
    // Parameterizing the product name
    myvars.homepage.selectProduct(berryProduct)

    // click on checkout 
    myvars.homepage.goToCart()
})

When("validate the total price", () => {
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
})

Then("select the country, submit and verify the confirmation message", () => {
  // Send the country, select it from a dynamic drop down and click on it 
  myvars.confirmationpage.getCountry('united')

  // Can also do this so this it applies to the entire test case level
  // cy.config('defaultCommandTimeout',10000) 

  // Verify that the success text is shown
  cy.get('div.alert-success strong').should('have.text','Success!')
})