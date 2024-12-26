class CartPage {

getIndivdualSum(){
    var totalSummed = 0

    return cy.get('tr td.col-sm-1:nth-last-child(2)').each(($total_ele,index) => {
        const tempTotal = $total_ele.text().split(" ")
        const tot = Number(tempTotal[tempTotal.length-1])
        cy.log("Value of product "+(index+1)+": "+tot)

        totalSummed += tot

    }).then(()=>{
        // Then is put here to queue the expect() so that the loop is finished before we do our assertion
        // If we dont wait the loop wont be finished and the totalSummed var wont be updated and will read 0 instead of the value we want
        // This is because of the asynchronous nature of cypress 
        return totalSummed
    })
    
}

getTotalSum(){
    var total = 0

    return cy.get('h3 strong').then(function(totaltemp){
        const total_text = totaltemp.text().split(" ")
        const total = Number(total_text[total_text.length-1])
        return total

    })
}
}
export default CartPage