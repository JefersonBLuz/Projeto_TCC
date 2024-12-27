describe ("Projeto TCC - Excluir Usuário", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('#email').type("admin")
        cy.get('#password').type("admin")
        cy.get(':nth-child(3) > .flex').click()
     }) 
     
     it("Excluir Usuário", () => {
        cy.visit("http://localhost:5173/home")
        cy.get('[href="/users"]').click()
        cy.get('.text-red-600').click()

     })
})