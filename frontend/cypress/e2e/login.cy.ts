describe('template spec', () => {
  it('Testando login com senha e email incorretos', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#email').type("João")
    cy.get('#password').type("12345")
  })
})