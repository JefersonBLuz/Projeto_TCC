describe ("Projeto TCC - Adicionar Usuário", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('#email').type("admin")
        cy.get('#password').type("admin")
        cy.get(':nth-child(3) > .flex').click()
     }) 
     
     it("Adicionar Usuário", () => {
        cy.visit("http://localhost:5173/home")
        cy.get('[href="/users"]').click()
        cy.get('.my-4 > .flex-1').click()
        cy.get('#nameuser').type("João da Silva")
        cy.get('#birthday').type("2001-01-01")
        cy.get('#cpf').type("12312312355")
        cy.get('#email').type("email@email.com")
        cy.get('#cellphone').type("5577912341234")
        cy.get('form > :nth-child(2) > :nth-child(3) > .inputForms').type("aaa")
        cy.get(':nth-child(3) > .flex-1 > .inputForms').type("aaa")
        cy.get('#cep').type("45005-146")
        cy.wait(5000)
        cy.get('#number').type("1060")
        cy.get('.bg-blue-300').click()

     })
})

