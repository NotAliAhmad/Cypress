//cypress - DB file


describe('DB testing', () => {

    it('SQLDB concurs', () => {
        // results are given back in the form of an 2D array
        cy.sqlServer('SELECT * from persons').then((results)=>{
            console.log(results)
        })

    })

})