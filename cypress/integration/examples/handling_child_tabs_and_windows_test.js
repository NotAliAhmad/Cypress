//cypress - spec file


describe('Handing new tabs and windows', () => {
    it('Does not do much!', () => {

        // navigating to a site
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        // --- Dealing child tabs ---
        /* 
        cypress deals with links that open up multiple tabs by dom manupilation
        theres a special tag called target="_blank" which is associated with every link that opens a link in a new tab
        by removing that attribute we can click on the element thus opening the link in the same tab

        cypress prevents testing in multiple tabs because...
        Cypress prioritizes test isolation and simplicity, so it doesn’t allow managing multiple
        browser tabs or windows directly. By opening the URL in the same tab, you can test the
        functionality without compromising Cypress's limitations.
        */
        // remove attr is a jquery function
        // cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.wait(2000)

        // // Handle the new origin
        // // All the testing for the new origin needs to be handled in this block
        // cy.origin('https://www.qaclickacademy.com/', () => {
        //     cy.url().then((newUrl) => {
        //         cy.log(`The current URL on the new origin is: ${newUrl}`);
        //     });
        //     cy.get("#navbarSupportedContent a[href*='about']").click();
        //     cy.get('div[class="section-title mt-50"] h2').should('have.text','Welcome to QAClick Academy ').and('contain','QAClick Academy');

        // });

        // --- Dealing with child windows ---
        // because the promise(using cypress with jquery) is not resolved, we have to use the then method
        // Navigating to the new domain via getting the link from the href

        cy.get('#opentab').then(function(ele){
            // The prop function allows you to get the value of a specific attribute 
            const tab_ele = ele.prop('href')
            cy.visit(tab_ele)
            cy.origin(tab_ele,() => {
                cy.get(".sub-menu-bar a[href*='about']").click();

            })
        })
    })
  })