describe ("Projeto TCC - Adicionar Membro da Família", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('#email').type("admin")
        cy.get('#password').type("admin")
        cy.get(':nth-child(3) > .flex').click()
     })
     
     it("Adicionar Membro de Família", () => {
        cy.get('[href="/family"]').click()
        cy.get('.my-4 > .flex-1').click()
        cy.get('.bg-yellow-100').click()
        cy.get(':nth-child(3) > .border > .flex > .basis-2\/4 > #nameuser').type("Maria da Silva")
        cy.get(':nth-child(3) > .border > .flex > .basis-1\/4 > #birthday').type("2001-01-01")
        cy.get(':nth-child(3) > .border > .flex > .flex-1 > #cpf').type("32132132155")
       

     })
    
})