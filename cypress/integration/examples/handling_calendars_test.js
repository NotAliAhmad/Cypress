//cypress - spec file
import 'cypress-iframe'

describe('Handing calendars', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

        // --- Dealing with calendars ---
        cy.get(".react-date-picker__calendar-button__icon").click();
        const nav_ele = cy.get(".react-calendar__navigation__label")
        
        const monthNumber = "12";
        const date = "15";
        const year = "2027";
        const expectedList = year+'-'+monthNumber +'-'+ date;
        const expectedList2 = [monthNumber,date,year];


        // selecting the year
        nav_ele.click()
        cy.get(".react-calendar__navigation__label").then(function(ele_nav){
            if (ele_nav.text() === '2024'){
                nav_ele.click()
                cy.get(".react-calendar__decade-view__years__year").each(($ele, index) => {
                    if ($ele.text() === (year)){
                        cy.wait(1000)
                        cy.wrap($ele).click()
                    }
                })
            }
        })

        // selecting the month
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()

        // Selecting the day
        //cy.get(".react-calendar__month-view__days__day").eq(Number(date)-1).click()
        cy.contains('abbr',date).click()

        // Verify that inputs are valid
        cy.get('.react-date-picker__inputGroup > input:nth-child(1)').should('have.value',expectedList)

        // Another way to do the assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index) => {
                cy.wrap($el).invoke('val').should('eq',expectedList2[index]);
        })
    })
  })