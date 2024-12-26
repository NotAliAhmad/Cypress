class HomePage {

    pageValidation(){
        cy.get('h1.my-4').should('have.text','Shop Name')

    }

    verifyCardLimit(){
        cy.get('.mb-3').should('have.length',4)
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains(${productName})`).then(function(nokia_ele){
            cy.wrap(nokia_ele).find('.btn-info').click()
        })
    }

    selectProduct2(product){
        // Note: find only works with cypress elements, otherwise needs to be wrapped
        cy.get('.mb-3').each(($product_element, index, $list) => {
            cy.wrap($product_element).find('.card-title a').then(function(product_name){
                cy.log(product_name.text())
                if (product_name.text().includes(product)){
                    cy.wrap($product_element).find('.btn-info').click()
                }
            })
        })
    }

    goToCart(){
        cy.contains('Checkout').click()
    }

}
export default HomePage