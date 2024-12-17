describe('Projeto TCC - Testando login', () => {
  it('Testando login com senha e email incorretos', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#email').type("João")
    cy.get('#password').type("12345")
    cy.get(':nth-child(3) > .flex').click()
    cy.get(':nth-child(3) > .text-center').should("be.visible").and('contain', "Usuário/Senha incorretos!")

  })

  it("Testando login com senha e email válidos", () => {
    cy.visit('http://localhost:5173/')
    cy.get('#email').type("admin")
    cy.get('#password').type("admin")
    cy.get(':nth-child(3) > .flex').click()

  })
    


})


