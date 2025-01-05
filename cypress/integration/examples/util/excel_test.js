//cypress - Testing file

describe('Testing excelDemo file', () => {
    // data needs to be defined outside the before block for it to be accessible in the it block

    it('should update the Excel file successfully', () => {
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get("#downloadButton").click();
        const filepath = 'cypress/downloads/download.xlsx'; // Relative path for file location
        cy.task('writeExcel', { filepath }).then((result) => {
            cy.log(result)
        });
        // This is how you can upload a file
        // Note: this require the element to have the attribute 'type="file"'
        cy.get("#fileinput").selectFile(filepath)
        cy.contains('bubbles_updated').should('have.text','bubbles_updated')
    });

})