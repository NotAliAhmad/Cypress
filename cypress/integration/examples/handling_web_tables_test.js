//cypress - spec file


describe('Handing web tables', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        
       
        // each goes through each elements and performs some task
        // First we get the set of elements that are related to the course
        cy.get('tbody:nth-child(1)> tr > td:nth-child(2)').each(($ele, index, $list) => {
            // Can also use includes method that matches text partically 
            if ( $ele.text().includes('Python')){
                // wrap this element so we can use cypress commands on it

                // easier way of doing it :P
                cy.log($ele.text())
                cy.log($ele.next().text())

                // we save the index to be later used by the eq function so we can get the price associated with it
                // The next method is used to get the next sibling so you would get the 7th element of 'tbody:nth-child(1)> tr > td:nth-child(3)'
                // You cannot use text() to get the text of the price therefore the promise needs to be resolved using the then() 
                // and putting everything into price
                cy.get('tbody:nth-child(1)> tr > td:nth-child(2)').next().eq(index).then(function(price) {
                    expect(price.text()).to.equal('25')
                })
                
            }
        }) 

    })
  })