describe("Multi Origin in Cypress", () => {
    it("Multi Origin test using cy.origin() ", () => {
      cy.visit('https://www.magicbricks.com/')
      cy.get('a[title="Twitter"]').invoke('attr', 'target', '_self').click()
     
      })
    });
  
