describe("Multiple env ",()=>{
    it("Test case 1",()=>{

        cy.visit(Cypress.env('stage_url'))
    })
})