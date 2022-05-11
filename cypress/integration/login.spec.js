/// <reference types="cypress"/>

context('Funcionalidade Login',()=>{

        it('Deve fazer Login com Sucesso',() => {
            cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain','Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac')
        })

        it('Deve exibir mensagem de erro ao inserir usuário inválido',() => {

            cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('aluno_ebac@teste.com1')
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
            
        })

        it('Deve exibir mensagem de erro ao inserir Senha inválida',() => {

            cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.com1')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
            
        })

})