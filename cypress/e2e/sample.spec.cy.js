describe("My first test", function() {

    it("Gets, types and asserts", function() {
        cy.visit("https://example.cypress.io")
        cy.contains('type').click()
        cy.url()
            .should('include', '/commands/actions')
        cy.get(".action-email")
            .type("contact@josdem.io")
            .should('have.value', 'contact@josdem.io')

    })
        
})